import{_ as l,c as i,o as e,ag as r}from"./chunks/framework.DPDPlp3K.js";const _=JSON.parse('{"title":"Spring Cloud Design Pattern","description":"","frontmatter":{},"headers":[],"relativePath":"src/backend/spring-cloud/spring-cloud-design-pattern.md","filePath":"src/backend/spring-cloud/spring-cloud-design-pattern.md","lastUpdated":1739530875000}'),t={name:"src/backend/spring-cloud/spring-cloud-design-pattern.md"};function o(n,a,h,u,c,d){return e(),i("div",null,a[0]||(a[0]=[r('<h1 id="spring-cloud-design-pattern" tabindex="-1">Spring Cloud Design Pattern <a class="header-anchor" href="#spring-cloud-design-pattern" aria-label="Permalink to &quot;Spring Cloud Design Pattern&quot;">​</a></h1><h2 id="spring-cloud-源码中的设计模式" tabindex="-1">Spring Cloud 源码中的设计模式 <a class="header-anchor" href="#spring-cloud-源码中的设计模式" aria-label="Permalink to &quot;Spring Cloud 源码中的设计模式&quot;">​</a></h2><h2 id="_1-服务发现模式" tabindex="-1">1. 服务发现模式 <a class="header-anchor" href="#_1-服务发现模式" aria-label="Permalink to &quot;1. 服务发现模式&quot;">​</a></h2><ul><li>核心接口：DiscoveryClient</li><li>核心实现：EurekaDiscoveryClient</li><li>使用场景：服务注册与发现，实现微服务之间的动态调用</li></ul><h2 id="_2-负载均衡模式" tabindex="-1">2. 负载均衡模式 <a class="header-anchor" href="#_2-负载均衡模式" aria-label="Permalink to &quot;2. 负载均衡模式&quot;">​</a></h2><ul><li>核心接口：LoadBalancerClient</li><li>核心实现：RibbonLoadBalancerClient</li><li>使用场景：客户端负载均衡，实现请求的智能路由</li></ul><h2 id="_3-熔断器模式" tabindex="-1">3. 熔断器模式 <a class="header-anchor" href="#_3-熔断器模式" aria-label="Permalink to &quot;3. 熔断器模式&quot;">​</a></h2><ul><li>核心接口：CircuitBreaker</li><li>核心实现：HystrixCircuitBreaker</li><li>使用场景：服务容错保护，防止服务雪崩效应</li></ul><h2 id="_4-配置中心模式" tabindex="-1">4. 配置中心模式 <a class="header-anchor" href="#_4-配置中心模式" aria-label="Permalink to &quot;4. 配置中心模式&quot;">​</a></h2><ul><li>核心接口：PropertySourceLocator</li><li>核心实现：ConfigServicePropertySourceLocator</li><li>使用场景：集中式配置管理，实现配置的动态刷新</li></ul><h2 id="_5-api网关模式" tabindex="-1">5. API网关模式 <a class="header-anchor" href="#_5-api网关模式" aria-label="Permalink to &quot;5. API网关模式&quot;">​</a></h2><ul><li>核心接口：GatewayFilter</li><li>核心实现：GatewayFilterChain</li><li>使用场景：统一API入口，实现路由转发、权限校验等功能</li></ul><h2 id="_6-消息驱动模式" tabindex="-1">6. 消息驱动模式 <a class="header-anchor" href="#_6-消息驱动模式" aria-label="Permalink to &quot;6. 消息驱动模式&quot;">​</a></h2><ul><li>核心接口：MessageChannel</li><li>核心实现：DirectChannel</li><li>使用场景：异步消息处理，实现服务间的解耦</li></ul><h2 id="_7-分布式追踪模式" tabindex="-1">7. 分布式追踪模式 <a class="header-anchor" href="#_7-分布式追踪模式" aria-label="Permalink to &quot;7. 分布式追踪模式&quot;">​</a></h2><ul><li>核心接口：Tracer</li><li>核心实现：BraveTracer</li><li>使用场景：分布式系统调用链追踪，实现问题定位和性能分析</li></ul><h2 id="_8-服务调用模式" tabindex="-1">8. 服务调用模式 <a class="header-anchor" href="#_8-服务调用模式" aria-label="Permalink to &quot;8. 服务调用模式&quot;">​</a></h2><ul><li>核心接口：FeignClient</li><li>核心实现：FeignClientFactoryBean</li><li>使用场景：声明式REST客户端，简化服务间调用</li></ul><h2 id="_9-限流模式" tabindex="-1">9. 限流模式 <a class="header-anchor" href="#_9-限流模式" aria-label="Permalink to &quot;9. 限流模式&quot;">​</a></h2><ul><li>核心接口：RateLimiter</li><li>核心实现：RedisRateLimiter</li><li>使用场景：流量控制，防止系统过载</li></ul><h2 id="_10-服务降级模式" tabindex="-1">10. 服务降级模式 <a class="header-anchor" href="#_10-服务降级模式" aria-label="Permalink to &quot;10. 服务降级模式&quot;">​</a></h2><ul><li>核心接口：Fallback</li><li>核心实现：HystrixCommand</li><li>使用场景：服务不可用时的降级处理，保证系统可用性</li></ul><h2 id="_11-服务注册模式" tabindex="-1">11. 服务注册模式 <a class="header-anchor" href="#_11-服务注册模式" aria-label="Permalink to &quot;11. 服务注册模式&quot;">​</a></h2><ul><li>核心接口：ServiceRegistry</li><li>核心实现：EurekaServiceRegistry</li><li>使用场景：服务实例的注册与注销，实现服务动态管理</li></ul><h2 id="_12-配置刷新模式" tabindex="-1">12. 配置刷新模式 <a class="header-anchor" href="#_12-配置刷新模式" aria-label="Permalink to &quot;12. 配置刷新模式&quot;">​</a></h2><ul><li>核心接口：RefreshScope</li><li>核心实现：RefreshScopeBean</li><li>使用场景：配置动态刷新，实现配置的实时更新</li></ul><h2 id="_13-服务路由模式" tabindex="-1">13. 服务路由模式 <a class="header-anchor" href="#_13-服务路由模式" aria-label="Permalink to &quot;13. 服务路由模式&quot;">​</a></h2><ul><li>核心接口：RouteLocator</li><li>核心实现：CachingRouteLocator</li><li>使用场景：动态路由配置，实现请求的智能转发</li></ul><h2 id="_14-服务监控模式" tabindex="-1">14. 服务监控模式 <a class="header-anchor" href="#_14-服务监控模式" aria-label="Permalink to &quot;14. 服务监控模式&quot;">​</a></h2><ul><li>核心接口：MeterRegistry</li><li>核心实现：CompositeMeterRegistry</li><li>使用场景：服务性能监控，实现系统健康状态的可视化</li></ul><h2 id="_15-服务安全模式" tabindex="-1">15. 服务安全模式 <a class="header-anchor" href="#_15-服务安全模式" aria-label="Permalink to &quot;15. 服务安全模式&quot;">​</a></h2><ul><li>核心接口：SecurityFilterChain</li><li>核心实现：DefaultSecurityFilterChain</li><li>使用场景：服务访问控制，实现身份认证和权限校验</li></ul><h2 id="_16-服务缓存模式" tabindex="-1">16. 服务缓存模式 <a class="header-anchor" href="#_16-服务缓存模式" aria-label="Permalink to &quot;16. 服务缓存模式&quot;">​</a></h2><ul><li>核心接口：CacheManager</li><li>核心实现：ConcurrentMapCacheManager</li><li>使用场景：服务数据缓存，提高系统性能</li></ul><h2 id="_17-服务重试模式" tabindex="-1">17. 服务重试模式 <a class="header-anchor" href="#_17-服务重试模式" aria-label="Permalink to &quot;17. 服务重试模式&quot;">​</a></h2><ul><li>核心接口：RetryTemplate</li><li>核心实现：RetryTemplate</li><li>使用场景：服务调用失败时的重试机制，提高系统可靠性</li></ul><h2 id="_18-服务限流模式" tabindex="-1">18. 服务限流模式 <a class="header-anchor" href="#_18-服务限流模式" aria-label="Permalink to &quot;18. 服务限流模式&quot;">​</a></h2><ul><li>核心接口：RequestRateLimiter</li><li>核心实现：RedisRequestRateLimiter</li><li>使用场景：服务请求限流，防止系统过载</li></ul><h2 id="_19-服务熔断模式" tabindex="-1">19. 服务熔断模式 <a class="header-anchor" href="#_19-服务熔断模式" aria-label="Permalink to &quot;19. 服务熔断模式&quot;">​</a></h2><ul><li>核心接口：CircuitBreakerFactory</li><li>核心实现：Resilience4JCircuitBreakerFactory</li><li>使用场景：服务熔断保护，防止服务雪崩效应</li></ul><h2 id="_20-服务降级模式" tabindex="-1">20. 服务降级模式 <a class="header-anchor" href="#_20-服务降级模式" aria-label="Permalink to &quot;20. 服务降级模式&quot;">​</a></h2><ul><li>核心接口：FallbackFactory</li><li>核心实现：HystrixFallbackFactory</li><li>使用场景：服务不可用时的降级处理，保证系统可用性</li></ul><h2 id="_21-服务路由模式" tabindex="-1">21. 服务路由模式 <a class="header-anchor" href="#_21-服务路由模式" aria-label="Permalink to &quot;21. 服务路由模式&quot;">​</a></h2><ul><li>核心接口：RoutePredicateFactory</li><li>核心实现：PathRoutePredicateFactory</li><li>使用场景：服务请求路由，实现请求的智能转发</li></ul><h2 id="_22-服务监控模式" tabindex="-1">22. 服务监控模式 <a class="header-anchor" href="#_22-服务监控模式" aria-label="Permalink to &quot;22. 服务监控模式&quot;">​</a></h2><ul><li>核心接口：MeterBinder</li><li>核心实现：JvmGcMetrics</li><li>使用场景：服务性能监控，实现系统健康状态的可视化</li></ul><h2 id="_23-服务安全模式" tabindex="-1">23. 服务安全模式 <a class="header-anchor" href="#_23-服务安全模式" aria-label="Permalink to &quot;23. 服务安全模式&quot;">​</a></h2><ul><li>核心接口：SecurityContext</li><li>核心实现：SecurityContextImpl</li><li>使用场景：服务访问控制，实现身份认证和权限校验</li></ul><h2 id="_24-服务缓存模式" tabindex="-1">24. 服务缓存模式 <a class="header-anchor" href="#_24-服务缓存模式" aria-label="Permalink to &quot;24. 服务缓存模式&quot;">​</a></h2><ul><li>核心接口：Cache</li><li>核心实现：ConcurrentMapCache</li><li>使用场景：服务数据缓存，提高系统性能</li></ul>',50)]))}const b=l(t,[["render",o]]);export{_ as __pageData,b as default};
