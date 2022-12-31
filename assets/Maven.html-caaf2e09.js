import{ac as a,F as n,G as s,ad as t}from"./framework-f12b30cc.js";const p={},e=t(`<p><strong>GroupId（俗称：包结构）、ArtifactId（俗称：项目名）</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113111548180.png" alt="image-20220113111548180" tabindex="0" loading="lazy"><figcaption>image-20220113111548180</figcaption></figure><p><strong>自行设置</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113111616611.png" alt="image-20220113111616611" tabindex="0" loading="lazy"><figcaption>image-20220113111616611</figcaption></figure><h2 id="tomcat插件安装-启动web项目" tabindex="-1"><a class="header-anchor" href="#tomcat插件安装-启动web项目" aria-hidden="true">#</a> tomcat插件安装，启动web项目</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113113413392.png" alt="image-20220113113413392" tabindex="0" loading="lazy"><figcaption>image-20220113113413392</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113113137055.png" alt="image-20220113113137055" tabindex="0" loading="lazy"><figcaption>image-20220113113137055</figcaption></figure><h2 id="简便启动maven工程" tabindex="-1"><a class="header-anchor" href="#简便启动maven工程" aria-hidden="true">#</a> 简便启动maven工程</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113113647374.png" alt="image-20220113113647374" tabindex="0" loading="lazy"><figcaption>image-20220113113647374</figcaption></figure><h2 id="pom文件的参数详解" tabindex="-1"><a class="header-anchor" href="#pom文件的参数详解" aria-hidden="true">#</a> pom文件的参数详解</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>

<span class="token comment">&lt;!-- $Id: pom.xml 642118 2008-03-28 08:04:16Z reinhard $ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--    指定pom的模型版本--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    打包方式，web工程打包为war，java工程打包为jar--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--    组织id--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.caq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    项目id--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    版本号：release完整版，snapshot开发版--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--    设置当前工程的所有依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--        具体的依赖--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--
    使用maven构建的项目可以直接使用maven build完成项目的编译、测试、打包，无需额外配置。
build标签描述了如何编译及打包项目，具体的编译和打包工作是通过其中的plugin配置来实现的。当然，plugin不是必须的，即使不添加默认也会引入以下插件：

    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--        设置插件--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--            设置具体的插件--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">&gt;</span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖传递" tabindex="-1"><a class="header-anchor" href="#依赖传递" aria-hidden="true">#</a> 依赖传递</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113121135632.png" alt="image-20220113121135632" tabindex="0" loading="lazy"><figcaption>image-20220113121135632</figcaption></figure><h2 id="可选依赖" tabindex="-1"><a class="header-anchor" href="#可选依赖" aria-hidden="true">#</a> 可选依赖</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113131742481.png" alt="image-20220113131742481" tabindex="0" loading="lazy"><figcaption>image-20220113131742481</figcaption></figure><h2 id="排除依赖" tabindex="-1"><a class="header-anchor" href="#排除依赖" aria-hidden="true">#</a> 排除依赖</h2><p>排除依赖指主动断开依赖的资源，被排除的资源无需指定版本――不需要</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113131137661.png" alt="image-20220113131137661" tabindex="0" loading="lazy"><figcaption>image-20220113131137661</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113131514267.png" alt="image-20220113131514267" tabindex="0" loading="lazy"><figcaption>image-20220113131514267</figcaption></figure><p><strong>依赖传过来，你不想用，用排除依赖</strong></p><p><strong>你不想让别人看见你的依赖用可选依赖</strong></p><h2 id="依赖范围" tabindex="-1"><a class="header-anchor" href="#依赖范围" aria-hidden="true">#</a> 依赖范围</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113132740891.png" alt="image-20220113132740891" tabindex="0" loading="lazy"><figcaption>image-20220113132740891</figcaption></figure><h2 id="依赖范围传递性" tabindex="-1"><a class="header-anchor" href="#依赖范围传递性" aria-hidden="true">#</a> 依赖范围传递性</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113133605920.png" alt="image-20220113133605920" tabindex="0" loading="lazy"><figcaption>image-20220113133605920</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113133056454.png" alt="image-20220113133056454" tabindex="0" loading="lazy"><figcaption>image-20220113133056454</figcaption></figure><h2 id="生命周期与插件" tabindex="-1"><a class="header-anchor" href="#生命周期与插件" aria-hidden="true">#</a> 生命周期与插件</h2><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113154557542.png" alt="image-20220113154557542" tabindex="0" loading="lazy"><figcaption>image-20220113154557542</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220113160132746.png" alt="image-20220113160132746" tabindex="0" loading="lazy"><figcaption>image-20220113160132746</figcaption></figure><p><strong>插件在生命周期中执行特定的功能</strong></p><h2 id="maven依赖问题" tabindex="-1"><a class="header-anchor" href="#maven依赖问题" aria-hidden="true">#</a> maven依赖问题</h2><p><mark>出现错误，检查是否缺包，不缺包检查scope</mark></p>`,32),i=[e];function c(o,l){return n(),s("div",null,i)}const g=a(p,[["render",c],["__file","Maven.html.vue"]]);export{g as default};
