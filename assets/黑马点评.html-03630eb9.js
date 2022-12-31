import{ac as t,F as p,G as o,D as n,R as a,M as i,ad as s,V as c}from"./framework-f12b30cc.js";const l={},r=s('<p>#实战</p><h2 id="短信登录" tabindex="-1"><a class="header-anchor" href="#短信登录" aria-hidden="true">#</a> 短信登录</h2><h3 id="导入项目" tabindex="-1"><a class="header-anchor" href="#导入项目" aria-hidden="true">#</a> 导入项目</h3><blockquote><p>1.导入数据库</p></blockquote><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221026222755057.png" alt="image-20221026222755057" tabindex="0" loading="lazy"><figcaption>image-20221026222755057</figcaption></figure><blockquote><p>2.导入后端项目</p></blockquote><p>更改yml中的mysql密码和redis设置即可运行</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221026223115791.png" alt="image-20221026223115791" tabindex="0" loading="lazy"><figcaption>image-20221026223115791</figcaption></figure><blockquote><p>3.使用Nginx反向代理</p></blockquote><p>项目为单体应用,使用nginx做反向代理</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221026223158356.png" alt="image-20221026223158356" tabindex="0" loading="lazy"><figcaption>image-20221026223158356</figcaption></figure><p>反向代理设置如下:</p><blockquote><p>我的nginx是容器形式,设置的和老师的不太一样,如下:</p></blockquote>',13),u=n("li",null,[n("p",null,"要注意的点是,upstream不要写127.0.0.1或localhost")],-1),d={href:"http://172.20.10.2:8081",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("p",null,"upstream是负载均衡,因为我就一个后端应用,我没有写upstream,直接代理这里的单个服务了")],-1),m=n("li",null,[n("p",null,"老师写的nginx监听的为8080端口,我这里写的为80端口都是一样的")],-1),v=n("li",null,[n("p",null,"如果你也是nginx容器,也想写成8080端口,那么生成nginx容器的时候就要做好映射8080:8080")],-1),g=s(`<p><strong>nginx.conf保持不变,修改conf.d下的default.conf文件即可</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>qiang<span class="token annotation punctuation">@xiaocaideMBP</span> <span class="token operator">/</span>mydata<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token punctuation">.</span>d$ pwd
<span class="token operator">/</span>mydata<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token punctuation">.</span>d
qiang<span class="token annotation punctuation">@xiaocaideMBP</span> <span class="token operator">/</span>mydata<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token punctuation">.</span>d$ cat <span class="token keyword">default</span><span class="token punctuation">.</span>conf
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span><span class="token operator">::</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    #access_log  <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>

    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        root   <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>hmdp<span class="token punctuation">;</span>
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    location <span class="token operator">/</span>api <span class="token punctuation">{</span>
        default_type  application<span class="token operator">/</span>json<span class="token punctuation">;</span>
        #internal<span class="token punctuation">;</span>
        keepalive_timeout   <span class="token number">30</span>s<span class="token punctuation">;</span>
        keepalive_requests  <span class="token number">1000</span><span class="token punctuation">;</span>
        #支持keep<span class="token operator">-</span>alive
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        rewrite <span class="token operator">/</span><span class="token function">api</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">.</span>*<span class="token punctuation">)</span> $<span class="token number">1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        proxy_pass_request_headers on<span class="token punctuation">;</span>
        #more_clear_input_headers <span class="token class-name">Accept</span><span class="token operator">-</span><span class="token class-name">Encoding</span><span class="token punctuation">;</span>
        proxy_next_upstream error timeout<span class="token punctuation">;</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">172.20</span><span class="token number">.10</span><span class="token number">.2</span><span class="token operator">:</span><span class="token number">8081</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    #error_page  <span class="token number">404</span>              <span class="token operator">/</span><span class="token number">404.</span>html<span class="token punctuation">;</span>

    # redirect server error pages <span class="token keyword">to</span> <span class="token namespace">the</span> <span class="token keyword">static</span> page <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html
    #
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> <span class="token operator">/</span><span class="token number">50</span>x<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
        root   <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    # proxy the <span class="token constant">PHP</span> scripts <span class="token keyword">to</span> <span class="token class-name">Apache</span> listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span>
    #
    #location <span class="token operator">~</span> \\<span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    proxy_pass   http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>

    # pass the <span class="token constant">PHP</span> scripts <span class="token keyword">to</span> <span class="token class-name">FastCGI</span> server listening on <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span>
    #
    #location <span class="token operator">~</span> \\<span class="token punctuation">.</span>php$ <span class="token punctuation">{</span>
    #    root           html<span class="token punctuation">;</span>
    #    fastcgi_pass   <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">;</span>
    #    fastcgi_index  index<span class="token punctuation">.</span>php<span class="token punctuation">;</span>
    #    fastcgi_param  <span class="token constant">SCRIPT_FILENAME</span>  <span class="token operator">/</span>scripts$fastcgi_script_name<span class="token punctuation">;</span>
    #    include        fastcgi_params<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>

    # deny access <span class="token keyword">to</span> <span class="token punctuation">.</span>htaccess files<span class="token punctuation">,</span> <span class="token keyword">if</span> <span class="token class-name">Apache</span>&#39;s document root
    # concurs <span class="token keyword">with</span> <span class="token namespace">nginx</span>&#39;s one
    #
    #location <span class="token operator">~</span> <span class="token operator">/</span>\\<span class="token punctuation">.</span>ht <span class="token punctuation">{</span>
    #    deny  all<span class="token punctuation">;</span>
    #<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4.运行项目</p></blockquote><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221026223019472.png" alt="image-20221026223019472" tabindex="0" loading="lazy"><figcaption>image-20221026223019472</figcaption></figure><h3 id="基于session实现登录" tabindex="-1"><a class="header-anchor" href="#基于session实现登录" aria-hidden="true">#</a> 基于Session实现登录</h3><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221026224011278.png" alt="image-20221026224011278" tabindex="0" loading="lazy"><figcaption>image-20221026224011278</figcaption></figure><h4 id="发送短信验证码" tabindex="-1"><a class="header-anchor" href="#发送短信验证码" aria-hidden="true">#</a> 发送短信验证码</h4><blockquote><p>发送短信验证码这里采用的是工具类随机生成字符</p></blockquote><p><strong>Controller</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">sendCode</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> phone<span class="token punctuation">,</span> <span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//  发送短信验证码并保存验证码</span>
  <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">sendCode</span><span class="token punctuation">(</span>phone<span class="token punctuation">,</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Impl</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">sendCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> phone<span class="token punctuation">,</span> <span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//1.校验手机号</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">RegexUtils</span><span class="token punctuation">.</span><span class="token function">isPhoneInvalid</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//2.不符合,返回错误信息</span>
    <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;手机号格式错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//3.符合,生成验证码</span>
  <span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomNumbers</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//4.保持验证码到session</span>
  session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//5.发送验证码</span>
  <span class="token comment">//        腾讯云发送</span>
  <span class="token comment">//        UserServiceImpl.sendMessage(phone, code);</span>

  <span class="token comment">//工具类随机发送</span>
  <span class="token comment">//5.发送验证码</span>
  log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;发送的验证码为:&quot;</span> <span class="token operator">+</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群的session共享问题" tabindex="-1"><a class="header-anchor" href="#集群的session共享问题" aria-hidden="true">#</a> 集群的session共享问题</h3><h3 id="基于redis实现共享session登录" tabindex="-1"><a class="header-anchor" href="#基于redis实现共享session登录" aria-hidden="true">#</a> 基于Redis实现共享session登录</h3><h2 id="商户查询缓存" tabindex="-1"><a class="header-anchor" href="#商户查询缓存" aria-hidden="true">#</a> 商户查询缓存</h2><h2 id="优惠券秒杀" tabindex="-1"><a class="header-anchor" href="#优惠券秒杀" aria-hidden="true">#</a> 优惠券秒杀</h2><h3 id="重复下单情况" tabindex="-1"><a class="header-anchor" href="#重复下单情况" aria-hidden="true">#</a> 重复下单情况</h3><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105194348762.png" alt="image-20221105194348762" tabindex="0" loading="lazy"><figcaption>image-20221105194348762</figcaption></figure><h3 id="超卖情况" tabindex="-1"><a class="header-anchor" href="#超卖情况" aria-hidden="true">#</a> 超卖情况</h3><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105225642655.png" alt="image-20221105225642655" tabindex="0" loading="lazy"><figcaption>image-20221105225642655</figcaption></figure><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105225850072.png" alt="image-20221105225850072" tabindex="0" loading="lazy"><figcaption>image-20221105225850072</figcaption></figure><h3 id="加锁解决超卖问题" tabindex="-1"><a class="header-anchor" href="#加锁解决超卖问题" aria-hidden="true">#</a> 加锁解决超卖问题</h3><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105230150840.png" alt="image-20221105230150840" tabindex="0" loading="lazy"><figcaption>image-20221105230150840</figcaption></figure><blockquote><p>乐观锁</p></blockquote><p>实现方式:</p><p>每当数据做一次修改,版本号加1,所以判断一个数据有没有被修改过就看它的版本有没有变化过</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105231012183.png" alt="image-20221105231012183" tabindex="0" loading="lazy"><figcaption>image-20221105231012183</figcaption></figure><p>CAS法:</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221105231124576.png" alt="image-20221105231124576" tabindex="0" loading="lazy"><figcaption>image-20221105231124576</figcaption></figure><blockquote><p>悲观锁</p></blockquote><h2 id="达人探店" tabindex="-1"><a class="header-anchor" href="#达人探店" aria-hidden="true">#</a> 达人探店</h2><p>现在用户去抢购购物卷,在redis中设置的key是固定的</p><ul><li>前缀是固定的</li><li>name是用户的id</li></ul><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20221111202536791.png" alt="image-20221111202536791" tabindex="0" loading="lazy"><figcaption>image-20221111202536791</figcaption></figure><p>所以说删除锁的时候还需要再进行一次判断,看要删除的锁的value是否是当前线程的</p><p>但是现在还是有可能会出现问题!是什么呢?</p><p>如果线程1获取锁之后,执行完业务,准备释放锁的时候出现了阻塞(JVM发生FULLGC)那么如果阻塞的时间足够长,那么锁还是有可能会被释放的!</p><p>线程2如果在获取锁的时候,那么线程1又不阻塞了,又会直接把线程2的锁删掉,这样的话又是出现了线程的安全问题</p><p>所以我们要保证<strong>获取锁和删除锁的过程保证原子性!</strong></p><h2 id="好友关注" tabindex="-1"><a class="header-anchor" href="#好友关注" aria-hidden="true">#</a> 好友关注</h2><h2 id="附近的商户" tabindex="-1"><a class="header-anchor" href="#附近的商户" aria-hidden="true">#</a> 附近的商户</h2><h2 id="用户签到" tabindex="-1"><a class="header-anchor" href="#用户签到" aria-hidden="true">#</a> 用户签到</h2><h2 id="uv统计" tabindex="-1"><a class="header-anchor" href="#uv统计" aria-hidden="true">#</a> UV统计</h2>`,43);function b(h,f){const e=c("ExternalLinkIcon");return p(),o("div",null,[r,n("ul",null,[u,n("li",null,[n("p",null,[a("写任意一个网卡的ip即可,我这里的proxy_pass "),n("a",d,[a("http://172.20.10.2:8081"),i(e)]),a(";就为wife所属网卡的ip")])]),k,m,v]),g])}const _=t(l,[["render",b],["__file","黑马点评.html.vue"]]);export{_ as default};
