<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import BlogHero from '../../components/BlogHero.svelte';

	let lim = true;

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<BlogHero />

<div class="flex flex-col items-center justify-center mt-4 mb-8 gap-12">
	<section 
	class="flex justify-center items-center min-w-1/2"
	>
		<ul class="flex flex-col-reverse justify-center items-center gap-4 md:w-full w-[90%]">
			{#each data.posts as post}
			<li class="flex flex-col min-w-1/2 md:w-[80%] w-10/12 border-purple border rounded-xl p-4 md:p-8">
			<h2 class="text-2xl md:text-4xl text-center md:text-start">
						<a href={post.slug} class="hover:text-purple">{post.title}</a>
					</h2>
					<span class="h-[1px] w-full bg-purple mt-4 mb-2"></span>
					<div class="flex md:flex-row flex-col gap-2 md:justify-between items-center my-2">
						<p class="text-lg opacity-75 flex-1">{formatDate(post.date)}</p>
						<ul class="flex md:flex-row gap-3 flex-2 justify-center items-center md:justify-end overflow-auto text-center flex-wrap">
							{#each post.categories as category}
								<li 
								class="border-purple border-[1px] rounded-[10px] py-1 px-5 opacity-80 font-meduim text-nowrap"
								>{category}</li>
							{/each}
						</ul>
					</div>
					<p class="text-base min-w-1/2 max-w-full h-fit text-wrap">{post.description}</p>
				</li>
			{/each}
		</ul>
	</section>
	{#if data.posts.length > 10}
		<button
			on:click={() => (lim = !lim)}
			class="w-32 h-11 border rounded-lg border-purple text-purple text-base"
		>
			<p>{lim ? 'Show More' : 'Show Less'}</p>
		</button>
	{/if}
</div>