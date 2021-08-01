const navbar = document.querySelector('#navbar');
const getStartedButton = document.querySelector('#getStartedButton');

//change navbar background color when on scroll
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('bg-body');
        getStartedButton.classList.add('bg-green');
        getStartedButton.classList.add('border-n');
    } else {
        navbar.classList.remove('bg-body');
        getStartedButton.classList.remove('bg-green');
        getStartedButton.classList.remove('border-n');
    }
};