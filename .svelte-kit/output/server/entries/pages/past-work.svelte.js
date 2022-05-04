import { c as create_ssr_component, f as add_attribute, j as escape, v as validate_component } from "../../chunks/index-05d56d6a.js";
/* empty css                           */var PortfolioIcon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "main.svelte-1mgffb6.svelte-1mgffb6{display:flex;position:relative;justify-content:space-evenly;position:relative;margin:2.5%;margin:auto;width:100%;height:200px;--hover-color:var(--border-color)}a.svelte-1mgffb6.svelte-1mgffb6{position:relative;width:100%;border-radius:0px;overflow:hidden;background:var(--background);background-size:100%;border:2px solid var(--border-color);transition:all 0.2s}a.svelte-1mgffb6.svelte-1mgffb6:hover{border:2px solid var(--hover-color);background-size:110%}a.svelte-1mgffb6:hover span.svelte-1mgffb6{filter:none;font-size:1.1em;background:var(--hover-color);padding:1em 0.5em}span.svelte-1mgffb6.svelte-1mgffb6{position:absolute;bottom:10px;overflow:hidden;background:rgb(89, 89, 89);background:rgba(0, 0, 0, 0.8705882353);color:white;padding:1em 1em;bottom:0px;left:0px;right:0;transition:all 0.2s}",
  map: null
};
const PortfolioIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let baseBackgroundStyle;
  let { name } = $$props;
  let { href } = $$props;
  let { icon } = $$props;
  let { bgcolors = void 0 } = $$props;
  let { xoffset = 0 } = $$props;
  let { yoffset = 0 } = $$props;
  let { extrastuff = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.bgcolors === void 0 && $$bindings.bgcolors && bgcolors !== void 0)
    $$bindings.bgcolors(bgcolors);
  if ($$props.xoffset === void 0 && $$bindings.xoffset && xoffset !== void 0)
    $$bindings.xoffset(xoffset);
  if ($$props.yoffset === void 0 && $$bindings.yoffset && yoffset !== void 0)
    $$bindings.yoffset(yoffset);
  if ($$props.extrastuff === void 0 && $$bindings.extrastuff && extrastuff !== void 0)
    $$bindings.extrastuff(extrastuff);
  $$result.css.add(css$3);
  baseBackgroundStyle = `--background: url(${icon}) ${xoffset}px ${yoffset}px no-repeat` + (bgcolors ? `, linear-gradient(${bgcolors[0]}, ${bgcolors[1]});` : ";");
  return `<main${add_attribute("style", baseBackgroundStyle + `--border-color: ${bgcolors[0]}`, 0)} class="${"svelte-1mgffb6"}"><a${add_attribute("href", href, 0)}${add_attribute("style", extrastuff, 0)} class="${"svelte-1mgffb6"}"><span class="${"svelte-1mgffb6"}">${escape(name)}</span></a>
</main>`;
});
var index$1 = "";
var index = "";
var Links_svelte_svelte_type_style_lang = "";
var PortfolioHero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@font-face{font-family:"Brandon Grotesque";src:url("/webfonts/brandon_bld.woff")}@font-face{font-family:"fg";src:url("/webfonts/fg.woff")}main.svelte-dsbb6k{position:relative;background:var(--opaque-background);overflow:hidden;border:2px solid var(--border-color);margin:30px;padding:4%}.bg-container.svelte-dsbb6k{background:#fbf7e4;position:relative;top:0px;left:0}.bg-trapezoid.svelte-dsbb6k{clip-path:polygon(0% 43.5%, 100% 100%, 100% 95%, 0% -40%);background-color:rgba(187, 200, 179, 0.6);animation-duration:10s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;animation-direction:alternate;animation-name:svelte-dsbb6k-spotlight}.bg-circle.svelte-dsbb6k{clip-path:circle(10% at -4% 90%);background-color:#2f4858}.bg-rect.svelte-dsbb6k{clip-path:polygon(97% 0%, 100.8% 0%, 87% 100%, 83% 98.3%);background-color:#eb2329;animation-duration:8s;animation-iteration-count:infinite;animation-direction:alternate;animation-name:svelte-dsbb6k-stripe;top:10px}.bg-container.svelte-dsbb6k{position:absolute;width:100%;height:130%;top:var(--video-top, 0)}.bg-trapezoid.svelte-dsbb6k,.bg-circle.svelte-dsbb6k,.bg-rect.svelte-dsbb6k{position:absolute;height:100%;width:100%}video.svelte-dsbb6k{right:0;position:absolute;width:var(--video-width);top:var(--video-top);opacity:0.2}h1.svelte-dsbb6k{user-select:none;display:inline-block;position:relative;padding:0;margin:0;color:var(--font-color, black);font-family:var(--font, "Roboto");font-weight:600;font-size:var(--font-size);line-height:1;position:relative;text-decoration-color:#8ec07c;text-decoration-thickness:0.5vw;text-underline-offset:1vw;letter-spacing:var(--letter-spacing, 0);-webkit-text-stroke:var(--text-stroke, none);z-index:1}h1.svelte-dsbb6k:link{text-decoration:none}h1.svelte-dsbb6k:hover{text-shadow:0.6vw 0.6vw 0px var(--shadow-color)}p.svelte-dsbb6k{color:var(--custom-background-color);padding:0;font-size:var(--p-font-size);position:relative}@keyframes svelte-dsbb6k-stripe{from{clip-path:polygon(97% 0%, 100.8% 0%, 87% 100%, 83% 98.3%)}to{clip-path:polygon(100% 0%, 103% 0%, 87% 100%, 83% 98.3%)}}@keyframes svelte-dsbb6k-spotlight{from{clip-path:polygon(0% 43.5%, 100% 100%, 100% 95%, 0% -40%)}to{clip-path:polygon(0% 43.5%, 100% 100%, 100% 100%, 0% -80%)}}',
  map: null
};
const PortfolioHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { source } = $$props;
  let { link } = $$props;
  let { background } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css$2);
  return `<main class="${"svelte-dsbb6k"}">${background == "tts" ? `<div class="${"bg-container svelte-dsbb6k"}"><div class="${"bg-trapezoid svelte-dsbb6k"}"></div>
			<div class="${"bg-circle svelte-dsbb6k"}"></div>
			<div class="${"bg-rect svelte-dsbb6k"}"></div></div>` : `<video autoplay muted loop playsinline class="${"svelte-dsbb6k"}"><source${add_attribute("src", source, 0)} type="${"video/mp4"}"></video>`}
	<h1${add_attribute("href", link, 0)} class="${"svelte-dsbb6k"}">${``}
		${escape(title[0])}${title[1] ? `<br>${escape(title[1])}` : ``}</h1>
	<p class="${"svelte-dsbb6k"}">${slots.default ? slots.default({}) : ``}</p>
</main>`;
});
var BuiltWith_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-1gwlw6u{margin:0.5em 0;display:block;font-style:italic;font-size:0.75em;color:gray;color:#9d9d93}",
  map: null
};
const BuiltWith = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<span class="${"svelte-1gwlw6u"}">${slots.default ? slots.default({}) : ``}</span>`;
});
var pastWork_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-n3f8n3{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 2fr));grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));margin:auto;grid-gap:16px;justify-content:center;padding:16px;max-width:1300px;margin:auto}.ttr.svelte-n3f8n3{color:#2f4858}",
  map: null
};
let maxFontSize = 60;
let maxPFontSize = 20;
const Past_work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let albumSplitVideoOffset = 0;
  let connersBrianWebsiteOffset = 0;
  let ttrOffset = 0;
  let y = 0;
  let width = 1;
  let height = 1;
  $$result.css.add(css);
  {
    {
      albumSplitVideoOffset = y / 25 / (width / height);
      connersBrianWebsiteOffset = y / 25 / (width / height);
      ttrOffset = y / 25 / (width / height);
    }
  }
  return `

