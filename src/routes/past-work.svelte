<script>
	import PortfolioIcon from '$lib/PortfolioIcon.svelte';
	import PortfolioHero from '$lib/PortfolioHero.svelte';
	import BuiltWith from '$lib/BuiltWith.svelte';
	let albumSplitVideoOffset = 0;
	let connersBrianWebsiteOffset = 0;
	let y;
	$: {
		albumSplitVideoOffset = y / 20;
		connersBrianWebsiteOffset = y / 20;
	}
</script>

<svelte:window bind:scrollY={y} />

<h1>Past work</h1>

<PortfolioHero
	title="Albumsplit"
	source="albumsplit.webm"
	link="//albumsplit.com"
	--video-width="60%"
	--video-top="{-75 + albumSplitVideoOffset}%"
	--font="roboto slab"
	--font-color="#83a598"
	--font-size="8vw"
	--letter-spacing="-0.00833em"
	--opaque-background="#1c1e21"
	--border-color="#8ec07c"
>
	Albumsplit is a project that allows users to automatically download, split, and tag audio books,
	podcasts, or song compilations&mdash;straight from YouTube&mdash;into separate tracks for
	convenient offline listening.
	<BuiltWith>React, Django, Yt-dlp, Celery w/ RabbitMQ, Material UI</BuiltWith>
</PortfolioHero>

<PortfolioHero
	title="Conner's Brian Website"
	source="brian.webm"
	link="//connersbrianwebsite.xyz"
	--video-width="150%"
	--video-top="{-50 + connersBrianWebsiteOffset}%"
	--font="fg"
	--font-color="#3970AA"
	--font-size="6.5vw"
	--text-decoration="none"
	--text-stroke="2px white"
	--letter-spacing="0.04em"
	--opaque-background="black"
	--border-color="#3970AA"
	>Conner's Brian Website started as an experiment where I played with various features of the
	canvas browser element. With no clear purpose, it evolved into an open-to-interpretation
	&ldquo;experience.&rdquo; Digital art? Elaborate ruse? Either way, put it on in the background at
	your party for some chill vibes&mdash;and to meet cool people who catch the subtle Family Guy
	reference.
	<BuiltWith>Svelte, using Canvas API and FFmpeg for audio manipulation</BuiltWith>
</PortfolioHero>
<div>
	<main>
		<PortfolioIcon
			name="The Cleveland Show Time Capsule Discord Bot"
			href="https://top.gg/bot/938968621781225533"
			icon="/images/Cleveland_Brown.png"
			bgcolors={['#1D0917', '#380E21']}
		/>

		<PortfolioIcon
			name="Albumsplit"
			href="https://connercsbn.github.io"
			icon="/images/albumsplit_logo.png"
			yoffset={-10}
			bgcolors={['#94C881', '#83A79A']}
		/>

		<PortfolioIcon
			name="Conner's Brian Website"
			href="https://connersbrianwebsite.xyz"
			icon="/images/connersbrianwebsite.png"
			yoffset={-30}
			bgcolors={['white', 'white']}
		/>

		<PortfolioIcon
			name="Tax The Rich NYS"
			href="https://www.taxtherichnys.com"
			icon="/images/tax_the_rich.png"
			bgcolors={['#FBF7E4', '#EB2329']}
			xoffset={-8}
		/>

		<PortfolioIcon
			name="Weirdle"
			href="https://weirdle.web.app"
			icon="/images/weirdle.png"
			bgcolors={['#B59F3B', '#538D4E']}
			xoffset={-5}
		/>

		<PortfolioIcon
			name="Deferred Capital Gain"
			href="https://defer-225e4.web.app/"
			icon="/images/deferred_capital_gain.webp"
			yoffset={60}
			bgcolors={['white', 'white']}
		/>

		<PortfolioIcon
			name="Google TTS Downloader"
			href="https://www.conner.soy/pronunciation"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Income Tax Calculator"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Mobile Link Pro"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Xrandr Command Generator"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Finance Calculator"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Counter-Strike: Global Offensive SourceMod Plugins"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>
	</main>
</div>

<style>
	h1 {
		padding: 0 5%;
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
		grid-gap: 16px;
		justify-content: center;
		padding: initial;
		max-width: 1300px;
		margin: auto;
	}
</style>
