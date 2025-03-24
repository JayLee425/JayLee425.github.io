import{_ as a,c as i,o as n,ag as l}from"./chunks/framework.DPDPlp3K.js";const b=JSON.parse('{"title":"CSS Base(CSS基础)","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/CSS/css-base.md","filePath":"src/frontend/CSS/css-base.md","lastUpdated":1742449656000}'),e={name:"src/frontend/CSS/css-base.md"};function p(t,s,r,h,c,d){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="css-base-css基础" tabindex="-1">CSS Base(CSS基础) <a class="header-anchor" href="#css-base-css基础" aria-label="Permalink to &quot;CSS Base(CSS基础)&quot;">​</a></h1><h2 id="_1-css简介" tabindex="-1">1. CSS简介 <a class="header-anchor" href="#_1-css简介" aria-label="Permalink to &quot;1. CSS简介&quot;">​</a></h2><ol><li>CSS(Cascading Style Sheets)是一种用来表现HTML或XML文档样式的语言。</li><li>CSS是一种基于XML的语言，它定义了如何显示HTML文档。</li><li>CSS可以控制网页的颜色、字体、大小、外观、布局、多媒体等。</li><li>CSS3是CSS的最新版本，它新增了很多特性，如边框、背景、渐变、动画、多列布局、文本效果、过渡、变换、选择器等。</li></ol><h2 id="_2-css语法" tabindex="-1">2. CSS语法 <a class="header-anchor" href="#_2-css语法" aria-label="Permalink to &quot;2. CSS语法&quot;">​</a></h2><ol><li>CSS规则由选择器和声明块组成。</li><li>选择器用于指定HTML元素，声明块用于设置元素的样式。</li><li>选择器可以是标签名、类名、ID名、属性、伪类等。</li><li>声明块以冒号(:)分隔，后面跟着属性和属性值。</li><li>多个声明块用分号(;)分隔。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择器 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">selector {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 声明块 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: value;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="6"><li>CSS注释以/* */包围。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 这是一个注释 */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-css选择器" tabindex="-1">3. CSS选择器 <a class="header-anchor" href="#_3-css选择器" aria-label="Permalink to &quot;3. CSS选择器&quot;">​</a></h2><ol><li>标签选择器：选择HTML元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择所有&lt;p&gt;元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>类选择器：选择具有特定类属性的HTML元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择所有具有class属性的元素 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>ID选择器：选择具有特定ID属性的HTML元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择具有id属性的元素 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4"><li>子元素选择器：选择特定元素的直接子元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择&lt;div&gt;元素的直接子元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5"><li>后代元素选择器：选择特定元素的后代元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择&lt;div&gt;元素的所有后代元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6"><li>通配符选择器：选择所有元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择所有元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="7"><li>属性选择器：选择具有特定属性的HTML元素。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择所有具有title属性的元素 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择所有具有href属性的&lt;a&gt;元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="8"><li>伪类选择器：选择特定元素的特定状态。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择未选中&lt;input&gt;元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:checked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 选择鼠标悬停在&lt;a&gt;元素上的状态 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="9"><li>伪元素选择器：选择特定元素的特定部分。</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在&lt;a&gt;元素的前面插入一个::before元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在&lt;a&gt;元素的后面插入一个::after元素 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-css属性" tabindex="-1">4. CSS属性 <a class="header-anchor" href="#_4-css属性" aria-label="Permalink to &quot;4. CSS属性&quot;">​</a></h2><ol><li>字体属性：font-family、font-size、font-style、font-weight、font、line-height。</li><li>文本属性：color、text-align、text-decoration、text-transform、text-indent、letter-spacing、word-spacing、white-space。</li><li>背景属性：background-color、background-image、background-repeat、background-position、background-size、background。</li><li>边框属性：border、border-width、border-style、border-color、border-top、border-right、border-bottom、border-left。</li><li>盒模型属性：width、height、margin、padding、border-radius。</li><li>列表属性：list-style、list-style-type、list-style-image、list-style-position。</li><li>其他属性：cursor、opacity、z-index、visibility、display。</li></ol><h2 id="_5-css单位" tabindex="-1">5. CSS单位 <a class="header-anchor" href="#_5-css单位" aria-label="Permalink to &quot;5. CSS单位&quot;">​</a></h2><ol><li>长度单位：px、em、rem、vw、vh、vmin、vmax。</li><li>角度单位：deg、grad、rad、turn。</li><li>时间单位：s、ms。</li><li>其他单位：%、pt、pc、ex、ch、ic、rem、vw、vh、vmin、vmax。</li></ol>`,31)]))}const o=a(e,[["render",p]]);export{b as __pageData,o as default};