<div style="display: contents; --video-width:${"60%"}; --video-top:${escape(-75 + albumSplitVideoOffset) + "%"}; --font:${"roboto slab"}; --font-color:${"#83a598"}; --shadow-color:${"white"}; --font-size:${escape(`min(14vw, ${maxFontSize}px)`)}; --p-font-size:${escape(`min(3.5vw, ${maxPFontSize}px)`)}; --letter-spacing:${"0"}; --opaque-background:${"#1c1e21"}; --border-color:${"#8ec07c"};">${validate_component(PortfolioHero, "PortfolioHero").$$render($$result, {
    title: ["Albumsplit"],
    source: "albumsplit.mp4",
    link: "//albumsplit.com"
  }, {}, {
    default: () => {
      return `Albumsplit is a project that allows users to automatically download, split, and tag audio books,
	podcasts, or song compilations\u2014straight from YouTube\u2014into separate tracks for
	convenient offline listening.
	${validate_component(BuiltWith, "BuiltWith").$$render($$result, {}, {}, {
        default: () => {
          return `Built with React, Django, Yt-dlp, Celery w/ RabbitMQ, Material UI`;
        }
      })}`;
    }
  })}</div>
<div style="display: contents; --video-width:${"150%"}; --video-top:${escape(-30 + ttrOffset) + "%"}; --font:${"Brandon Grotesque"}; --font-color:${"#ff362c"}; --shadow-color:${"white"}; --font-size:${escape(`min(14vw, ${maxFontSize}px)`)}; --p-font-size:${escape(`min(3.5vw, ${maxPFontSize}px)`)}; --text-decoration:${"none"}; --text-stroke:${"none"}; --letter-spacing:${"0"}; --opaque-background:${"black"}; --border-color:${"#ff362c"};">${validate_component(PortfolioHero, "PortfolioHero").$$render($$result, {
    title: ["Tax The Rich", "NYC"],
    link: "//taxtherichnys.com",
    background: "tts"
  }, {}, {
    default: () => {
      return `<span class="${"ttr svelte-n3f8n3"}">Tax The Rich was a political campaign in New York. Lorem ipsum lorem ipsum more information
		about this website, etc.</span>
	${validate_component(BuiltWith, "BuiltWith").$$render($$result, {}, {}, {
        default: () => {
          return `<span class="${"ttr svelte-n3f8n3"}">Built with Next.js, Airtable, Action Network</span>`;
        }
      })}`;
    }
  })}</div>

