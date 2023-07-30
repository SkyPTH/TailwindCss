openMenu = () => {
    document.getElementById("md-menu").classList.add("md:block");
};
closeMenu = () => {
    document.getElementById("md-menu").classList.remove("md:block");
};
openSearchMenu = () => {
    document.getElementById("mobile-search-menu").classList.remove("hidden");
};
closeSearchMenu = () => {
    document.getElementById("mobile-search-menu").classList.add("hidden");
};
openSmMenu = () => {
    document.getElementById("mobile-menu").classList.remove("hidden");
};
closeSmMenu = () => {
    document.getElementById("mobile-menu").classList.add("hidden");
};
modalHanlderLogin = () => {
    let modalLogin = document.querySelector('#modalLogin')
    modalLogin.classList.remove('hidden');
  }
  modalCloseLogin = () => {
    let modalLogin = document.querySelector('#modalLogin')
    modalLogin.classList.add('hidden');
  }
  modalHanlderCart = () => {
    let modalCart = document.querySelector('#modalCart')
    modalCart.classList.remove('hidden');
  }
  checkoutBack = () => {
    let modalCart = document.querySelector('#modalCart')
    modalCart.classList.add('hidden');
  }