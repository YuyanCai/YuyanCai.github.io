import{ac as i,F as r,G as t,D as e,R as a,M as d,ad as n,V as l}from"./framework-f12b30cc.js";const o={},c=n('<h1 id="部署k8s环境" tabindex="-1"><a class="header-anchor" href="#部署k8s环境" aria-hidden="true">#</a> 部署K8s环境</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>最近在做谷粒商城项目，搞到k8s了，但是跟这老师的方法一步一步做还是搭建不起来。</p><p>我不断的试错啊，各种bug都遇见了一个也没解决😃我真是啊哭死！</p><h2 id="sealos" tabindex="-1"><a class="header-anchor" href="#sealos" aria-hidden="true">#</a> sealos</h2><p>直到遇见一个大佬同学，告诉我<code>sealos</code>几个命令就装好了。听到这的时候我跟着视频看文档已经花了两天时间了，心态蹦了啊有木有！</p>',6),p={href:"https://www.sealos.io/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2><ul><li><strong>全部重装系统，使用干净的操作系统来创建集群，不要自己装 Docker！</strong></li><li><strong>每个集群节点应该有不同的主机名，时间同步</strong></li><li><strong>每个集群节点都可以访问网络！！！（NAT模式，下面有如何配置）</strong></li><li><strong>有要科学上网软件（v2ray....）</strong></li></ul><h3 id="sealos-安装" tabindex="-1"><a class="header-anchor" href="#sealos-安装" aria-hidden="true">#</a> sealos 安装</h3><p>刚装的虚拟机不能直接下载东西，我们选择<strong>自己把包下载下来</strong>，然后<strong>ftp传进到root目录</strong>。</p><p>下载地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/labring/sealos/releases/download/v4.0.0/sealos_4.0.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加到/usr/bin，这样就可以直接运行sealos命令了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> zxvf sealos_4.0.0_linux_amd64.tar.gz sealos <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x sealos <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> sealos /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="虚拟机设置" tabindex="-1"><a class="header-anchor" href="#虚拟机设置" aria-hidden="true">#</a> 虚拟机设置</h3><hr><p><strong>一定要用比较新的镜像</strong>，最好跟我一样<code>7.9</code>版本的centos（CentOS-7-x86_64-Minimal-2009.iso）阿里云下载，用idm一会就下好了</p><p>配置如下：</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220925194432840.png" alt="image-20220925194432840" tabindex="0" loading="lazy"><figcaption>image-20220925194432840</figcaption></figure><p>如上配置每个节点都一样</p><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h3><blockquote><p>严格按照我的这个思路来，当然网络地址可以也不一样，下面的配置配置好就行！</p></blockquote><ul><li>master 192.168.24.100</li><li>node1 192.168.24.101</li><li>node2 192.168.24.102</li></ul><h4 id="windows网络" tabindex="-1"><a class="header-anchor" href="#windows网络" aria-hidden="true">#</a> windows网络</h4><p>因为我是校园网，桥接不行，容易出现各种bug，这里选NAT</p><p>nat的配置很有讲究，如下：</p><p>win上的vmnet8的网卡设置为：</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220925194215027.png" alt="image-20220925194215027" tabindex="0" loading="lazy"><figcaption>image-20220925194215027</figcaption></figure><h4 id="虚拟机的网络" tabindex="-1"><a class="header-anchor" href="#虚拟机的网络" aria-hidden="true">#</a> 虚拟机的网络</h4><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926092430663.png" alt="image-20220926092430663" tabindex="0" loading="lazy"><figcaption>image-20220926092430663</figcaption></figure><h4 id="网卡配置" tabindex="-1"><a class="header-anchor" href="#网卡配置" aria-hidden="true">#</a> 网卡配置</h4><blockquote><p>DNS1=223.5.5.5为阿里云的dns解析地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/sysconfig/network-scripts/ifcfg-ens33 </span>

<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>none
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.24.100
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.24.2
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">223.5</span>.5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他节点同样的配置，改改ip即可</strong></p><h4 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置" aria-hidden="true">#</a> 其他配置</h4><ul><li><strong>所有节点执行</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart network
<span class="token function">ping</span> <span class="token number">114.114</span>.114.114
<span class="token function">ping</span> baidu.com
systemctl stop firewalld
systemctl disable firealld
setenforce  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rpm-源" tabindex="-1"><a class="header-anchor" href="#rpm-源" aria-hidden="true">#</a> RPM 源</h3><blockquote><p>本来的yum源不用删除，直接复制下面的就行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/labring.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[fury]
name=labring Yum Repo
baseurl=https://yum.fury.io/labring/
enabled=1
gpgcheck=0
EOF</span>
<span class="token function">sudo</span> yum update
<span class="token function">sudo</span> yum <span class="token function">install</span> sealos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装开始" tabindex="-1"><a class="header-anchor" href="#安装开始" aria-hidden="true">#</a> 安装开始</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sealos run labring/kubernetes:v1.24.0 labring/calico:v3.24.1 <span class="token punctuation">\\</span>
     <span class="token parameter variable">--masters</span> <span class="token number">192.168</span>.64.2,192.168.64.22,192.168.64.20 <span class="token punctuation">\\</span>
     <span class="token parameter variable">--nodes</span> <span class="token number">192.168</span>.64.21,192.168.64.19 <span class="token parameter variable">-p</span> 你的虚拟机密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ok，咱们的K8s集群搭建好了！</p><p>好，如果要安装存储/消息/数据库相关的</p><p>运行如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sealos run labring/helm:v3.8.2 # 安装helm
sealos run labring/openebs:v1.9.0 # 安装openebs
sealos run labring/minio-operator:v4.4.16 labring/ingress-nginx:4.1.0 \\
   labring/mysql-operator:8.0.23-14.1 labring/redis-operator:3.1.4 # 喜欢的话可以把它们写一起
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>minio mysql redis 等都是高可用的，跑在 kubernetes 集群之上</strong></p><p>OK，大功告成安装完成！</p><h2 id="可能遇见的问题" tabindex="-1"><a class="header-anchor" href="#可能遇见的问题" aria-hidden="true">#</a> 可能遇见的问题</h2><h3 id="sealos-run的时候镜像下载缓慢" tabindex="-1"><a class="header-anchor" href="#sealos-run的时候镜像下载缓慢" aria-hidden="true">#</a> sealos run的时候镜像下载缓慢</h3><blockquote><p>开科学上网软件尝试，换个好的网络环境</p></blockquote><p><strong>自己用命令先拉取如下：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sealos pull labring/kubernetes-docker:v1.23.12-4.1.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加阿里云的源：</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926103923233.png" alt="image-20220926103923233" tabindex="0" loading="lazy"><figcaption>image-20220926103923233</figcaption></figure><p><strong>守护进程重启</strong> systemctl daemon-reload</p><p><strong>重启docker服务</strong> systemctl restart docker</p><h2 id="安装测试" tabindex="-1"><a class="header-anchor" href="#安装测试" aria-hidden="true">#</a> 安装测试</h2><h3 id="安装kubernetes-dashboard" tabindex="-1"><a class="header-anchor" href="#安装kubernetes-dashboard" aria-hidden="true">#</a> 安装Kubernetes Dashboard</h3><h4 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h4><blockquote><p>下载recommended.yaml</p></blockquote><p><strong>同样需要开启科学上网软件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>官网安装方式行不通，使用这种方式进行访问</p><blockquote><p>修改dashboard的yaml文件</p></blockquote><p><strong>注意这里加了type关键字核nodePort</strong></p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926102703457.png" alt="image-20220926102703457" tabindex="0" loading="lazy"><figcaption>image-20220926102703457</figcaption></figure><h4 id="pods运行失败怎么办" tabindex="-1"><a class="header-anchor" href="#pods运行失败怎么办" aria-hidden="true">#</a> pods运行失败怎么办？</h4><p>成功运行如下：</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926102850589.png" alt="image-20220926102850589" tabindex="0" loading="lazy"><figcaption>image-20220926102850589</figcaption></figure><p>运行pod之前会先拉取镜像，拉取镜像失败的话，查看改pod运行在哪个node上，在对应的node上拉取镜像即可！</p><blockquote><p>1、查看dashboard被k8s分配到了哪一台机器上</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods --all-namespaces -o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926103319888.png" alt="image-20220926103319888" tabindex="0" loading="lazy"><figcaption>image-20220926103319888</figcaption></figure><blockquote><p>2、去该节点拉取镜像</p></blockquote><p>使用命令查看<strong>哪个镜像拉取失败</strong>了<code>手动拉取镜像</code>即可！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl describe pod name列 -n 命名空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实例如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl describe pod kubernetes-dashboard-546cbc58cd-zbb55 -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>去node2节点用docker拉取镜像</strong></p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926103659582.png" alt="image-20220926103659582" tabindex="0" loading="lazy"><figcaption>image-20220926103659582</figcaption></figure><blockquote><p>3、拉取完后，pods会自动重建</p></blockquote><p>可以等pods重建，也可以手动删除，让它直接重建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get deployment -n &lt;namespace&gt;
kubectl delete deployment &lt;deployment名&gt; -n &lt;namespace&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建-serviceaccount-和-clusterrolebinding" tabindex="-1"><a class="header-anchor" href="#创建-serviceaccount-和-clusterrolebinding" aria-hidden="true">#</a> 创建 ServiceAccount 和 ClusterRoleBinding</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f https://kuboard.cn/install-script/k8s-dashboard/auth.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取bearer-token" tabindex="-1"><a class="header-anchor" href="#获取bearer-token" aria-hidden="true">#</a> 获取Bearer Token</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk &#39;{print $1}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h4><blockquote><p>注意是https</p></blockquote><p>通过集群内任一节点<code>https://IP+30012</code>即可访问dashboard</p><figure><img src="https://raw.githubusercontent.com/YuyanCai/imagebed/main/image-20220926102631901.png" alt="image-20220926102631901" tabindex="0" loading="lazy"><figcaption>image-20220926102631901</figcaption></figure>`,86);function g(b,m){const s=l("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[a("地址如下："),e("a",p,[a("https://www.sealos.io/zh-Hans/"),d(s)])]),u])}const v=i(o,[["render",g],["__file","部署篇1.html.vue"]]);export{v as default};
