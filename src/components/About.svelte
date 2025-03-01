<script lang="ts">
	import Languages from './Languages.svelte';
</script>

<section
	id="about"
	class="flex flex-col justify-center content-center items-center gap-16 md:h-screen h-screen mb-10"
>
	<div
		class="flex flex-col bg-purple text-darkGrey rounded-2xl w-full md:w-9/12 md:h-80 justify-center p-4 md:px-20 gap-4"
	>
		<div class="flex flex-col justify-start content-center gap-4">
			<h2 class="text-center text-2xl md:text-3xl lg:text-5xl font-bold">Who Am I?</h2>
			<p class="text-base">
				As a passionate web developer with a vision of a beautiful and accessible internet, I have honed my skills through self-study and experience in developing websites and web applications using JavaScript and other programming languages over the past three years.
			</p>
			<p class="text-base">
				Although my journey into software and web development did not begin with this pursuit, I have always been drawn to creating, building, and technology. This passion has led me to a fulfilling hobby that I aspire to turn into a career, where I can continue to innovate and contribute to the ever-evolving world of digital development.
			</p>
		</div>
		<div class="flex flex-row justify-center gap-2">
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
			<span class="h-3 w-3 rounded-full bg-darkGrey"></span>
		</div>
	</div>
	<Languages />
</section>
