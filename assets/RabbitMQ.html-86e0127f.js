const l=JSON.parse('{"key":"v-f86d4db6","path":"/Java/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/RabbitMQ.html","title":"RabbitMQ","lang":"en-US","frontmatter":{"title":"RabbitMQ","description":"一、消息队列 1.1 MQ相关概念 1.1.1 什么是MQ？ 什么是上下游？ 上游和下游是信息流动的方向。 我们举一个适用于ISP（服务提供商）的上下游例子 ISP关注的是流量。那么上游流量是指数据从不同的ISP的用户传来的。例如，如果你有一个提供订阅通讯的网站，我发送的订阅信息就是上游数据 下游流量是指从一个用户发送到不同ISP的另一个用户的数据，它...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Java/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/RabbitMQ.html"}],["meta",{"property":"og:site_name","content":"小蔡coding"}],["meta",{"property":"og:title","content":"RabbitMQ"}],["meta",{"property":"og:description","content":"一、消息队列 1.1 MQ相关概念 1.1.1 什么是MQ？ 什么是上下游？ 上游和下游是信息流动的方向。 我们举一个适用于ISP（服务提供商）的上下游例子 ISP关注的是流量。那么上游流量是指数据从不同的ISP的用户传来的。例如，如果你有一个提供订阅通讯的网站，我发送的订阅信息就是上游数据 下游流量是指从一个用户发送到不同ISP的另一个用户的数据，它..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}]]},"headers":[{"level":2,"title":"一、消息队列","slug":"一、消息队列","link":"#一、消息队列","children":[{"level":3,"title":"1.1 MQ相关概念","slug":"_1-1-mq相关概念","link":"#_1-1-mq相关概念","children":[]},{"level":3,"title":"1.2 RabbitMQ概念","slug":"_1-2-rabbitmq概念","link":"#_1-2-rabbitmq概念","children":[]}]},{"level":2,"title":"二、Hello World","slug":"二、hello-world","link":"#二、hello-world","children":[{"level":3,"title":"2.1 导入依赖","slug":"_2-1-导入依赖","link":"#_2-1-导入依赖","children":[]},{"level":3,"title":"2.2 消息生产者","slug":"_2-2-消息生产者","link":"#_2-2-消息生产者","children":[]},{"level":3,"title":"2.3 消息消费者","slug":"_2-3-消息消费者","link":"#_2-3-消息消费者","children":[]}]},{"level":2,"title":"三、Work Queues","slug":"三、work-queues","link":"#三、work-queues","children":[{"level":3,"title":"3.1 轮训分发消息","slug":"_3-1-轮训分发消息","link":"#_3-1-轮训分发消息","children":[]},{"level":3,"title":"3.2 消息应答","slug":"_3-2-消息应答","link":"#_3-2-消息应答","children":[]},{"level":3,"title":"3.3 RabbitMQ持久化","slug":"_3-3-rabbitmq持久化","link":"#_3-3-rabbitmq持久化","children":[]}]},{"level":2,"title":"四、发布确认","slug":"四、发布确认","link":"#四、发布确认","children":[{"level":3,"title":"4.1 发布确认原理","slug":"_4-1-发布确认原理","link":"#_4-1-发布确认原理","children":[]},{"level":3,"title":"4.2 发布确认的策略","slug":"_4-2-发布确认的策略","link":"#_4-2-发布确认的策略","children":[]}]},{"level":2,"title":"五、交换机","slug":"五、交换机","link":"#五、交换机","children":[{"level":3,"title":"5.1 Exchange","slug":"_5-1-exchange","link":"#_5-1-exchange","children":[]},{"level":3,"title":"5.2 临时队列","slug":"_5-2-临时队列","link":"#_5-2-临时队列","children":[]},{"level":3,"title":"5.3 绑定（binding）","slug":"_5-3-绑定-binding","link":"#_5-3-绑定-binding","children":[]},{"level":3,"title":"5.4 Fanout","slug":"_5-4-fanout","link":"#_5-4-fanout","children":[]},{"level":3,"title":"5.5 Direct exchange","slug":"_5-5-direct-exchange","link":"#_5-5-direct-exchange","children":[]},{"level":3,"title":"5.6 Topics","slug":"_5-6-topics","link":"#_5-6-topics","children":[]}]},{"level":2,"title":"六、死信队列","slug":"六、死信队列","link":"#六、死信队列","children":[{"level":3,"title":"6.1 死信的概念","slug":"_6-1-死信的概念","link":"#_6-1-死信的概念","children":[]},{"level":3,"title":"6.2 死信的来源","slug":"_6-2-死信的来源","link":"#_6-2-死信的来源","children":[]},{"level":3,"title":"6.3 死信实战","slug":"_6-3-死信实战","link":"#_6-3-死信实战","children":[]}]},{"level":2,"title":"七、延迟队列","slug":"七、延迟队列","link":"#七、延迟队列","children":[{"level":3,"title":"7.1 延迟队列概念","slug":"_7-1-延迟队列概念","link":"#_7-1-延迟队列概念","children":[]},{"level":3,"title":"7.2 延迟队列使用场景","slug":"_7-2-延迟队列使用场景","link":"#_7-2-延迟队列使用场景","children":[]},{"level":3,"title":"7.3 队列设置TTL","slug":"_7-3-队列设置ttl","link":"#_7-3-队列设置ttl","children":[]},{"level":3,"title":"7.4 整合 SpringBoot","slug":"_7-4-整合-springboot","link":"#_7-4-整合-springboot","children":[]},{"level":3,"title":"7.5 队列 TTL","slug":"_7-5-队列-ttl","link":"#_7-5-队列-ttl","children":[]},{"level":3,"title":"7.6 延时队列TTL优化","slug":"_7-6-延时队列ttl优化","link":"#_7-6-延时队列ttl优化","children":[]},{"level":3,"title":"7.7 RabbitMQ插件实现延迟队列","slug":"_7-7-rabbitmq插件实现延迟队列","link":"#_7-7-rabbitmq插件实现延迟队列","children":[]},{"level":3,"title":"7.8 总结","slug":"_7-8-总结","link":"#_7-8-总结","children":[]}]},{"level":2,"title":"八、发布确认高级","slug":"八、发布确认高级","link":"#八、发布确认高级","children":[{"level":3,"title":"8.1 发布确认 springboot 版本","slug":"_8-1-发布确认-springboot-版本","link":"#_8-1-发布确认-springboot-版本","children":[]},{"level":3,"title":"8.2 回退消息","slug":"_8-2-回退消息","link":"#_8-2-回退消息","children":[]},{"level":3,"title":"8.3 备份交换机","slug":"_8-3-备份交换机","link":"#_8-3-备份交换机","children":[]}]},{"level":2,"title":"九、RabbitMQ其他知识点","slug":"九、rabbitmq其他知识点","link":"#九、rabbitmq其他知识点","children":[{"level":3,"title":"9.1 幂等性","slug":"_9-1-幂等性","link":"#_9-1-幂等性","children":[]},{"level":3,"title":"9.2 优先级队列","slug":"_9-2-优先级队列","link":"#_9-2-优先级队列","children":[]},{"level":3,"title":"9.3 惰性队列","slug":"_9-3-惰性队列","link":"#_9-3-惰性队列","children":[]}]},{"level":2,"title":"十、RabbitMQ集群","slug":"十、rabbitmq集群","link":"#十、rabbitmq集群","children":[{"level":3,"title":"10.1 clustering","slug":"_10-1-clustering","link":"#_10-1-clustering","children":[]},{"level":3,"title":"10.2 镜像队列","slug":"_10-2-镜像队列","link":"#_10-2-镜像队列","children":[]},{"level":3,"title":"10.3  Haproxy+Keepalive 实现高可用负载均衡","slug":"_10-3-haproxy-keepalive-实现高可用负载均衡","link":"#_10-3-haproxy-keepalive-实现高可用负载均衡","children":[]}]},{"level":2,"title":"优秀文章参考","slug":"优秀文章参考","link":"#优秀文章参考","children":[]}],"git":{},"readingTime":{"minutes":67.76,"words":20328},"filePathRelative":"Java/微服务开发/RabbitMQ.md","autoDesc":true}');export{l as data};
