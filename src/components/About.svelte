<script lang="ts">
	import Languages from './Languages.svelte';
</script>

<div
	id="about"
	class="flex flex-col justify-center content-center items-center gap-16 h-screen my-auto"
>
	<div
		class="flex flex-col bg-purple text-darkGrey rounded-2xl w-9/12 h-80 justify-center sm:px-8 md:px-20 gap-4"
	>
		<div class="flex flex-col justify-start content-center gap-4">
			<h2 class="sm:text-2xl md:text-3xl lg:text-5xl font-bold">Who Am I?</h2>
			<p class="text-base">
				I am a passionate web developer with a vision of a beautiful and accessible internet. I have
				been self-taught by developing websites and web-apps with JavaScript and other languages for
				three years.
			</p>
			<p class="text-base">
				My journey into software and web development was not from the beginning, first I was
				involved mainly with sales and management, and still to this day am in sales. However, my
				love for creating, building, and tech has pushed me to a fulfilling hobby that I would love
				to make a career out of.
			</p>
		</div>
		<div class="flex flex-row justify-center gap-2">
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
		</div>
	</div>
	<Languages />
</div>
