import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as l,a as e,b as n,d as o,e as a}from"./app-804cc134.js";const p={},g=a('<p>烧制网页 RSS 源，主要有 <strong>FEED43</strong> 和 <strong>Huginn</strong> 两种方法。</p><ul><li>FEED43：简单免费，六小时抓取一次，每次抓取 20 条静态页面。</li><li>Huginn：自由度高，能自定义<strong>抓取频率、内容结构、js 结果、输出样式</strong>等；需要搭建服务器，学习 Huginn 抓取规则。</li></ul><h2 id="huginn-准备工作" tabindex="-1"><a class="header-anchor" href="#huginn-准备工作" aria-hidden="true">#</a> Huginn 准备工作</h2>',3),c=e("li",null,[e("p",null,"准备 NAS 或 Debian/Ubuntu 环境的服务器；")],-1),h={href:"https://github.com/huginn/huginn/blob/master/doc/docker/install.md",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/huginn/huginn/blob/master/doc/manual/installation.md",target:"_blank",rel:"noopener noreferrer"},u={href:"https://phantomjscloud.com/",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"PhantomJs Cloud",-1),_=e("figure",null,[e("img",{src:"https://img.newzone.top/20181006010447.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=a('<h2 id="phantomjs-网页抓取" tabindex="-1"><a class="header-anchor" href="#phantomjs-网页抓取" aria-hidden="true">#</a> PhantomJs 网页抓取</h2><p>新建 Huginn 任务组 Scenario「国内应急新闻」，样例抓取链接为 <code>http://www.cneb.gov.cn/guoneinews/</code>。</p><figure><img src="https://img.newzone.top/20181008131549.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="页面缓存" tabindex="-1"><a class="header-anchor" href="#页面缓存" aria-hidden="true">#</a> 页面缓存</h3><p>使用 Phantom Js Cloud Agent，获得动态网页缓存。</p><figure><img src="https://img.newzone.top/20181008111704.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解析网页内容" tabindex="-1"><a class="header-anchor" href="#解析网页内容" aria-hidden="true">#</a> 解析网页内容</h3><p>使用 WebsiteAgent，抓取网页内容。</p><figure><img src="https://img.newzone.top/20181008112658.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="获取内容路径" tabindex="-1"><a class="header-anchor" href="#获取内容路径" aria-hidden="true">#</a> 获取内容路径</h3><p>使用火狐浏览器打开目标页面，获取 css path 路径。</p><ol><li><p>按下 <code>F12</code>, 然后点击 <em>Developer Tools</em> 左上角的<em>检查指针</em>。</p><figure><img src="https://img.newzone.top/20181008114911.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>选中要抓取的部分。</p><figure><img src="https://img.newzone.top/20181008113925.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>回到 <em>Developer Tools</em> 窗口，右键选中的蓝色部分，获取 css path、Xpath。这里以 css path 为例。</p><figure><img src="https://img.newzone.top/20181008114207.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>初始 css path 路径，<code>html body div.area.areabg1 div.area-half.right div.tabBox div.tabContents.active table tbody tr td.red a</code>。</p></li><li><p>css path 原始路径过长，删去不带 <code>.</code> 或 <code>#</code> 的节点（节点间以空格“ ”分割），并删去每个节点在 <code>.</code> 或 <code>#</code> 前的第一个标签，得到 <code>.area.areabg1 .area-half.right .tabBox .tabContents.active .red a</code>。</p></li><li><p>前半部分对节点定位无用，继续省略（比如：中国上海，省略掉中国，大家也知道上海在哪），获得短路径 <code>.tabContents.active .red a</code>。</p></li></ol><p><strong>特殊路径处理</strong>：</p><ul><li>有些路径中的<strong>节点带空格</strong>，如 <code>&lt;div class=&quot;packery-item article&quot;&gt;</code>,路径中的空格由 <code>.</code> 代替，截取为 <code>.packery-item.article</code>。</li><li>当抓取<strong>多种 css path 规则</strong>时，用逗号分割，比如 <code>&quot;css&quot;: &quot;.focus-title .current a , .stress h2 a&quot;,</code>。</li></ul><h3 id="导出-rss" tabindex="-1"><a class="header-anchor" href="#导出-rss" aria-hidden="true">#</a> 导出 RSS</h3><p>使用 DataOutputAgent，将抓取内容导出为 RSS。</p><figure><img src="https://img.newzone.top/20181008130943.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>回到 Scenarios，点击 Data Output Agent 旁的按钮「Actions」&gt;「Show」，复制导出的 xml 链接 <code>http://xxx.xxx/users/1/web_requests/xxx/xxxx.xml</code>。</p><figure><img src="https://img.newzone.top/20181008131059.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',19),b={href:"https://pan.baidu.com/s/1JdsFkLN9kczR9C92tKi83A",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/huginn/huginn/wiki/Browser-Emulation-Using-PhantomJs-Cloud",target:"_blank",rel:"noopener noreferrer"},x={href:"https://wechat.privacyhide.com/",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"rss-合集",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),n(" RSS 合集")],-1),k=e("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),z={href:"https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://newzone.top/posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function E(A,D){const t=r("ExternalLinkIcon");return s(),l("div",null,[g,e("ul",null,[c,e("li",null,[e("p",null,[n("参考 "),e("a",h,[n("deploy Huginn inside of Docker"),o(t)]),n("、"),e("a",d,[n("installation guide for Debian/Ubuntu"),o(t)]),n(" 来搭建 Huginn。")])]),e("li",null,[e("p",null,[n("注册 "),e("a",u,[n("PhantomJs Cloud"),o(t)]),n(" ,然后将 API key 保存在 Huginn 的 Credentials 中。很多网站是用 JS 加载动态内容，因此需要 "),f,n(" 来抓取页面 JS 缓存。免费版每天限制抓取 500 次页面，需求不大可建立多个账号使用不同 API key，足够个人使用。")]),_])]),m,e("p",null,[e("a",b,[n("点击网盘下载"),o(t)]),n("国内应急新闻的详细设置，导入到 Huginn 即可使用。其他问题参考 "),e("a",S,[n("PhantomJs Cloud 英文攻略"),o(t)]),n("。")]),e("p",null,[n("微信的屏蔽措施非常之多，公众号抓取可以尝试 "),e("a",x,[n("wechat-feeds"),o(t)]),n("。")]),w,k,e("ul",null,[e("li",null,[e("p",null,[e("a",z,[n("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),o(t)])])]),e("li",null,[e("p",null,[e("a",R,[n("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),o(t)])])]),e("li",null,[e("p",null,[e("a",y,[n("RSS 速成篇：RSSHub 捡现成的轮子"),o(t)])])]),e("li",null,[e("p",null,[e("a",H,[n("RSS 速成篇 2：RSSHub 自部署"),o(t)])])]),e("li",null,[e("p",null,[e("a",v,[n("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),o(t)])])]),e("li",null,[e("p",null,[e("a",C,[n("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),o(t)])])])])])}const P=i(p,[["render",E],["__file","2018-10-07-huginn_scraping_any_website.html.vue"]]);export{P as default};
