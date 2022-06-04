<script>
	import PortfolioIcon from '$lib/PortfolioIcon.svelte';
	import PortfolioHero from '$lib/PortfolioHero.svelte';
	import BuiltWith from '$lib/BuiltWith.svelte';
	import { scrollRef } from 'svelte-scrolling';
	let albumSplitVideoOffset = 0;
	let connersBrianWebsiteOffset = 0;
	let ttrOffset = 0;
	let y = 0;
	let width = 1;
	let height = 1;
	let maxFontSize = 80;
	let maxPFontSize = 22;
	let basePFontSize = 4;
	$: {
		albumSplitVideoOffset = y / 25 / (width / height);
		connersBrianWebsiteOffset = y / 25 / (width / height);
		ttrOffset = y / 25 / (width / height);
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} bind:innerWidth={width} />

<div id="past-work" use:scrollRef={'past-work'}>
	<div class="h2-container">
		<h2>Past Work</h2>
	</div>
	<main class="heros">
		<PortfolioHero
			title="Albumsplit"
			source="albumsplit.mp4"
			link="//www.albumsplit.com"
			githubLink="//www.github.com/connercsbn/albumsplit"
			--video-width="60%"
			--video-top="{-75 + albumSplitVideoOffset}%"
			--font="roboto slab"
			--font-color="#83a598"
			--explicit-p-color="#ebdbb2"
			arrowColor="#83a598"
			--shadow-color="#ebdbb2"
			--font-size={`min(14vw, ${maxFontSize}px)`}
			--p-font-size={`min(${basePFontSize}vw, ${maxPFontSize}px)`}
			--letter-spacing="0"
			--opaque-background="#1c1e21"
			--border-color="#8ec07c"
		>
			Albumsplit is a project that allows users to automatically download, split, and tag audio
			books, podcasts, or song compilations&mdash;straight from YouTube&mdash;into separate tracks
			for offline listening.
			<BuiltWith>Built with React, Django, Yt-dlp, Celery w/ RabbitMQ, Material UI</BuiltWith>
		</PortfolioHero>
		<PortfolioHero
			title="Tax The Rich NYS"
			link="//taxtherichnys.com"
			background="tts"
			--video-width="150%"
			--video-top="{-30 + ttrOffset}%"
			--font="Brandon Grotesque"
			--font-color="#ff362c"
			arrowColor="#2f4858;"
			--shadow-color="white"
			--font-size={`min(14vw, ${maxFontSize}px)`}
			--p-font-size={`min(${basePFontSize}vw, ${maxPFontSize}px)`}
			--text-decoration="none"
			--text-stroke="none"
			--letter-spacing="0"
			--opaque-background="black"
			--border-color="#ff362c"
		>
			<span class="ttr"
				>Tax The Rich was a political campaign in New York run by the Democratic Socialists of
				America. Lorem ipsum lorem ipsum more information about this website, etc.</span
			>
			<BuiltWith
				><span class="ttr">Built with React, Next.js, using Airtable and Action Network</span
				></BuiltWith
			>
		</PortfolioHero>

		<PortfolioHero
			title={`Conner's Brian\nWebsite`}
			source="brian.mp4"
			link="//connersbrianwebsite.xyz"
			githubLink="//www.github.com"
			--video-width="150%"
			--video-top="{-40 + connersBrianWebsiteOffset}%"
			--font="fg"
			--explicit-p-color="black"
			--font-color="#3970AA"
			arrowColor="black"
			--arrow-highlight-color="gray"
			--shadow-color="black"
			--font-size={`min(12vw, ${maxFontSize - 10}px)`}
			--p-font-size={`min(${basePFontSize}vw, ${maxPFontSize}px)`}
			--text-decoration="none"
			--text-stroke="2px white"
			--letter-spacing="0.07em"
			--opaque-background="white"
			--border-color="#3970AA"
			>Conner's Brian Website started as an experiment where I played with various features of the
			canvas browser element. With no clear purpose, it evolved into an open-to-interpretation
			<i>experience</i>. Digital art? Waste of time? Either way, put it on in the background at your
			party for some chill vibes&mdash;and to meet cool people who catch the subtle Family Guy
			reference.
			<BuiltWith --built-with-color="#35352b"
				>Built with Svelte, using Canvas API and FFmpeg for audio manipulation</BuiltWith
			>
		</PortfolioHero>
	</main>
</div>

<div>
	<div id="other-work">
		<div class="h2-container">
			<h2>Other work</h2>
		</div>
	</div>
	<main class="other">
		<PortfolioIcon
			name="The Cleveland Show Time Capsule Discord Bot"
			gh="https://github.com/connercsbn/cleveland-show-time-capsule"
			href="https://top.gg/bot/938968621781225533"
			icon="/images/Cleveland_Brown.png"
			bgcolors={['#1D0917', '#380E21']}
		/>

		<PortfolioIcon
			name="Weirdle"
			href="https://weirdle.web.app"
			gh="https://github.com/connercsbn/weirdle"
			icon="/images/weirdle2.png"
			bgcolors={['#B59F3B', '#538D4E']}
			xoffset={0}
		/>

		<PortfolioIcon
			name="Deferred Capital Gain"
			href="https://defer-225e4.web.app/"
			gh="https://github.com/connercsbn/ken"
			icon="/images/deferred_capital_gain.webp"
			yoffset={60}
			bgcolors={['white', 'white']}
		/>

		<PortfolioIcon
			name="Google TTS Downloader"
			href="https://www.conner.soy/pronunciation"
			gh="https://github.com/connercsbn/tts-tool"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Income Tax Calculator"
			href="/"
			gh="https://github.com/connercsbn/marginal-tax-calculator"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Xrandr Command Generator"
			href="/"
			gh="https://github.com/connercsbn/xcg"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Finance Calculator"
			href="/"
			gh="https://github.com/connercsbn/finances"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>

		<PortfolioIcon
			name="Counter-Strike: Global Offensive SourceMod Plugins"
			gh="https://github.com/connercsbn/csgo-scripts"
			href="/"
			icon="/images/tbd.png"
			bgcolors={['white', 'black']}
		/>
		<div class="unspacer" />
	</main>
</div>

<style>
	main.heros {
		/* background: var(--custom-arrow-color); */
	}
	main.other {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(200px, 2fr)); */
		grid-template-columns: repeat(auto-fit, minmax(max(180px, 230px), 1fr));
		margin: auto;
		grid-gap: 16px;
		justify-content: center;
		/* padding: 16px; */
		max-width: 800px;
		box-sizing: border-box;
		margin: auto;
	}
	.ttr {
		color: #2f4858;
	}
</style>
