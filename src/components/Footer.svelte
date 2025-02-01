<script lang="ts">
	import Socials from './Socials.svelte';
</script>

<footer class="flex flex-col w-full h-15">
	<div class="flex justify-center content-center items-around w-full mx-auto flex-col gap-1 sm:gap-0 md:flex-row no-wrap h-10">
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
			class="flex flex-row no-wrap justify-center content-center items-center gap-10 text-xl w-full"
		>
			<a href="/#about" class="hover:text-purple">About</a>
			<a href="/#projects" class="hover:text-purple">Projects</a>
			<a href="/blog" class="hover:text-purple">Blog</a>
			<a href="/#contact" class="hover:text-purple">Contact</a>
		</nav>

		<!-- Back to the top button -->
		<a
			href="#header"
			class="hidden rounded-full size-7 bg-textColor text-darkGrey border-darkGrey border-solid md:flex justify-center content-center items-center text-lg z-50"
		>
			<i class="fa fa-arrow-up"></i>
		</a>
	</div>
	<div class="text-center font-normal text-lg mt-4">
		<p>Copyright &copy; 2024 Tyler Wojciechowski Wolfe</p>
	</div>
</footer>
