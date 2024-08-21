<script>
	import CtAs from './CTAs.svelte';
</script>

<div
	class="flex flex-row justify-center content-center items-center size-full gap-5 min-h-[80dvh] sm:flex-col-reverse sm:size-full md:flex-row"
>
	<div class="flex flex-col content-center text-start max-w-lg w-1/2 gap-4">
		<h2 class="text-6xl font-semibold relative z-0 size-full">
			&#128075; Hi there, <br />
			I am Tyler Wolfe.
			<span
				class="-z-10 rounded-sm w-9/12 h-7 bg-purple absolute right-16 bottom-0 opacity-75 blur-[1px]"
			></span>
		</h2>
		<p class="text-base font-semibold h-24">
			Welcome to my portfolio, I am Tyler Wolfe. I have been a developer for three years. Focusing
			on websites both big and small that serves the needs required.
		</p>
		<CtAs />
	</div>
	<div>
		<div class="size-96 flex justify-center items-center relative rounded-full">
			<img src="assets/hello.png" alt="" class="rounded-b-full z-1" />
			<span class="-z-10 size-[23rem] rounded-full bg-purple absolute -bottom-[1px]">
				<span class="-z-20 size-full blur-2xl rounded-full bg-purple absolute bottom-0"> </span>
			</span>
		</div>
	</div>
</div>

<div class="flex justify-center text-xl font-bold">
	<p class="">
		<span><i class="fa fa-arrow-down mx-1"></i></span> Scroll Down
	</p>
</div>
