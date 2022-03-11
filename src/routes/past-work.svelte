<script>
	import PortfolioIcon from '$lib/PortfolioIcon.svelte';
</script>

<h1>Past work</h1>

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
			extrastuff="background-size: cover;"
		/>

		<PortfolioIcon
			name="Conner's Brian Website"
			href="https://connersbrianwebsite.xyz"
			icon="/images/connersbrianwebsite.png"
			yoffset={-30}
			bgcolors={['white', 'white']}
			extrastuff="background-size: cover;"
		/>

		<PortfolioIcon
			name="Tax The Rich NYS"
			href="https://www.taxtherichnys.com"
			icon="/images/tax_the_rich.png"
			bgcolors={['#FBF7E4', '#EB2329']}
			xoffset={-8}
			extrastuff="background-size: cover;"
		/>

		<PortfolioIcon
			name="Weirdle"
			href="https://weirdle.web.app"
			icon="/images/weirdle.png"
			bgcolors={['#B59F3B', '#538D4E']}
			extrastuff="background-size: cover;"
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
			bgcolors={['white', 'white']}
		/>

		<PortfolioIcon
			name="Income Tax Calculator"
			href="/"
			icon="/images/tax_the_rich.png"
			bgcolors={['white', 'white']}
		/>
	</main>
</div>

<style>
	* {
		font-family: 'Noto Sans';
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
		grid-gap: 16px;
		justify-content: center;
		padding: initial;
	}
</style>
