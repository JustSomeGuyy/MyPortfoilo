<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();

	const helloInDifferentLanguages = [
		'Hola',
		'你好',
		'مرحبا',
		'नमस्ते',
		'Bonjour',
		'Здравстввуйте',
		'হ্যালো',
		'Olá',
		'こんにちは',
		'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
		'Hallo',
		'Halo',
		'హలో',
		'नमस्कार',
		'Merhaba',
		'안녕하세요',
		'வணக்கம்',
		'Xin chào',
		'ہیلو',
		'Hello'
	];

	let index = 0;
	let interval: number | undefined;

	onMount(() => {
		const helloDisplay = document.getElementById('welcome');

		function updateHello() {
			if (index < helloInDifferentLanguages.length) {
				if (helloDisplay) {
					helloDisplay.textContent = helloInDifferentLanguages[index];

					// Check if the current text is 'Hello'
					if (helloInDifferentLanguages[index] === 'Hello') {
						// Set a longer delay for 'Hello'
						interval = window.setTimeout(() => {
							dispatch('finished');
						}, 800); // 1 second delay for 'Hello'
					} else {
						// Set a shorter delay for other greetings
						interval = window.setTimeout(() => {
							index++;
							updateHello();
						}, 250); // 200 milliseconds delay for other greetings
					}
				}
			} else {
				dispatch('finished');
			}
		}

		updateHello();

		onDestroy(() => {
			if (interval) {
				clearTimeout(interval);
			}
		});
	});
</script>

<div class="h-screen flex justify-center items-center">
	<p id="welcome" class="w-full text-center text-9xl lg:text-9xl md:text-2xl sm:text-lg"></p>
</div>
