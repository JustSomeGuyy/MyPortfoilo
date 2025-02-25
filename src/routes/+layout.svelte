<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

	let y
	$: outerHeight = 0

	let showContent = false;

// Check sessionStorage when the page loads
onMount(() => {
		showContent = sessionStorage.getItem('showContent') === 'true';
	});

	function handleWelcomeFinished() {
		showContent = true;
		sessionStorage.setItem('showContent', 'true'); // Save state for the session
	}
</script>

{#if !showContent}
	<Welcome on:finished={handleWelcomeFinished} />
{:else}
	<Header />
{#if y > outerHeight}
	<div class="bg-darkGrey fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
  		<Header />
	</div>
{/if}
	<slot />
	<Footer />
{/if}
<svelte:window bind:scrollY={y} bind:outerHeight/>
