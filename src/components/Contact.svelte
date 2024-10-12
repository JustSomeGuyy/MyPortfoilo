<script>
</script>

<section
	id="contact"
	class="flex flex-row h-screen min-w-52 w-full justify-center content-center gap-36 relative snap-mandatory snap-end"
>
	<div class="flex flex-col gap-14 items-center justify-center">
		<h2 class="font-semibold text-3xl md:text-5xl relative">
			Lets Work Together
			<!-- Heading skew -->
			<span
				class="-z-10 rounded-sm w-[105%] h-7 bg-purple absolute -bottom-2 -left-3 opacity-70 blur-[1px]"
			></span>
		</h2>
		<div class="flex flex-col justify-center text-xl gap-14 relative">
			<p>Send me a message and let's chat and work together!</p>
			<!-- Name input skew -->
			<span
				class="-z-10 hidden sm:block rounded-sm w-5/12 h-7 bg-purple absolute top-28 -left-2 opacity-70 blur-[1px]"
			></span>
			<!-- Email input skew -->
			<span
				class="-z-10 hidden sm:block rounded-sm w-5/12 h-7 bg-purple absolute top-28 right-5 opacity-70 blur-[1px]"
			></span>
			<!-- Textarea skew -->
			<span
				class="-z-10 hidden sm:block rounded-sm w-6/12 h-7 bg-purple absolute top-46 -left-2 opacity-70 blur-[1px]"
			></span>
			<!-- Contact Form -->
			<form
				class="flex flex-col gap-9 justify-center content-center items-center"
				action="mailto:tyler.wojciechowski@icloud.com"
				target="_blank"
				method="post"
				enctype="text/plain"
			>
				<div class="flex w-full flex-col md:flex-row gap-14">
					<input
						class="input h-12 p-2 md:w-64 md:max-w-72 font-semibold text-base"
						type="text"
						name="Name"
						id="nameInput"
						placeholder="Name"
					/>
					<input
						class="input h-12 p-2 md:w-64 md:max-w-72 font-semibold text-base"
						type="email"
						name="Email"
						id="emailInput"
						placeholder="Email"
					/>
				</div>
				<textarea
					class="input resize-none h-40 min-h-28 w-full p-2 font-semibold text-base"
					name="Message"
					id="message"
					placeholder="Start your message here.."
				></textarea>
				<button class="text-darkGrey py-1 px-5 rounded-lg bg-purple hover:bg-hoverColor" type="submit">
					<p>Let's Chat <i class="fa fa-arrow-right"></i></p>
				</button>
			</form>
		</div>
	</div>
	<div class="relative top-36 hidden lg:block">
		<img
			id="contactImage"
			class=" size-80 sm:size-20 md:size-60 lg:size-80 rounded-b-full"
			src="assets/Subject.png"
			alt=""
		/>
		<span class="-z-10 h-80 w-80 bg-purple absolute top-0 left-0 blur-lg rounded-full"></span>
	</div>
</section>
