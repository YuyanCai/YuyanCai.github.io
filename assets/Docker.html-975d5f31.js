import{ac as t,F as l,G as o,D as n,R as s,M as i,ad as e,V as c}from"./framework-f12b30cc.js";const r={},d=e(`<h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><h3 id="_1-1-docker是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-docker是什么" aria-hidden="true">#</a> 1.1 Docker是什么</h3><p>Docker是基于Go语言实现的云开源项目。 Docker的主要目标是“Build，Ship and Run Any App,Anywhere”，也就是通过对应用组件的封装、分发、部署、运行等生命周期的管理，使用户的APP（可以是一个WEB应用或数据库应用等等）及其运行环境能够做到“一次镜像，处处运行”。</p><h3 id="_1-2-为什么会出现docker" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么会出现docker" aria-hidden="true">#</a> 1.2 为什么会出现Docker</h3><p>环境配置沟通过于繁琐，用docker的话把自己配好的环境写好的项目直接打包成镜像，别人拿到镜像后就可以运行成为一个容器，直接运行</p><h3 id="_1-3-虚拟机技术的发展" tabindex="-1"><a class="header-anchor" href="#_1-3-虚拟机技术的发展" aria-hidden="true">#</a> 1.3 虚拟机技术的发展</h3><p><strong>传统虚拟机技术</strong></p><p>它可以在一种操作系统里面运行另一种操作系统，比如在Windows10系统里面运行Linux系统CentOS7。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一个普通文件，不需要了就删掉，对其他部分毫无影响。这类虚拟机完美的运行了另一套系统，能够使应用程序，操作系统和硬件三者之间的逻辑不变。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404090904224.png" alt="image-20220404090904224" tabindex="0" loading="lazy"><figcaption>image-20220404090904224</figcaption></figure><p>虚拟机的缺点： 1 资源占用多 2 冗余步骤多 3 启动慢</p><p><strong>容器虚拟化技术</strong></p><p>Linux 容器不是模拟一个完整的操作系统而是对进程进行隔离。有了容器，就可以将软件运行所需的所有资源打包到一个隔离的容器中。容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404091031246.png" alt="image-20220404091031246" tabindex="0" loading="lazy"><figcaption>image-20220404091031246</figcaption></figure><p><strong>对比</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404091122678.png" alt="image-20220404091122678" tabindex="0" loading="lazy"><figcaption>image-20220404091122678</figcaption></figure><h3 id="_1-4-一句话概括" tabindex="-1"><a class="header-anchor" href="#_1-4-一句话概括" aria-hidden="true">#</a> 1.4 一句话概括</h3><p><mark>解决了运行环境和配置问题的软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术</mark></p><h3 id="_1-5-能干嘛" tabindex="-1"><a class="header-anchor" href="#_1-5-能干嘛" aria-hidden="true">#</a> 1.5 能干嘛</h3><p><mark>docker能够一次构建处处运行</mark></p><p>1.更快速的应用交付和部署</p><p>传统的应用开发完成后，需要提供一堆安装程序和配置说明文档，安装部署后需根据配置文档进行繁杂的配置才能正常运行。Docker化之后只需要交付少量容器镜像文件，在正式生产环境加载镜像并运行即可，应用安装配置在镜像里已经内置好，大大节省部署配置和测试验证时间。</p><p>2.更高效的计算资源利用</p><p>Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor支持，所以在一台物理机上可以运行很多个容器实例，可大大提升物理服务器的CPU和内存的利用率。</p><p>3.更简单的系统运维</p><p>应用容器化运行后，生产环境运行的应用可与开发、测试环境的应用高度一致，容器会将应用程序相关的环境和状态完全封装起来，不会因为底层基础架构和操作系统的不一致性给应用带来影响，产生新的BUG。当出现程序异常时，也可以通过测试环境的相同容器进行快速定位和修复。</p><p>4.更便捷的升级和扩缩容</p><p>随着微服务架构和Docker的发展，大量的应用会通过微服务方式架构，应用的开发构建将变成搭乐高积木一样，每个Docker容器将变成一块“积木”，应用的升级将变得非常容易。当现有的容器不足以支撑业务处理时，可通过镜像运行新的容器进行快速扩容，使应用系统的扩容从原先的天级变成分钟级甚至秒级。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404091703677.png" alt="image-20220404091703677" tabindex="0" loading="lazy"><figcaption>image-20220404091703677</figcaption></figure><p>Docker借鉴了标准集装箱的概念。标准集装箱将货物运往世界各地，Docker将这个模型运用到自己的设计中，唯一不同的是:集装箱运输货物，而Docker运输软件。-</p><h2 id="二、入门" tabindex="-1"><a class="header-anchor" href="#二、入门" aria-hidden="true">#</a> 二、入门</h2><h3 id="_2-1-部署" tabindex="-1"><a class="header-anchor" href="#_2-1-部署" aria-hidden="true">#</a> 2.1 部署</h3><p><strong>云服务器部署docker</strong></p><blockquote><p>直接用带docker的镜像，开机就可以用docker的命令</p></blockquote><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404091938247.png" alt="image-20220404091938247" tabindex="0" loading="lazy"><figcaption>image-20220404091938247</figcaption></figure><p><strong>命令行部署docker</strong></p><p>保证虚拟机能稳定上网即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一步
yum -y install gcc &amp;&amp; yum -y install gcc-c++
yum install -y yum-utils
第二步使用阿里云镜像
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo &amp;&amp; yum makecache fast
第三步安装
yum install docker-ce docker-ce-cli containerd.io
systemctl start docker  &amp;&amp; systemctl enable docker 
docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试hello-world</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220402204821446.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-1-1-阿里云镜像加速-必配" tabindex="-1"><a class="header-anchor" href="#_2-1-1-阿里云镜像加速-必配" aria-hidden="true">#</a> 2.1.1 阿里云镜像加速（必配）</h4>`,40),p={href:"https://tptpe526.mirror.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},m=e('<figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404101840726.png" alt="image-20220404101840726" tabindex="0" loading="lazy"><figcaption>image-20220404101840726</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220413165211950.png" alt="image-20220413165211950" tabindex="0" loading="lazy"><figcaption>image-20220413165211950</figcaption></figure><h3 id="_2-2-docker的基本组成" tabindex="-1"><a class="header-anchor" href="#_2-2-docker的基本组成" aria-hidden="true">#</a> 2.2 Docker的基本组成</h3><h4 id="_2-2-1-镜像" tabindex="-1"><a class="header-anchor" href="#_2-2-1-镜像" aria-hidden="true">#</a> 2.2.1 镜像</h4><p><strong>Docker 镜像（Image）就是一个只读的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。</strong></p><p>它也相当于是一个root文件系统。比如官方镜像 centos:7 就包含了完整的一套 centos:7 最小系统的 root 文件系统。</p><p>相当于容器的“源代码”，docker镜像文件类似于Java的类模板，而docker容器实例类似于java中new出来的实例对象。</p><h4 id="_2-2-2-容器" tabindex="-1"><a class="header-anchor" href="#_2-2-2-容器" aria-hidden="true">#</a> 2.2.2 容器</h4><p>1 从面向对象角度 **Docker 利用容器（Container）独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，容器是用镜像创建的运行实例。**就像是Java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供了一个标准的和隔离的运行环境，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台</p><p>2 从镜像容器角度 可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。</p><h4 id="_2-2-3-仓库" tabindex="-1"><a class="header-anchor" href="#_2-2-3-仓库" aria-hidden="true">#</a> 2.2.3 仓库</h4><p><mark>仓库（Repository）是集中存放镜像文件的场所。</mark></p><p>类似于 <strong>Maven仓库，存放各种jar包的地方；</strong><strong>github仓库，存放各种git项目的地方；</strong><strong>Docker公司提供的官方registry被称为Docker Hub，存放各种镜像模板的地方。</strong></p>',13),u={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=e(`<h4 id="_2-2-4-小总结" tabindex="-1"><a class="header-anchor" href="#_2-2-4-小总结" aria-hidden="true">#</a> 2.2.4 小总结</h4><p>Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p><p><strong>image文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。</strong></p><p><strong>镜像文件</strong></p><ul><li>image 文件生成的容器实例，本身也是一个文件，称为镜像文件。</li></ul><p><strong>容器实例</strong></p><ul><li>一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器</li></ul><p><strong>仓库</strong></p><ul><li>就是放一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候再从仓库中拉下来就可以了。</li></ul><h3 id="_2-3-架构图解" tabindex="-1"><a class="header-anchor" href="#_2-3-架构图解" aria-hidden="true">#</a> 2.3 架构图解</h3><h4 id="_2-3-1-运行流程" tabindex="-1"><a class="header-anchor" href="#_2-3-1-运行流程" aria-hidden="true">#</a> 2.3.1 运行流程</h4><ol><li>用户是使用Docker Client与Docker Daemon建立通信，并发送请求给后者</li><li>Docker Daemon作为Docker架构中的主体部分，首先提供Docker Server的功能可以接受Docker Client请求</li><li>Docker Engine执行Docker内部的一些列工作，每一项工作都是一个Job的形式存在</li><li>Job的运行过程中，当需要容器镜像时，则从docker registry中下载镜像，并通过镜像管理驱动Graph driver将下载镜像以graph的形式存储</li><li>当需docker创建网络环境时，通过网络管理驱动networkdriver创建并配置Docker容器网络环境</li><li>当需要限制docker容器运行资源或执行用户指令等操作时，则通过Exec driver来完成</li><li>Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。</li></ol><blockquote><p>以上给爷理解着背，面试必考</p><p>你就想着容器创建的过程，通过dockerclient与dockerdaemon建立通信</p><p>dockerdaemon是核心部分，它提供的第一个功能就是与用户通信docker server</p><p>docker engine执行的是容器的内部工作，每一项工作都是一个job的形式</p><p>然后job需要镜像，去registry拉，注册进graph，需要网络有网络驱动给创建</p><p>最后需要一些特殊的指令的话通过exec driver来完成</p><p>Libcontainer字如其名</p></blockquote><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404093156122.png" alt="image-20220404093156122" tabindex="0" loading="lazy"><figcaption>image-20220404093156122</figcaption></figure><h4 id="_2-3-2-为什么docker比vm快" tabindex="-1"><a class="header-anchor" href="#_2-3-2-为什么docker比vm快" aria-hidden="true">#</a> 2.3.2 为什么docker比vm快</h4><p>(1)docker有着比虚拟机更少的抽象层 由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。</p><p>(2)docker利用的是宿主机的内核,而不需要加载操作系统OS内核 当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载OS,返回新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返回过程,因此新建一个docker容器只需要几秒钟。</p><h2 id="三、常用命令" tabindex="-1"><a class="header-anchor" href="#三、常用命令" aria-hidden="true">#</a> 三、常用命令</h2><h3 id="_3-1-帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#_3-1-帮助启动类命令" aria-hidden="true">#</a> 3.1 帮助启动类命令</h3><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404102131493.png" alt="image-20220404102131493" tabindex="0" loading="lazy"><figcaption>image-20220404102131493</figcaption></figure><h3 id="_3-2-镜像命令" tabindex="-1"><a class="header-anchor" href="#_3-2-镜像命令" aria-hidden="true">#</a> 3.2 镜像命令</h3><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404102433154.png" alt="image-20220404102433154" tabindex="0" loading="lazy"><figcaption>image-20220404102433154</figcaption></figure><h4 id="_3-2-2-虚悬镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-2-虚悬镜像" aria-hidden="true">#</a> 3.2.2 虚悬镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>==仓库名、标签都是&lt;none&gt;的镜像，俗称虚悬镜像dangling image==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-1-docker-system-df" tabindex="-1"><a class="header-anchor" href="#_3-2-1-docker-system-df" aria-hidden="true">#</a> 3.2.1 docker system df</h4><p><strong>查看镜像/容器/数据卷所占的空间</strong></p><p>[root@docker ~]## docker system df TYPE TOTAL ACTIVE SIZE RECLAIMABLE Images 2 0 177MB 177MB (100%) Containers 2 0 0B 0B Local Volumes 0 0 0B 0B Build Cache 0 0 0B 0B</p><h3 id="_3-3-容器命令" tabindex="-1"><a class="header-anchor" href="#_3-3-容器命令" aria-hidden="true">#</a> 3.3 容器命令</h3><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404102754006.png" alt="image-20220404102754006" tabindex="0" loading="lazy"><figcaption>image-20220404102754006</figcaption></figure><p><strong>docker run</strong></p><p>--name=&quot;容器新名字&quot; 为容器指定一个名称； -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；</p><p>-i：以交互模式运行容器，通常与 -t 同时使用； -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用； 也即启动交互式容器(前台有伪终端，等待交互)；</p><p>-P: 随机端口映射，大写P -p: 指定端口映射，小写p</p><p><strong>docker run -it centos /bin/bash</strong></p><p>-i: 交互式操作。 -t: 终端。 centos : centos 镜像。 /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 要退出终端，直接输入 exit:</p><p><strong>docker logs</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404103318803.png" alt="image-20220404103318803" tabindex="0" loading="lazy"><figcaption>image-20220404103318803</figcaption></figure><p><strong>docker inspect</strong></p><blockquote><p>查看容器内部细节，很重要！</p><p>能看挂载相关信息，和网络等详细信息</p></blockquote><p><strong>docker cp</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404103517389.png" alt="image-20220404103517389" tabindex="0" loading="lazy"><figcaption>image-20220404103517389</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220402222639429.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_3-3-1-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-3-1-常用命令" aria-hidden="true">#</a> 3.3.1 常用命令</h4><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404104044643.png" alt="image-20220404104044643" tabindex="0" loading="lazy"><figcaption>image-20220404104044643</figcaption></figure><ul><li>attach Attach to a running container ## 当前 shell 下 attach 连接指定运行镜像</li><li>build Build an image from a Dockerfile ## 通过 Dockerfile 定制镜像</li><li>commit Create a new image from a container changes ## 提交当前容器为新的镜像</li><li>cp Copy files/folders from the containers filesystem to the host path ##从容器中拷贝指定文件或者目录到宿主机中</li><li>create Create a new container ## 创建一个新的容器，同 run，但不启动容器</li><li>diff Inspect changes on a container&#39;s filesystem ## 查看 docker 容器变化</li><li>events Get real time events from the server ## 从 docker 服务获取容器实时事件</li><li>exec Run a command in an existing container ## 在已存在的容器上运行命令</li><li>export Stream the contents of a container as a tar archive ## 导出容器的内容流作为一个 tar 归档文件[对应 import ]</li><li>history Show the history of an image ## 展示一个镜像形成历史</li><li>images List images ## 列出系统当前镜像</li><li>import Create a new filesystem image from the contents of a tarball ## 从tar包中的内容创建一个新的文件系统映像[对应export]</li><li>info Display system-wide information ## 显示系统相关信息</li><li>inspect Return low-level information on a container ## 查看容器详细信息</li><li>kill Kill a running container ## kill 指定 docker 容器</li><li>load Load an image from a tar archive ## 从一个 tar 包中加载一个镜像[对应 save]</li><li>login Register or Login to the docker registry server ## 注册或者登陆一个 docker 源服务器</li><li>logout Log out from a Docker registry server ## 从当前 Docker registry 退出</li><li>logs Fetch the logs of a container ## 输出当前容器日志信息</li><li>port Lookup the public-facing port which is NAT-ed to PRIVATE_PORT ## 查看映射端口对应的容器内部源端口</li><li>pause Pause all processes within a container ## 暂停容器</li><li>ps List containers ## 列出容器列表</li><li>pull Pull an image or a repository from the docker registry server ## 从docker镜像源服务器拉取指定镜像或者库镜像</li><li>push Push an image or a repository to the docker registry server ## 推送指定镜像或者库镜像至docker源服务器</li><li>restart Restart a running container ## 重启运行的容器</li><li>rm Remove one or more containers ## 移除一个或者多个容器</li><li>rmi Remove one or more images ## 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]</li><li>run Run a command in a new container ## 创建一个新的容器并运行一个命令</li><li>save Save an image to a tar archive ## 保存一个镜像为一个 tar 包[对应 load]</li><li>search Search for an image on the Docker Hub ## 在 docker hub 中搜索镜像</li><li>start Start a stopped containers ## 启动容器</li><li>stop Stop a running containers ## 停止容器</li><li>tag Tag an image into a repository ## 给源中镜像打标签</li><li>top Lookup the running processes of a container ## 查看容器中运行的进程信息</li><li>unpause Unpause a paused container ## 取消暂停容器</li><li>version Show the docker version information ## 查看 docker 版本号</li><li>wait Block until a container stops, then print its exit code ## 截取容器停止时的退出状态值</li></ul><p>镜像服务的密码和阿里云账户的密码不是同一个密码，</p><p>上传成功</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220403104927237.png" alt="image-20220403104927237" tabindex="0" loading="lazy"><figcaption>image-20220403104927237</figcaption></figure><p>docker exec -it 1f1ed5798baa /bin/bash</p><p>docker commit -m=&quot;ifconfig cmd add&quot; -a=&quot;pyy&quot; 1f1ed5798baa:1.0</p><p>[root@VM-16-8-centos ~]## docker run -d -p 5000:5000 -v /myregistry:/tmp/registry --privileged=true registry</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos ~]## curl -XGET http://124.221.228.148:5000/v2/_catalog
{&quot;repositories&quot;:[&quot;pyyubuntu&quot;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、镜像" tabindex="-1"><a class="header-anchor" href="#四、镜像" aria-hidden="true">#</a> 四、镜像</h2><h3 id="_4-1-是什么" tabindex="-1"><a class="header-anchor" href="#_4-1-是什么" aria-hidden="true">#</a> 4.1 是什么</h3><p><strong>镜像</strong> 是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。</p><p>只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p><p><strong>分层的镜像</strong></p><p>我们拉取镜像的时候好像是一层一层下载的，这是为什么呢？</p><p>UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p><p>特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</p><h3 id="_4-2-镜像加载原理" tabindex="-1"><a class="header-anchor" href="#_4-2-镜像加载原理" aria-hidden="true">#</a> 4.2 镜像加载原理</h3><p><strong>Docker镜像加载原理：</strong> docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。bootfs(boot file system)主要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，==在Docker镜像的最底层是引导文件系统bootfs。==这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。</p><p>rootfs (root file system) ，在bootfs之上。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404105851911.png" alt="image-20220404105851911" tabindex="0" loading="lazy"><figcaption>image-20220404105851911</figcaption></figure><p><strong>对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供 rootfs 就行了。由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs。</strong></p><h3 id="_4-3-为什么镜像要分层" tabindex="-1"><a class="header-anchor" href="#_4-3-为什么镜像要分层" aria-hidden="true">#</a> 4.3 为什么镜像要分层</h3><p>镜像分层最大的一个好处就是共享资源，方便复制迁移，就是为了复用。</p><p>比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像； 同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。</p><h3 id="_4-4-重点理解" tabindex="-1"><a class="header-anchor" href="#_4-4-重点理解" aria-hidden="true">#</a> 4.4 重点理解</h3><blockquote><p>看了好几遍docker了，这个真的很重要！</p></blockquote><p><mark>Docker镜像层都是只读的，容器层是可写的</mark></p><p>当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。 所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404110213095.png" alt="image-20220404110213095" tabindex="0" loading="lazy"><figcaption>image-20220404110213095</figcaption></figure><h3 id="_4-5-操作案例" tabindex="-1"><a class="header-anchor" href="#_4-5-操作案例" aria-hidden="true">#</a> 4.5 操作案例</h3><p>新镜像</p><p><strong>docker commit提交容器副本使之成为一个新的镜像</strong></p><p><strong>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]</strong></p><p><mark>ubuntu安装vim命令</mark></p><p>apt-get update apt-get -y install vim</p><p><mark>本地镜像发布阿里云</mark></p><ol><li>登录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>用户名 registry.cn-hangzhou.aliyuncs.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于登录的用户名为阿里云账号全名，密码为开通服务时设置的密码。</p><ol start="2"><li>推送</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/pengyuyan_ubuntu/pengyuyan_repository:[镜像版本号]
docker push registry.cn-hangzhou.aliyuncs.com/pengyuyan_ubuntu/pengyuyan_repository:[镜像版本号]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404112028335.png" alt="image-20220404112028335" tabindex="0" loading="lazy"><figcaption>image-20220404112028335</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404111457512.png" alt="image-20220404111457512" tabindex="0" loading="lazy"><figcaption>image-20220404111457512</figcaption></figure><p><mark>下载阿里云镜像到本地</mark></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/pengyuyan_ubuntu/pengyuyan_repository:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>本地镜像发布到私有库</mark></p><p>私有库：</p>`,91),b={href:"https://hub.docker.com/%EF%BC%8C%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E8%AE%BF%E9%97%AE%E5%A4%AA%E6%85%A2%E4%BA%86%E4%B8%94%E5%87%86%E5%A4%87%E8%A2%AB%E9%98%BF%E9%87%8C%E4%BA%91%E5%8F%96%E4%BB%A3%E7%9A%84%E8%B6%8B%E5%8A%BF%EF%BC%8C%E4%B8%8D%E5%A4%AA%E4%B8%BB%E6%B5%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>2 Dockerhub、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私人仓库供给团队使用，基于公司内部项目构建镜像。</p><pre><code>Docker Registry是官方提供的工具，可以用于构建私有镜像仓库
</code></pre><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404112410838.png" alt="image-20220404112410838" tabindex="0" loading="lazy"><figcaption>image-20220404112410838</figcaption></figure><ol><li>安装运行私有仓库</li></ol><p>docker pull registry</p><p>docker run -d -p 5000:5000 -v /myregistry/:/tmp/registry --privileged=true registry</p><p>默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><ol start="2"><li>给容器增加命令</li></ol><p>docker run -it ubuntu /bin/bash</p><p>apt-get update</p><p>apt-get install net-tools</p><p>公式： docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名] 命令：在容器外执行，记得 docker commit -m=&quot;ifconfig cmd add&quot; -a=&quot;pyy&quot; a69d7c825c4f pyyubuntu:1.2</p><ol start="3"><li>打标签，改配置</li></ol><p>docker tag pyyubuntu:1.2 192.168.100.10:5000/pyyubuntu:1.2</p><p>vim /etc/docker/daemon.json</p>`,15),h={href:"https://pengyuyan227.mirror.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},g=e(`<ol start="4"><li>上传</li></ol><p>docker push 192.168.111.162:5000/zzyyubuntu:1.2</p><h3 id="_4-6-小总结" tabindex="-1"><a class="header-anchor" href="#_4-6-小总结" aria-hidden="true">#</a> 4.6 小总结</h3><p>Docker中的镜像分层，支持通过扩展现有镜像，创建新的镜像。类似Java继承于一个Base基础类，自己再按需扩展。 新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404110700038.png" alt="image-20220404110700038" tabindex="0" loading="lazy"><figcaption>image-20220404110700038</figcaption></figure><h2 id="五、容器卷" tabindex="-1"><a class="header-anchor" href="#五、容器卷" aria-hidden="true">#</a> 五、容器卷</h2><blockquote><p>--privileged=true</p><p><strong>Docker挂载主机目录访问如果出现cannot open directory .: Permission denied</strong><strong>解决办法：在挂载目录后多加一个--privileged=true参数即可</strong></p></blockquote><h3 id="_5-1-是什么" tabindex="-1"><a class="header-anchor" href="#_5-1-是什么" aria-hidden="true">#</a> 5.1 是什么</h3><p>一句话：有点类似我们Redis里面的rdb和aof文件</p><p>将docker容器内的数据保存进宿主机的磁盘中</p><p>运行一个带有容器卷存储功能的容器实例</p><p>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录 镜像名</p><h3 id="_5-2-能干嘛" tabindex="-1"><a class="header-anchor" href="#_5-2-能干嘛" aria-hidden="true">#</a> 5.2 能干嘛</h3><p>*将运用与运行的环境打包镜像，run后形成容器实例运行 ，但是<mark>我们对数据的要求希望是持久化的</mark></p><p>Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。 为了能保存数据在docker中我们使用卷。</p><p>特点： <strong>1：数据卷可在容器之间共享或重用数据</strong><strong>2：卷中的更改可以直接实时生效，爽</strong><strong>3：数据卷中的更改不会包含在镜像的更新中</strong><strong>4：数据卷的生命周期一直持续到没有容器使用它为止</strong></p><h3 id="_5-3-数据卷案例" tabindex="-1"><a class="header-anchor" href="#_5-3-数据卷案例" aria-hidden="true">#</a> 5.3 数据卷案例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos ~]## docker run -it --privileged=true -v /tmp/host_data:/tmp/docker_data --name=u1 ubuntu
root@2e431ba4f3bf:/## cd /tmp/docker_data/  
root@2e431ba4f3bf:/tmp/docker_data## mkdir test_docker.txt


[root@VM-16-8-centos ~]## cd /tmp/host_data/
[root@VM-16-8-centos host_data]## ll
total 4
drwxr-xr-x 2 root root 4096 Apr  3 16:10 test_docker.txt


[root@VM-16-8-centos host_data]## mkdir test_host.txt
root@2e431ba4f3bf:/tmp/docker_data##  ll
total 16
drwxr-xr-x 4 root root 4096 Apr  3 08:13 ./
drwxrwxrwt 1 root root 4096 Apr  3 08:10 ../
drwxr-xr-x 2 root root 4096 Apr  3 08:10 test_docker.txt/
drwxr-xr-x 2 root root 4096 Apr  3 08:13 test_host.txt/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，容器卷和挂载在本地的目录内容是一致的</p><p>查看改容器详细信息，也能查看到</p><p>docker inspect imageID</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220403161747230.png" alt="image-20220403161747230" tabindex="0" loading="lazy"><figcaption>image-20220403161747230</figcaption></figure><h3 id="_5-4-卷的继承" tabindex="-1"><a class="header-anchor" href="#_5-4-卷的继承" aria-hidden="true">#</a> 5.4 卷的继承</h3><p>--volumes-from <code>要继承的容器名</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos ~]## docker run -it --privileged=true --volumes-from u1  --name u2 ubuntu
root@de0f937528ac:/## cd /tmp
root@de0f937528ac:/tmp## cd docker_data/
root@de0f937528ac:/tmp/docker_data## ll
total 16
drwxr-xr-x 4 root root 4096 Apr  3 08:13 ./
drwxrwxrwt 1 root root 4096 Apr  3 08:26 ../
drwxr-xr-x 2 root root 4096 Apr  3 08:10 test_docker.txt/
drwxr-xr-x 2 root root 4096 Apr  3 08:13 test_host.txt/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、常用软件安装" tabindex="-1"><a class="header-anchor" href="#六、常用软件安装" aria-hidden="true">#</a> 六、常用软件安装</h2><h3 id="_6-1-tomcat" tabindex="-1"><a class="header-anchor" href="#_6-1-tomcat" aria-hidden="true">#</a> 6.1 Tomcat</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos ~]## docker pull tomcat
Using default tag: latest
latest: Pulling from library/tomcat
dbba69284b27: Pull complete 
9baf437a1bad: Pull complete 
6ade5c59e324: Pull complete 
b19a994f6d4c: Pull complete 
43c0aceedb57: Pull complete 
24e7c71ec633: Pull complete 
612cf131e488: Pull complete 
dc655e69dd90: Pull complete 
efe57b7441f6: Pull complete 
8db51a0119f4: Pull complete 
Digest: sha256:263f93ac29cb2dbba4275a4e647b448cb39a66334a6340b94da8bf13bde770aa
Status: Downloaded newer image for tomcat:latest
docker.io/library/tomcat:latest
[root@VM-16-8-centos ~]## docker images
REPOSITORY                       TAG       IMAGE ID       CREATED             SIZE
124.221.228.148:5000/pyyubuntu   1.1       138c010d2c99   About an hour ago   109MB
ubuntu                           1.0       138c010d2c99   About an hour ago   109MB
tomcat                           latest    b00440a36b99   37 hours ago        680MB
registry                         latest    d3241e050fc9   4 days ago          24.2MB
ubuntu                           latest    ff0fea8310f3   2 weeks ago         72.8MB



启动多个tomcat实例
docker run -d -p 8081:8080 tomcat
docker run -d -p 8082:8080 tomcat
cp -rf webapps.dist/* webapps

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版tomcat，首页不在webapp下了</p><blockquote><p>把webapps.dist目录换成webapps</p></blockquote><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220403164902673.png" alt="image-20220403164902673" tabindex="0" loading="lazy"><figcaption>image-20220403164902673</figcaption></figure><p>当然我们不修改也是可以的，只需要下载tomcat8即可</p><h4 id="_6-1-1" tabindex="-1"><a class="header-anchor" href="#_6-1-1" aria-hidden="true">#</a> 6.1.1</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">13245</span>:8080  <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span>  /mydata/tomcat/webapps:/usr/local/tomcat/webapps <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> tomcat tomcat:8.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-mysql" tabindex="-1"><a class="header-anchor" href="#_6-2-mysql" aria-hidden="true">#</a> 6.2 Mysql</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-16-8-centos ~<span class="token punctuation">]</span><span class="token comment">##  docker run -d -p 3306:3306 --privileged=true -v /pyy/mysql/log:/var/log/mysql -v /pyy/mysql/data:/var/lib/mysql -v /pyy/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=a  --name mysql mysql:5.7</span>
b0fbfe45fce1ef90b4caf946efacbef0e50a425a25dec1d8e15902244e43747b
<span class="token punctuation">[</span>root@VM-16-8-centos ~<span class="token punctuation">]</span><span class="token comment">## docker ps</span>
CONTAINER ID   IMAGE       COMMAND                  CREATED             STATUS             PORTS                    NAMES
b0fbfe45fce1   mysql:5.7   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">8</span> seconds ago       Up <span class="token number">7</span> seconds       <span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp      test-mysql
ce89351d51ec   tomcat      <span class="token string">&quot;catalina.sh run&quot;</span>        <span class="token number">16</span> minutes ago      Up <span class="token number">16</span> minutes      <span class="token number">0.0</span>.0.0:8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   funny_bose
de0f937528ac   ubuntu      <span class="token string">&quot;bash&quot;</span>                   <span class="token number">29</span> minutes ago      Up <span class="token number">29</span> minutes                               u2
2e431ba4f3bf   ubuntu      <span class="token string">&quot;bash&quot;</span>                   <span class="token number">45</span> minutes ago      Up <span class="token number">45</span> minutes                               u1
9dabfdf1b57d   registry    <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   About an hour ago   Up About an hour   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   sharp_brown
1f1ed5798baa   ubuntu      <span class="token string">&quot;/bin/bash&quot;</span>              <span class="token number">6</span> hours ago         Up <span class="token number">47</span> minutes                               vigorous_dewdney
<span class="token punctuation">[</span>root@VM-16-8-centos ~<span class="token punctuation">]</span><span class="token comment">## docker exec -it b0fbfe45fce1 /bin/bash</span>
root@b0fbfe45fce1:/<span class="token comment">## mysql -uroot -pa</span>
mysql: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">2</span>
Server version: <span class="token number">5.7</span>.37 MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">)</span>

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2022</span>, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span> create database test_mysql<span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> use test_mysql<span class="token punctuation">;</span>
Database changed
mysql<span class="token operator">&gt;</span> create table docker_mysql <span class="token punctuation">(</span>id int,name varchar<span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> insert into docker_mysql values<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&#39;zs&#39;</span><span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token number">2</span>,<span class="token string">&#39;ls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK, <span class="token number">2</span> rows affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
Records: <span class="token number">2</span>  Duplicates: <span class="token number">0</span>  Warnings: <span class="token number">0</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> Sum  from docker_mysql<span class="token punctuation">;</span>
+-----+
<span class="token operator">|</span> Sum <span class="token operator">|</span>
+-----+
<span class="token operator">|</span>   <span class="token number">2</span> <span class="token operator">|</span>
+-----+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                      <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/share/mysql/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>navicat测试连接</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220403171241962.png" alt="image-20220403171241962" tabindex="0" loading="lazy"><figcaption>image-20220403171241962</figcaption></figure><h4 id="_6-2-1-编码问题的解决" tabindex="-1"><a class="header-anchor" href="#_6-2-1-编码问题的解决" aria-hidden="true">#</a> 6.2.1 编码问题的解决</h4><p><strong>插入中文会报错</strong></p><p>在本地写好my.cnf文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos conf]## cat my.cnf 
[client]
default_character_set=utf-8
[mysqld]
collation_server=utf8_general_ci
character_set_server=utf8
[root@VM-16-8-centos conf]## pwd
/pyy/mysql/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动mysql容器实例再重新进入并查看字符编码</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404143900870.png" alt="image-20220404143900870" tabindex="0" loading="lazy"><figcaption>image-20220404143900870</figcaption></figure><h3 id="_6-3-redis" tabindex="-1"><a class="header-anchor" href="#_6-3-redis" aria-hidden="true">#</a> 6.3 Redis</h3><p>复制一份好的redis配置文件，</p><h4 id="_6-3-1-redis配置文件" tabindex="-1"><a class="header-anchor" href="#_6-3-1-redis配置文件" aria-hidden="true">#</a> 6.3.1 Redis配置文件</h4><blockquote><p>开启redis验证 可选 requirepass 123</p><p>允许redis外地连接 必须 注释掉 ## bind 127.0.0.1</p><p>daemonize no 将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败</p><p>开启redis数据持久化 appendonly yes 可选</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-16-8-centos ~<span class="token punctuation">]</span><span class="token comment">## cat /app/redis/redis.conf </span>
<span class="token comment">## redis configuration file example.</span>
 
<span class="token comment">####### Main configuration start #######</span>
 
<span class="token comment">##注释掉bind 127.0.0.1，使redis可以外部访问</span>
<span class="token comment">##bind 127.0.0.1</span>
 
<span class="token comment">## 端口号</span>
port <span class="token number">6379</span>
 
<span class="token comment">##给redis设置密码</span>
requirepass redis123
 
<span class="token comment">###redis持久化　　默认是no</span>
appendonly <span class="token function">yes</span>
 
<span class="token comment">##开启protected-mode保护模式，需配置bind ip或者设置访问密码</span>
<span class="token comment">##关闭protected-mode模式，此时外部网络可以直接访问</span>
protected-mode no
 
<span class="token comment">##是否开启集群</span>
<span class="token comment">##cluster-enabled no</span>
 
<span class="token comment">##集群的配置文件,该文件自动生成</span>
<span class="token comment">##cluster-config-file nodes.conf</span>
 
<span class="token comment">##集群的超时时间</span>
<span class="token comment">##cluster-node-timeout 5000</span>
 
<span class="token comment">##用守护线程的方式启动</span>
daemonize no   
 
<span class="token comment">##防止出现远程主机强迫关闭了一个现有的连接的错误 默认是300</span>
tcp-keepalive <span class="token number">300</span>
 
<span class="token comment">####### Main configuration end #######</span>
 
<span class="token function">timeout</span> <span class="token number">0</span>
 
tcp-backlog <span class="token number">511</span>
 
<span class="token comment">## Note: these supervision methods only signal &quot;process is ready.&quot;</span>
<span class="token comment">##       They do not enable continuous liveness pings back to your supervisor.</span>
supervised no
 
<span class="token comment">## If a pid file is specified, Redis writes it where specified at startup</span>
<span class="token comment">## and removes it at exit.</span>
<span class="token comment">##</span>
<span class="token comment">## When the server runs non daemonized, no pid file is created if none is</span>
<span class="token comment">## specified in the configuration. When the server is daemonized, the pid file</span>
<span class="token comment">## is used even if not specified, defaulting to &quot;/var/run/redis.pid&quot;.</span>
<span class="token comment">##</span>
<span class="token comment">## Creating a pid file is best effort: if Redis is not able to create it</span>
<span class="token comment">## nothing bad happens, the server will start and run normally.</span>
pidfile /var/run/redis_6379.pid
 
<span class="token comment">## Specify the server verbosity level.</span>
<span class="token comment">## This can be one of:</span>
<span class="token comment">## debug (a lot of information, useful for development/testing)</span>
<span class="token comment">## verbose (many rarely useful info, but not a mess like the debug level)</span>
<span class="token comment">## notice (moderately verbose, what you want in production probably)</span>
<span class="token comment">## warning (only very important / critical messages are logged)</span>
loglevel notice
 
<span class="token comment">## Specify the log file name. Also the empty string can be used to force</span>
<span class="token comment">## Redis to log on the standard output. Note that if you use standard</span>
<span class="token comment">## output for logging but daemonize, logs will be sent to /dev/null</span>
logfile <span class="token string">&quot;&quot;</span>
 
<span class="token comment">## To enable logging to the system logger, just set &#39;syslog-enabled&#39; to yes,</span>
<span class="token comment">## and optionally update the other syslog parameters to suit your needs.</span>
<span class="token comment">## syslog-enabled no</span>
 
<span class="token comment">## Specify the syslog identity.</span>
<span class="token comment">## syslog-ident redis</span>
 
<span class="token comment">## Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.</span>
<span class="token comment">## syslog-facility local0</span>
 
<span class="token comment">## Set the number of databases. The default database is DB 0, you can select</span>
<span class="token comment">## a different one on a per-connection basis using SELECT &lt;dbid&gt; where</span>
<span class="token comment">## dbid is a number between 0 and &#39;databases&#39;-1</span>
databases <span class="token number">16</span>
 
<span class="token comment">## By default Redis shows an ASCII art logo only when started to log to the</span>
<span class="token comment">## standard output and if the standard output is a TTY. Basically this means</span>
<span class="token comment">## that normally a logo is displayed only in interactive sessions.</span>
<span class="token comment">##</span>
<span class="token comment">## However it is possible to force the pre-4.0 behavior and always show a</span>
<span class="token comment">## ASCII art logo in startup logs by setting the following option to yes.</span>
always-show-logo <span class="token function">yes</span>
 
<span class="token comment">################################ SNAPSHOTTING  ################################</span>
<span class="token comment">##</span>
<span class="token comment">## Save the DB on disk:</span>
<span class="token comment">##</span>
<span class="token comment">##   save &lt;seconds&gt; &lt;changes&gt;</span>
<span class="token comment">##</span>
<span class="token comment">##   Will save the DB if both the given number of seconds and the given</span>
<span class="token comment">##   number of write operations against the DB occurred.</span>
<span class="token comment">##</span>
<span class="token comment">##   In the example below the behaviour will be to save:</span>
<span class="token comment">##   after 900 sec (15 min) if at least 1 key changed</span>
<span class="token comment">##   after 300 sec (5 min) if at least 10 keys changed</span>
<span class="token comment">##   after 60 sec if at least 10000 keys changed</span>
<span class="token comment">##</span>
<span class="token comment">##   Note: you can disable saving completely by commenting out all &quot;save&quot; lines.</span>
<span class="token comment">##</span>
<span class="token comment">##   It is also possible to remove all the previously configured save</span>
<span class="token comment">##   points by adding a save directive with a single empty string argument</span>
<span class="token comment">##   like in the following example:</span>
<span class="token comment">##</span>
<span class="token comment">##   save &quot;&quot;</span>
 
save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>
 
<span class="token comment">## By default Redis will stop accepting writes if RDB snapshots are enabled</span>
<span class="token comment">## (at least one save point) and the latest background save failed.</span>
<span class="token comment">## This will make the user aware (in a hard way) that data is not persisting</span>
<span class="token comment">## on disk properly, otherwise chances are that no one will notice and some</span>
<span class="token comment">## disaster will happen.</span>
<span class="token comment">##</span>
<span class="token comment">## If the background saving process will start working again Redis will</span>
<span class="token comment">## automatically allow writes again.</span>
<span class="token comment">##</span>
<span class="token comment">## However if you have setup your proper monitoring of the Redis server</span>
<span class="token comment">## and persistence, you may want to disable this feature so that Redis will</span>
<span class="token comment">## continue to work as usual even if there are problems with disk,</span>
<span class="token comment">## permissions, and so forth.</span>
stop-writes-on-bgsave-error <span class="token function">yes</span>
 
<span class="token comment">## Compress string objects using LZF when dump .rdb databases?</span>
<span class="token comment">## For default that&#39;s set to &#39;yes&#39; as it&#39;s almost always a win.</span>
<span class="token comment">## If you want to save some CPU in the saving child set it to &#39;no&#39; but</span>
<span class="token comment">## the dataset will likely be bigger if you have compressible values or keys.</span>
rdbcompression <span class="token function">yes</span>
 
<span class="token comment">## Since version 5 of RDB a CRC64 checksum is placed at the end of the file.</span>
<span class="token comment">## This makes the format more resistant to corruption but there is a performance</span>
<span class="token comment">## hit to pay (around 10%) when saving and loading RDB files, so you can disable it</span>
<span class="token comment">## for maximum performances.</span>
<span class="token comment">##</span>
<span class="token comment">## RDB files created with checksum disabled have a checksum of zero that will</span>
<span class="token comment">## tell the loading code to skip the check.</span>
rdbchecksum <span class="token function">yes</span>
 
<span class="token comment">## The filename where to dump the DB</span>
dbfilename dump.rdb
 
<span class="token comment">## Remove RDB files used by replication in instances without persistence</span>
<span class="token comment">## enabled. By default this option is disabled, however there are environments</span>
<span class="token comment">## where for regulations or other security concerns, RDB files persisted on</span>
<span class="token comment">## disk by masters in order to feed replicas, or stored on disk by replicas</span>
<span class="token comment">## in order to load them for the initial synchronization, should be deleted</span>
<span class="token comment">## ASAP. Note that this option ONLY WORKS in instances that have both AOF</span>
<span class="token comment">## and RDB persistence disabled, otherwise is completely ignored.</span>
<span class="token comment">##</span>
<span class="token comment">## An alternative (and sometimes better) way to obtain the same effect is</span>
<span class="token comment">## to use diskless replication on both master and replicas instances. However</span>
<span class="token comment">## in the case of replicas, diskless is not always an option.</span>
rdb-del-sync-files no
 
<span class="token comment">## The working directory.</span>
<span class="token comment">##</span>
<span class="token comment">## The DB will be written inside this directory, with the filename specified</span>
<span class="token comment">## above using the &#39;dbfilename&#39; configuration directive.</span>
<span class="token comment">##</span>
<span class="token comment">## The Append Only File will also be created inside this directory.</span>
<span class="token comment">##</span>
<span class="token comment">## Note that you must specify a directory here, not a file name.</span>
<span class="token function">dir</span> ./
 
 
<span class="token comment">## When a replica loses its connection with the master, or when the replication</span>
<span class="token comment">## is still in progress, the replica can act in two different ways:</span>
<span class="token comment">##</span>
<span class="token comment">## 1) if replica-serve-stale-data is set to &#39;yes&#39; (the default) the replica will</span>
<span class="token comment">##    still reply to client requests, possibly with out of date data, or the</span>
<span class="token comment">##    data set may just be empty if this is the first synchronization.</span>
<span class="token comment">##</span>
<span class="token comment">## 2) if replica-serve-stale-data is set to &#39;no&#39; the replica will reply with</span>
<span class="token comment">##    an error &quot;SYNC with master in progress&quot; to all the kind of commands</span>
<span class="token comment">##    but to INFO, replicaOF, AUTH, PING, SHUTDOWN, REPLCONF, ROLE, CONFIG,</span>
<span class="token comment">##    SUBSCRIBE, UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB,</span>
<span class="token comment">##    COMMAND, POST, HOST: and LATENCY.</span>
<span class="token comment">##</span>
replica-serve-stale-data <span class="token function">yes</span>
 
<span class="token comment">## You can configure a replica instance to accept writes or not. Writing against</span>
<span class="token comment">## a replica instance may be useful to store some ephemeral data (because data</span>
<span class="token comment">## written on a replica will be easily deleted after resync with the master) but</span>
<span class="token comment">## may also cause problems if clients are writing to it because of a</span>
<span class="token comment">## misconfiguration.</span>
<span class="token comment">##</span>
<span class="token comment">## Since Redis 2.6 by default replicas are read-only.</span>
<span class="token comment">##</span>
<span class="token comment">## Note: read only replicas are not designed to be exposed to untrusted clients</span>
<span class="token comment">## on the internet. It&#39;s just a protection layer against misuse of the instance.</span>
<span class="token comment">## Still a read only replica exports by default all the administrative commands</span>
<span class="token comment">## such as CONFIG, DEBUG, and so forth. To a limited extent you can improve</span>
<span class="token comment">## security of read only replicas using &#39;rename-command&#39; to shadow all the</span>
<span class="token comment">## administrative / dangerous commands.</span>
replica-read-only <span class="token function">yes</span>
 
 
<span class="token comment">## When diskless replication is used, the master waits a configurable amount of</span>
<span class="token comment">## time (in seconds) before starting the transfer in the hope that multiple</span>
<span class="token comment">## replicas will arrive and the transfer can be parallelized.</span>
<span class="token comment">##</span>
<span class="token comment">## With slow disks and fast (large bandwidth) networks, diskless replication</span>
<span class="token comment">## works better.</span>
repl-diskless-sync no
 
<span class="token comment">## When diskless replication is enabled, it is possible to configure the delay</span>
<span class="token comment">## the server waits in order to spawn the child that transfers the RDB via socket</span>
<span class="token comment">## to the replicas.</span>
<span class="token comment">##</span>
<span class="token comment">## This is important since once the transfer starts, it is not possible to serve</span>
<span class="token comment">## new replicas arriving, that will be queued for the next RDB transfer, so the</span>
<span class="token comment">## server waits a delay in order to let more replicas arrive.</span>
<span class="token comment">##</span>
<span class="token comment">## The delay is specified in seconds, and by default is 5 seconds. To disable</span>
<span class="token comment">## it entirely just set it to 0 seconds and the transfer will start ASAP.</span>
repl-diskless-sync-delay <span class="token number">5</span>
 
 
<span class="token comment">## In many cases the disk is slower than the network, and storing and loading</span>
<span class="token comment">## the RDB file may increase replication time (and even increase the master&#39;s</span>
<span class="token comment">## Copy on Write memory and salve buffers).</span>
<span class="token comment">## However, parsing the RDB file directly from the socket may mean that we have</span>
<span class="token comment">## to flush the contents of the current database before the full rdb was</span>
<span class="token comment">## received. For this reason we have the following options:</span>
<span class="token comment">##</span>
<span class="token comment">## &quot;disabled&quot;    - Don&#39;t use diskless load (store the rdb file to the disk first)</span>
<span class="token comment">## &quot;on-empty-db&quot; - Use diskless load only when it is completely safe.</span>
<span class="token comment">## &quot;swapdb&quot;      - Keep a copy of the current db contents in RAM while parsing</span>
<span class="token comment">##                 the data directly from the socket. note that this requires</span>
<span class="token comment">##                 sufficient memory, if you don&#39;t have it, you risk an OOM kill.</span>
repl-diskless-load disabled
 
 
<span class="token comment">## Disable TCP_NODELAY on the replica socket after SYNC?</span>
<span class="token comment">##</span>
<span class="token comment">## If you select &quot;yes&quot; Redis will use a smaller number of TCP packets and</span>
<span class="token comment">## less bandwidth to send data to replicas. But this can add a delay for</span>
<span class="token comment">## the data to appear on the replica side, up to 40 milliseconds with</span>
<span class="token comment">## Linux kernels using a default configuration.</span>
<span class="token comment">##</span>
<span class="token comment">## If you select &quot;no&quot; the delay for data to appear on the replica side will</span>
<span class="token comment">## be reduced but more bandwidth will be used for replication.</span>
<span class="token comment">##</span>
<span class="token comment">## By default we optimize for low latency, but in very high traffic conditions</span>
<span class="token comment">## or when the master and replicas are many hops away, turning this to &quot;yes&quot; may</span>
<span class="token comment">## be a good idea.</span>
repl-disable-tcp-nodelay no
 
 
<span class="token comment">## The replica priority is an integer number published by Redis in the INFO</span>
<span class="token comment">## output. It is used by Redis Sentinel in order to select a replica to promote</span>
<span class="token comment">## into a master if the master is no longer working correctly.</span>
<span class="token comment">##</span>
<span class="token comment">## A replica with a low priority number is considered better for promotion, so</span>
<span class="token comment">## for instance if there are three replicas with priority 10, 100, 25 Sentinel</span>
<span class="token comment">## will pick the one with priority 10, that is the lowest.</span>
<span class="token comment">##</span>
<span class="token comment">## However a special priority of 0 marks the replica as not able to perform the</span>
<span class="token comment">## role of master, so a replica with priority of 0 will never be selected by</span>
<span class="token comment">## Redis Sentinel for promotion.</span>
<span class="token comment">##</span>
<span class="token comment">## By default the priority is 100.</span>
replica-priority <span class="token number">100</span>
 
 
<span class="token comment">## ACL LOG</span>
<span class="token comment">##</span>
<span class="token comment">## The ACL Log tracks failed commands and authentication events associated</span>
<span class="token comment">## with ACLs. The ACL Log is useful to troubleshoot failed commands blocked </span>
<span class="token comment">## by ACLs. The ACL Log is stored in memory. You can reclaim memory with </span>
<span class="token comment">## ACL LOG RESET. Define the maximum entry length of the ACL Log below.</span>
acllog-max-len <span class="token number">128</span>
 
<span class="token comment">## Using an external ACL file</span>
<span class="token comment">##</span>
<span class="token comment">## Instead of configuring users here in this file, it is possible to use</span>
<span class="token comment">## a stand-alone file just listing users. The two methods cannot be mixed:</span>
<span class="token comment">## if you configure users here and at the same time you activate the exteranl</span>
<span class="token comment">## ACL file, the server will refuse to start.</span>
<span class="token comment">##</span>
<span class="token comment">## The format of the external ACL user file is exactly the same as the</span>
<span class="token comment">## format that is used inside redis.conf to describe users.</span>
<span class="token comment">##</span>
<span class="token comment">## aclfile /etc/redis/users.acl</span>
 
 
<span class="token comment">## Command renaming (DEPRECATED).</span>
<span class="token comment">##</span>
<span class="token comment">## ------------------------------------------------------------------------</span>
<span class="token comment">## WARNING: avoid using this option if possible. Instead use ACLs to remove</span>
<span class="token comment">## commands from the default user, and put them only in some admin user you</span>
<span class="token comment">## create for administrative purposes.</span>
<span class="token comment">## ------------------------------------------------------------------------</span>
<span class="token comment">##</span>
<span class="token comment">## It is possible to change the name of dangerous commands in a shared</span>
<span class="token comment">## environment. For instance the CONFIG command may be renamed into something</span>
<span class="token comment">## hard to guess so that it will still be available for internal-use tools</span>
<span class="token comment">## but not available for general clients.</span>
<span class="token comment">##</span>
<span class="token comment">## Example:</span>
<span class="token comment">##</span>
<span class="token comment">## rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52</span>
<span class="token comment">##</span>
<span class="token comment">## It is also possible to completely kill a command by renaming it into</span>
<span class="token comment">## an empty string:</span>
<span class="token comment">##</span>
<span class="token comment">## rename-command CONFIG &quot;&quot;</span>
<span class="token comment">##</span>
<span class="token comment">## Please note that changing the name of commands that are logged into the</span>
<span class="token comment">## AOF file or transmitted to replicas may cause problems.</span>
 
<span class="token comment">################################### CLIENTS ####################################</span>
 
<span class="token comment">## Set the max number of connected clients at the same time. By default</span>
<span class="token comment">## this limit is set to 10000 clients, however if the Redis server is not</span>
<span class="token comment">## able to configure the process file limit to allow for the specified limit</span>
<span class="token comment">## the max number of allowed clients is set to the current file limit</span>
<span class="token comment">## minus 32 (as Redis reserves a few file descriptors for internal uses).</span>
<span class="token comment">##</span>
<span class="token comment">## Once the limit is reached Redis will close all the new connections sending</span>
<span class="token comment">## an error &#39;max number of clients reached&#39;.</span>
<span class="token comment">##</span>
<span class="token comment">## IMPORTANT: When Redis Cluster is used, the max number of connections is also</span>
<span class="token comment">## shared with the cluster bus: every node in the cluster will use two</span>
<span class="token comment">## connections, one incoming and another outgoing. It is important to size the</span>
<span class="token comment">## limit accordingly in case of very large clusters.</span>
<span class="token comment">##</span>
<span class="token comment">## maxclients 10000</span>
 
<span class="token comment">############################## MEMORY MANAGEMENT ################################</span>
 
<span class="token comment">## Set a memory usage limit to the specified amount of bytes.</span>
<span class="token comment">## When the memory limit is reached Redis will try to remove keys</span>
<span class="token comment">## according to the eviction policy selected (see maxmemory-policy).</span>
<span class="token comment">##</span>
<span class="token comment">## If Redis can&#39;t remove keys according to the policy, or if the policy is</span>
<span class="token comment">## set to &#39;noeviction&#39;, Redis will start to reply with errors to commands</span>
<span class="token comment">## that would use more memory, like SET, LPUSH, and so on, and will continue</span>
<span class="token comment">## to reply to read-only commands like GET.</span>
<span class="token comment">##</span>
<span class="token comment">## This option is usually useful when using Redis as an LRU or LFU cache, or to</span>
<span class="token comment">## set a hard memory limit for an instance (using the &#39;noeviction&#39; policy).</span>
<span class="token comment">##</span>
<span class="token comment">## WARNING: If you have replicas attached to an instance with maxmemory on,</span>
<span class="token comment">## the size of the output buffers needed to feed the replicas are subtracted</span>
<span class="token comment">## from the used memory count, so that network problems / resyncs will</span>
<span class="token comment">## not trigger a loop where keys are evicted, and in turn the output</span>
<span class="token comment">## buffer of replicas is full with DELs of keys evicted triggering the deletion</span>
<span class="token comment">## of more keys, and so forth until the database is completely emptied.</span>
<span class="token comment">##</span>
<span class="token comment">## In short... if you have replicas attached it is suggested that you set a lower</span>
<span class="token comment">## limit for maxmemory so that there is some free RAM on the system for replica</span>
<span class="token comment">## output buffers (but this is not needed if the policy is &#39;noeviction&#39;).</span>
<span class="token comment">##</span>
<span class="token comment">## maxmemory &lt;bytes&gt;</span>
 
<span class="token comment">## MAXMEMORY POLICY: how Redis will select what to remove when maxmemory</span>
<span class="token comment">## is reached. You can select one from the following behaviors:</span>
<span class="token comment">##</span>
<span class="token comment">## volatile-lru -&gt; Evict using approximated LRU, only keys with an expire set.</span>
<span class="token comment">## allkeys-lru -&gt; Evict any key using approximated LRU.</span>
<span class="token comment">## volatile-lfu -&gt; Evict using approximated LFU, only keys with an expire set.</span>
<span class="token comment">## allkeys-lfu -&gt; Evict any key using approximated LFU.</span>
<span class="token comment">## volatile-random -&gt; Remove a random key having an expire set.</span>
<span class="token comment">## allkeys-random -&gt; Remove a random key, any key.</span>
<span class="token comment">## volatile-ttl -&gt; Remove the key with the nearest expire time (minor TTL)</span>
<span class="token comment">## noeviction -&gt; Don&#39;t evict anything, just return an error on write operations.</span>
<span class="token comment">##</span>
<span class="token comment">## LRU means Least Recently Used</span>
<span class="token comment">## LFU means Least Frequently Used</span>
<span class="token comment">##</span>
<span class="token comment">## Both LRU, LFU and volatile-ttl are implemented using approximated</span>
<span class="token comment">## randomized algorithms.</span>
<span class="token comment">##</span>
<span class="token comment">## Note: with any of the above policies, Redis will return an error on write</span>
<span class="token comment">##       operations, when there are no suitable keys for eviction.</span>
<span class="token comment">##</span>
<span class="token comment">##       At the date of writing these commands are: set setnx setex append</span>
<span class="token comment">##       incr decr rpush lpush rpushx lpushx linsert lset rpoplpush sadd</span>
<span class="token comment">##       sinter sinterstore sunion sunionstore sdiff sdiffstore zadd zincrby</span>
<span class="token comment">##       zunionstore zinterstore hset hsetnx hmset hincrby incrby decrby</span>
<span class="token comment">##       getset mset msetnx exec sort</span>
<span class="token comment">##</span>
<span class="token comment">## The default is:</span>
<span class="token comment">##</span>
<span class="token comment">## maxmemory-policy noeviction</span>
 
<span class="token comment">## LRU, LFU and minimal TTL algorithms are not precise algorithms but approximated</span>
<span class="token comment">## algorithms (in order to save memory), so you can tune it for speed or</span>
<span class="token comment">## accuracy. For default Redis will check five keys and pick the one that was</span>
<span class="token comment">## used less recently, you can change the sample size using the following</span>
<span class="token comment">## configuration directive.</span>
<span class="token comment">##</span>
<span class="token comment">## The default of 5 produces good enough results. 10 Approximates very closely</span>
<span class="token comment">## true LRU but costs more CPU. 3 is faster but not very accurate.</span>
<span class="token comment">##</span>
<span class="token comment">## maxmemory-samples 5</span>
 
<span class="token comment">## Starting from Redis 5, by default a replica will ignore its maxmemory setting</span>
<span class="token comment">## (unless it is promoted to master after a failover or manually). It means</span>
<span class="token comment">## that the eviction of keys will be just handled by the master, sending the</span>
<span class="token comment">## DEL commands to the replica as keys evict in the master side.</span>
<span class="token comment">##</span>
<span class="token comment">## This behavior ensures that masters and replicas stay consistent, and is usually</span>
<span class="token comment">## what you want, however if your replica is writable, or you want the replica</span>
<span class="token comment">## to have a different memory setting, and you are sure all the writes performed</span>
<span class="token comment">## to the replica are idempotent, then you may change this default (but be sure</span>
<span class="token comment">## to understand what you are doing).</span>
<span class="token comment">##</span>
<span class="token comment">## Note that since the replica by default does not evict, it may end using more</span>
<span class="token comment">## memory than the one set via maxmemory (there are certain buffers that may</span>
<span class="token comment">## be larger on the replica, or data structures may sometimes take more memory</span>
<span class="token comment">## and so forth). So make sure you monitor your replicas and make sure they</span>
<span class="token comment">## have enough memory to never hit a real out-of-memory condition before the</span>
<span class="token comment">## master hits the configured maxmemory setting.</span>
<span class="token comment">##</span>
<span class="token comment">## replica-ignore-maxmemory yes</span>
 
<span class="token comment">## Redis reclaims expired keys in two ways: upon access when those keys are</span>
<span class="token comment">## found to be expired, and also in background, in what is called the</span>
<span class="token comment">## &quot;active expire key&quot;. The key space is slowly and interactively scanned</span>
<span class="token comment">## looking for expired keys to reclaim, so that it is possible to free memory</span>
<span class="token comment">## of keys that are expired and will never be accessed again in a short time.</span>
<span class="token comment">##</span>
<span class="token comment">## The default effort of the expire cycle will try to avoid having more than</span>
<span class="token comment">## ten percent of expired keys still in memory, and will try to avoid consuming</span>
<span class="token comment">## more than 25% of total memory and to add latency to the system. However</span>
<span class="token comment">## it is possible to increase the expire &quot;effort&quot; that is normally set to</span>
<span class="token comment">## &quot;1&quot;, to a greater value, up to the value &quot;10&quot;. At its maximum value the</span>
<span class="token comment">## system will use more CPU, longer cycles (and technically may introduce</span>
<span class="token comment">## more latency), and will tollerate less already expired keys still present</span>
<span class="token comment">## in the system. It&#39;s a tradeoff betweeen memory, CPU and latecy.</span>
<span class="token comment">##</span>
<span class="token comment">## active-expire-effort 1</span>
 
<span class="token comment">############################# LAZY FREEING ####################################</span>
 
<span class="token comment">## Redis has two primitives to delete keys. One is called DEL and is a blocking</span>
<span class="token comment">## deletion of the object. It means that the server stops processing new commands</span>
<span class="token comment">## in order to reclaim all the memory associated with an object in a synchronous</span>
<span class="token comment">## way. If the key deleted is associated with a small object, the time needed</span>
<span class="token comment">## in order to execute the DEL command is very small and comparable to most other</span>
<span class="token comment">## O(1) or O(log_N) commands in Redis. However if the key is associated with an</span>
<span class="token comment">## aggregated value containing millions of elements, the server can block for</span>
<span class="token comment">## a long time (even seconds) in order to complete the operation.</span>
<span class="token comment">##</span>
<span class="token comment">## For the above reasons Redis also offers non blocking deletion primitives</span>
<span class="token comment">## such as UNLINK (non blocking DEL) and the ASYNC option of FLUSHALL and</span>
<span class="token comment">## FLUSHDB commands, in order to reclaim memory in background. Those commands</span>
<span class="token comment">## are executed in constant time. Another thread will incrementally free the</span>
<span class="token comment">## object in the background as fast as possible.</span>
<span class="token comment">##</span>
<span class="token comment">## DEL, UNLINK and ASYNC option of FLUSHALL and FLUSHDB are user-controlled.</span>
<span class="token comment">## It&#39;s up to the design of the application to understand when it is a good</span>
<span class="token comment">## idea to use one or the other. However the Redis server sometimes has to</span>
<span class="token comment">## delete keys or flush the whole database as a side effect of other operations.</span>
<span class="token comment">## Specifically Redis deletes objects independently of a user call in the</span>
<span class="token comment">## following scenarios:</span>
<span class="token comment">##</span>
<span class="token comment">## 1) On eviction, because of the maxmemory and maxmemory policy configurations,</span>
<span class="token comment">##    in order to make room for new data, without going over the specified</span>
<span class="token comment">##    memory limit.</span>
<span class="token comment">## 2) Because of expire: when a key with an associated time to live (see the</span>
<span class="token comment">##    EXPIRE command) must be deleted from memory.</span>
<span class="token comment">## 3) Because of a side effect of a command that stores data on a key that may</span>
<span class="token comment">##    already exist. For example the RENAME command may delete the old key</span>
<span class="token comment">##    content when it is replaced with another one. Similarly SUNIONSTORE</span>
<span class="token comment">##    or SORT with STORE option may delete existing keys. The SET command</span>
<span class="token comment">##    itself removes any old content of the specified key in order to replace</span>
<span class="token comment">##    it with the specified string.</span>
<span class="token comment">## 4) During replication, when a replica performs a full resynchronization with</span>
<span class="token comment">##    its master, the content of the whole database is removed in order to</span>
<span class="token comment">##    load the RDB file just transferred.</span>
<span class="token comment">##</span>
<span class="token comment">## In all the above cases the default is to delete objects in a blocking way,</span>
<span class="token comment">## like if DEL was called. However you can configure each case specifically</span>
<span class="token comment">## in order to instead release memory in a non-blocking way like if UNLINK</span>
<span class="token comment">## was called, using the following configuration directives.</span>
 
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
 
<span class="token comment">## It is also possible, for the case when to replace the user code DEL calls</span>
<span class="token comment">## with UNLINK calls is not easy, to modify the default behavior of the DEL</span>
<span class="token comment">## command to act exactly like UNLINK, using the following configuration</span>
<span class="token comment">## directive:</span>
 
lazyfree-lazy-user-del no
 
 
 
<span class="token comment">## The name of the append only file (default: &quot;appendonly.aof&quot;)</span>
 
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>
 
<span class="token comment">## The fsync() call tells the Operating System to actually write data on disk</span>
<span class="token comment">## instead of waiting for more data in the output buffer. Some OS will really flush</span>
<span class="token comment">## data on disk, some other OS will just try to do it ASAP.</span>
<span class="token comment">##</span>
<span class="token comment">## Redis supports three different modes:</span>
<span class="token comment">##</span>
<span class="token comment">## no: don&#39;t fsync, just let the OS flush the data when it wants. Faster.</span>
<span class="token comment">## always: fsync after every write to the append only log. Slow, Safest.</span>
<span class="token comment">## everysec: fsync only one time every second. Compromise.</span>
<span class="token comment">##</span>
<span class="token comment">## The default is &quot;everysec&quot;, as that&#39;s usually the right compromise between</span>
<span class="token comment">## speed and data safety. It&#39;s up to you to understand if you can relax this to</span>
<span class="token comment">## &quot;no&quot; that will let the operating system flush the output buffer when</span>
<span class="token comment">## it wants, for better performances (but if you can live with the idea of</span>
<span class="token comment">## some data loss consider the default persistence mode that&#39;s snapshotting),</span>
<span class="token comment">## or on the contrary, use &quot;always&quot; that&#39;s very slow but a bit safer than</span>
<span class="token comment">## everysec.</span>
<span class="token comment">##</span>
<span class="token comment">## More details please check the following article:</span>
<span class="token comment">## http://antirez.com/post/redis-persistence-demystified.html</span>
<span class="token comment">##</span>
<span class="token comment">## If unsure, use &quot;everysec&quot;.</span>
 
<span class="token comment">## appendfsync always</span>
appendfsync everysec
<span class="token comment">## appendfsync no</span>
 
<span class="token comment">## When the AOF fsync policy is set to always or everysec, and a background</span>
<span class="token comment">## saving process (a background save or AOF log background rewriting) is</span>
<span class="token comment">## performing a lot of I/O against the disk, in some Linux configurations</span>
<span class="token comment">## Redis may block too long on the fsync() call. Note that there is no fix for</span>
<span class="token comment">## this currently, as even performing fsync in a different thread will block</span>
<span class="token comment">## our synchronous write(2) call.</span>
<span class="token comment">##</span>
<span class="token comment">## In order to mitigate this problem it&#39;s possible to use the following option</span>
<span class="token comment">## that will prevent fsync() from being called in the main process while a</span>
<span class="token comment">## BGSAVE or BGREWRITEAOF is in progress.</span>
<span class="token comment">##</span>
<span class="token comment">## This means that while another child is saving, the durability of Redis is</span>
<span class="token comment">## the same as &quot;appendfsync none&quot;. In practical terms, this means that it is</span>
<span class="token comment">## possible to lose up to 30 seconds of log in the worst scenario (with the</span>
<span class="token comment">## default Linux settings).</span>
<span class="token comment">##</span>
<span class="token comment">## If you have latency problems turn this to &quot;yes&quot;. Otherwise leave it as</span>
<span class="token comment">## &quot;no&quot; that is the safest pick from the point of view of durability.</span>
 
no-appendfsync-on-rewrite no
 
<span class="token comment">## Automatic rewrite of the append only file.</span>
<span class="token comment">## Redis is able to automatically rewrite the log file implicitly calling</span>
<span class="token comment">## BGREWRITEAOF when the AOF log size grows by the specified percentage.</span>
<span class="token comment">##</span>
<span class="token comment">## This is how it works: Redis remembers the size of the AOF file after the</span>
<span class="token comment">## latest rewrite (if no rewrite has happened since the restart, the size of</span>
<span class="token comment">## the AOF at startup is used).</span>
<span class="token comment">##</span>
<span class="token comment">## This base size is compared to the current size. If the current size is</span>
<span class="token comment">## bigger than the specified percentage, the rewrite is triggered. Also</span>
<span class="token comment">## you need to specify a minimal size for the AOF file to be rewritten, this</span>
<span class="token comment">## is useful to avoid rewriting the AOF file even if the percentage increase</span>
<span class="token comment">## is reached but it is still pretty small.</span>
<span class="token comment">##</span>
<span class="token comment">## Specify a percentage of zero in order to disable the automatic AOF</span>
<span class="token comment">## rewrite feature.</span>
 
auto-aof-rewrite-percentage <span class="token number">100</span>
auto-aof-rewrite-min-size 64mb
 
<span class="token comment">## An AOF file may be found to be truncated at the end during the Redis</span>
<span class="token comment">## startup process, when the AOF data gets loaded back into memory.</span>
<span class="token comment">## This may happen when the system where Redis is running</span>
<span class="token comment">## crashes, especially when an ext4 filesystem is mounted without the</span>
<span class="token comment">## data=ordered option (however this can&#39;t happen when Redis itself</span>
<span class="token comment">## crashes or aborts but the operating system still works correctly).</span>
<span class="token comment">##</span>
<span class="token comment">## Redis can either exit with an error when this happens, or load as much</span>
<span class="token comment">## data as possible (the default now) and start if the AOF file is found</span>
<span class="token comment">## to be truncated at the end. The following option controls this behavior.</span>
<span class="token comment">##</span>
<span class="token comment">## If aof-load-truncated is set to yes, a truncated AOF file is loaded and</span>
<span class="token comment">## the Redis server starts emitting a log to inform the user of the event.</span>
<span class="token comment">## Otherwise if the option is set to no, the server aborts with an error</span>
<span class="token comment">## and refuses to start. When the option is set to no, the user requires</span>
<span class="token comment">## to fix the AOF file using the &quot;redis-check-aof&quot; utility before to restart</span>
<span class="token comment">## the server.</span>
<span class="token comment">##</span>
<span class="token comment">## Note that if the AOF file will be found to be corrupted in the middle</span>
<span class="token comment">## the server will still exit with an error. This option only applies when</span>
<span class="token comment">## Redis will try to read more data from the AOF file but not enough bytes</span>
<span class="token comment">## will be found.</span>
aof-load-truncated <span class="token function">yes</span>
 
<span class="token comment">## When rewriting the AOF file, Redis is able to use an RDB preamble in the</span>
<span class="token comment">## AOF file for faster rewrites and recoveries. When this option is turned</span>
<span class="token comment">## on the rewritten AOF file is composed of two different stanzas:</span>
<span class="token comment">##</span>
<span class="token comment">##   [RDB file][AOF tail]</span>
<span class="token comment">##</span>
<span class="token comment">## When loading Redis recognizes that the AOF file starts with the &quot;REDIS&quot;</span>
<span class="token comment">## string and loads the prefixed RDB file, and continues loading the AOF</span>
<span class="token comment">## tail.</span>
aof-use-rdb-preamble <span class="token function">yes</span>
 
<span class="token comment">################################ LUA SCRIPTING  ###############################</span>
 
<span class="token comment">## Max execution time of a Lua script in milliseconds.</span>
<span class="token comment">##</span>
<span class="token comment">## If the maximum execution time is reached Redis will log that a script is</span>
<span class="token comment">## still in execution after the maximum allowed time and will start to</span>
<span class="token comment">## reply to queries with an error.</span>
<span class="token comment">##</span>
<span class="token comment">## When a long running script exceeds the maximum execution time only the</span>
<span class="token comment">## SCRIPT KILL and SHUTDOWN NOSAVE commands are available. The first can be</span>
<span class="token comment">## used to stop a script that did not yet called write commands. The second</span>
<span class="token comment">## is the only way to shut down the server in the case a write command was</span>
<span class="token comment">## already issued by the script but the user doesn&#39;t want to wait for the natural</span>
<span class="token comment">## termination of the script.</span>
<span class="token comment">##</span>
<span class="token comment">## Set it to 0 or a negative value for unlimited execution without warnings.</span>
lua-time-limit <span class="token number">5000</span>
 
<span class="token comment">################################ REDIS CLUSTER  ###############################</span>
 
<span class="token comment">## Normal Redis instances can&#39;t be part of a Redis Cluster; only nodes that are</span>
<span class="token comment">## started as cluster nodes can. In order to start a Redis instance as a</span>
<span class="token comment">## cluster node enable the cluster support uncommenting the following:</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-enabled yes</span>
 
<span class="token comment">## Every cluster node has a cluster configuration file. This file is not</span>
<span class="token comment">## intended to be edited by hand. It is created and updated by Redis nodes.</span>
<span class="token comment">## Every Redis Cluster node requires a different cluster configuration file.</span>
<span class="token comment">## Make sure that instances running in the same system do not have</span>
<span class="token comment">## overlapping cluster configuration file names.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-config-file nodes-6379.conf</span>
 
<span class="token comment">## Cluster node timeout is the amount of milliseconds a node must be unreachable</span>
<span class="token comment">## for it to be considered in failure state.</span>
<span class="token comment">## Most other internal time limits are multiple of the node timeout.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-node-timeout 15000</span>
 
<span class="token comment">## A replica of a failing master will avoid to start a failover if its data</span>
<span class="token comment">## looks too old.</span>
<span class="token comment">##</span>
<span class="token comment">## There is no simple way for a replica to actually have an exact measure of</span>
<span class="token comment">## its &quot;data age&quot;, so the following two checks are performed:</span>
<span class="token comment">##</span>
<span class="token comment">## 1) If there are multiple replicas able to failover, they exchange messages</span>
<span class="token comment">##    in order to try to give an advantage to the replica with the best</span>
<span class="token comment">##    replication offset (more data from the master processed).</span>
<span class="token comment">##    Replicas will try to get their rank by offset, and apply to the start</span>
<span class="token comment">##    of the failover a delay proportional to their rank.</span>
<span class="token comment">##</span>
<span class="token comment">## 2) Every single replica computes the time of the last interaction with</span>
<span class="token comment">##    its master. This can be the last ping or command received (if the master</span>
<span class="token comment">##    is still in the &quot;connected&quot; state), or the time that elapsed since the</span>
<span class="token comment">##    disconnection with the master (if the replication link is currently down).</span>
<span class="token comment">##    If the last interaction is too old, the replica will not try to failover</span>
<span class="token comment">##    at all.</span>
<span class="token comment">##</span>
<span class="token comment">## The point &quot;2&quot; can be tuned by user. Specifically a replica will not perform</span>
<span class="token comment">## the failover if, since the last interaction with the master, the time</span>
<span class="token comment">## elapsed is greater than:</span>
<span class="token comment">##</span>
<span class="token comment">##   (node-timeout * replica-validity-factor) + repl-ping-replica-period</span>
<span class="token comment">##</span>
<span class="token comment">## So for example if node-timeout is 30 seconds, and the replica-validity-factor</span>
<span class="token comment">## is 10, and assuming a default repl-ping-replica-period of 10 seconds, the</span>
<span class="token comment">## replica will not try to failover if it was not able to talk with the master</span>
<span class="token comment">## for longer than 310 seconds.</span>
<span class="token comment">##</span>
<span class="token comment">## A large replica-validity-factor may allow replicas with too old data to failover</span>
<span class="token comment">## a master, while a too small value may prevent the cluster from being able to</span>
<span class="token comment">## elect a replica at all.</span>
<span class="token comment">##</span>
<span class="token comment">## For maximum availability, it is possible to set the replica-validity-factor</span>
<span class="token comment">## to a value of 0, which means, that replicas will always try to failover the</span>
<span class="token comment">## master regardless of the last time they interacted with the master.</span>
<span class="token comment">## (However they&#39;ll always try to apply a delay proportional to their</span>
<span class="token comment">## offset rank).</span>
<span class="token comment">##</span>
<span class="token comment">## Zero is the only value able to guarantee that when all the partitions heal</span>
<span class="token comment">## the cluster will always be able to continue.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-replica-validity-factor 10</span>
 
<span class="token comment">## Cluster replicas are able to migrate to orphaned masters, that are masters</span>
<span class="token comment">## that are left without working replicas. This improves the cluster ability</span>
<span class="token comment">## to resist to failures as otherwise an orphaned master can&#39;t be failed over</span>
<span class="token comment">## in case of failure if it has no working replicas.</span>
<span class="token comment">##</span>
<span class="token comment">## Replicas migrate to orphaned masters only if there are still at least a</span>
<span class="token comment">## given number of other working replicas for their old master. This number</span>
<span class="token comment">## is the &quot;migration barrier&quot;. A migration barrier of 1 means that a replica</span>
<span class="token comment">## will migrate only if there is at least 1 other working replica for its master</span>
<span class="token comment">## and so forth. It usually reflects the number of replicas you want for every</span>
<span class="token comment">## master in your cluster.</span>
<span class="token comment">##</span>
<span class="token comment">## Default is 1 (replicas migrate only if their masters remain with at least</span>
<span class="token comment">## one replica). To disable migration just set it to a very large value.</span>
<span class="token comment">## A value of 0 can be set but is useful only for debugging and dangerous</span>
<span class="token comment">## in production.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-migration-barrier 1</span>
 
<span class="token comment">## By default Redis Cluster nodes stop accepting queries if they detect there</span>
<span class="token comment">## is at least an hash slot uncovered (no available node is serving it).</span>
<span class="token comment">## This way if the cluster is partially down (for example a range of hash slots</span>
<span class="token comment">## are no longer covered) all the cluster becomes, eventually, unavailable.</span>
<span class="token comment">## It automatically returns available as soon as all the slots are covered again.</span>
<span class="token comment">##</span>
<span class="token comment">## However sometimes you want the subset of the cluster which is working,</span>
<span class="token comment">## to continue to accept queries for the part of the key space that is still</span>
<span class="token comment">## covered. In order to do so, just set the cluster-require-full-coverage</span>
<span class="token comment">## option to no.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-require-full-coverage yes</span>
 
<span class="token comment">## This option, when set to yes, prevents replicas from trying to failover its</span>
<span class="token comment">## master during master failures. However the master can still perform a</span>
<span class="token comment">## manual failover, if forced to do so.</span>
<span class="token comment">##</span>
<span class="token comment">## This is useful in different scenarios, especially in the case of multiple</span>
<span class="token comment">## data center operations, where we want one side to never be promoted if not</span>
<span class="token comment">## in the case of a total DC failure.</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-replica-no-failover no</span>
 
<span class="token comment">## This option, when set to yes, allows nodes to serve read traffic while the</span>
<span class="token comment">## the cluster is in a down state, as long as it believes it owns the slots. </span>
<span class="token comment">##</span>
<span class="token comment">## This is useful for two cases.  The first case is for when an application </span>
<span class="token comment">## doesn&#39;t require consistency of data during node failures or network partitions.</span>
<span class="token comment">## One example of this is a cache, where as long as the node has the data it</span>
<span class="token comment">## should be able to serve it. </span>
<span class="token comment">##</span>
<span class="token comment">## The second use case is for configurations that don&#39;t meet the recommended  </span>
<span class="token comment">## three shards but want to enable cluster mode and scale later. A </span>
<span class="token comment">## master outage in a 1 or 2 shard configuration causes a read/write outage to the</span>
<span class="token comment">## entire cluster without this option set, with it set there is only a write outage.</span>
<span class="token comment">## Without a quorum of masters, slot ownership will not change automatically. </span>
<span class="token comment">##</span>
<span class="token comment">## cluster-allow-reads-when-down no</span>
 
<span class="token comment">## In order to setup your cluster make sure to read the documentation</span>
<span class="token comment">## available at http://redis.io web site.</span>
 
<span class="token comment">########################## CLUSTER DOCKER/NAT support  ########################</span>
 
<span class="token comment">## In certain deployments, Redis Cluster nodes address discovery fails, because</span>
<span class="token comment">## addresses are NAT-ted or because ports are forwarded (the typical case is</span>
<span class="token comment">## Docker and other containers).</span>
<span class="token comment">##</span>
<span class="token comment">## In order to make Redis Cluster working in such environments, a static</span>
<span class="token comment">## configuration where each node knows its public address is needed. The</span>
<span class="token comment">## following two options are used for this scope, and are:</span>
<span class="token comment">##</span>
<span class="token comment">## * cluster-announce-ip</span>
<span class="token comment">## * cluster-announce-port</span>
<span class="token comment">## * cluster-announce-bus-port</span>
<span class="token comment">##</span>
<span class="token comment">## Each instruct the node about its address, client port, and cluster message</span>
<span class="token comment">## bus port. The information is then published in the header of the bus packets</span>
<span class="token comment">## so that other nodes will be able to correctly map the address of the node</span>
<span class="token comment">## publishing the information.</span>
<span class="token comment">##</span>
<span class="token comment">## If the above options are not used, the normal Redis Cluster auto-detection</span>
<span class="token comment">## will be used instead.</span>
<span class="token comment">##</span>
<span class="token comment">## Note that when remapped, the bus port may not be at the fixed offset of</span>
<span class="token comment">## clients port + 10000, so you can specify any port and bus-port depending</span>
<span class="token comment">## on how they get remapped. If the bus-port is not set, a fixed offset of</span>
<span class="token comment">## 10000 will be used as usually.</span>
<span class="token comment">##</span>
<span class="token comment">## Example:</span>
<span class="token comment">##</span>
<span class="token comment">## cluster-announce-ip 10.1.1.5</span>
<span class="token comment">## cluster-announce-port 6379</span>
<span class="token comment">## cluster-announce-bus-port 6380</span>
 
<span class="token comment">################################## SLOW LOG ###################################</span>
 
<span class="token comment">## The Redis Slow Log is a system to log queries that exceeded a specified</span>
<span class="token comment">## execution time. The execution time does not include the I/O operations</span>
<span class="token comment">## like talking with the client, sending the reply and so forth,</span>
<span class="token comment">## but just the time needed to actually execute the command (this is the only</span>
<span class="token comment">## stage of command execution where the thread is blocked and can not serve</span>
<span class="token comment">## other requests in the meantime).</span>
<span class="token comment">##</span>
<span class="token comment">## You can configure the slow log with two parameters: one tells Redis</span>
<span class="token comment">## what is the execution time, in microseconds, to exceed in order for the</span>
<span class="token comment">## command to get logged, and the other parameter is the length of the</span>
<span class="token comment">## slow log. When a new command is logged the oldest one is removed from the</span>
<span class="token comment">## queue of logged commands.</span>
 
<span class="token comment">## The following time is expressed in microseconds, so 1000000 is equivalent</span>
<span class="token comment">## to one second. Note that a negative number disables the slow log, while</span>
<span class="token comment">## a value of zero forces the logging of every command.</span>
slowlog-log-slower-than <span class="token number">10000</span>
 
<span class="token comment">## There is no limit to this length. Just be aware that it will consume memory.</span>
<span class="token comment">## You can reclaim memory used by the slow log with SLOWLOG RESET.</span>
slowlog-max-len <span class="token number">128</span>
 
 
<span class="token comment">## By default latency monitoring is disabled since it is mostly not needed</span>
<span class="token comment">## if you don&#39;t have latency issues, and collecting data has a performance</span>
<span class="token comment">## impact, that while very small, can be measured under big load. Latency</span>
<span class="token comment">## monitoring can easily be enabled at runtime using the command</span>
<span class="token comment">## &quot;CONFIG SET latency-monitor-threshold &lt;milliseconds&gt;&quot; if needed.</span>
latency-monitor-threshold <span class="token number">0</span>
 
<span class="token comment">##  By default all notifications are disabled because most users don&#39;t need</span>
<span class="token comment">##  this feature and the feature has some overhead. Note that if you don&#39;t</span>
<span class="token comment">##  specify at least one of K or E, no events will be delivered.</span>
notify-keyspace-events <span class="token string">&quot;&quot;</span>
 
 
 
<span class="token comment">############################### ADVANCED CONFIG ###############################</span>
 
<span class="token comment">## Hashes are encoded using a memory efficient data structure when they have a</span>
<span class="token comment">## small number of entries, and the biggest entry does not exceed a given</span>
<span class="token comment">## threshold. These thresholds can be configured using the following directives.</span>
hash-max-ziplist-entries <span class="token number">512</span>
hash-max-ziplist-value <span class="token number">64</span>
 
<span class="token comment">## Lists are also encoded in a special way to save a lot of space.</span>
<span class="token comment">## The number of entries allowed per internal list node can be specified</span>
<span class="token comment">## as a fixed maximum size or a maximum number of elements.</span>
<span class="token comment">## For a fixed maximum size, use -5 through -1, meaning:</span>
<span class="token comment">## -5: max size: 64 Kb  &lt;-- not recommended for normal workloads</span>
<span class="token comment">## -4: max size: 32 Kb  &lt;-- not recommended</span>
<span class="token comment">## -3: max size: 16 Kb  &lt;-- probably not recommended</span>
<span class="token comment">## -2: max size: 8 Kb   &lt;-- good</span>
<span class="token comment">## -1: max size: 4 Kb   &lt;-- good</span>
<span class="token comment">## Positive numbers mean store up to _exactly_ that number of elements</span>
<span class="token comment">## per list node.</span>
<span class="token comment">## The highest performing option is usually -2 (8 Kb size) or -1 (4 Kb size),</span>
<span class="token comment">## but if your use case is unique, adjust the settings as necessary.</span>
list-max-ziplist-size <span class="token parameter variable">-2</span>
 
<span class="token comment">## Lists may also be compressed.</span>
<span class="token comment">## Compress depth is the number of quicklist ziplist nodes from *each* side of</span>
<span class="token comment">## the list to *exclude* from compression.  The head and tail of the list</span>
<span class="token comment">## are always uncompressed for fast push/pop operations.  Settings are:</span>
<span class="token comment">## 0: disable all list compression</span>
<span class="token comment">## 1: depth 1 means &quot;don&#39;t start compressing until after 1 node into the list,</span>
<span class="token comment">##    going from either the head or tail&quot;</span>
<span class="token comment">##    So: [head]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[tail]</span>
<span class="token comment">##    [head], [tail] will always be uncompressed; inner nodes will compress.</span>
<span class="token comment">## 2: [head]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[tail]</span>
<span class="token comment">##    2 here means: don&#39;t compress head or head-&gt;next or tail-&gt;prev or tail,</span>
<span class="token comment">##    but compress all nodes between them.</span>
<span class="token comment">## 3: [head]-&gt;[next]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[prev]-&gt;[tail]</span>
<span class="token comment">## etc.</span>
list-compress-depth <span class="token number">0</span>
 
<span class="token comment">## Sets have a special encoding in just one case: when a set is composed</span>
<span class="token comment">## of just strings that happen to be integers in radix 10 in the range</span>
<span class="token comment">## of 64 bit signed integers.</span>
<span class="token comment">## The following configuration setting sets the limit in the size of the</span>
<span class="token comment">## set in order to use this special memory saving encoding.</span>
set-max-intset-entries <span class="token number">512</span>
 
<span class="token comment">## Similarly to hashes and lists, sorted sets are also specially encoded in</span>
<span class="token comment">## order to save a lot of space. This encoding is only used when the length and</span>
<span class="token comment">## elements of a sorted set are below the following limits:</span>
zset-max-ziplist-entries <span class="token number">128</span>
zset-max-ziplist-value <span class="token number">64</span>
 
<span class="token comment">## The suggested value is ~ 3000 in order to have the benefits of</span>
<span class="token comment">## the space efficient encoding without slowing down too much PFADD,</span>
<span class="token comment">## which is O(N) with the sparse encoding. The value can be raised to</span>
<span class="token comment">## ~ 10000 when CPU is not a concern, but space is, and the data set is</span>
<span class="token comment">## composed of many HyperLogLogs with cardinality in the 0 - 15000 range.</span>
hll-sparse-max-bytes <span class="token number">3000</span>
 
<span class="token comment">## Streams macro node max size / items. The stream data structure is a radix</span>
<span class="token comment">## tree of big nodes that encode multiple items inside. Using this configuration</span>
<span class="token comment">## it is possible to configure how big a single node can be in bytes, and the</span>
<span class="token comment">## maximum number of items it may contain before switching to a new node when</span>
<span class="token comment">## appending new stream entries. If any of the following settings are set to</span>
<span class="token comment">## zero, the limit is ignored, so for instance it is possible to set just a</span>
<span class="token comment">## max entires limit by setting max-bytes to 0 and max-entries to the desired</span>
<span class="token comment">## value.</span>
stream-node-max-bytes <span class="token number">4096</span>
stream-node-max-entries <span class="token number">100</span>
 
 
<span class="token comment">## use &quot;activerehashing yes&quot; if you don&#39;t have such hard requirements but</span>
<span class="token comment">## want to free memory asap when possible.</span>
activerehashing <span class="token function">yes</span>
 
 
<span class="token comment">## Instead there is a default limit for pubsub and replica clients, since</span>
<span class="token comment">## subscribers and replicas receive data in a push fashion.</span>
<span class="token comment">##</span>
<span class="token comment">## Both the hard or the soft limit can be disabled by setting them to zero.</span>
client-output-buffer-limit normal <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
client-output-buffer-limit replica 256mb 64mb <span class="token number">60</span>
client-output-buffer-limit pubsub 32mb 8mb <span class="token number">60</span>
 
<span class="token comment">## Client query buffers accumulate new commands. They are limited to a fixed</span>
<span class="token comment">## amount by default in order to avoid that a protocol desynchronization (for</span>
<span class="token comment">## instance due to a bug in the client) will lead to unbound memory usage in</span>
<span class="token comment">## the query buffer. However you can configure it here if you have very special</span>
<span class="token comment">## needs, such us huge multi/exec requests or alike.</span>
<span class="token comment">##</span>
<span class="token comment">## client-query-buffer-limit 1gb</span>
 
<span class="token comment">## In the Redis protocol, bulk requests, that are, elements representing single</span>
<span class="token comment">## strings, are normally limited ot 512 mb. However you can change this limit</span>
<span class="token comment">## here.</span>
<span class="token comment">##</span>
<span class="token comment">## proto-max-bulk-len 512mb</span>
 
 
<span class="token comment">## The range is between 1 and 500, however a value over 100 is usually not</span>
<span class="token comment">## a good idea. Most users should use the default of 10 and raise this up to</span>
<span class="token comment">## 100 only in environments where very low latency is required.</span>
hz <span class="token number">10</span>
 
 
<span class="token comment">## When dynamic HZ is enabled, the actual configured HZ will be used</span>
<span class="token comment">## as a baseline, but multiples of the configured HZ value will be actually</span>
<span class="token comment">## used as needed once more clients are connected. In this way an idle</span>
<span class="token comment">## instance will use very little CPU time while a busy instance will be</span>
<span class="token comment">## more responsive.</span>
dynamic-hz <span class="token function">yes</span>
 
<span class="token comment">## When a child rewrites the AOF file, if the following option is enabled</span>
<span class="token comment">## the file will be fsync-ed every 32 MB of data generated. This is useful</span>
<span class="token comment">## in order to commit the file to the disk more incrementally and avoid</span>
<span class="token comment">## big latency spikes.</span>
aof-rewrite-incremental-fsync <span class="token function">yes</span>
 
<span class="token comment">## When redis saves RDB file, if the following option is enabled</span>
<span class="token comment">## the file will be fsync-ed every 32 MB of data generated. This is useful</span>
<span class="token comment">## in order to commit the file to the disk more incrementally and avoid</span>
<span class="token comment">## big latency spikes.</span>
rdb-save-incremental-fsync <span class="token function">yes</span>
 
 
 
<span class="token comment">## Jemalloc background thread for purging will be enabled by default</span>
jemalloc-bg-thread <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-2-启动实例" tabindex="-1"><a class="header-anchor" href="#_6-3-2-启动实例" aria-hidden="true">#</a> 6.3.2 启动实例</h4><p>因为前面设置的有redis认证密码，所以输入auth 密码即可完成认证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos ~]## docker run -p 6379:6379 --name redis2 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf  -v /app/data:/data -d redis:6.0.8 redis-server /etc/redis/redis.conf --appendonly yes
561618b1a13521e7119536ed3cdaf3e4344c2962d1c968acc01a60cc802af7d0

[root@VM-16-8-centos ~]## docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
561618b1a135   redis:6.0.8   &quot;docker-entrypoint.s…&quot;   45 minutes ago   Up 45 minutes   0.0.0.0:6379-&gt;6379/tcp   redis2

[root@VM-16-8-centos ~]## docker exec -it 561618b1a135 bash
root@561618b1a135:/data## redis-cli

127.0.0.1:6379&gt; auth redis123
OK

127.0.0.1:6379&gt; set k1 v1
OK

127.0.0.1:6379&gt; get k1
&quot;v1&quot;

127.0.0.1:6379&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-nginx" tabindex="-1"><a class="header-anchor" href="#_6-4-nginx" aria-hidden="true">#</a> 6.4 Nginx</h3><ul><li>先运行一次容器（为了拷贝配置文件）：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/logs:/var/log/nginx  <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将容器内的配置文件拷贝到指定目录：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx /mydata/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改文件名称：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /mydata/nginx/<span class="token operator">&amp;&amp;</span><span class="token function">mv</span> nginx conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>终止并删除容器：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop nginx
<span class="token function">docker</span> <span class="token function">rm</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用如下命令启动Nginx服务：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/logs:/var/log/nginx  <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:1.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、安装高级篇" tabindex="-1"><a class="header-anchor" href="#七、安装高级篇" aria-hidden="true">#</a> 七、安装高级篇</h2><h3 id="_6-1-mysq主从" tabindex="-1"><a class="header-anchor" href="#_6-1-mysq主从" aria-hidden="true">#</a> 6.1 Mysq主从</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.新建主服务器容器实例3307
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token parameter variable">--name</span> mysql-master <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-master/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7



<span class="token number">2</span>.进入/mydata/mysql-master/conf目录下新建my.cnf
<span class="token punctuation">[</span>root@VM-16-8-centos conf<span class="token punctuation">]</span><span class="token comment">## pwd</span>
/mydata/mysql-master/conf
<span class="token punctuation">[</span>root@VM-16-8-centos conf<span class="token punctuation">]</span><span class="token comment">## cat my.cnf </span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">### 设置server_id，同一局域网中需要唯一</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">101</span> 
<span class="token comment">### 指定不需要同步的数据库名称</span>
binlog-ignore-db<span class="token operator">=</span>mysql  
<span class="token comment">### 开启二进制日志功能</span>
log-bin<span class="token operator">=</span>mall-mysql-bin  
<span class="token comment">### 设置二进制日志使用内存大小（事务）</span>
<span class="token assign-left variable">binlog_cache_size</span><span class="token operator">=</span>1M  
<span class="token comment">### 设置使用的二进制日志格式（mixed,statement,row）</span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed  
<span class="token comment">### 二进制日志过期清理时间。默认值为0，表示不自动清理。</span>
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">7</span>  
<span class="token comment">### 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。</span>
<span class="token comment">### 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致</span>
<span class="token assign-left variable">slave_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span>


<span class="token number">3</span>.修改完配置后重启master实例
<span class="token punctuation">[</span>root@VM-16-8-centos conf<span class="token punctuation">]</span><span class="token comment">## docker restart mysql-master</span>
mysql-master
<span class="token punctuation">[</span>root@VM-16-8-centos conf<span class="token punctuation">]</span><span class="token comment">## docker ps</span>
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                               NAMES
789a4d55e367   mysql:5.7     <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">6</span> minutes ago   Up <span class="token number">6</span> seconds   <span class="token number">33060</span>/tcp, <span class="token number">0.0</span>.0.0:3307-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp   mysql-master
561618b1a135   redis:6.0.8   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">9</span> hours ago     Up <span class="token number">9</span> hours     <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              redis2

<span class="token number">4</span>.进入mysql-master容器
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>

bug记录
mysql<span class="token operator">&gt;</span> CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
ERROR <span class="token number">1396</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Operation CREATE <span class="token environment constant">USER</span> failed <span class="token keyword">for</span> <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span>
查看后数据库不存在，回忆了一下操作，手动删除过slave这用户，可能是这个操作引起的，现在执行命令重新删除一下
drop user <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token number">5</span>.master容器实例内创建数据同步用户
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token number">6</span>.新建从服务器容器实例3308
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3308</span>:3306 <span class="token parameter variable">--name</span> mysql-slave <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/mysql-slave/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7

<span class="token number">7</span>.进入/mydata/mysql-slave/conf目录下新建my.cnf
<span class="token builtin class-name">cd</span> /mydata/mysql-slave/conf
<span class="token function">vim</span> my.cnf
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">### 设置server_id，同一局域网中需要唯一</span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">102</span>
<span class="token comment">### 指定不需要同步的数据库名称</span>
binlog-ignore-db<span class="token operator">=</span>mysql  
<span class="token comment">### 开启二进制日志功能，以备Slave作为其它数据库实例的Master时使用</span>
log-bin<span class="token operator">=</span>mall-mysql-slave1-bin  
<span class="token comment">### 设置二进制日志使用内存大小（事务）</span>
<span class="token assign-left variable">binlog_cache_size</span><span class="token operator">=</span>1M  
<span class="token comment">### 设置使用的二进制日志格式（mixed,statement,row）</span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed  
<span class="token comment">### 二进制日志过期清理时间。默认值为0，表示不自动清理。</span>
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">7</span>  
<span class="token comment">### 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。</span>
<span class="token comment">### 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致</span>
<span class="token assign-left variable">slave_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span>  
<span class="token comment">### relay_log配置中继日志</span>
<span class="token assign-left variable">relay_log</span><span class="token operator">=</span>mall-mysql-relay-bin  
<span class="token comment">### log_slave_updates表示slave将复制事件写进自己的二进制日志</span>
<span class="token assign-left variable">log_slave_updates</span><span class="token operator">=</span><span class="token number">1</span>  
<span class="token comment">### slave设置为只读（具有super权限的用户除外）</span>
<span class="token assign-left variable">read_only</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token number">8</span>.修改完配置后重启slave实例
<span class="token function">docker</span> restart mysql-slave

<span class="token number">9</span>.在主数据库中查看主从同步状态
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
show master status<span class="token punctuation">;</span>

<span class="token number">10</span>.进入mysql-slave容器
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-slave /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>

<span class="token number">11</span>.在从数据库中配置主从复制
change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;124.221.228.148&#39;</span>, <span class="token assign-left variable">master_user</span><span class="token operator">=</span><span class="token string">&#39;slave&#39;</span>, <span class="token assign-left variable">master_password</span><span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>, <span class="token assign-left variable">master_port</span><span class="token operator">=</span><span class="token number">3307</span>, <span class="token assign-left variable">master_log_file</span><span class="token operator">=</span><span class="token string">&#39;mall-mysql-bin.000001&#39;</span>, <span class="token assign-left variable">master_log_pos</span><span class="token operator">=</span><span class="token number">617</span>, <span class="token assign-left variable">master_connect_retry</span><span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>

<span class="token number">12</span>.在从数据库中查看主从同步状态
show slave status <span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220404212759583.png" alt="image-20220404212759583" tabindex="0" loading="lazy"><figcaption>image-20220404212759583</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos myfile]## docker run -it add55e71a136 bash
[root@cf6ad357f282 local]## pwd
/usr/local
[root@cf6ad357f282 local]## ifconfig 
eth0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt;  mtu 1500
        inet 172.17.0.2  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:ac:11:00:02  txqueuelen 0  (Ethernet)
        RX packets 8  bytes 656 (656.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73&lt;UP,LOOPBACK,RUNNING&gt;  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@cf6ad357f282 local]## java -version
java version &quot;1.8.0_77&quot;
Java(TM) SE Runtime Environment (build 1.8.0_77-b03)
Java HotSpot(TM) 64-Bit Server VM (build 25.77-b03, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、dockerfile" tabindex="-1"><a class="header-anchor" href="#八、dockerfile" aria-hidden="true">#</a> 八、DockerFile</h2><h3 id="_8-1-是什么" tabindex="-1"><a class="header-anchor" href="#_8-1-是什么" aria-hidden="true">#</a> 8.1 是什么？</h3><p><strong>Dockerfile是用来构建Docker镜像的文本文件，是由<mark>一条条构建镜像所需的指令和参数构成的脚本</mark>。</strong></p>`,71),f={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},y=e(`<h3 id="_8-2-dockerfile构建过程解析" tabindex="-1"><a class="header-anchor" href="#_8-2-dockerfile构建过程解析" aria-hidden="true">#</a> 8.2 DockerFile构建过程解析</h3><p>构建三步骤</p><ol><li>编写Dockerfile文件</li><li>docker build命令构建镜像</li><li>docker run依镜像运行容器实例</li></ol><h4 id="_8-2-1-dockerfile内容基础知识" tabindex="-1"><a class="header-anchor" href="#_8-2-1-dockerfile内容基础知识" aria-hidden="true">#</a> 8.2.1 Dockerfile内容基础知识</h4><p>1：每条保留字指令都<strong>必须为大写字母</strong>且后面要跟随至少一个参数</p><p>2：指令按照从上到下，顺序执行</p><p>3：##表示注释</p><p>4：每条指令都会创建一个新的镜像层并对镜像进行提交</p><h4 id="_8-2-2-docker执行dockerfile的大致流程" tabindex="-1"><a class="header-anchor" href="#_8-2-2-docker执行dockerfile的大致流程" aria-hidden="true">#</a> 8.2.2 Docker执行Dockerfile的大致流程</h4><ol><li>docker从基础镜像运行一个容器</li><li>执行一条指令并对容器做出修改</li><li>执行类似docker commit的操作提交一个新的镜像层</li><li>docker基于刚提交的镜像运行一个新容器</li><li>执行dockerfile中的下一条指令直到所有指令都执行完毕</li></ol><h4 id="_8-2-3-小总结" tabindex="-1"><a class="header-anchor" href="#_8-2-3-小总结" aria-hidden="true">#</a> 8.2.3 小总结</h4><p>从应用软件的角度来看，Dockerfile、Docker镜像与Docker容器分别代表软件的三个不同阶段，</p><ul><li>Dockerfile是软件的原材料</li><li>Docker镜像是软件的交付品</li><li>Docker容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例 Dockerfile面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可，合力充当Docker体系的基石。</li></ul><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405103302981.png" alt="image-20220405103302981" tabindex="0" loading="lazy"><figcaption>image-20220405103302981</figcaption></figure><p>1 Dockerfile，需要定义一个Dockerfile，Dockerfile定义了进程需要的一切东西。Dockerfile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)等等;</p><p>2 Docker镜像，在用Dockerfile定义一个文件之后，docker build时会产生一个Docker镜像，当运行 Docker镜像时会真正开始提供服务;</p><p>3 Docker容器，容器是直接提供服务的。</p><h3 id="_8-3-dockerfile常用保留字指令" tabindex="-1"><a class="header-anchor" href="#_8-3-dockerfile常用保留字指令" aria-hidden="true">#</a> 8.3 Dockerfile常用保留字指令</h3><ul><li><strong>FROM</strong> 基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板，第一条必须是from</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- **MAINTAINER ** 这条命令主要是指定维护者信息，方便他人寻找作者 指令后面的内容其实没有规定写什么， 只要可以联系上作者即可，一般使用邮箱地址 格式为 MAINTAINER Name &lt;Email&gt;。注意：这个标签已经弃用，但现在还有很多 Dockerfi 使用这个标签，所以短时间内不会删除 现在推荐使用更灵活的 LABEL 命令，详见 面的讲解。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><strong>EXPOSE</strong> 当前容器对外暴露出的端口</p></li><li><p><strong>WORKDIR</strong> 指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点</p></li><li><p><strong>USER</strong> 指定该镜像以什么样的用户去执行，如果都不指定，默认是root</p></li><li><p><strong>ENV</strong> 用来在构建镜像过程中设置环境变量</p></li><li><p>ENV MY_PATH /usr/mytest 这个环境变量可以在后续的任何RUN指令中使用，这就如同在命令前面指定了环境变量前缀一样； 也可以在其它指令中直接使用这些环境变量，</p><p>比如：WORKDIR $MY_PATH</p></li><li><p><strong>ADD</strong> 将宿主机目录下的文件拷贝进镜像且会自动处理URL和解压tar压缩包</p></li><li><p><strong>VOLUME</strong> 容器数据卷，用于数据保存和持久化工作</p></li></ul><h4 id="_8-3-1-run" tabindex="-1"><a class="header-anchor" href="#_8-3-1-run" aria-hidden="true">#</a> 8.3.1 RUN</h4><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405104013642.png" alt="image-20220405104013642" tabindex="0" loading="lazy"><figcaption>image-20220405104013642</figcaption></figure><p>shell格式： RUN yum -y install vim</p><p>到 shell 格式中，可以使用反斜杠将单个 RUN 命令跨到下一行</p><p>RUN echo ” Hello ”&amp;&amp; \\</p><p>​ echo &quot;World”\\</p><pre><code>&amp;&amp; echo ” Docker”
</code></pre><p>exec格式：RUN [&quot;可执行文件&quot;，&quot;参数1&quot;,&quot;参数2&quot;]</p><p>例：RUN [&quot;./test.php&quot;,&quot;dev&quot;,&quot;offline&quot;] 等价于 ./test.php dev offline</p><p>以这种格式运行程序，可以免除运行 n/sh 的消耗 这种格式是用 Ison 格式将程序名 与所需参 数组成一个字符串数组，所以如果参数中有引号等特殊字符，贝lj 需要进行转义</p><p><mark>RUN是在 docker build时运行</mark></p><ul><li><strong>COPY</strong> 类似ADD，拷贝文件和目录到镜像中。将从构建上下文目录中 &lt;源路径&gt; 的文件/目录复制到新的一层的镜像内的 &lt;目标路径&gt; 位置</li></ul><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405104400946.png" alt="image-20220405104400946" tabindex="0" loading="lazy"><figcaption>image-20220405104400946</figcaption></figure><h4 id="_8-3-2-cmd" tabindex="-1"><a class="header-anchor" href="#_8-3-2-cmd" aria-hidden="true">#</a> 8.3.2 CMD</h4><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405104724204.png" alt="image-20220405104724204" tabindex="0" loading="lazy"><figcaption>image-20220405104724204</figcaption></figure><p><mark>CMD是在docker run时运行</mark></p><p><mark>CMD指令可以有多条，但只有最后一个生效，CMD会被docker run后面的参数替换</mark></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405105228712.png" alt="image-20220405105228712" tabindex="0" loading="lazy"><figcaption>image-20220405105228712</figcaption></figure><p>上面这个实例什么意思呢，官网编写的关于tomcat的Dockerfile文件的最后一行是运行catalina.sh脚本</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405105643278.png" alt="image-20220405105643278" tabindex="0" loading="lazy"><figcaption>image-20220405105643278</figcaption></figure><p><strong>能访问tomcat</strong></p><p>加上/bin/bash</p><p>则不能访问tomcat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu  

CMD <span class="token punctuation">[</span>” <span class="token builtin class-name">echo</span> ” , ” Hello Ubuntu” <span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t user/test .</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405113325401.png" alt="image-20220405113325401" tabindex="0" loading="lazy"><figcaption>image-20220405113325401</figcaption></figure><p>docker run -it imageId echo &quot;Hello Docker&quot;这个方式启动容器时，echo &quot;HelloDocker”命令会覆盖原有的CMD命令。也就是说，CMD 命令可以通过docker run命令覆盖，这一点也是CMD和ENTRYPOINT指令的最大区别。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405105139911.png" alt="image-20220405105139911" tabindex="0" loading="lazy"><figcaption>image-20220405105139911</figcaption></figure><h4 id="_8-3-3-entrypoint" tabindex="-1"><a class="header-anchor" href="#_8-3-3-entrypoint" aria-hidden="true">#</a> 8.3.3 ENTRYPOINT</h4><p>也是用来指定一个容器启动时要运行的命令</p><p>类似于 CMD 指令，但是ENTRYPOINT不会被docker run后面的命令覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序</p><p>FROM ubuntu</p><p>ENTRYPOINT [ ” echo” ]</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405121627847.png" alt="image-20220405121627847" tabindex="0" loading="lazy"><figcaption>image-20220405121627847</figcaption></figure><h4 id="_8-3-4-小总结" tabindex="-1"><a class="header-anchor" href="#_8-3-4-小总结" aria-hidden="true">#</a> 8.3.4 小总结</h4><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405121706206.png" alt="image-20220405121706206" tabindex="0" loading="lazy"><figcaption>image-20220405121706206</figcaption></figure><h3 id="_8-4-dockerfile实战" tabindex="-1"><a class="header-anchor" href="#_8-4-dockerfile实战" aria-hidden="true">#</a> 8.4 Dockerfile实战</h3><h4 id="redis容器化" tabindex="-1"><a class="header-anchor" href="#redis容器化" aria-hidden="true">#</a> Redis容器化</h4><p>（1）基础镜像：centos:centos7.5.1804；</p><p>（2）作者：Chinaskill；</p><p>（3）修改配置文件中的bind 127.0.0.1为bind 0.0.0.0；</p><p>（4）设置Redis免密，并关闭保护模式；</p><p>（5）开放端口：6379；</p><p>（6）设置服务开机自启。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@master redis]## cat Dockerfile 
<span class="token instruction"><span class="token keyword">FROM</span> centos:centos7.5.1804</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> Chinaskill</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /etc/yum.repos.d/*</span>
<span class="token instruction"><span class="token keyword">ADD</span> ftp.repo /etc/yum.repos.d/ftp.repo</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum clean all</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum list</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum install -y redis</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/bind 127.0.0.1/bind 0.0.0.0/g&#39;</span> /etc/redis.conf</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/protected-mode yes/protected-mode no/g&#39;</span> /etc/redis.conf</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/daemonize no/daemonize yes/g&#39;</span> /etc/redis.conf</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 6379</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/usr/bin/redis-server&quot;</span>,<span class="token string">&quot;/etc/redis.conf&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="容器化mariadb" tabindex="-1"><a class="header-anchor" href="#容器化mariadb" aria-hidden="true">#</a> 容器化MariaDB</h4><p>（1）基础镜像：centos:centos7.5.1804；</p><p>（2）作者：Chinaskill；</p><p>（3）设置数据库密码：123456；</p><p>（4）创建数据库gpmall并导入数据库文件gpmall.sql；</p><p>（5）设置字符编码：UTF-8；</p><p>（6）开放端口：3306；</p><p>（7）设置服务开机自启。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@master redis]## cd /root/mariadb/
[root@master mariadb]## ls
Dockerfile ftp.repo gpmall.sql init.sh
[root@master mariadb]## cat Dockerfile 
<span class="token instruction"><span class="token keyword">FROM</span> centos:centos7.5.1804</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> Chinaskill</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /etc/yum.repos.d/*</span>
<span class="token instruction"><span class="token keyword">ADD</span> ftp.repo /etc/yum.repos.d/</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum install -y mariadb-server</span>
<span class="token instruction"><span class="token keyword">ADD</span> init.sh /root/init.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod +x /root/init.sh</span>
<span class="token instruction"><span class="token keyword">ADD</span> gpmall.sql /root/gpmall.sql</span>
<span class="token instruction"><span class="token keyword">RUN</span> /root/init.sh</span>
<span class="token instruction"><span class="token keyword">ENV</span> C.LANG UTF-8</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 3306</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;mysqld_safe&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="容器化zookeeper" tabindex="-1"><a class="header-anchor" href="#容器化zookeeper" aria-hidden="true">#</a> 容器化Zookeeper</h4><p>（1）基础镜像：centos:centos7.5.1804；</p><p>（2）作者：Chinaskill；</p><p>（3）开放端口：2181；</p><p>（4）设置服务开机自启。</p><p>[root@master zookeeper]## ls</p><p>Dockerfile ftp.repo zookeeper-3.4.14.tar.gz</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@master zookeeper]## cat Dockerfile 
<span class="token instruction"><span class="token keyword">FROM</span> centos:centos7.5.1804</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> Chinaskill</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rvf /etc/yum.repos.d/*</span>
<span class="token instruction"><span class="token keyword">COPY</span> ftp.repo /etc/yum.repos.d/local.repo</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum -y install java-1.8.0</span>
<span class="token instruction"><span class="token keyword">ADD</span> zookeeper-3.4.14.tar.gz /usr/local</span>
<span class="token instruction"><span class="token keyword">ENV</span> ZOOKEEPER_HOME /usr/local/zookeeper-3.4.14</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JRE_HOME</span>/bin:<span class="token variable">$ZOOKEEPER_HOME</span>/bin</span>
<span class="token instruction"><span class="token keyword">RUN</span> cp <span class="token variable">$ZOOKEEPER_HOME</span>/conf/zoo_sample.cfg <span class="token variable">$ZOOKEEPER_HOME</span>/conf/zoo.cfg</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 2181</span>
<span class="token instruction"><span class="token keyword">CMD</span> <span class="token variable">$ZOOKEEPER_HOME</span>/bin/zkServer.sh start-foreground</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="虚悬镜像" tabindex="-1"><a class="header-anchor" href="#虚悬镜像" aria-hidden="true">#</a> 虚悬镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>仓库名、标签都是&lt;none&gt;的镜像，俗称dangling image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>虚悬镜像的由来</mark></p><p>通常出现这种情况，是因为构建了一个新镜像，然后为该镜像打了一个已经存在的标签。接着Docker会移除旧镜像上面的标签，将该标签标在新的镜像之上。例如，首先基于alpine:3.4构建一个新的镜像，并打上<code>dodge:challenger</code>标签。然后更新<code>Dockerfile</code>，将<code>alpine:3.4</code>替换为<code>alpine:3.5</code>，并且再次执行<code>docker image build</code>命令。该命令会构建一个新的镜像，并且标签为<code>dodge:challenger</code>，同时移除了旧镜像上面对应的标签，旧镜像就变成了悬虚镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查询显示虚悬镜像
docker images -f dangling=true
删除虚悬镜像
docker rmi $(docker images -q -f dangling=true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、微服务实战" tabindex="-1"><a class="header-anchor" href="#九、微服务实战" aria-hidden="true">#</a> 九、微服务实战</h2><p><strong>1.修改之前的SpringBoot项目yml中数据库配置，改为容器化的mysql地址</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406083234936.png" alt="image-20220406083234936" tabindex="0" loading="lazy"><figcaption>image-20220406083234936</figcaption></figure><p><strong>2.根据实体类新建数据库</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">user</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键ID&#39;</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
    age <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
    email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> email<span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Banana&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;test1@pyy.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;test2@pyy.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">&#39;test3@pyy.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&#39;test4@pyy.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;zs@qq&#39;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;asd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token string">&#39;test5@pyy.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.项目打包</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220405123335304.png" alt="image-20220405123335304" tabindex="0" loading="lazy"><figcaption>image-20220405123335304</figcaption></figure><p><strong>4. 容器化myqsl</strong></p><p>docker run -d -p 3306:3306 --privileged=true -v /pyy/mysql/log:/var/log/mysql -v /pyy/mysql/data:/var/lib/mysql -v /pyy/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=a --name mysql mysql:5.7</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406083505545.png" alt="image-20220406083505545" tabindex="0" loading="lazy"><figcaption>image-20220406083505545</figcaption></figure><p><strong>5. 构建镜像</strong></p><p>[root@VM-16-8-centos springboot_test]## cat Dockerfile FROM java:8 MAINTAINER pyy VOLUME /tmp ADD sys-admin-0.0.1-SNAPSHOT.jar pyy_docker.jar RUN bash -c &#39;touch /pyy_docker.jar&#39; ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/pyy_docker.jar&quot;] EXPOSE 8080</p><p>docker build -t pyy_docker:1.0 .</p><p><strong>6.运行容器</strong></p><p>docker run -d -p 8080:8080 pyy_docker:1.6</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406084507695.png" alt="image-20220406084507695" tabindex="0" loading="lazy"><figcaption>image-20220406084507695</figcaption></figure><p><strong>7.测试</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406084548796.png" alt="image-20220406084548796" tabindex="0" loading="lazy"><figcaption>image-20220406084548796</figcaption></figure><h2 id="十、网络模式" tabindex="-1"><a class="header-anchor" href="#十、网络模式" aria-hidden="true">#</a> 十、网络模式</h2><h3 id="_10-1-简介" tabindex="-1"><a class="header-anchor" href="#_10-1-简介" aria-hidden="true">#</a> 10.1 简介</h3><p>docker不启动，默认网络情况</p><ul><li>ens33</li><li>lo</li><li>virbr0</li></ul><p>docker启动后，网络情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
2c74a4b5d76a   bridge    bridge    <span class="token builtin class-name">local</span>
dd3008378058   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
9ebd6b25e4c3   none      null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用命令</strong></p><p>查看网络</p><p>docker network ls</p><p>查看网络源数据</p><p>docker network inspect XXX网络名字</p><p>删除网络</p><p>docker network rm XXX网络名字</p><p><strong>案例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## docker network create test_docker_network</span>
7a7c98e51c6effc0498579ec3cf9bfe6b0a9052ae8c3996781f61389b2529165
<span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## docker network ls</span>
NETWORK ID     NAME                  DRIVER    SCOPE
2c74a4b5d76a   bridge                bridge    <span class="token builtin class-name">local</span>
dd3008378058   <span class="token function">host</span>                  <span class="token function">host</span>      <span class="token builtin class-name">local</span>
9ebd6b25e4c3   none                  null      <span class="token builtin class-name">local</span>
7a7c98e51c6e   test_docker_network   bridge    <span class="token builtin class-name">local</span>
<span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## docker network rm test_docker_network</span>
test_docker_network
<span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
2c74a4b5d76a   bridge    bridge    <span class="token builtin class-name">local</span>
dd3008378058   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
9ebd6b25e4c3   none      null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网络模式能干嘛</strong></p><p>容器间的互联和通信以及端口映射</p><p>容器IP变动时候可以通过服务名直接网络通信而不受到影响</p><p><strong>小总结</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406090336141.png" alt="image-20220406090336141" tabindex="0" loading="lazy"><figcaption>image-20220406090336141</figcaption></figure><ul><li>bridge模式：使用--network bridge指定，默认使用docker0</li><li>host模式：使用--network host指定</li><li>none模式：使用--network none指定</li><li>container模式：使用--network container:NAME或者容器ID指定</li></ul><p><mark>容器实例内默认网络IP生产规则</mark></p><p>运行centos1和centos2，查看它们的ip分别为172.16.0.2，172.16.0.3。那么当centos2挂掉的话，在新建容器centos3，那么它的ip就会变为172.16.0.3</p><h3 id="_10-2-bridge" tabindex="-1"><a class="header-anchor" href="#_10-2-bridge" aria-hidden="true">#</a> 10.2 bridge</h3><blockquote><p>很像交换机</p></blockquote><p>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，==它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。==Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码，让主机和容器之间可以通过网桥相互通信。</p><p>1 Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。</p><p>2 <mark>docker run 的时候，没有指定network的话默认使用的网桥模式就是bridge=，使用的就是docker0</mark>。在宿主机ifconfig,就可以看到docker0和自己create的network(后面讲)eth0，eth1，eth2……代表网卡一，网卡二，网卡三……，lo代表127.0.0.1，即localhost，inet addr用来表示网卡的IP地址</p><p>3 网桥docker0创建一对对等虚拟设备接口一个叫<mark>veth，另一个叫eth0，成对匹配</mark>。 3.1 整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）； 3.2 每个容器实例内部也有一块网卡，每个接口叫eth0； 3.3 docker0上面的每个veth匹配某个容器实例内部的eth0，两两配对，一一匹配。 通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406091532965.png" alt="image-20220406091532965" tabindex="0" loading="lazy"><figcaption>image-20220406091532965</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406091916322.png" alt="image-20220406091916322" tabindex="0" loading="lazy"><figcaption>image-20220406091916322</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406092125307.png" alt="image-20220406092125307" tabindex="0" loading="lazy"><figcaption>image-20220406092125307</figcaption></figure><h3 id="_10-3-host" tabindex="-1"><a class="header-anchor" href="#_10-3-host" aria-hidden="true">#</a> 10.3 host</h3><p>直接使用宿主机的 IP 地址与外界进行通信，不再需要额外进行NAT 转换。</p><p>容器将不会获得一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。<mark>容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</mark></p><p>错误的写法：</p><p>docker run -d -p 8083:8080 --network host --name tomcat83 pyy/tomcat8-jdk8</p><p>正确的写法</p><p>docker run -d --network host --name tomcat83 pyy/tomcat8-jdk8</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406092343717.png" alt="image-20220406092343717" tabindex="0" loading="lazy"><figcaption>image-20220406092343717</figcaption></figure>`,146),w={href:"http://xn--IP-wz2c754c5qn:8080/",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>在CentOS里面用默认的火狐浏览器访问容器内的tomcat83看到访问成功，因为此时容器的IP借用主机的， 所以容器共享宿主机网络IP，这样的好处是外部主机与容器可以直接通信。</p><h3 id="_10-4-none" tabindex="-1"><a class="header-anchor" href="#_10-4-none" aria-hidden="true">#</a> 10.4 none</h3><blockquote><p>禁用网络功能，只有lo标识(就是127.0.0.1表示本地回环)</p></blockquote><p>在none模式下，并不为Docker容器进行任何网络配置。 也就是说，这个Docker容器没有网卡、IP、路由等信息，只有一个lo 需要我们自己为Docker容器添加网卡、配置IP等。</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406092902863.png" alt="image-20220406092902863" tabindex="0" loading="lazy"><figcaption>image-20220406092902863</figcaption></figure><h3 id="_10-5-container" tabindex="-1"><a class="header-anchor" href="#_10-5-container" aria-hidden="true">#</a> 10.5 container</h3><p>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的.</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406093118037.png" alt="image-20220406093118037" tabindex="0" loading="lazy"><figcaption>image-20220406093118037</figcaption></figure><p>docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406093839711.png" alt="image-20220406093839711" tabindex="0" loading="lazy"><figcaption>image-20220406093839711</figcaption></figure><p>关闭alpine1，在看alpine2<img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406094014970.png" alt="image-20220406094014970" loading="lazy"></p><h3 id="_10-6-自定义网络" tabindex="-1"><a class="header-anchor" href="#_10-6-自定义网络" aria-hidden="true">#</a> 10.6 自定义网络</h3><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220406094316737.png" alt="image-20220406094316737" tabindex="0" loading="lazy"><figcaption>image-20220406094316737</figcaption></figure><h2 id="十一、容器编排" tabindex="-1"><a class="header-anchor" href="#十一、容器编排" aria-hidden="true">#</a> 十一、容器编排</h2><h3 id="_11-1-简介" tabindex="-1"><a class="header-anchor" href="#_11-1-简介" aria-hidden="true">#</a> 11.1 简介</h3><p>Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，写好多个容器之间的调用关系。然后，只要一个命令，就能同时启动/关闭这些容器</p><p><strong>能干嘛</strong></p><p>docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？</p><p>如果我需要同时部署好多个服务,难道要每个服务单独写Dockerfile然后在构建镜像,构建容器,这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具</p><p>例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。。。。。。</p><p>Compose允许用户通过一个单独的<strong>docker-compose.yml</strong>模板文件（YAML 格式）来定义一组相关联的<strong>应用容器为一个项目（project）。</strong></p><p>可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose 解决了容器与容器之间如何管理编排的问题。</p><p><strong>安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## curl -L &quot;https://github.com/docker/compose/releases/download/1.29.2</span>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>   <span class="token number">664</span>  <span class="token number">100</span>   <span class="token number">664</span>    <span class="token number">0</span>     <span class="token number">0</span>    <span class="token number">982</span>      <span class="token number">0</span> --:--:-- --:--:-- --:--:--   <span class="token number">982</span>
<span class="token number">100</span> <span class="token number">12</span>.1M  <span class="token number">100</span> <span class="token number">12</span>.1M    <span class="token number">0</span>     <span class="token number">0</span>  <span class="token number">29870</span>      <span class="token number">0</span>  <span class="token number">0</span>:07:06  <span class="token number">0</span>:07:06 --:--:-- <span class="token number">64748</span>
<span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## chmod +x /usr/local/bin/docker-compose</span>
<span class="token punctuation">[</span>root@VM-16-8-centos springboot_test<span class="token punctuation">]</span><span class="token comment">## cd /usr/local/bin/</span>
<span class="token punctuation">[</span>root@VM-16-8-centos bin<span class="token punctuation">]</span><span class="token comment">## vim docker-compose </span>
<span class="token punctuation">[</span>root@VM-16-8-centos bin<span class="token punctuation">]</span><span class="token comment">## ll</span>
total <span class="token number">13420</span>
-rwxr-xr-x <span class="token number">1</span> root root  <span class="token number">1001112</span> Aug  <span class="token number">5</span>  <span class="token number">2020</span> busybox-x86_64
-rwxr-xr-x <span class="token number">1</span> root root <span class="token number">12737304</span> Apr  <span class="token number">6</span> <span class="token number">10</span>:17 <span class="token function">docker-compose</span>
<span class="token punctuation">[</span>root@VM-16-8-centos bin<span class="token punctuation">]</span><span class="token comment">## docker-compose --version</span>
<span class="token function">docker-compose</span> version <span class="token number">1.29</span>.2, build 5becea4c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-docker-compose核心" tabindex="-1"><a class="header-anchor" href="#_11-2-docker-compose核心" aria-hidden="true">#</a> 11.2 docker-compose核心</h3><p><strong>一文件</strong></p><p>docker-compose.yml</p><p><strong>两要素</strong></p><p>服务（service）</p><p>一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器</p><p>工程（project）</p><p>由一组关联的应用容器组成的一个<mark>完整业务单元</mark>，在 docker-compose.yml 文件中定义。</p><p><strong>Compose使用的三个步骤</strong></p><ol><li>编写Dockerfile定义各个微服务应用并构建出对应的镜像文件</li><li>使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。</li><li>最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线</li></ol><h3 id="_11-3-compose常用命令" tabindex="-1"><a class="header-anchor" href="#_11-3-compose常用命令" aria-hidden="true">#</a> 11.3 Compose常用命令</h3><p>docker-compose -h ## 查看帮助 docker-compose up ## 启动所有docker-compose服务 docker-compose up -d ## 启动所有docker-compose服务并后台运行 docker-compose down ## 停止并删除容器、网络、卷、镜像。 docker-compose exec yml里面的服务id ## 进入容器实例内部 docker-compose exec docker-compose.yml文件中写的服务id /bin/bash docker-compose ps ## 展示当前docker-compose编排过的运行的所有容器 docker-compose top ## 展示当前docker-compose编排过的容器进程</p><p>docker-compose logs yml里面的服务id ## 查看容器输出日志 <strong>docker-compose config ## 检查配置</strong> docker-compose config -q ## 检查配置，有问题才有输出 docker-compose restart ## 重启服务 docker-compose start ## 启动服务 docker-compose stop ## 停止服务</p><h3 id="_11-4-快速入门compose" tabindex="-1"><a class="header-anchor" href="#_11-4-快速入门compose" aria-hidden="true">#</a> 11.4 快速入门Compose</h3><p>跟着官网写个wordpress来写个实例</p><p>创建目录my_wordpress</p><p>进入目录，创建docker-compose.yml文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
    
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> somewordpress
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> wordpress
    
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> wordpress_data<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8000:80&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> wordpress
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db_data</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">wordpress_data</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose up -d</code>项目目录运行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-16-8-centos my_wordpress]## docker-compose up -d
Creating network &quot;my_wordpress_default&quot; with the default driver
Creating volume &quot;my_wordpress_db_data&quot; with default driver
Creating volume &quot;my_wordpress_wordpress_data&quot; with default driver
Pulling wordpress (wordpress:latest)...
latest: Pulling from library/wordpress
c229119241af: Already exists
47e86af584f1: Pull complete
e1bd55b3ae5f: Downloading [====&gt;                                              ]  7.903MB/91.6MB
e1bd55b3ae5f: Pull complete
1f3a70af964a: Pull complete
0f5086159710: Pull complete
7d9c764dc190: Pull complete
ec2bb7a6eead: Pull complete
9d9132470f34: Pull complete
fb23ab197126: Pull complete
cbdd566be443: Pull complete
be224cc1ae0f: Pull complete
629912c3cae4: Pull complete
f1bae9b2bf5b: Pull complete
19542807523e: Pull complete
59191c568fb8: Pull complete
30be9b012597: Pull complete
bb41528d36dd: Pull complete
bfd3efbb7409: Pull complete
7f19a53dfc12: Pull complete
23dc552fade0: Pull complete
5133d8c158a7: Pull complete
Digest: sha256:c8d7b938e831b715cf16f22b678f9c7a0ffd5e5efa9b9b2d77f39bed5cf5b2fd
Status: Downloaded newer image for wordpress:latest
Creating my_wordpress_db_1 ... done
Creating my_wordpress_wordpress_1 ... done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><blockquote><p>在云服务器上部署的记得放开开云服务器的端口</p></blockquote><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407135259844.png" alt="image-2022040713525984" tabindex="0" loading="lazy"><figcaption>image-2022040713525984</figcaption></figure><h2 id="十二、portainer" tabindex="-1"><a class="header-anchor" href="#十二、portainer" aria-hidden="true">#</a> 十二、Portainer</h2><h3 id="_12-1-是什么" tabindex="-1"><a class="header-anchor" href="#_12-1-是什么" aria-hidden="true">#</a> 12.1 是什么</h3><p>Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。</p><h3 id="_12-2-安装" tabindex="-1"><a class="header-anchor" href="#_12-2-安装" aria-hidden="true">#</a> 12.2 安装</h3>`,51),q={href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"},_=e(`<h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h3><p>docker run --name nginx -p 80:80 --link=tomcat:tomcat1 --link=tomcat02:tomca -v /opt/docker-nginx/nginx.conf:/etc/nginx/nginx.conf -v /opt/docker-nginx/log:/var/log/nginx -v /opt/docker-nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -d 313ec0a602bc</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407141316883.png" alt="image-20220407141316883" tabindex="0" loading="lazy"><figcaption>image-20220407141316883</figcaption></figure><p>因为我docker环境部署在了云服务器上，所以直接选本地即可</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407141559059.png" alt="image-20220407141559059" tabindex="0" loading="lazy"><figcaption>image-20220407141559059</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407141903885.png" alt="image-20220407141903885" tabindex="0" loading="lazy"><figcaption>image-20220407141903885</figcaption></figure><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407143128082.png" alt="image-20220407143128082" tabindex="0" loading="lazy"><figcaption>image-20220407143128082</figcaption></figure><p><strong>测试</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407143207736.png" alt="image-20220407143207736" tabindex="0" loading="lazy"><figcaption>image-20220407143207736</figcaption></figure><p><strong>docker stats</strong></p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407143611100.png" alt="image-20220407143611100" tabindex="0" loading="lazy"><figcaption>image-20220407143611100</figcaption></figure><h2 id="十三、cadvisor-influxdb-granfana" tabindex="-1"><a class="header-anchor" href="#十三、cadvisor-influxdb-granfana" aria-hidden="true">#</a> 十三、CAdvisor+InfluxDB+Granfana</h2><p><strong>docker ps</strong></p><p><strong>docker stats</strong></p><blockquote><p>用来查看容器占用资源</p><p>通过docker stats命令可以很方便的看到当前宿主机上所有容器的CPU,内存以及网络流量等数据，一般小公司够用了。。。。</p><p>但是，</p><p>docker stats统计结果只能是当前宿主机的全部容器，数据资料是实时的，没有地方存储、没有健康指标过线预警等功能</p></blockquote><h3 id="_13-1-容器监控三剑客" tabindex="-1"><a class="header-anchor" href="#_13-1-容器监控三剑客" aria-hidden="true">#</a> 13.1 容器监控三剑客</h3><p>CAdvisor监控收集+InfluxDB存储数据+Granfana展示图表</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407191755111.png" alt="image-20220407191755111" tabindex="0" loading="lazy"><figcaption>image-20220407191755111</figcaption></figure><p>下面我们用docker-compose一键部署三剑客</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
 
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">grafana_data</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">influxdb</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> tutum/influxdb<span class="token punctuation">:</span><span class="token number">0.9</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> PRE_CREATE_DB=cadvisor
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;8083:8083&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;8086:8086&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ./data/influxdb<span class="token punctuation">:</span>/data
 
 <span class="token key atrule">cadvisor</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> google/cadvisor
  <span class="token key atrule">links</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv
  <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>storage_driver=influxdb <span class="token punctuation">-</span>storage_driver_db=cadvisor <span class="token punctuation">-</span>storage_driver_host=influxsrv<span class="token punctuation">:</span><span class="token number">8086</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /<span class="token punctuation">:</span>/rootfs<span class="token punctuation">:</span>ro
    <span class="token punctuation">-</span> /var/run<span class="token punctuation">:</span>/var/run<span class="token punctuation">:</span>rw
    <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/sys<span class="token punctuation">:</span>ro
    <span class="token punctuation">-</span> /var/lib/docker/<span class="token punctuation">:</span>/var/lib/docker<span class="token punctuation">:</span>ro
 
 <span class="token key atrule">grafana</span><span class="token punctuation">:</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana
  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">links</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> grafana_data<span class="token punctuation">:</span>/var/lib/grafana
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> HTTP_USER=admin
    <span class="token punctuation">-</span> HTTP_PASS=admin
    <span class="token punctuation">-</span> INFLUXDB_HOST=influxsrv
    <span class="token punctuation">-</span> INFLUXDB_PORT=8086
    <span class="token punctuation">-</span> INFLUXDB_NAME=cadvisor
    <span class="token punctuation">-</span> INFLUXDB_USER=root
    <span class="token punctuation">-</span> INFLUXDB_PASS=root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220407165542929.png" alt="image-20220407165542929" tabindex="0" loading="lazy"><figcaption>image-20220407165542929</figcaption></figure><h2 id="bug记录" tabindex="-1"><a class="header-anchor" href="#bug记录" aria-hidden="true">#</a> bug记录</h2><p><mark>方案一</mark></p><p>docker启动的nginx</p><p>想修改的它的配置文件，vi命令也没有，vim命令也没有</p><p>apt-get update 完成之后 apt-get install vim</p><p><mark>方案二</mark></p><p>但是这样太麻烦了，我们在宿主机挂载卷即可</p><p>需要自己准备好nginx.conf 和default.conf文件，我是直接从容器里面复制的，然后根据自己的需要改的</p><p>mkdir -p /opt/docker-nginx/conf.d</p><p>mv nginx.conf /opt/docker-nginx/ &amp;&amp; mv default.conf /opt/docker-nginx/conf.d/</p><p>docker run --name nginx -p 80:80 -v /opt/docker-nginx/nginx.conf:/etc/nginx/nginx.conf -v /opt/docker-nginx/log:/var/log/nginx -v /opt/docker-nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -d nginx</p>`,32);function R(D,E){const a=c("ExternalLinkIcon");return l(),o("div",null,[d,n("blockquote",null,[n("p",null,[s('"registry-mirrors": ["'),n("a",p,[s("https://tptpe526.mirror.aliyuncs.com"),i(a)]),s('"]')])]),m,n("p",null,[s("仓库分为公开仓库（Public）和私有仓库（Private）两种形式。 最大的公开仓库是 Docker Hub("),n("a",u,[s("https://hub.docker.com/"),i(a)]),s(")， 存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云等")]),v,n("p",null,[s("1 官方Docker Hub地址："),n("a",b,[s("https://hub.docker.com/，中国大陆访问太慢了且准备被阿里云取代的趋势，不太主流。"),i(a)])]),k,n("p",null,[s('{ "registry-mirrors": ["'),n("a",h,[s("https://pengyuyan227.mirror.aliyuncs.com"),i(a)]),s('"], "insecure-registries": ["192.168.100.10:5000"] }')]),g,n("p",null,[n("a",f,[s("官网"),i(a)])]),y,n("p",null,[n("a",w,[s("http://宿主机IP:8080/"),i(a)])]),x,n("p",null,[n("a",q,[s("官网"),i(a)])]),_])}const T=t(r,[["render",R],["__file","Docker.html.vue"]]);export{T as default};
