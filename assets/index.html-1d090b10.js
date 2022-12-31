const l=JSON.parse('{"key":"v-dc384366","path":"/redis/","title":"Redis","lang":"en-US","frontmatter":{"title":"Redis","description":"1.1 NoSql数据库 1.1.1 概述 ACID是衡量事务的四个特性： - 原子性（Atomicity，或称不可分割性） - 一致性（Consistency） - 隔离性（Isolation） - 持久性（Durability） 非关系型数据库就是没用遵循关系代数模式的数据库。举一些例子： 1. 文档数据库，没研究过定义，通常mongodb 就是文...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/redis/"}],["meta",{"property":"og:site_name","content":"小蔡coding"}],["meta",{"property":"og:title","content":"Redis"}],["meta",{"property":"og:description","content":"1.1 NoSql数据库 1.1.1 概述 ACID是衡量事务的四个特性： - 原子性（Atomicity，或称不可分割性） - 一致性（Consistency） - 隔离性（Isolation） - 持久性（Durability） 非关系型数据库就是没用遵循关系代数模式的数据库。举一些例子： 1. 文档数据库，没研究过定义，通常mongodb 就是文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-31T12:07:23.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-31T12:07:23.000Z"}]]},"headers":[{"level":2,"title":"1.1 NoSql数据库","slug":"_1-1-nosql数据库","link":"#_1-1-nosql数据库","children":[{"level":3,"title":"1.1.1 概述","slug":"_1-1-1-概述","link":"#_1-1-1-概述","children":[]},{"level":3,"title":"1.1.2  NoSQL适用场景","slug":"_1-1-2-nosql适用场景","link":"#_1-1-2-nosql适用场景","children":[]},{"level":3,"title":"1.1.3 NoSQL不适用场景","slug":"_1-1-3-nosql不适用场景","link":"#_1-1-3-nosql不适用场景","children":[]},{"level":3,"title":"1.1.4 常见的NoSql","slug":"_1-1-4-常见的nosql","link":"#_1-1-4-常见的nosql","children":[]}]},{"level":2,"title":"2.1 应用场景","slug":"_2-1-应用场景","link":"#_2-1-应用场景","children":[{"level":3,"title":"2.1.1 配合关系型数据库做高速缓存","slug":"_2-1-1-配合关系型数据库做高速缓存","link":"#_2-1-1-配合关系型数据库做高速缓存","children":[]},{"level":3,"title":"2.1.2  多样的数据结构存储持久化数据","slug":"_2-1-2-多样的数据结构存储持久化数据","link":"#_2-1-2-多样的数据结构存储持久化数据","children":[]}]},{"level":2,"title":"2.2 安装redis","slug":"_2-2-安装redis","link":"#_2-2-安装redis","children":[{"level":3,"title":"2.2.1 前台启动","slug":"_2-2-1-前台启动","link":"#_2-2-1-前台启动","children":[]},{"level":3,"title":"2.2.2 后台启动","slug":"_2-2-2-后台启动","link":"#_2-2-2-后台启动","children":[]},{"level":3,"title":"2.2.3 测试","slug":"_2-2-3-测试","link":"#_2-2-3-测试","children":[]},{"level":3,"title":"2.2.4 端口6379从何而来","slug":"_2-2-4-端口6379从何而来","link":"#_2-2-4-端口6379从何而来","children":[]}]},{"level":2,"title":"3.1 Redis键(key)","slug":"_3-1-redis键-key","link":"#_3-1-redis键-key","children":[]},{"level":2,"title":"3.2 Redis字符串","slug":"_3-2-redis字符串","link":"#_3-2-redis字符串","children":[{"level":3,"title":"3.2.1 常用命令","slug":"_3-2-1-常用命令","link":"#_3-2-1-常用命令","children":[]},{"level":3,"title":"3.2.2 数据结构","slug":"_3-2-2-数据结构","link":"#_3-2-2-数据结构","children":[]}]},{"level":2,"title":"3.3 Redis列表（List）","slug":"_3-3-redis列表-list","link":"#_3-3-redis列表-list","children":[{"level":3,"title":"3.3.1  常用命令","slug":"_3-3-1-常用命令","link":"#_3-3-1-常用命令","children":[]},{"level":3,"title":"3.3.2  数据结构","slug":"_3-3-2-数据结构","link":"#_3-3-2-数据结构","children":[]}]},{"level":2,"title":"3.4 Redis集合(Set)","slug":"_3-4-redis集合-set","link":"#_3-4-redis集合-set","children":[{"level":3,"title":"3.4.1 常用命令","slug":"_3-4-1-常用命令","link":"#_3-4-1-常用命令","children":[]}]},{"level":2,"title":"3.5 Redis哈希(Hash)","slug":"_3-5-redis哈希-hash","link":"#_3-5-redis哈希-hash","children":[{"level":3,"title":"3.5.1 常用命令","slug":"_3-5-1-常用命令","link":"#_3-5-1-常用命令","children":[]}]},{"level":2,"title":"3.6 Redis有序集合Zset","slug":"_3-6-redis有序集合zset","link":"#_3-6-redis有序集合zset","children":[{"level":3,"title":"3.6.1 常用命令","slug":"_3-6-1-常用命令","link":"#_3-6-1-常用命令","children":[]}]},{"level":2,"title":"4.1 Units单位","slug":"_4-1-units单位","link":"#_4-1-units单位","children":[]},{"level":2,"title":"4.3 网络相关配置","slug":"_4-3-网络相关配置","link":"#_4-3-网络相关配置","children":[{"level":3,"title":"4.3.1 bind","slug":"_4-3-1-bind","link":"#_4-3-1-bind","children":[]},{"level":3,"title":"4.3.2 protected-mode","slug":"_4-3-2-protected-mode","link":"#_4-3-2-protected-mode","children":[]},{"level":3,"title":"4.3.3 port","slug":"_4-3-3-port","link":"#_4-3-3-port","children":[]},{"level":3,"title":"4.3.4 timeout","slug":"_4-3-4-timeout","link":"#_4-3-4-timeout","children":[]},{"level":3,"title":"4.3.5 tcp-keepalive","slug":"_4-3-5-tcp-keepalive","link":"#_4-3-5-tcp-keepalive","children":[]}]},{"level":2,"title":"4.4 GENERAL通用","slug":"_4-4-general通用","link":"#_4-4-general通用","children":[{"level":3,"title":"4.4.1 daemonize","slug":"_4-4-1-daemonize","link":"#_4-4-1-daemonize","children":[]},{"level":3,"title":"4.4.2 pidfile","slug":"_4-4-2-pidfile","link":"#_4-4-2-pidfile","children":[]},{"level":3,"title":"4.4.3 loglevel","slug":"_4-4-3-loglevel","link":"#_4-4-3-loglevel","children":[]}]},{"level":2,"title":"4.5 SECURITY安全","slug":"_4-5-security安全","link":"#_4-5-security安全","children":[{"level":3,"title":"4.5.1 设置密码","slug":"_4-5-1-设置密码","link":"#_4-5-1-设置密码","children":[]}]},{"level":2,"title":"4.6 LIMITS限制","slug":"_4-6-limits限制","link":"#_4-6-limits限制","children":[{"level":3,"title":"4.6.1 maxclients","slug":"_4-6-1-maxclients","link":"#_4-6-1-maxclients","children":[]},{"level":3,"title":"4.6.2 maxmemory","slug":"_4-6-2-maxmemory","link":"#_4-6-2-maxmemory","children":[]},{"level":3,"title":"4.6.3 maxmemory-policy","slug":"_4-6-3-maxmemory-policy","link":"#_4-6-3-maxmemory-policy","children":[]}]},{"level":2,"title":"5.1 测试","slug":"_5-1-测试","link":"#_5-1-测试","children":[]},{"level":2,"title":"6.1 Bitmaps","slug":"_6-1-bitmaps","link":"#_6-1-bitmaps","children":[{"level":3,"title":"6.1.1 命令","slug":"_6-1-1-命令","link":"#_6-1-1-命令","children":[]}]},{"level":2,"title":"6.2 HyperLogLog","slug":"_6-2-hyperloglog","link":"#_6-2-hyperloglog","children":[{"level":3,"title":"6.2.1 命令","slug":"_6-2-1-命令","link":"#_6-2-1-命令","children":[]}]},{"level":2,"title":"7.1 导包","slug":"_7-1-导包","link":"#_7-1-导包","children":[]},{"level":2,"title":"7.2 各种测试","slug":"_7-2-各种测试","link":"#_7-2-各种测试","children":[]},{"level":2,"title":"7.3 连接Redis注意事项","slug":"_7-3-连接redis注意事项","link":"#_7-3-连接redis注意事项","children":[]},{"level":2,"title":"7.4 手机验证码实例","slug":"_7-4-手机验证码实例","link":"#_7-4-手机验证码实例","children":[]},{"level":2,"title":"8.1 引入依赖","slug":"_8-1-引入依赖","link":"#_8-1-引入依赖","children":[]},{"level":2,"title":"8.2 配置文件","slug":"_8-2-配置文件","link":"#_8-2-配置文件","children":[]},{"level":2,"title":"8.3 测试","slug":"_8-3-测试","link":"#_8-3-测试","children":[]},{"level":2,"title":"9.1 Multi、Exec、discard","slug":"_9-1-multi、exec、discard","link":"#_9-1-multi、exec、discard","children":[]},{"level":2,"title":"9.2 事务的错误处理","slug":"_9-2-事务的错误处理","link":"#_9-2-事务的错误处理","children":[]},{"level":2,"title":"9.3 乐观锁和悲观锁","slug":"_9-3-乐观锁和悲观锁","link":"#_9-3-乐观锁和悲观锁","children":[]},{"level":2,"title":"10.1 RDB","slug":"_10-1-rdb","link":"#_10-1-rdb","children":[]},{"level":2,"title":"10.2 备份是如何执行的","slug":"_10-2-备份是如何执行的","link":"#_10-2-备份是如何执行的","children":[]},{"level":2,"title":"10.3 AOF（Append Only File）","slug":"_10-3-aof-append-only-file","link":"#_10-3-aof-append-only-file","children":[]},{"level":2,"title":"11.1 部署流程","slug":"_11-1-部署流程","link":"#_11-1-部署流程","children":[]},{"level":2,"title":"11.2 复制原理","slug":"_11-2-复制原理","link":"#_11-2-复制原理","children":[]},{"level":2,"title":"11.3 哨兵模式(sentinel)","slug":"_11-3-哨兵模式-sentinel","link":"#_11-3-哨兵模式-sentinel","children":[{"level":3,"title":"11.3.1 初始环境","slug":"_11-3-1-初始环境","link":"#_11-3-1-初始环境","children":[]},{"level":3,"title":"11.3.2 部署","slug":"_11-3-2-部署","link":"#_11-3-2-部署","children":[]},{"level":3,"title":"11.3.3 启动哨兵","slug":"_11-3-3-启动哨兵","link":"#_11-3-3-启动哨兵","children":[]}]},{"level":2,"title":"12.1 出现的问题","slug":"_12-1-出现的问题","link":"#_12-1-出现的问题","children":[]},{"level":2,"title":"12.2 初始化环境","slug":"_12-2-初始化环境","link":"#_12-2-初始化环境","children":[]},{"level":2,"title":"12.3 将6个结点合成一个集群","slug":"_12-3-将6个结点合成一个集群","link":"#_12-3-将6个结点合成一个集群","children":[]},{"level":2,"title":"12.4 集群常用操作","slug":"_12-4-集群常用操作","link":"#_12-4-集群常用操作","children":[]},{"level":2,"title":"13.1 缓存穿透","slug":"_13-1-缓存穿透","link":"#_13-1-缓存穿透","children":[{"level":3,"title":"13.1.1 解决方案","slug":"_13-1-1-解决方案","link":"#_13-1-1-解决方案","children":[]}]},{"level":2,"title":"13.2 缓存击穿","slug":"_13-2-缓存击穿","link":"#_13-2-缓存击穿","children":[{"level":3,"title":"13.2.1 解决方案","slug":"_13-2-1-解决方案","link":"#_13-2-1-解决方案","children":[]}]},{"level":2,"title":"13.3 缓存雪崩","slug":"_13-3-缓存雪崩","link":"#_13-3-缓存雪崩","children":[{"level":3,"title":"13.3.1 解决方案","slug":"_13-3-1-解决方案","link":"#_13-3-1-解决方案","children":[]}]}],"git":{"createdTime":1672488443000,"updatedTime":1672488443000,"contributors":[{"name":"xiaocai","email":"mildcaq@163.com","commits":1}]},"readingTime":{"minutes":38.1,"words":11429},"filePathRelative":"redis/README.md","localizedDate":"December 31, 2022","autoDesc":true}');export{l as data};
