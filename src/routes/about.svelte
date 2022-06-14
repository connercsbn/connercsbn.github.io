<script>
	import { scrollRef } from 'svelte-scrolling';
</script>

<div id="about" use:scrollRef={'about'}>
	<div class="h2-container">
		<h2>About</h2>
	</div>
	<div class="article">
		<p><span>Hi, my name is Conner and I'm a full stack web developer with experience primarily in Svelte, React, and Django.</span></p>
		<p><span>I like making websites that accomplish something while being fun, helpful, and intuitive.</span></p>
		<p><span>Languages I use:</span></p>
		<ul><li>Javascript, Python</li>
	<!--	<p><span><li>Some experience in Rust, C, PHP, Awk, Bash</li></span></p> --></ul>
		<p><span>Web tools and services I'm comfortable with:</span></p>
		<ul><li>Svelte, React, Django, Next, Celery, Websockets, Stripe, Twilio, CSS/SCSS, Linux, Git,
		Nginx, Firebase, MySQL, Redis, ThreeJS</li></ul>
	</div>
</div>

<style>
</style>
