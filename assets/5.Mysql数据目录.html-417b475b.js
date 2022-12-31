import{ac as s,F as n,G as a,ad as e}from"./framework-f12b30cc.js";const l={},p=e(`<h1 id="五、-mysql的数据目录" tabindex="-1"><a class="header-anchor" href="#五、-mysql的数据目录" aria-hidden="true">#</a> 五、 Mysql的数据目录</h1><h2 id="数据库和文件系统的关系" tabindex="-1"><a class="header-anchor" href="#数据库和文件系统的关系" aria-hidden="true">#</a> 数据库和文件系统的关系</h2><p>我们知道像 InnoDB 、 MyISAM 这样的存储引擎都是把表存储在磁盘上的，而操作系统用来管理磁盘的那个东东又 被称为 文件系统 ，所以用专业一点的话来表述就是：<strong>像 InnoDB 、 MyISAM 这样的存储引擎都是把表存储在文 件系统上的。</strong></p><h2 id="mysql数据目录" tabindex="-1"><a class="header-anchor" href="#mysql数据目录" aria-hidden="true">#</a> MySQL数据目录</h2><p>MySQL服务器程序在启动时会到文件系统的某个目录下加载一些文件，之后在运行过程中产生的数据也都会存储 到这个目录下的某些文件中，这个目录就称为 数据目录</p><h3 id="数据目录和安装目录的区别" tabindex="-1"><a class="header-anchor" href="#数据目录和安装目录的区别" aria-hidden="true">#</a> 数据目录和安装目录的区别</h3><p>我们之前只接触过 MySQL 的安装目录（在安装 MySQL 的时候我们可以自己指定），我们重点强调过这个 安装目 录 下非常重要的 bin 目录，它里边存储了许多关于控制客户端程序和服务器程序的命令（许多可执行文件，比 如 mysql ， mysqld ， mysqld_safe 等等等等好几十个）。而 数据目录 是用来存储 MySQL 在运行过程中产生的 数据，一定要和本章要讨论的 安装目录 区别开！一定要区分开！一定要区分开！一定要区分开！</p><h3 id="如何确定mysql中的数据目录" tabindex="-1"><a class="header-anchor" href="#如何确定mysql中的数据目录" aria-hidden="true">#</a> 如何确定MySQL中的数据目录</h3><p>到底 MySQL 把数据都存到哪个路径下呢？其实 数据目录 对应着一个系统变量 datadir ，我们在使 用客户端与服务器建立连接之后查看这个系统变量的值就可以了</p><figure><img src="https://typora-1259403628.cos.ap-nanjing.myqcloud.com/image-20220911194025234.png" alt="image-20220911194025234" tabindex="0" loading="lazy"><figcaption>image-20220911194025234</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@fa82ad6e3052:/var/lib/mysql<span class="token comment"># ls</span>
<span class="token string">&#39;#ib_16384_0.dblwr&#39;</span>   binlog.000004   ca-key.pem        ib_buffer_pool	 mysql		      server-cert.pem
<span class="token string">&#39;#ib_16384_1.dblwr&#39;</span>   binlog.000005   ca.pem	        ib_logfile0	 mysql.ibd	      server-key.pem
<span class="token string">&#39;#innodb_temp&#39;</span>	      binlog.000006   client-cert.pem   ib_logfile1	 performance_schema   sys
 atguigudb	      binlog.000007   client-key.pem    ibdata1		 private_key.pem      undo_001
 auto.cnf	      binlog.index    dbtest2	        ibtmp1		 public_key.pem       undo_002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据目录的结构" tabindex="-1"><a class="header-anchor" href="#数据目录的结构" aria-hidden="true">#</a> 数据目录的结构</h2><p>MySQL 在运行过程中都会产生哪些数据呢？当然会包含我们创建的数据库、表、视图和触发器吧啦吧啦的用户数 据，除了这些用户数据，为了程序更好的运行， MySQL 也会创建一些其他的额外数据，我们接下来细细的品味一 下这个 数据目录 下的内容。</p><h3 id="数据库在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#数据库在文件系统中的表示" aria-hidden="true">#</a> 数据库在文件系统中的表示</h3><p>每当我们使用 CREATE DATABASE 数据库名 语句创建一个数据库的时候，在文件系统上实际发生了什么呢？其实 很简单，<strong>每个数据库都对应数据目录下的一个子目录，或者说对应一个文件夹</strong>，我们每当我们新建一个数据库时， MySQL 会帮我们做这两件事儿：</p><ol><li><p>在 数据目录 下创建一个和数据库名同名的子目录（或者说是文件夹）。</p></li><li><p>在该与数据库名同名的子目录下创建一个名为 db.opt 的文件，这个文件中包含了该数据库的各种属性，比方说该数据库的字符集和比较规则是个啥。</p></li></ol><p>比方说我们查看一下<strong>在我的计算机上</strong>当前有哪些数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@fa82ad6e3052:/var/lib/mysql<span class="token comment"># ls -l</span>
total <span class="token number">195040</span>
-rw-r-----. <span class="token number">1</span> mysql mysql   <span class="token number">196608</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:29 <span class="token string">&#39;#ib_16384_0.dblwr&#39;</span>
-rw-r-----. <span class="token number">1</span> mysql mysql  <span class="token number">8585216</span> Aug <span class="token number">16</span> <span class="token number">14</span>:50 <span class="token string">&#39;#ib_16384_1.dblwr&#39;</span>
drwxr-x---. <span class="token number">2</span> mysql mysql      <span class="token number">187</span> Sep  <span class="token number">3</span> 08:18 <span class="token string">&#39;#innodb_temp&#39;</span>
drwxr-x---. <span class="token number">2</span> mysql mysql      <span class="token number">189</span> Aug  <span class="token number">7</span> 07:16  atguigudb
-rw-r-----. <span class="token number">1</span> mysql mysql       <span class="token number">56</span> Aug  <span class="token number">2</span> 09:00  auto.cnf
-rw-r-----. <span class="token number">1</span> mysql mysql    <span class="token number">24557</span> Aug <span class="token number">14</span> <span class="token number">17</span>:35  binlog.000004
-rw-r-----. <span class="token number">1</span> mysql mysql     <span class="token number">5874</span> Aug <span class="token number">17</span> <span class="token number">10</span>:26  binlog.000005
-rw-r-----. <span class="token number">1</span> mysql mysql      <span class="token number">481</span> Sep  <span class="token number">3</span> 08:18  binlog.000006
-rw-r-----. <span class="token number">1</span> mysql mysql     <span class="token number">2983</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:27  binlog.000007
-rw-r-----. <span class="token number">1</span> mysql mysql       <span class="token number">64</span> Sep  <span class="token number">3</span> 08:18  binlog.index
-rw-------. <span class="token number">1</span> mysql mysql     <span class="token number">1676</span> Aug  <span class="token number">2</span> 09:00  ca-key.pem
-rw-r--r--. <span class="token number">1</span> mysql mysql     <span class="token number">1112</span> Aug  <span class="token number">2</span> 09:00  ca.pem
-rw-r--r--. <span class="token number">1</span> mysql mysql     <span class="token number">1112</span> Aug  <span class="token number">2</span> 09:00  client-cert.pem
-rw-------. <span class="token number">1</span> mysql mysql     <span class="token number">1676</span> Aug  <span class="token number">2</span> 09:00  client-key.pem
drwxr-x---. <span class="token number">2</span> mysql mysql      <span class="token number">162</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:27  dbtest2
-rw-r-----. <span class="token number">1</span> mysql mysql     <span class="token number">4030</span> Aug <span class="token number">17</span> <span class="token number">10</span>:26  ib_buffer_pool
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">50331648</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:29  ib_logfile0
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">50331648</span> Aug  <span class="token number">2</span> 09:00  ib_logfile1
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">12582912</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:27  ibdata1
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">12582912</span> Sep  <span class="token number">3</span> 08:18  ibtmp1
drwxr-x---. <span class="token number">2</span> mysql mysql      <span class="token number">143</span> Aug  <span class="token number">2</span> 09:00  mysql
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">31457280</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:27  mysql.ibd
drwxr-x---. <span class="token number">2</span> mysql mysql     <span class="token number">8192</span> Aug  <span class="token number">2</span> 09:00  performance_schema
-rw-------. <span class="token number">1</span> mysql mysql     <span class="token number">1676</span> Aug  <span class="token number">2</span> 09:00  private_key.pem
-rw-r--r--. <span class="token number">1</span> mysql mysql      <span class="token number">452</span> Aug  <span class="token number">2</span> 09:00  public_key.pem
-rw-r--r--. <span class="token number">1</span> mysql mysql     <span class="token number">1112</span> Aug  <span class="token number">2</span> 09:00  server-cert.pem
-rw-------. <span class="token number">1</span> mysql mysql     <span class="token number">1676</span> Aug  <span class="token number">2</span> 09:00  server-key.pem
drwxr-x---. <span class="token number">2</span> mysql mysql       <span class="token number">28</span> Aug  <span class="token number">2</span> 09:00  sys
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">16777216</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:29  undo_001
-rw-r-----. <span class="token number">1</span> mysql mysql <span class="token number">16777216</span> Sep  <span class="token number">5</span> <span class="token number">16</span>:27  undo_002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#表在文件系统中的表示" aria-hidden="true">#</a> 表在文件系统中的表示</h3><p>我们的数据其实都是以记录的形式插入到表中的，每个表的信息其实可以分为两种：</p><ol><li><p>表结构的定义</p></li><li><p>表中的数据</p></li></ol><p>表结构 就是该表的名称是啥，表里边有多少列，每个列的数据类型是啥，有啥约束条件和索引，用的是啥字符 集和比较规则吧啦吧啦的各种信息，这些信息都体现在了我们的建表语句中了。为了保存这些信息， InnoDB 和 MyISAM 这两种存储引擎都在 数据目录 下对应的数据库子目录下创建了一个专门用于描述表结构的文件，文件名 是这样：</p><p>表名.frm</p><p>比方说我们在 dahaizi 数据库下创建一个名为 test 的表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">USE</span> dahaizi<span class="token punctuation">;</span>
<span class="token keyword">Database</span> changed
mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test <span class="token punctuation">(</span>
 <span class="token operator">-</span><span class="token operator">&gt;</span> c1 <span class="token keyword">INT</span>
 <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那在数据库 dahaizi 对应的子目录下就会创建一个名为 test.frm 的用于描述表结构的文件。</p><h4 id="innodb是如何存储表数据的" tabindex="-1"><a class="header-anchor" href="#innodb是如何存储表数据的" aria-hidden="true">#</a> InnoDB是如何存储表数据的</h4><ul><li>InnoDB 其实是使用 页 为基本单位来管理存储空间的，默认的 页 大小为 16KB 。</li><li>对于 InnoDB 存储引擎来说，每个索引都对应着一棵 B+ 树，该 B+ 树的每个节点都是一个数据页，数据页之间不必要是物理连续的，因为数据页之间有 双向链表 来维护着这些页的顺序。</li><li>InnoDB 的聚簇索引的叶子节点存储了完整的用户记录，也就是所谓的索引即数据，数据即索引。</li></ul><p>为了更好的管理这些页，设计 InnoDB 的大叔们提出了一个 <code>表空间</code> 或者 <code>文件空间 </code>（英文名： table space 或 者 file space ）的概念，这个表空间是一个抽象的概念，它可以对应文件系统上一个或多个真实文件（不同表 空间对应的文件数量可能不同）。每一个 <code>表空间 </code>可以被划分为很多很多很多个 页 ，我们的表数据就存放在某 个 表空间 下的某些页里。设计 InnoDB 的大叔将表空间划分为几种不同的类型，我们一个一个看一下。</p><p><strong>系统表空间（system tablespace）</strong></p><p>这个所谓的<code>系统表空间</code>可以对应文件系统上一个或多个实际的文件，默认情况下， InnoDB 会在 数据目录 下创 建一个名为<code>ibdata1</code>（在你的数据目录下找找看有木有）、大小为 12M 的文件，这个文件就是对应的 <code>系统表空 间 </code>在文件系统上的表示</p><p>如果你想让系统表空间对应文件系统上多个实际文件，或者仅仅觉得原来的 ibdata1 这个文件名难听，那 可以在 MySQL 启动时配置对应的文件路径以及它们的大小，比如我们这样修改一下配置文件：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>server<span class="token punctuation">]</span>
innodb_data_file_path<span class="token operator">=</span>data1:<span class="token number">512</span>M<span class="token punctuation">;</span>data2:<span class="token number">512</span>M:autoextend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在 MySQL 启动之后就会创建这两个512M大小的文件作为 系统表空间 ，其中的 autoextend 表明这两个文件 如果不够用会自动扩展 data2 文件的大小。</p><p>系统表空间只有一份。从MySQL5.5.7到MySQL5.6.6之间的各个版 本中，我们表中的数据都会被默认存储到这个 <strong>系统表空间。</strong></p><p><strong>独立表空间(file-per-table tablespace)</strong></p><p>在MySQL5.6.6以及之后的版本中，<code>InnoDB</code>并不会默认的把各个表的数据存储到系统表空间中，而是为每一个表 建立一个<code>独立表空间</code>，也就是说我们创建了多少个表，就有多少个独立表空间。使用 独立表空间 来存储表数据 的话，会在该表所属数据库对应的子目录下创建一个表示该 独立表空间 的文件，文件名和表名相同，只不过添 加了一个 .ibd 的扩展名而已，所以完整的文件名称长这样：</p><p>表名.ibd</p><p>比方说假如我们使用了 独立表空间 去存储 xiaohaizi 数据库下的 test 表的话，那么在该表所在数据库对应的 xiaohaizi 目录下会为 test 表创建这两个文件：</p><p>test.frm</p><p>test.ibd</p><p>其中 test.ibd 文件就用来存储 test 表中的数据和索引。当然我们也可以自己指定使用 系统表空间 还是 独立 表空间 来存储数据，这个功能由启动参数 innodb_file_per_table 控制，比如说我们想刻意将表数据都存储到 系统表空间 时，可以在启动 MySQL 服务器的时候这样配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[server]
innodb_file_per_table=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当 innodb_file_per_table 的值为 0 时，代表使用系统表空间；当 innodb_file_per_table 的值为 1 时，代表 使用独立表空间。不过 innodb_file_per_table 参数只对新建的表起作用，对于已经分配了表空间的表并不起作 用。如果我们想把已经存在系统表空间中的表转移到独立表空间，可以使用下边的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE 表名 TABLESPACE [=] innodb_file_per_table;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者把已经存在独立表空间的表转移到系统表空间，可以使用下边的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE 表名 TABLESPACE [=] innodb_system;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中中括号扩起来的 = 可有可无，比方说我们想把 test 表从独立表空间移动到系统表空间，可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE test TABLESPACE innodb_system;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>其他类型的表空间</strong></p><p>随着MySQL的发展，除了上述两种老牌表空间之外，现在还新提出了一些不同类型的表空间，比如通用表空间 （general tablespace）、<code>undo表空间</code>（undo tablespace）、<code>临时表空间</code>（temporary tablespace）吧啦吧啦 的，具体情况我们就不细唠叨了，等用到的时候再提。</p><h4 id="myisam是如何存储表数据的" tabindex="-1"><a class="header-anchor" href="#myisam是如何存储表数据的" aria-hidden="true">#</a> MyISAM是如何存储表数据的</h4><p>我们知道不像 InnoDB 的索引和数据 是一个东东，在 MyISAM 中的索引全部都是 二级索引 ，该存储引擎的数据和索引是分开存放的。所以在文件系统 中也是使用不同的文件来存储数据文件和索引文件。而且和 InnoDB 不同的是， MyISAM 并没有什么所谓的 表空 间 一说，表数据都存放到对应的数据库子目录下。假如 test 表使用 MyISAM 存储引擎的话，那么在它所在数据 库对应的 xiaohaizi 目录下会为 test 表创建这三个文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test.frm
test.MYD
test.MYI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>test.MYD</code>代表表的数据文件，也就是我们插入的用户记录；<code>test.MYI</code>代表表的索引文件，我们为该表创建 的索引都会放到这个文件中。</p><h3 id="视图在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#视图在文件系统中的表示" aria-hidden="true">#</a> 视图在文件系统中的表示</h3><p>我们知道 MySQL 中的视图其实是虚拟的表，也就是某个查询语句的一个别名而已，所以在存储 视图 的时候是不 需要存储真实的数据的，只需要把它的结构存储起来就行了。和 表 一样，描述视图结构的文件也会被存储到所 属数据库对应的子目录下边，只会存储一个 视图名.frm 的文件。</p><h3 id="其他的文件" tabindex="-1"><a class="header-anchor" href="#其他的文件" aria-hidden="true">#</a> 其他的文件</h3><p>除了我们上边说的这些用户自己存储的数据以外， 数据目录 下还包括为了更好运行程序的一些额外文件，主要 包括这几种类型的文件：</p><ul><li>服务器进程文件。</li></ul><p>我们知道每运行一个 MySQL 服务器程序，都意味着启动一个进程。 MySQL 服务器会把自己的进程ID写入到一个文件中。</p><ul><li>服务器日志文件。</li></ul><p>在服务器运行过程中，会产生各种各样的日志，比如常规的查询日志、错误日志、二进制日志、redo日志吧啦吧啦各种日志，这些日志各有各的用途，我们之后会重点唠叨各种日志的用途，现在先了解一下就可以了。</p><ul><li>默认/自动生成的SSL和RSA证书和密钥文件。</li></ul><p>主要是为了客户端和服务器安全通信而创建的一些文件</p><h2 id="文件系统对数据库的影响" tabindex="-1"><a class="header-anchor" href="#文件系统对数据库的影响" aria-hidden="true">#</a> 文件系统对数据库的影响</h2><p>因为 MySQL 的数据都是存在文件系统中的，就不得不受到文件系统的一些制约，这在数据库和表的命名、表的大 小和性能方面体现的比较明显，比如下边这些方面：</p><ul><li>数据库名称和表名称不得超过文件系统所允许的最大长度。</li></ul><p>每个数据库都对应 数据目录 的一个子目录，数据库名称就是这个子目录的名称；每个表都会在数据库子目 录下产生一个和表名同名的 .frm 文件，如果是 InnoDB 的独立表空间或者使用 MyISAM 引擎还会有别的文件 的名称与表名一致。这些目录或文件名的长度都受限于文件系统所允许的长度～</p><ul><li>特殊字符的问题</li></ul><p>为了避免因为数据库名和表名出现某些特殊字符而造成文件系统不支持的情况， MySQL 会把数据库名和表名 中所有除数字和拉丁字母以外的所有字符在文件名里都映射成 @+编码值 的形式作为文件名。比方说我们创 建的表的名称为 &#39;test?&#39; ，由于 ? 不属于数字或者拉丁字母，所以会被映射成编码值，所以这个表对应 的 .frm 文件的名称就变成了 test@003f.frm 。</p><ul><li>文件长度受文件系统最大长度限制</li></ul><p>对于 InnoDB 的独立表空间来说，每个表的数据都会被存储到一个与表名同名的 .ibd 文件中；对于 MyISAM 存储引擎来说，数据和索引会分别存放到与表同名的 .MYD 和 .MYI 文件中。这些文件会随着表中记录的增加 而增大，它们的大小受限于文件系统支持的最大文件大小。</p><h2 id="mysql系统数据库简介" tabindex="-1"><a class="header-anchor" href="#mysql系统数据库简介" aria-hidden="true">#</a> MySQL系统数据库简介</h2><ul><li>mysql</li></ul><p>这个数据库贼核心，它存储了MySQL的用户账户和权限信息，一些存储过程、事件的定义信息，一些运行过 程中产生的日志信息，一些帮助信息以及时区信息等。</p><ul><li>information_schema</li></ul><p>这个数据库保存着MySQL服务器维护的所有其他数据库的信息，比如有哪些表、哪些视图、哪些触发器、哪些列、哪些索引吧啦吧啦。这些信息并不是真实的用户数据，而是一些描述性信息，有时候也称之为元数据。</p><ul><li>performance_schema</li></ul><p>这个数据库里主要保存MySQL服务器运行过程中的一些状态信息，算是对MySQL服务器的一个性能监控。包括统计最近执行了哪些语句，在执行过程的每个阶段都花费了多长时间，内存的使用情况等等信息。</p><ul><li>sys</li></ul><p>这个数据库主要是通过视图的形式把 information_schema 和 performance_schema 结合起来，让程序员可以更方便的了解MySQL服务器的一些性能信息。</p>`,82),r=[p];function i(t,d){return n(),a("div",null,r)}const o=s(l,[["render",i],["__file","5.Mysql数据目录.html.vue"]]);export{o as default};
