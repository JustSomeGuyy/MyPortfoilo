<!-- src/components/Welcome.svelte -->
<script lang='ts'>
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();
  let showContent = false; // Controls when to show the rest of the content

  onMount(() => {
    let helloInDifferentLanguages = [
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
  'Hello',
];


    const helloDisplay = document.getElementById('welcome');
    const display = document.getElementById('welcomeContainer');

    helloInDifferentLanguages = helloInDifferentLanguages.map(item => item.replace(/['"]/g, ''));


    if (!helloDisplay) return;

    let index = 0;

    function updateHello() {
      if (index < helloInDifferentLanguages.length) {
        helloDisplay.textContent = helloInDifferentLanguages[index];
        index++;

        // Determine the delay based on whether the text is 'Hello'
        const delay = helloInDifferentLanguages[index - 1] === 'Hello' ? 1500 : 750;
        
        setTimeout(() => {
          updateHello();
        }, delay);
      } else {
        // Apply fade-out class and notify parent component to show content
        display?.classList.add('fade-out');
        
        // Notify parent to show the rest of the content after fade-out
        setTimeout(() => {
          dispatch('finished');
        }, 1000); // Match this with the duration of the fade-out effect
      }
    }

    // Start the update loop
    updateHello();
  });
</script>

<style>

</style>

<div id="welcomeContainer" class="h-screen flex justify-center content-center items-center">
  <p id="welcome" class="text-9xl font-base"></p>
</div>
