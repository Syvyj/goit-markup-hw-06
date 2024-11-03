// Отримуємо елементи бургер-меню та мобільного меню
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');

// Функція для відкриття мобільного меню
function openMobileMenu() {
    mobileMenu.classList.add('is-open');
}

// Функція для закриття мобільного меню
function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
}

// Додаємо обробник подій для відкриття мобільного меню
burgerBtn.addEventListener('click', openMobileMenu);

// Додаємо обробник подій для закриття мобільного меню
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

// Закриття меню при кліку за його межами
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
        closeMobileMenu();
    }
});

 // Modal Scripts
      const modalOverlay = document.querySelector('.modal-overlay');
      const modalCloseBtn = document.querySelector('.close-button');
      const orderButton = document.querySelector('.order-button'); // Order Service button

      function openModal() {
          modalOverlay.classList.add('is-open');
      }

      function closeModal() {
          modalOverlay.classList.remove('is-open');
      }

      // Open modal on Order Service button click
      orderButton.addEventListener('click', openModal);
      modalCloseBtn.addEventListener('click', closeModal);

      // Close modal when clicking outside of it
      modalOverlay.addEventListener('click', (event) => {
          if (event.target === modalOverlay) {
              closeModal();
          }
      });