<div style="display: contents; --video-width:${"150%"}; --video-top:${escape(-40 + connersBrianWebsiteOffset) + "%"}; --font:${"fg"}; --font-color:${"#3970AA"}; --shadow-color:${"white"}; --font-size:${escape(`min(12vw, ${maxFontSize}px)`)}; --p-font-size:${escape(`min(3.5vw, ${maxPFontSize}px)`)}; --text-decoration:${"none"}; --text-stroke:${"2px white"}; --letter-spacing:${"0.07em"}; --opaque-background:${"black"}; --border-color:${"#3970AA"};">${validate_component(PortfolioHero, "PortfolioHero").$$render($$result, {
    title: ["Conner's Brian Website"],
    source: "brian.mp4",
    link: "//connersbrianwebsite.xyz"
  }, {}, {
    default: () => {
      return `Conner&#39;s Brian Website started as an experiment where I played with various features of the
	canvas browser element. With no clear purpose, it evolved into an open-to-interpretation
	\u201Cexperience.\u201D Digital art? Waste of time? Either way, put it on in the background at
	your party for some chill vibes\u2014and to meet cool people who catch the subtle Family Guy
	reference.
	${validate_component(BuiltWith, "BuiltWith").$$render($$result, {}, {}, {
        default: () => {
          return `Built with Svelte, using Canvas API and FFmpeg for audio manipulation`;
        }
      })}`;
    }
  })}</div>

<div><h1>Other work</h1>
	<main class="${"svelte-n3f8n3"}">${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "The Cleveland Show Time Capsule Discord Bot",
    href: "https://top.gg/bot/938968621781225533",
    icon: "/images/Cleveland_Brown.png",
    bgcolors: ["#1D0917", "#380E21"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Albumsplit",
    href: "https://connercsbn.github.io",
    icon: "/images/albumsplit_logo.png",
    yoffset: -10,
    bgcolors: ["#94C881", "#83A79A"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Conner's Brian Website",
    href: "https://connersbrianwebsite.xyz",
    icon: "/images/connersbrianwebsite.png",
    yoffset: -30,
    bgcolors: ["white", "white"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Tax The Rich NYS",
    href: "https://www.taxtherichnys.com",
    icon: "/images/tax_the_rich.png",
    bgcolors: ["#FBF7E4", "#EB2329"],
    xoffset: -8
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Weirdle",
    href: "https://weirdle.web.app",
    icon: "/images/weirdle.png",
    bgcolors: ["#B59F3B", "#538D4E"],
    xoffset: -5
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Deferred Capital Gain",
    href: "https://defer-225e4.web.app/",
    icon: "/images/deferred_capital_gain.webp",
    yoffset: 60,
    bgcolors: ["white", "white"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Google TTS Downloader",
    href: "https://www.conner.soy/pronunciation",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Income Tax Calculator",
    href: "/",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Mobile Link Pro",
    href: "/",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Xrandr Command Generator",
    href: "/",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Finance Calculator",
    href: "/",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}

		${validate_component(PortfolioIcon, "PortfolioIcon").$$render($$result, {
    name: "Counter-Strike: Global Offensive SourceMod Plugins",
    href: "/",
    icon: "/images/tbd.png",
    bgcolors: ["white", "black"]
  }, {}, {})}</main>
</div>`;
});
export { Past_work as default };
