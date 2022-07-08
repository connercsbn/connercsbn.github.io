<script>
	import PortfolioIcon from '$lib/PortfolioIcon.svelte';
	import PortfolioHero from '$lib/PortfolioHero.svelte';
	import BuiltWith from '$lib/BuiltWith.svelte';
	import { scrollRef } from 'svelte-scrolling';
	let albumSplitVideoOffset = 0;
	let connersBrianWebsiteOffset = 0;
	let ttrOffset = 0;
	let width = 1;
	let height = 1;
	let maxFontSize = 80;
	let maxPFontSize = 22;
	let basePFontSize = 4;
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<div id="past-work" use:scrollRef={'past-work'}>
	<div class="h2-container">
		<h2>Past Work</h2>
	</div>
	<div class="heros">
		<PortfolioHero
			title="Albumsplit"
			link="//www.albumsplit.com"
			background={undefined}
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
			<u>Albumsplit</u> is a project that allows users to automatically download, split, and tag
			audio books, podcasts, or song compilations&mdash;straight from YouTube&mdash;into separate
			tracks for offline listening.
			<BuiltWith>Built with React, Django, Yt-dlp, Celery w/ RabbitMQ, Material UI</BuiltWith>
		</PortfolioHero>
		<PortfolioHero
			title="Tax The Rich NYS"
			source={undefined}
			link="//taxtherichnys.com"
			githubLink={undefined}
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
				><em>Tax The Rich</em> was a political campaign in New York run by the Democratic Socialists
				of America. This website provided information about the campaign along with tools to help people
				get involved, including event registration and a representative lookup tool.</span
			>
			<BuiltWith
				><span class="ttr">Built with React, Next.js, using Airtable and Action Network</span
				></BuiltWith
			>
		</PortfolioHero>

		<PortfolioHero
			title={`Conner's Brian Website`}
			source="brian480.mp4"
			link="//connersbrianwebsite.xyz"
			githubLink="//www.github.com/connercsbn/connersbrianwebsite"
			background={undefined}
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
		>
			<u>Conner's Brian Website</u> started as an experiment where I played with different features
			of the canvas browser element. With no clear purpose, it evolved into an
			open-to-interpretation
			<em>experience</em>. Digital art? Waste of time? Either way, put it on in the background at
			your party for some chill vibes&mdash;and to meet cool people who catch the subtle Family Guy
			reference.

			<BuiltWith --built-with-color="#35352b"
				>Built with Svelte, using Canvas API and FFmpeg for audio manipulation</BuiltWith
			>
		</PortfolioHero>
	</div>
</div>

<div>
	<div id="other-work">
		<div class="h2-container">
			<h2>Other work</h2>
		</div>
	</div>
	<div class="other">
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
			icon="/images/weirdle3.png"
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
			name="Batch Google Text-To-Speech Processor"
			gh="https://github.com/connercsbn/tts-tool"
			icon="/images/googlepronunciations.png"
			bgcolors={['white', 'white']}
		/>
		<PortfolioIcon
			name="Marginal Tax Calculator"
			gh="https://github.com/connercsbn/marginal-tax-calculator"
			icon="/images/marginaltax.png"
			bgcolors={['white', 'black']}
		/>
		<PortfolioIcon
			name="SourceMod Plugins"
			gh="https://github.com/connercsbn/csgo-scripts"
			icon="/images/csgo.png"
			bgcolors={['white', 'black']}
		/>
		<PortfolioIcon
			name="Finance Calculator"
			gh="https://github.com/connercsbn/finances"
			icon="/images/finances.png"
			bgcolors={['white', 'black']}
		/>
	</div>
</div>

<style>
	.other {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(max(180px, 230px), 1fr));
		margin: auto;
		grid-gap: 16px;
		justify-content: center;
		max-width: 800px;
		box-sizing: border-box;
		margin: auto;
	}
	.ttr {
		color: #2f4858;
	}
	em {
		display: inline;
	}
</style>
