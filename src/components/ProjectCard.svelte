<script>
	export let project;
	export let index;
	export let left;
</script>

<div
	id={index}
	class={`flex flex-col min-w-1/2 w-11/12 gap-12 items-center md:flex-row ${
		left
			? (index % 2 === 0 ? 'md:flex-row md:flex-start' : '')
			: (index % 2 === 1 ? 'md:flex-row-reverse md:flex-end' : '')
	}`}
>
	<div class="relative bg-darkGrey rounded-2xl object-fill flex items-center justify-center">
		<img src={project.source} alt="" class=" max-h-80 rounded-2xl object-fill"/>
		<span class="-z-10 size-full blur-md bg-purple absolute bottom-0"></span>
	</div>
	<div class="flex flex-col justify-center gap-6 items-center md:w-5/12">
		<div class="flex flex-col gap-3">
			<h3 class="text-3xl font-semibold text-center md:text-start">
				<a href={project.link} class="hover:text-purple">{project.name}</a>
			</h3>
			<span class="h-[1px] w-full bg-purple"></span>
			<p class="opacity-75 text-sm">{project.description}</p>
		</div>
		<div class="flex flex-col justify-center align-middle items-center gap-2">
			<h4 class="text-xl font-semibold">Tech Stack</h4>
			<div class="flex flex-row">
				<ul class="flex flex-row gap-2 flex-wrap justify-center items-center">
					{#each project.languages as keyword}
						<li
							class="text-center border-purple border-[1px] rounded-[10px] py-1 px-5 opacity-80 font-meduim"
						>
							{keyword}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
