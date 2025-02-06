<script lang="ts">
	import { formatDate } from '$lib/utils'

    export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-col items-center justify-center gap-4 px-2 py-4 md:w-full">
	<hgroup class="flex flex-col items-center justify-center gap-2">
		<h1 class="text-3xl font-semibold">{data.meta.title}</h1>
		<p>Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="flex md:flex-row gap-4 justify-center items-center flex-wrap">
		{#each data.meta.categories as category}
			<span class="py-1 px-4 rounded bg-purple text-darkGrey">&num;{category}</span>
		{/each}
	</div>

	<div class="prose md:max-w-[80%] w-full text-textColor">
        <svelte:component this={data.content} />
    </div>
</article>