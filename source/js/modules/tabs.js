let tab = function () {
  let ticketsTabNavLink = document.querySelectorAll('.tickets__tab-nav-link');
  let tabContent = document.querySelectorAll('.tickets__tabs-list');
  let tabName = '';

  ticketsTabNavLink.forEach((item) => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    ticketsTabNavLink.forEach((item) => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }
};

tab();
