<script>
	import ProjectCard from './ProjectCard.svelte';

	let lim = true;

	import projects from '$lib/data/projects';
</script>

<div
	id="projects"
	class="my-8 flex flex-col justify-center items-center gap-20 min-h-full h-screen"
>
	<h2 class="relative text-5xl font-bold">
		Concepts I have made
		<span
			class="-z-10 rounded-sm w-5/6 h-7 bg-purple absolute right-10 -bottom-1 opacity-75 blur-[1px]"
		></span>
	</h2>
	<div class="flex flex-col w-11/12 items-center gap-20">
		{#each lim ? projects.slice(0, 2) : projects as project, index}
			<ProjectCard {project} {index} />
		{/each}
	</div>
	{#if projects.length > 2}
		<button
			on:click={() => (lim = !lim)}
			class="w-32 h-11 border rounded-lg border-purple text-purple text-base"
		>
			<p>{lim ? 'Show More' : 'Show Less'}</p>
		</button>
	{/if}
</div>
