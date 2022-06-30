<script>
	import { scrollRef } from 'svelte-scrolling';
</script>

<div id="about" use:scrollRef={'about'}>
	<div class="h2-container">
		<h2>About</h2>
	</div>
	<div class="article">
		<p><span>Hi, my name is Conner and I'm a full stack web developer with experience primarily in Svelte, React, and Django.</span></p>
		<p><span>Languages I use:</span></p>
	<ul><li>Javascript, Python</li></ul>
		<p><span>Web tools and services I use:</span></p>
		<ul><li>Svelte, React, Django, Next, GNU Coreutils, Websockets, Stripe, Twilio, CSS/SCSS, Linux, Git,
		Nginx, MySQL, ThreeJS, Celery</li></ul>
	</div>
</div>

<style>
	.article {
		padding: 1em;
		margin: 1em auto;
		/*background: var(--custom-background-light);*/
		background: var(--custom-background-light);
		background: #ffffff94;
		border: 1px solid var(--custom-secondary-highlight-color);
	}
	li {
		list-style-type: "—  ";
	}
</style>
