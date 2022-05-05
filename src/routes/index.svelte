<script>
	import Filler from '$lib/Filler.svelte';
	import PastWork from './past-work.svelte';
	import Contact from './contact.svelte';
	import About from './about.svelte';
</script>

<main>
	<p>
		wbe developer and creator of <a href="//weirdle.web.app">WEIRDLE</a> and
		<a href="//connersbrianwebsite.xyz">connersbrianwebsite.xyz</a>
	</p>
	<p>
		svelte, react, django, next, celery, websockets, stripe, twilio, css/scss, linux, git, nginx,
		firebase, mysql, postgresql, redis, threejs, nivo
	</p>
	<p>languages: python, javascript</p>
	<p>some experience in rust, c, pawn, awk, bash</p>
	<div class="unspacer" />
	<PastWork />
	<Contact />
	<About />
</main>

<style lang="scss">
	a {
		color: var(--custom-secondary-color);
	}
</style>
