const sideMenu = document.querySelector('#sideMenu')
const navbar = document.querySelector('nav');
const navlinks = document.querySelector('nav ul');
function openmenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closemenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navlinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navlinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
    }
})
//------lignt mode and dark mode----



// var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
    
// // });
// var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || 
//     (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {
//     // Toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // If set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
// });

// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
//     document.documentElement.classList.add('dark');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
//     document.documentElement.classList.remove('dark');
// }

// function toggleTheme() {
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
// }

const themeToggleBtn = document.getElementById('theme-toggle');

function toggleTheme() {
  document.body.classList.toggle('dark');

  console.log('Toggling theme:', document.body.classList.contains('dark'));


  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('color-theme', 'light');
  } else {
    localStorage.setItem('color-theme', 'dark');
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

// Initial theme check
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}


function isLocalStorageSupported() {
    try {
      localStorage.setItem('color-theme', 'light');
    //   localStorage.removeItem('test');
      return true;
    } catch(e) {
      return false;
    }
  }
  