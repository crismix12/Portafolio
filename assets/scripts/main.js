const menu = document.querySelector("ul.nav--menu");
// console.log(menu);
const icon = document.getElementById("menu-icon");



// eventListeners
//elemento.addEventListener( "evento", () => {
    //ejecutar accion cuando el "evento" sea detectado sobre el elemento
// }) 

icon.addEventListener( "click", () => menu.classList.toggle("visible"));

// function toggleMenu(){
//     menu.classList.toggle("visible");
// }

function scrollHeader() {
	const header = document.getElementById("nav-menu");

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 50) {
			header.classList.add("scroll-header");
		} else {
			header.classList.remove("scroll-header");
		}
	});
}
scrollHeader();