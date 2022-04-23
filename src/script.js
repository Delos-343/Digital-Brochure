
/* Show Menu */
const showMenu = (toggleId, navId) => {
  
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    /* Validate variables */
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
          
            /* Add .show-menu to .nav__menu  */
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/* Dark Mode */ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

/* Set last topic if user.select() */
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

/* Set current theme via validation of .dark-theme */
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

/* Validate if user.onClick(topic) */
if (selectedTheme) {
  
  /* If validation = true, catch event on
     activation or deactivation of dark mode */
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

/* Activate or deactivate theme with btn */
themeButton.addEventListener('click', () => {
    /* Add or remove the dark and icon theme */
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    /* We catch the last theme event */
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})