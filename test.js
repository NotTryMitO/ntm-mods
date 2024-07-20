// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            window.open('https://www.curseforge.com/minecraft/mc-mods/the-empyrium', '_blank');
        });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.discord');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            window.open('https://discord.gg/a5wsbWwETY', '_blank');
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.youtube');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            window.open('https://youtube.com/@nottrymito?si=kBCCDnCilYRlh2ej', '_blank');
        });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.instagram');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            window.open('https://www.instagram.com/martimfm1/', '_blank');
        });
    });
  });