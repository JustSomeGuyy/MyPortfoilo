<script lang="ts">
	import Socials from './Socials.svelte';
</script>

<footer class="flex flex-col w-full h-15">
	<div class="flex justify-around items-center min-w-full gap-1 sm:gap-0 md:flex-row no-wrap">
		<a
			href="/#header"
			class="flex justify-center content-center items-center text-center text-2xl h-fill"
		>
			<p>
				Tyler<span class="opacity-70">Wolfe</span>
			</p>
		</a>

		<!-- Nav menu -->
		<nav
			class="flex flex-row no-wrap gap-10 text-xl"
		>
			<a href="/#about" class="hover:text-purple">About</a>
			<a href="/#projects" class="hover:text-purple">Projects</a>
			<a href="/blog" class="hover:text-purple">Blog</a>
			<a href="/#contact" class="hover:text-purple">Contact</a>
		</nav>
	</div>
	<div class="text-center font-normal text-lg mt-4">
		<p>Copyright &copy; 2024 Tyler Wojciechowski Wolfe</p>
	</div>
</footer>
