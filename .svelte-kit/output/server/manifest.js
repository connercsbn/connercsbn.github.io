export const manifest = {
	appDir: "_app",
	assets: new Set(["albumsplit.mp4","albumsplit.webm","brain.webm","brian.mp4","brian.webm","family-guy.zip","favicon.png","fonts/Famig___.TTF","fontzip.com.txt","hat.png","images/Cleveland_Brown.png","images/albumsplit-full-page.png","images/albumsplit_logo.png","images/connersbrianwebsite.png","images/cstc-discord.png","images/deferred_capital_gain.webp","images/tax_the_rich.png","images/weirdle.png","wave-haikei.svg","webfonts/Famig___.css","webfonts/brandon_bld.woff","webfonts/fg.woff"]),
	mimeTypes: {".mp4":"video/mp4",".webm":"video/webm",".zip":"application/zip",".png":"image/png",".TTF":"font/ttf",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml",".css":"text/css",".woff":"font/woff"},
	_: {
		entry: {"file":"start-a7161f89.js","js":["start-a7161f89.js","chunks/index-307d6324.js","chunks/index-287d53f7.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "past-work",
				pattern: /^\/past-work\/?$/,
				names: [],
				types: [],
				path: "/past-work",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
