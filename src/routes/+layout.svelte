<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

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
	<slot />
	<Footer />
{/if}
