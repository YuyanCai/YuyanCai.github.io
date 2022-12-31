const e=JSON.parse('{"key":"v-3eedabee","path":"/mysql/%E4%BB%8E%E6%A0%B9%E4%B8%8A%E7%90%86%E8%A7%A3Mysql3.html","title":"InnoDB的Buffer Pool","lang":"en-US","frontmatter":{"description":"缓存的重要性 即使我们只需要访问一个页的一条记录，那也需要先把整个页的数据加载到内存中。将整个页加载到内存中后就可以进行 读写访问了，在进行完读写访问之后并不着急把该页对应的内存空间释放掉，而是将其 缓存 起来，这样将来有 请求再次访问该页面时，就可以省去磁盘 IO 的开销了。 InnoDB的Buffer Pool Buffer Pool 设计 Inn...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mysql/%E4%BB%8E%E6%A0%B9%E4%B8%8A%E7%90%86%E8%A7%A3Mysql3.html"}],["meta",{"property":"og:site_name","content":"小蔡coding"}],["meta",{"property":"og:title","content":"InnoDB的Buffer Pool"}],["meta",{"property":"og:description","content":"缓存的重要性 即使我们只需要访问一个页的一条记录，那也需要先把整个页的数据加载到内存中。将整个页加载到内存中后就可以进行 读写访问了，在进行完读写访问之后并不着急把该页对应的内存空间释放掉，而是将其 缓存 起来，这样将来有 请求再次访问该页面时，就可以省去磁盘 IO 的开销了。 InnoDB的Buffer Pool Buffer Pool 设计 Inn..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-31T12:07:23.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-31T12:07:23.000Z"}]]},"headers":[{"level":2,"title":"缓存的重要性","slug":"缓存的重要性","link":"#缓存的重要性","children":[]},{"level":2,"title":"InnoDB的Buffer Pool","slug":"innodb的buffer-pool-1","link":"#innodb的buffer-pool-1","children":[{"level":3,"title":"Buffer Pool","slug":"buffer-pool","link":"#buffer-pool","children":[]}]},{"level":2,"title":"Buffer Pool内部组成","slug":"buffer-pool内部组成","link":"#buffer-pool内部组成","children":[{"level":3,"title":"free链表的管理","slug":"free链表的管理","link":"#free链表的管理","children":[]},{"level":3,"title":"缓存页的哈希处理","slug":"缓存页的哈希处理","link":"#缓存页的哈希处理","children":[]},{"level":3,"title":"flush链表的管理","slug":"flush链表的管理","link":"#flush链表的管理","children":[]},{"level":3,"title":"LRU链表的管理","slug":"lru链表的管理","link":"#lru链表的管理","children":[]},{"level":3,"title":"其他的一些链表","slug":"其他的一些链表","link":"#其他的一些链表","children":[]},{"level":3,"title":"刷新脏页到磁盘","slug":"刷新脏页到磁盘","link":"#刷新脏页到磁盘","children":[]},{"level":3,"title":"多个Buffer Pool实例","slug":"多个buffer-pool实例","link":"#多个buffer-pool实例","children":[]},{"level":3,"title":"Buffer Pool中存储的其它信息","slug":"buffer-pool中存储的其它信息","link":"#buffer-pool中存储的其它信息","children":[]},{"level":3,"title":"查看Buffer Pool的状态信息","slug":"查看buffer-pool的状态信息","link":"#查看buffer-pool的状态信息","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"redo日志是个啥","slug":"redo日志是个啥","link":"#redo日志是个啥","children":[]},{"level":2,"title":"redo日志格式","slug":"redo日志格式","link":"#redo日志格式","children":[{"level":3,"title":"简单的redo日志类型","slug":"简单的redo日志类型","link":"#简单的redo日志类型","children":[]},{"level":3,"title":"复杂一些的redo日志类型","slug":"复杂一些的redo日志类型","link":"#复杂一些的redo日志类型","children":[]},{"level":3,"title":"redo日志格式小结","slug":"redo日志格式小结","link":"#redo日志格式小结","children":[]}]},{"level":2,"title":"Mini-Transaction","slug":"mini-transaction","link":"#mini-transaction","children":[{"level":3,"title":"以组的形式写入redo日志","slug":"以组的形式写入redo日志","link":"#以组的形式写入redo日志","children":[]},{"level":3,"title":"Mini-Transaction的概念","slug":"mini-transaction的概念","link":"#mini-transaction的概念","children":[]}]},{"level":2,"title":"redo日志的写入过程","slug":"redo日志的写入过程","link":"#redo日志的写入过程","children":[{"level":3,"title":"redo log block","slug":"redo-log-block","link":"#redo-log-block","children":[]},{"level":3,"title":"redo日志缓冲区","slug":"redo日志缓冲区","link":"#redo日志缓冲区","children":[]},{"level":3,"title":"redo日志写入log buffer","slug":"redo日志写入log-buffer","link":"#redo日志写入log-buffer","children":[]}]},{"level":2,"title":"redo日志文件","slug":"redo日志文件","link":"#redo日志文件","children":[{"level":3,"title":"redo日志刷盘时机","slug":"redo日志刷盘时机","link":"#redo日志刷盘时机","children":[]},{"level":3,"title":"redo日志文件组","slug":"redo日志文件组","link":"#redo日志文件组","children":[]},{"level":3,"title":"redo日志文件格式","slug":"redo日志文件格式","link":"#redo日志文件格式","children":[]}]},{"level":2,"title":"Log Sequeue Number","slug":"log-sequeue-number","link":"#log-sequeue-number","children":[]},{"level":2,"title":"checkpoint","slug":"checkpoint","link":"#checkpoint","children":[]},{"level":2,"title":"崩溃恢复","slug":"崩溃恢复","link":"#崩溃恢复","children":[{"level":3,"title":"确定恢复的起点","slug":"确定恢复的起点","link":"#确定恢复的起点","children":[]},{"level":3,"title":"确定恢复的终点","slug":"确定恢复的终点","link":"#确定恢复的终点","children":[]},{"level":3,"title":"怎么恢复","slug":"怎么恢复","link":"#怎么恢复","children":[]}]}],"git":{"createdTime":1672488443000,"updatedTime":1672488443000,"contributors":[{"name":"xiaocai","email":"mildcaq@163.com","commits":1}]},"readingTime":{"minutes":46.23,"words":13868},"filePathRelative":"mysql/从根上理解Mysql3.md","localizedDate":"December 31, 2022","autoDesc":true}');export{e as data};
