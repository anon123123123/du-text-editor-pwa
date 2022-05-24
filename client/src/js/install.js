const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - Done
window.addEventListener('beforeinstallprompt', (event) => {
    //event.preventDefault()
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element - Done
butInstall.addEventListener('click', async () => {
   // event.preventDefault()
    const clickE = window.deferredPrompt;
    if (!clickE) {
        return;
      }
    clickE.prompt();
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event - Done
window.addEventListener('appinstalled', (event) => {
   // event.preventDefault()
    //textHeader.textContent = 'Successfully installed!';
    console.log('appinstalled', event);
    window.deferredPrompt = null;
});
