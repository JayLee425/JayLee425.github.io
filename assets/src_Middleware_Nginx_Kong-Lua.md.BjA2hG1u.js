import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.DPDPlp3K.js";const m=JSON.parse('{"title":"Kong with Lua(zh-CN)","description":"","frontmatter":{},"headers":[],"relativePath":"src/Middleware/Nginx/Kong-Lua.md","filePath":"src/Middleware/Nginx/Kong-Lua.md","lastUpdated":1737139361000}'),l={name:"src/Middleware/Nginx/Kong-Lua.md"};function i(r,s,c,b,u,t){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="kong-with-lua-zh-cn" tabindex="-1">Kong with Lua(zh-CN) <a class="header-anchor" href="#kong-with-lua-zh-cn" aria-label="Permalink to &quot;Kong with Lua(zh-CN)&quot;">​</a></h1><h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h2><p>Kong 是一个基于 Nginx 的 API 网关，它使用 Lua 脚本进行扩展。Kong 的 Lua 脚本可以用于处理请求和响应，进行身份验证、授权、速率限制、日志记录等操作。</p><h2 id="_2-安装" tabindex="-1">2. 安装 <a class="header-anchor" href="#_2-安装" aria-label="Permalink to &quot;2. 安装&quot;">​</a></h2><p>Kong 可以通过 LuaRocks 安装，也可以通过源码安装。</p><h3 id="_2-1-安装-luarocks" tabindex="-1">2.1 安装 LuaRocks <a class="header-anchor" href="#_2-1-安装-luarocks" aria-label="Permalink to &quot;2.1 安装 LuaRocks&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>luarocks install kong</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2-安装源码" tabindex="-1">2.2 安装源码 <a class="header-anchor" href="#_2-2-安装源码" aria-label="Permalink to &quot;2.2 安装源码&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/Kong/kong.git</span></span>
<span class="line"><span>cd kong</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>sudo make install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-配置" tabindex="-1">3. 配置 <a class="header-anchor" href="#_3-配置" aria-label="Permalink to &quot;3. 配置&quot;">​</a></h2><p>Kong 的配置文件位于 <code>/etc/kong/kong.conf</code>，默认情况下，Kong 会监听 8000 端口，并使用 <code>/etc/kong/kong.yml</code> 配置文件。</p><h3 id="_3-1-配置文件" tabindex="-1">3.1 配置文件 <a class="header-anchor" href="#_3-1-配置文件" aria-label="Permalink to &quot;3.1 配置文件&quot;">​</a></h3><p>Kong 的配置文件 <code>/etc/kong/kong.conf</code> 包含以下内容：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Kong node name</span></span>
<span class="line"><span>node_name = &quot;kong&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong database configuration</span></span>
<span class="line"><span>database = postgres</span></span>
<span class="line"><span>pg_host = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>pg_port = 5432</span></span>
<span class="line"><span>pg_user = &quot;kong&quot;</span></span>
<span class="line"><span>pg_password = &quot;kong&quot;</span></span>
<span class="line"><span>pg_database = &quot;kong&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx configuration</span></span>
<span class="line"><span>nginx_working_dir = &quot;/usr/local/kong/nginx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong plugins</span></span>
<span class="line"><span>plugins = &quot;bundled&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong admin API port</span></span>
<span class="line"><span>admin_listen = &quot;127.0.0.1:8001&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong proxy port</span></span>
<span class="line"><span>proxy_listen = &quot;0.0.0.0:8000&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong SSL port</span></span>
<span class="line"><span>ssl_listen = &quot;0.0.0.0:8443&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong status API port</span></span>
<span class="line"><span>status_listen = &quot;127.0.0.1:8100&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx error log</span></span>
<span class="line"><span>error_log = &quot;/usr/local/kong/logs/error.log&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx access log</span></span>
<span class="line"><span>access_log = &quot;/usr/local/kong/logs/access.log&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client body buffer size</span></span>
<span class="line"><span>client_body_buffer_size = &quot;128k&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client max body size</span></span>
<span class="line"><span>client_max_body_size = &quot;128m&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx keepalive timeout</span></span>
<span class="line"><span>keepalive_timeout = 60</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx worker processes</span></span>
<span class="line"><span>worker_processes = &quot;auto&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx worker rlimit_nofile</span></span>
<span class="line"><span>worker_rlimit_nofile = 100000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx resolver</span></span>
<span class="line"><span>resolver = &quot;127.0.0.1:53&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl ciphers</span></span>
<span class="line"><span>ssl_ciphers = &quot;EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl protocols</span></span>
<span class="line"><span>ssl_protocols = &quot;TLSv1.2 TLSv1.1 TLSv1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl session cache</span></span>
<span class="line"><span>ssl_session_cache = &quot;shared:SSL:10m&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl session timeout</span></span>
<span class="line"><span>ssl_session_timeout = &quot;10m&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl certificate</span></span>
<span class="line"><span>ssl_certificate = &quot;/path/to/kong.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl certificate key</span></span>
<span class="line"><span>ssl_certificate_key = &quot;/path/to/kong.key&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx ssl dhparam</span></span>
<span class="line"><span>ssl_dhparam = &quot;/path/to/dhparam.pem&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx trusted certificate authorities</span></span>
<span class="line"><span>lua_ssl_trusted_certificate = &quot;/path/to/ca.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate</span></span>
<span class="line"><span>lua_ssl_verify_depth = 1</span></span>
<span class="line"><span>lua_ssl_verify_core = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate</span></span>
<span class="line"><span>lua_ssl_trusted_certificate = &quot;/path/to/ca.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate key</span></span>
<span class="line"><span>lua_ssl_client_certificate = &quot;/path/to/client.crt&quot;</span></span>
<span class="line"><span>lua_ssl_client_certificate_key = &quot;/path/to/client.key&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate verify</span></span>
<span class="line"><span>lua_ssl_verify_depth = 1</span></span>
<span class="line"><span>lua_ssl_verify_core = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx resolver</span></span>
<span class="line"><span>lua_dns_resolver = &quot;127.0.0.1:53&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx trusted certificate authorities</span></span>
<span class="line"><span>lua_ssl_trusted_certificate = &quot;/path/to/ca.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate</span></span>
<span class="line"><span>lua_ssl_verify_depth = 1</span></span>
<span class="line"><span>lua_ssl_verify_core = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate</span></span>
<span class="line"><span>lua_ssl_trusted_certificate = &quot;/path/to/ca.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Kong nginx client certificate key</span></span>
<span class="line"><span>lua_ssl_client_certificate = &quot;/path/to/client.crt&quot;</span></span>
<span class="line"><span>lua_ssl_client_certificate_key = &quot;/path/to/client.key&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br></div></div><h3 id="_3-2-路由" tabindex="-1">3.2 路由 <a class="header-anchor" href="#_3-2-路由" aria-label="Permalink to &quot;3.2 路由&quot;">​</a></h3><p>Kong 的路由配置位于 <code>/etc/kong/kong.yml</code>，默认情况下，Kong 会监听 8000 端口，并使用 <code>/etc/kong/kong.yml</code> 配置文件。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_format_version: &quot;1.1&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>- name: example-service</span></span>
<span class="line"><span>  host: example.com</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - name: example-route</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>    - /example</span></span>
<span class="line"><span>    strip_path: false</span></span>
<span class="line"><span>    preserve_host: false</span></span>
<span class="line"><span>    https_redirect: true</span></span>
<span class="line"><span>    methods:</span></span>
<span class="line"><span>    - GET</span></span>
<span class="line"><span>    - POST</span></span>
<span class="line"><span>    - PUT</span></span>
<span class="line"><span>    - PATCH</span></span>
<span class="line"><span>    - DELETE</span></span>
<span class="line"><span>    - OPTIONS</span></span>
<span class="line"><span>    - HEAD</span></span>
<span class="line"><span>    - CONNECT</span></span>
<span class="line"><span>    - TRACE</span></span>
<span class="line"><span>    - COPY</span></span>
<span class="line"><span>    - LOCK</span></span>
<span class="line"><span>    - MKCOL</span></span>
<span class="line"><span>    - MOVE</span></span>
<span class="line"><span>    - PROPFIND</span></span>
<span class="line"><span>    - PROPPATCH</span></span>
<span class="line"><span>    - SEARCH</span></span>
<span class="line"><span>    - UNLOCK</span></span>
<span class="line"><span>    - BIND</span></span>
<span class="line"><span>    - REBIND</span></span>
<span class="line"><span>    - UNBIND</span></span>
<span class="line"><span>    - ACL</span></span>
<span class="line"><span>    - REPORT</span></span>
<span class="line"><span>    - MKCALENDAR</span></span>
<span class="line"><span>    - MKACTIVITY</span></span>
<span class="line"><span>    - ORDERPATCH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h3 id="_3-3-身份验证" tabindex="-1">3.3 身份验证 <a class="header-anchor" href="#_3-3-身份验证" aria-label="Permalink to &quot;3.3 身份验证&quot;">​</a></h3><p>Kong 的身份验证配置位于 <code>/etc/kong/kong.yml</code>，默认情况下，Kong 会监听 8000 端口，并使用 <code>/etc/kong/kong.yml</code> 配置文件。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_format_version: &quot;1.1&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>- name: example-service</span></span>
<span class="line"><span>  host: example.com</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - name: example-route</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>    - /example</span></span>
<span class="line"><span>    strip_path: false</span></span>
<span class="line"><span>    preserve_host: false</span></span>
<span class="line"><span>    https_redirect: true</span></span>
<span class="line"><span>    methods:</span></span>
<span class="line"><span>    - GET</span></span>
<span class="line"><span>    - POST</span></span>
<span class="line"><span>    - PUT</span></span>
<span class="line"><span>    - PATCH</span></span>
<span class="line"><span>    - DELETE</span></span>
<span class="line"><span>    - OPTIONS</span></span>
<span class="line"><span>    - HEAD</span></span>
<span class="line"><span>    - CONNECT</span></span>
<span class="line"><span>    - TRACE</span></span>
<span class="line"><span>    - COPY</span></span>
<span class="line"><span>    - LOCK</span></span>
<span class="line"><span>    - MKCOL</span></span>
<span class="line"><span>    - MOVE</span></span>
<span class="line"><span>    - PROPFIND</span></span>
<span class="line"><span>    - PROPPATCH</span></span>
<span class="line"><span>    - SEARCH</span></span>
<span class="line"><span>    - UNLOCK</span></span>
<span class="line"><span>    - BIND</span></span>
<span class="line"><span>    - REBIND</span></span>
<span class="line"><span>    - UNBIND</span></span>
<span class="line"><span>    - ACL</span></span>
<span class="line"><span>    - REPORT</span></span>
<span class="line"><span>    - MKCALENDAR</span></span>
<span class="line"><span>    - MKACTIVITY</span></span>
<span class="line"><span>    - ORDERPATCH</span></span>
<span class="line"><span>  plugins:</span></span>
<span class="line"><span>  - name: key-auth</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      key_names:</span></span>
<span class="line"><span>      - mykey</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="_3-4-速率限制" tabindex="-1">3.4 速率限制 <a class="header-anchor" href="#_3-4-速率限制" aria-label="Permalink to &quot;3.4 速率限制&quot;">​</a></h3><p>Kong 的速率限制配置位于 <code>/etc/kong/kong.yml</code>，默认情况下，Kong 会监听 8000 端口，并使用 <code>/etc/kong/kong.yml</code> 配置文件。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_format_version: &quot;1.1&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>- name: example-service</span></span>
<span class="line"><span>  host: example.com</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - name: example-route</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>    - /example</span></span>
<span class="line"><span>    strip_path: false</span></span>
<span class="line"><span>    preserve_host: false</span></span>
<span class="line"><span>    https_redirect: true</span></span>
<span class="line"><span>    methods:</span></span>
<span class="line"><span>    - GET</span></span>
<span class="line"><span>    - POST</span></span>
<span class="line"><span>    - PUT</span></span>
<span class="line"><span>    - PATCH</span></span>
<span class="line"><span>    - DELETE</span></span>
<span class="line"><span>    - OPTIONS</span></span>
<span class="line"><span>    - HEAD</span></span>
<span class="line"><span>    - CONNECT</span></span>
<span class="line"><span>    - TRACE</span></span>
<span class="line"><span>    - COPY</span></span>
<span class="line"><span>    - LOCK</span></span>
<span class="line"><span>    - MKCOL</span></span>
<span class="line"><span>    - MOVE</span></span>
<span class="line"><span>    - PROPFIND</span></span>
<span class="line"><span>    - PROPPATCH</span></span>
<span class="line"><span>    - SEARCH</span></span>
<span class="line"><span>    - UNLOCK</span></span>
<span class="line"><span>    - BIND</span></span>
<span class="line"><span>    - REBIND</span></span>
<span class="line"><span>    - UNBIND</span></span>
<span class="line"><span>    - ACL</span></span>
<span class="line"><span>    - REPORT</span></span>
<span class="line"><span>    - MKCALENDAR</span></span>
<span class="line"><span>    - MKACTIVITY</span></span>
<span class="line"><span>    - ORDERPATCH</span></span>
<span class="line"><span>  plugins:</span></span>
<span class="line"><span>  - name: rate-limiting</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      minute: 1000</span></span>
<span class="line"><span>      hour: 10000</span></span>
<span class="line"><span>      day: 100000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_3-5-日志记录" tabindex="-1">3.5 日志记录 <a class="header-anchor" href="#_3-5-日志记录" aria-label="Permalink to &quot;3.5 日志记录&quot;">​</a></h3><p>Kong 的日志记录配置位于 <code>/etc/kong/kong.yml</code>，默认情况下，Kong 会监听 8000 端口，并使用 <code>/etc/kong/kong.yml</code> 配置文件。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>_format_version: &quot;1.1&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>- name: example-service</span></span>
<span class="line"><span>  host: example.com</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - name: example-route</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>    - /example</span></span>
<span class="line"><span>    strip_path: false</span></span>
<span class="line"><span>    preserve_host: false</span></span>
<span class="line"><span>    https_redirect: true</span></span>
<span class="line"><span>    methods:</span></span>
<span class="line"><span>    - GET</span></span>
<span class="line"><span>    - POST</span></span>
<span class="line"><span>    - PUT</span></span>
<span class="line"><span>    - PATCH</span></span>
<span class="line"><span>    - DELETE</span></span>
<span class="line"><span>    - OPTIONS</span></span>
<span class="line"><span>    - HEAD</span></span>
<span class="line"><span>    - CONNECT</span></span>
<span class="line"><span>    - TRACE</span></span>
<span class="line"><span>    - COPY</span></span>
<span class="line"><span>    - LOCK</span></span>
<span class="line"><span>    - MKCOL</span></span>
<span class="line"><span>    - MOVE</span></span>
<span class="line"><span>    - PROPFIND</span></span>
<span class="line"><span>    - PROPPATCH</span></span>
<span class="line"><span>    - SEARCH</span></span>
<span class="line"><span>    - UNLOCK</span></span>
<span class="line"><span>    - BIND</span></span>
<span class="line"><span>    - REBIND</span></span>
<span class="line"><span>    - UNBIND</span></span>
<span class="line"><span>    - ACL</span></span>
<span class="line"><span>    - REPORT</span></span>
<span class="line"><span>    - MKCALENDAR</span></span>
<span class="line"><span>    - MKACTIVITY</span></span>
<span class="line"><span>    - ORDERPATCH</span></span>
<span class="line"><span>  plugins:</span></span>
<span class="line"><span>  - name: request-termination</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      message: &quot;Request terminated&quot;</span></span>
<span class="line"><span>  - name: request-size-limiting</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      allowed_payload_size: 1024</span></span>
<span class="line"><span>  - name: response-ratelimiting</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      limit: 1000</span></span>
<span class="line"><span>      window_size: 60</span></span>
<span class="line"><span>      response_headers:</span></span>
<span class="line"><span>      - X-RateLimit-Limit</span></span>
<span class="line"><span>      - X-RateLimit-Remaining</span></span>
<span class="line"><span>      - X-RateLimit-Reset</span></span>
<span class="line"><span>  - name: response-size-limiting</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      allowed_response_size: 1024</span></span>
<span class="line"><span>  - name: access-log</span></span>
<span class="line"><span>    config:</span></span>
<span class="line"><span>      http_method: true</span></span>
<span class="line"><span>      http_url: true</span></span>
<span class="line"><span>      status: true</span></span>
<span class="line"><span>      request_size: true</span></span>
<span class="line"><span>      response_size: true</span></span>
<span class="line"><span>      request_time: true</span></span>
<span class="line"><span>      upstream_latency: true</span></span>
<span class="line"><span>      client_ip: true</span></span>
<span class="line"><span>      client_port: true</span></span>
<span class="line"><span>      upstream_service_time: true</span></span>
<span class="line"><span>      upstream_host: true</span></span>
<span class="line"><span>      upstream_url: true</span></span>
<span class="line"><span>      request_id: true</span></span>
<span class="line"><span>      api_key: true</span></span>
<span class="line"><span>      consumer_id: true</span></span>
<span class="line"><span>      service_id: true</span></span>
<span class="line"><span>      route_id: true</span></span>
<span class="line"><span>      request_path: true</span></span>
<span class="line"><span>      request_method: true</span></span>
<span class="line"><span>      request_headers:</span></span>
<span class="line"><span>      - X-Custom-Header</span></span>
<span class="line"><span>      response_headers:</span></span>
<span class="line"><span>      - X-Custom-Header</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><h2 id="_4-参考" tabindex="-1">4. 参考 <a class="header-anchor" href="#_4-参考" aria-label="Permalink to &quot;4. 参考&quot;">​</a></h2><ul><li><a href="https://docs.konghq.com/gateway-oss/2.5.x/lua-reference/" target="_blank" rel="noreferrer">Kong with Lua</a> - Kong 文档 - Lua 参考</li><li><a href="https://docs.konghq.com/gateway-oss/2.5.x/lua-plugin-development/" target="_blank" rel="noreferrer">Kong with Lua</a> - Kong 文档 - Lua 插件开发</li></ul>`,28)]))}const d=n(l,[["render",i]]);export{m as __pageData,d as default};
