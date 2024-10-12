<script>
	import CtAs from './CTAs.svelte';
</script>

<section
	class="flex justify-center content-center items-center size-full gap-4 min-h-[80dvh] flex-col-reverse md:flex-row"
>
	<div class="flex flex-col content-center text-start max-w-lg w-1/2 gap-4">
		<h2 class="text-3xl md:text-6xl font-semibold relative z-0 size-full">
			&#128075; Hi there, <br />
			I am Tyler Wolfe.
			<span
				class="-z-10 rounded-sm w-9/12 h-7 bg-purple absolute right-16 bottom-0 opacity-75 blur-[1px]"
			></span>
		</h2>
		<p class="text-base font-semibold md:h-24">
			Welcome to my portfolio, I am Tyler Wolfe. I have been a developer for three years. Focusing
			on websites both big and small that serves the needs required.
		</p>
		<CtAs />
	</div>
	<div>
		<div class=" md:size-96 flex justify-center items-center relative rounded-full">
			<img src="assets/hello.png" alt="" class="rounded-b-full z-1 size-2/3 md:h-full md:w-full" />
			<span class="-z-10 h-full w-2/3 md:size-[23rem] rounded-full bg-purple absolute md:-bottom-[1px]">
				<span class="-z-20 size-full blur-2xl rounded-full bg-purple absolute bottom-0"> </span>
			</span>
		</div>
	</div>
</section>

<div class="md:flex justify-center text-xl font-bold hidden">
	<p class="">
		<span><i class="fa fa-arrow-down mx-1"></i></span> Scroll Down
	</p>
</div>
