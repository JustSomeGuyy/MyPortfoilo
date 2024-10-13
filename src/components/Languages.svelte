<script>
	import languages from '$lib/data/langauges';
</script>

<div class="flex flex-col gap-6 w-full justify-center">
	<h3 class="text-3xl font-semibold text-center">What I know</h3>
	<div id="container" class="overflow-hidden inline-flex flex-nowrap">
		<ul
			class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_i]:max-w-none animate-infinite-scroll"
		>
			{#each languages as { name, icon }}
				<li>
					<i id={name} class="{icon} text-[75px] md:text-[120px]"></i>
				</li>
			{/each}
		</ul>
		<ul
			class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_i]:max-w-none animate-infinite-scroll"
			aria-hidden="true"
		>
			{#each languages as { name, icon }}
				<li>
					<i id={name} class="{icon} text-[75px] md:text-[120px]"></i>
				</li>
			{/each}
		</ul>
	</div>
</div>
