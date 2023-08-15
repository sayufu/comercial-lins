const responsiveNavbar = document.getElementById('responsive-navbar');
const menuIcon = document.getElementById('menu-icon');

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close': 'menu';
    responsiveNavbar.classList.remove('hidden');
    if (e.name === 'menu'){
        responsiveNavbar.classList.add('hidden');
    }
}

function closeToggleMenu(e){
    menuIcon.name = menuIcon.name === 'menu' ? 'close': 'menu';
    responsiveNavbar.classList.add('hidden');
}

const aboutSectionRef = document.getElementById("about");
const productSectionRef = document.getElementById("product");
const serviceSectionRef = document.getElementById("service");
const locationSectionRef = document.getElementById("location");

const navigate = (htmlElement, scrollLogicalPosition = "start") => htmlElement.scrollIntoView({ behavior: "smooth", block: scrollLogicalPosition });

document.getElementById("about-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(aboutSectionRef);
});
document.getElementById("product-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(productSectionRef);
});
document.getElementById("service-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(serviceSectionRef);
});
document.getElementById("location-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(locationSectionRef);
});
document.getElementById("location-link-button").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(locationSectionRef);
});