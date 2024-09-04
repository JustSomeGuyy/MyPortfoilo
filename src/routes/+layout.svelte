<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/Footer.svelte';
  
	let showContent = false;
  
	function handleWelcomeFinished() {
	  showContent = true;
	}
</script>
  
  {#if !showContent}
	<Welcome on:finished={handleWelcomeFinished} />
  {:else}
	<Header />
	<slot />
	<Footer />
  {/if}
  