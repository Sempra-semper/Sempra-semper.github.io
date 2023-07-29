import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as t,e as l}from"./app-804cc134.js";const i={},r=n("p",null,"迷上 IFTTT 等自动化应用后，我需要为各种不同的网页定制 RSS 源。其中，最容易入门的工具是 FEED43。本文是一篇介绍如何使用 FEED43 定制 RSS 源的入门指南。",-1),u=n("p",null,[n("strong",null,"► 开始烧制属于自己的 feed")],-1),d=n("h2",{id:"_1-进入网页",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-进入网页","aria-hidden":"true"},"#"),a(" 1. 进入网页")],-1),g={href:"http://www.feed43.com/",target:"_blank",rel:"noopener noreferrer"},h=l(`<figure><img src="https://pic1.zhimg.com/v2-b5da0b08f632376fad3925a779e373b4_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-选定-rss-网页" tabindex="-1"><a class="header-anchor" href="#_2-选定-rss-网页" aria-hidden="true">#</a> 2. 选定 RSS 网页</h2><p>在「Step1. Specify source page address (URL)」中输入目标网址，将 Page Source 中的内容复制到 txt 文档中，以便之后编写抓取规则。</p><figure><img src="https://pic1.zhimg.com/v2-1b687a5b1c325ba6d04fbdcc13b95668_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果 Page Source 显示为乱码，可将 Encoding 设置为 <strong>UTF-8</strong> 。</p><h2 id="_3-定制-rss-抓取规则" tabindex="-1"><a class="header-anchor" href="#_3-定制-rss-抓取规则" aria-hidden="true">#</a> 3. 定制 RSS 抓取规则</h2><p>「Global Search Pattern」是选择要搜索的范围，建议不填此项，这样会搜索整个页面。「Item (repeatable) Search Pattern」这部分最重要，是我们要抓取的内容。</p><figure><img src="https://pic1.zhimg.com/v2-b1fa90c59739bddc0c27134cd36ba6bc_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>仔细查看上方获取到的 Page Source，找到需要抓取的元素，输入到「Item (repeatable) Search Pattern」。</p><p>测试网址：<code>http://news.163.com/special/0001386F/rank_whole.html</code>。</p><p>需要抓取的源代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>更时尚更运动 车展实拍解析红旗 H5<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>更时尚更运动 车展实拍解析红旗 H5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>11211615<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic2.zhimg.com/v2-cf6dbf2c09189f7517ec63abdc80c50d_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>抓取规则</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{*}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{%}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击 Extract，进行抓取。</p><figure><img src="https://pic4.zhimg.com/v2-e9486741a6229ab258a95147f584571b_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-整理-rss-输入格式" tabindex="-1"><a class="header-anchor" href="#_4-整理-rss-输入格式" aria-hidden="true">#</a> 4. 整理 rss 输入格式</h2><p>「Define output format」是 Feed 的属性，通常前三项会被自动抓取一，后三项将之前获取的 item 里面的元素填入即可，<code>{%1}</code> 对应的是链接，所以填入「Item Link」，<code>{%2}</code> 对应标题则填入到「Item Title」。</p><figure><img src="https://pic1.zhimg.com/v2-b4614f5c46090f2eb762aac87d604350_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后点击「preview」，完成制作，同时可以查看预览效果。</p><figure><img src="https://pic2.zhimg.com/v2-498bf1f1c0b14da172498b58f59e39b9_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果注册了 FEED43 的账号，可以修改 RSS 地址，但链接不能使用中文，否则会导致 RSS 出错。</p><h2 id="_5-获取-rss-地址" tabindex="-1"><a class="header-anchor" href="#_5-获取-rss-地址" aria-hidden="true">#</a> 5. 获取 RSS 地址</h2>`,24),k={href:"https://www.feed43.com/dianji.xml",target:"_blank",rel:"noopener noreferrer"},f=n("figure",null,[n("img",{src:"https://pic1.zhimg.com/v2-f3b00e876d8df136f7d354b4fc22f900_r.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),_=n("p",null,"在阅读器中的效果如下：",-1),m=n("figure",null,[n("img",{src:"https://pic4.zhimg.com/v2-6d8f503ff3da16eb985ca1d3ae2de98f_r.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),b=n("h2",{id:"_6-全文抓取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-全文抓取","aria-hidden":"true"},"#"),a(" 6. 全文抓取")],-1),S=n("p",null,[a("FEED43 导出的条目需要点击链接才能查看内容。要在 RSS 中展示全文，需要通过 FeedEx 再转换一次。注意：FEED43 免费用户过多，需要在浏览器中打开一次才能获得真实链接（一般为 "),n("code",null,"http://node2.feed43.com"),a("）。FeedEx 需要使用真实链接，一般 3 分钟内转换完毕。")],-1),v={href:"https://feedex.net/",target:"_blank",rel:"noopener noreferrer"},x=n("figure",null,[n("img",{src:"https://pic4.zhimg.com/v2-8e3701adffa1d6fb4ea10dda2704988b_r.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),R=n("p",null,"Feeds43 的免费版每 6 小时抓取一次，最多显示最新的 20 条内容。如果网页源更新较频繁，建议使用 RSSHub 和 Huginn。",-1),z=n("h2",{id:"rss-合集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),a(" RSS 合集")],-1),E=n("p",null,"汇总的 RSS 永久订阅 feeds 均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),w={href:"https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://newzone.top/posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function D(I,P){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,u,d,n("p",null,[n("a",g,[a("FEED43"),t(s)]),a(" 不需要注册，点击「Create your own feed」即可使用。")]),h,n("p",null,[a("点击 Feed URL 可得 RSS 地址，样例是 "),n("a",k,[a("https://www.feed43.com/dianji.xml"),t(s)]),a("。")]),f,_,m,b,S,n("p",null,[a("FeedEx: "),n("a",v,[a("https://feedex.net/"),t(s)])]),x,R,z,E,n("ul",null,[n("li",null,[n("p",null,[n("a",w,[a("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),t(s)])])]),n("li",null,[n("p",null,[n("a",q,[a("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),t(s)])])]),n("li",null,[n("p",null,[n("a",F,[a("RSS 速成篇：RSSHub 捡现成的轮子"),t(s)])])]),n("li",null,[n("p",null,[n("a",y,[a("RSS 速成篇 2：RSSHub 自部署"),t(s)])])]),n("li",null,[n("p",null,[n("a",j,[a("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),t(s)])])]),n("li",null,[n("p",null,[n("a",H,[a("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),t(s)])])])])])}const L=e(i,[["render",D],["__file","2017-04-22-rss_feed43_feedex.html.vue"]]);export{L as default};
