const e=JSON.parse('{"key":"v-7fca0f21","path":"/mysql/MVCC%E5%8E%9F%E7%90%86.html","title":"MVCC原理","lang":"en-US","frontmatter":{"title":"MVCC原理","description":"版本链 我们前边说过，对于使用 InnoDB 存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列（ rowid 并 不是必要的，我们创建的表中有主键或者非NULL的UNIQUE键时都不会包含 rowid 列）： trx_id ：每次一个事务对某条聚簇索引记录进行改动时，都会把该事务的 事务id 赋值给 trx_id 隐藏列。 ; roll_po...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mysql/MVCC%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"小蔡coding"}],["meta",{"property":"og:title","content":"MVCC原理"}],["meta",{"property":"og:description","content":"版本链 我们前边说过，对于使用 InnoDB 存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列（ rowid 并 不是必要的，我们创建的表中有主键或者非NULL的UNIQUE键时都不会包含 rowid 列）： trx_id ：每次一个事务对某条聚簇索引记录进行改动时，都会把该事务的 事务id 赋值给 trx_id 隐藏列。 ; roll_po..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}]]},"headers":[{"level":2,"title":"版本链","slug":"版本链","link":"#版本链","children":[]},{"level":2,"title":"ReadView","slug":"readview","link":"#readview","children":[{"level":3,"title":"READ COMMITTED —— 每次读取数据前都生成一个ReadView","slug":"read-committed-——-每次读取数据前都生成一个readview","link":"#read-committed-——-每次读取数据前都生成一个readview","children":[]},{"level":3,"title":"REPEATABLE READ —— 在第一次读取数据时生成一个ReadView","slug":"repeatable-read-——-在第一次读取数据时生成一个readview","link":"#repeatable-read-——-在第一次读取数据时生成一个readview","children":[]}]},{"level":2,"title":"可重复读是如何工作的?","slug":"可重复读是如何工作的","link":"#可重复读是如何工作的","children":[]},{"level":2,"title":"读提交是如何工作的？","slug":"读提交是如何工作的","link":"#读提交是如何工作的","children":[]},{"level":2,"title":"MySQL 可重复读隔离级别，完全解决幻读了吗？","slug":"mysql-可重复读隔离级别-完全解决幻读了吗","link":"#mysql-可重复读隔离级别-完全解决幻读了吗","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":21.66,"words":6497},"filePathRelative":"mysql/MVCC原理.md","autoDesc":true}');export{e as data};
