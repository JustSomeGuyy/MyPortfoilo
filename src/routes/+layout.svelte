<script>
	import { resolveRoute } from '$app/paths';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />
<slot />
<Footer />
