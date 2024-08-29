<script lang='ts'>
import { createEventDispatcher, onMount } from 'svelte';

const dispatch = createEventDispatcher();

onMount(() => {
  const helloInDifferentLanguages = [
    'Hello',
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
  ];

  const helloDisplay = document.getElementById('welcome');

  if (!helloDisplay) return;

  let index = 0;

  function updateHello() {
    // Apply fade-out class
    helloDisplay.classList.add('fade-out');

    // Wait for fade-out transition to complete before updating text
    setTimeout(() => {
      // Update the text content
      helloDisplay.textContent = helloInDifferentLanguages[index];

      // Reset and apply fade-in class
      helloDisplay.classList.remove('fade-out');
      helloDisplay.classList.add('fade-in');

      // Update index
      index++;
      if (index >= helloInDifferentLanguages.length) {
        // Apply final fade-out class
        setTimeout(() => {
          helloDisplay.classList.add('fade-out');
          setTimeout(() => {
            dispatch('finished');
          }, 1000); // Match this with the duration of the fade-out effect
        }, 1500); // Duration for the fade-in text
      } else {
        // Continue updating text
        setTimeout(updateHello, 1500); // Time to show each text
      }
    }, 1000); // Duration of the fade-out effect
  }

  // Start the update loop
  updateHello();
});
</script>

<div class="h-screen flex justify-center content-center items-center text-9xl">
  <p id="welcome"></p>
</div>
