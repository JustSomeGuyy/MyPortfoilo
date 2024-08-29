import { browser } from "$app/environment";

if (browser) {
  const helloDisplay = document.getElementById('welcome');

  window.onload = () => {
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
  
    function updateHello(index) {
      helloDisplay.textContent = helloInDifferentLanguages[index];
  
      // Hold "Hello" for 2 seconds
      if (helloInDifferentLanguages[index] === 'Hello') {
        setTimeout(() => {
          updateHello(index + 1);
        }, 1500);
      } else {
        // Update every second for other values
        setTimeout(() => {
          updateHello((index + 1) % helloInDifferentLanguages.length);
        }, 750);
      }
    }
  
    // Start the update loop
    updateHello(0);
  };
}


