const onglets = document.querySelectorAll('.nav-item');


function activateNavItem(){
    this.classList.toggle('active');
    console.log("clicked");
}
onglets.forEach(onglet => onglet.addEventListener('click',activateNavItem));