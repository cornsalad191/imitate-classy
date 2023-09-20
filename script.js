// const subMenuProduct = document.querySelector('#submenu-product');
// const subMenuResources = document.querySelector('#submenu-resources');
// const subMenuAbout = document.querySelector('#submenu-about');


// function toggleSubMenu() {
//   subMenuProduct.classList.toggle('open-menu');
// }





const productSubMenu = document.querySelector('#submenu-product');
const resourcesSubMenu = document.querySelector('#submenu-resources');
const productAbout = document.querySelector('#submenu-about');

const ProductSubMenu = () => {
  productSubMenu.classList.toggle('open-submenu');
}

const ResourcesSubMenu = () => {
  resourcesSubMenu.classList.toggle('open-submenu');
}

const AboutSubMenu = () => {
  productAbout.classList.toggle('open-submenu');
}


// window.onclick = (event) => {
//   if (!event.target.matches('#resources')) {
//     let r = document.querySelector('#submenu-resources');
//     if (r.classList.contains('open-submenu')){
//       r.classList.remove('open-submenu');
//     }
//   }
// }

