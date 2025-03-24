import{_ as e,c as i,o as a,ag as l}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"Docker(zh-CN)","description":"","frontmatter":{},"headers":[],"relativePath":"src/Middleware/Docker/docker-base.md","filePath":"src/Middleware/Docker/docker-base.md","lastUpdated":1737139361000}'),n={name:"src/Middleware/Docker/docker-base.md"};function r(o,s,c,p,k,t){return a(),i("div",null,s[0]||(s[0]=[l(`<h1 id="docker-zh-cn" tabindex="-1">Docker(zh-CN) <a class="header-anchor" href="#docker-zh-cn" aria-label="Permalink to &quot;Docker(zh-CN)&quot;">​</a></h1><h2 id="docker是什么" tabindex="-1">Docker是什么 <a class="header-anchor" href="#docker是什么" aria-label="Permalink to &quot;Docker是什么&quot;">​</a></h2><p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器或 Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。</p><h2 id="docker架构" tabindex="-1">Docker架构 <a class="header-anchor" href="#docker架构" aria-label="Permalink to &quot;Docker架构&quot;">​</a></h2><p>Docker 使用客户端-服务器 (C/S) 架构模式，Docker 客户端与 Docker 服务器进行通信，Docker 服务器负责构建、运行和分发 Docker 容器。Docker 客户端和 Docker 服务器 communicate through a REST API, over a UNIX socket or a network interface.</p><p>Docker 包含三个主要组件：</p><ol><li><p>Docker 客户端 (Docker CLI): 用于构建、运行和分发 Docker 容器的命令行工具。</p></li><li><p>Docker 主机 (Docker daemon): 负责构建、运行和分发 Docker 容器的后台进程。</p></li><li><p>Docker 仓库 (Docker registry): 存放 Docker 镜像的仓库，可以理解为 Docker 镜像的集中管理。</p></li></ol><h2 id="docker的优势" tabindex="-1">Docker的优势 <a class="header-anchor" href="#docker的优势" aria-label="Permalink to &quot;Docker的优势&quot;">​</a></h2><ul><li>轻量级：Docker 容器的大小仅几十 MB，相比于传统虚拟机方式，节省了硬件资源。</li><li>易于使用：Docker 简化了应用的打包和部署流程，使开发者可以专注于应用的开发。</li><li>弹性可伸缩：Docker 基于容器技术，可以轻松应对服务器的弹性扩展。</li><li>便于分享：Docker 镜像可以很容易的分享给其他开发者或操作人员，也可以作为基础设施进行自动化部署。</li><li>安全：Docker 提供了安全的隔离环境，使应用的运行环境更加安全。</li><li>跨平台：Docker 可以在 Linux、Windows 和 macOS 上运行，并提供一致的开发环境。</li></ul><h2 id="docker的使用场景" tabindex="-1">Docker的使用场景 <a class="header-anchor" href="#docker的使用场景" aria-label="Permalink to &quot;Docker的使用场景&quot;">​</a></h2><ul><li>开发环境：Docker 可以在开发环境中替代虚拟机，提供一致的开发环境和工具链，提高开发效率。</li><li>持续集成和部署：借助 Docker，可以实现持续集成和部署，快速响应业务需求。</li><li>云计算：Docker 可以在云计算平台上作为基础设施，提供弹性的计算资源，降低成本。</li><li>微服务：Docker 容器可以作为微服务架构中的一个单独的服务单元，提供灵活的部署和扩展能力。</li><li>数据分析：Docker 容器可以用来进行数据分析，提高数据处理效率。</li><li>物联网：Docker 容器可以用来部署物联网应用，实现远程监控、远程控制等功能。</li></ul><h2 id="docker的安装" tabindex="-1">Docker的安装 <a class="header-anchor" href="#docker的安装" aria-label="Permalink to &quot;Docker的安装&quot;">​</a></h2><p>Docker 可以在 Linux、Windows 和 macOS 上运行，安装方式如下：</p><ul><li>Linux：在 Ubuntu 上，可以使用 apt-get 命令安装 Docker，例如：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.io</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>Windows：在 Windows 上，可以使用 Docker Desktop for Windows 安装 Docker，下载地址为：<a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">https://www.docker.com/products/docker-desktop</a></p></li><li><p>macOS：在 macOS 上，可以使用 Docker Desktop for Mac 安装 Docker，下载地址为：<a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">https://www.docker.com/products/docker-desktop</a></p></li></ul><h2 id="docker的基本命令" tabindex="-1">Docker的基本命令 <a class="header-anchor" href="#docker的基本命令" aria-label="Permalink to &quot;Docker的基本命令&quot;">​</a></h2><ul><li><code>docker run</code>：创建一个新的 Docker 容器。</li><li><code>docker ps</code>：列出当前运行的 Docker 容器。</li><li><code>docker images</code>：列出本地已有的 Docker 镜像。</li><li><code>docker pull</code>：从 Docker Hub 下载 Docker 镜像。</li><li><code>docker build</code>：从 Dockerfile 构建 Docker 镜像。</li><li><code>docker commit</code>：提交当前 Docker 容器为新的 Docker 镜像。</li><li><code>docker push</code>：上传 Docker 镜像到 Docker Hub。</li><li><code>docker rmi</code>：删除 Docker 镜像。</li><li><code>docker rm</code>：删除 Docker 容器。</li><li><code>docker stop</code>：停止 Docker 容器。</li><li><code>docker start</code>：启动 Docker 容器。</li><li><code>docker restart</code>：重启 Docker 容器。</li><li><code>docker logs</code>：查看 Docker 容器的日志。</li><li><code>docker network</code>：管理 Docker 网络。</li><li><code>docker volume</code>：管理 Docker 卷。</li><li><code>docker system</code>：管理 Docker 系统。</li><li><code>docker info</code>：查看 Docker 系统信息。</li><li><code>docker login</code>：登录 Docker Hub。</li><li><code>docker logout</code>：登出 Docker Hub。</li><li><code>docker-compose</code>：使用 Docker Compose 编排 Docker 容器。</li></ul><h2 id="docker的dockerfile" tabindex="-1">Docker的Dockerfile <a class="header-anchor" href="#docker的dockerfile" aria-label="Permalink to &quot;Docker的Dockerfile&quot;">​</a></h2><p>Dockerfile 是用来构建 Docker 镜像的描述文件，通过 Dockerfile，可以轻松创建自定义的镜像。</p><p>Dockerfile 的语法格式如下：</p><div class="language-Dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use an official Python runtime as a parent image</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> python:3.7-slim-buster</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set the working directory to /app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Copy the current directory contents into the container at /app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install any needed packages specified in requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pip install --trusted-host pypi.python.org -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Make port 80 available to the world outside this container</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPOSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define environment variable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NAME World</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run app.py when the container launches</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;app.py&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Dockerfile 的常用指令：</p><ul><li><code>FROM</code>：指定基础镜像，一般选择一个稳定版本的镜像。</li><li><code>WORKDIR</code>：设置工作目录，后续的操作都在这个目录下进行。</li><li><code>COPY</code>：复制本地文件到镜像中。</li><li><code>RUN</code>：在镜像中运行命令。</li><li><code>EXPOSE</code>：声明端口。</li><li><code>ENV</code>：设置环境变量。</li><li><code>CMD</code>：容器启动时执行的命令。</li></ul><h2 id="docker的docker-compose" tabindex="-1">Docker的Docker Compose <a class="header-anchor" href="#docker的docker-compose" aria-label="Permalink to &quot;Docker的Docker Compose&quot;">​</a></h2><p>Docker Compose 是一个用于定义和运行多容器 Docker 应用的工具，通过 Docker Compose，可以轻松地定义和管理多个 Docker 容器。</p><p>Docker Compose 的使用方式如下：</p><ol><li>创建一个 <code>docker-compose.yml</code> 文件，定义多个容器的配置信息。</li></ol><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5000:5000&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;redis:alpine&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>使用 <code>docker-compose up</code> 命令启动所有容器。</li><li>使用 <code>docker-compose down</code> 命令停止所有容器。</li><li>使用 <code>docker-compose start</code> 命令启动指定容器。</li><li>使用 <code>docker-compose stop</code> 命令停止指定容器。</li><li>使用 <code>docker-compose restart</code> 命令重启指定容器。</li><li>使用 <code>docker-compose logs</code> 命令查看容器日志。</li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/" target="_blank" rel="noreferrer">Docker 官方文档</a></li><li><a href="https://docs.docker.com/get-started/" target="_blank" rel="noreferrer">Docker 官方教程</a></li><li><a href="https://blog.docker.com/" target="_blank" rel="noreferrer">Docker 官方博客</a></li><li><a href="https://forums.docker.com/" target="_blank" rel="noreferrer">Docker 官方论坛</a></li></ul>`,32)]))}const D=e(n,[["render",r]]);export{h as __pageData,D as default};
