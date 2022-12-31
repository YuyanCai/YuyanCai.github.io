const e=JSON.parse('{"key":"v-ddec7244","path":"/mysql/3.B_%E6%A0%91%E7%B4%A2%E5%BC%95.html","title":"B+树索引","lang":"en-US","frontmatter":{"title":"B+树索引","description":"各个数据页可以组成一个 双向链表 ，而每个数据页 中的记录会按照主键值从小到大的顺序组成一个 单向链表 ，每个数据页都会为存储在它里边儿的记录生成一个 页目录 ，在通过主键查找某条记录的时候可以在 页目录 中使用二分法快速定位到对应的槽，然后再遍历该槽对 应分组中的记录即可快速找到指定的记录 image-20220905220432937 没有索引的查...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/mysql/3.B_%E6%A0%91%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"小蔡coding"}],["meta",{"property":"og:title","content":"B+树索引"}],["meta",{"property":"og:description","content":"各个数据页可以组成一个 双向链表 ，而每个数据页 中的记录会按照主键值从小到大的顺序组成一个 单向链表 ，每个数据页都会为存储在它里边儿的记录生成一个 页目录 ，在通过主键查找某条记录的时候可以在 页目录 中使用二分法快速定位到对应的槽，然后再遍历该槽对 应分组中的记录即可快速找到指定的记录 image-20220905220432937 没有索引的查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-31T12:07:23.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-31T12:07:23.000Z"}]]},"headers":[{"level":2,"title":"没有索引的查找","slug":"没有索引的查找","link":"#没有索引的查找","children":[{"level":3,"title":"在一个页中的查找","slug":"在一个页中的查找","link":"#在一个页中的查找","children":[]},{"level":3,"title":"在很多页中查找","slug":"在很多页中查找","link":"#在很多页中查找","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"一个简单的索引方案","slug":"一个简单的索引方案","link":"#一个简单的索引方案","children":[]},{"level":3,"title":"InnoDB中的索引方案","slug":"innodb中的索引方案","link":"#innodb中的索引方案","children":[]},{"level":3,"title":"聚簇索引","slug":"聚簇索引","link":"#聚簇索引","children":[]},{"level":3,"title":"二级索引","slug":"二级索引","link":"#二级索引","children":[]},{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":3,"title":"InnoDB的B+树索引的注意事项","slug":"innodb的b-树索引的注意事项","link":"#innodb的b-树索引的注意事项","children":[]}]}],"git":{"createdTime":1672488443000,"updatedTime":1672488443000,"contributors":[{"name":"xiaocai","email":"mildcaq@163.com","commits":1}]},"readingTime":{"minutes":25.29,"words":7587},"filePathRelative":"mysql/3.B+树索引.md","localizedDate":"December 31, 2022","autoDesc":true}');export{e as data};
