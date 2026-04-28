const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">
        <i class="bi bi-calendar-event me-2"></i> دليل الفعاليات
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto" id="navLinks">
          <li class="nav-item"><a class="nav-link" href="index.html" data-page="index">الرئيسية</a></li>
          <li class="nav-item"><a class="nav-link" href="events.html" data-page="events">الفعاليات</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html" data-page="about">عن الدليل</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html" data-page="contact">اتصل بنا</a></li>
        </ul>
        <button id="darkModeToggle" class="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0"><i class="bi bi-moon-fill"></i></button>
      </div>
    </div>
  </nav>
`;

const footerHTML = `
  <button id="scrollToTop" title="العودة للأعلى"><i class="bi bi-arrow-up"></i></button>
  <footer>
    <div class="container text-center">
      <div class="mb-3">
        <a href="#" class="text-white text-decoration-none mx-2 fs-5"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white text-decoration-none mx-2 fs-5"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white text-decoration-none mx-2 fs-5"><i class="bi bi-instagram"></i></a>
      </div>
      <p class="mb-0">جميع الحقوق محفوظة &copy; 2026 دليل الفعاليات.</p>
    </div>
  </footer>
`;

// Inject components dynamically
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('layout-header');
  const footerContainer = document.getElementById('layout-footer');

  if (headerContainer) headerContainer.innerHTML = navbarHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // Active link logic
  const currentPagePath = window.location.pathname;
  let currentPage = currentPagePath.split('/').pop().replace('.html', '');
  if (!currentPage || currentPage === '') currentPage = 'index'; // Default for root

  const navLinks = document.querySelectorAll('#navLinks .nav-link');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === currentPage || (currentPage === 'event' && linkPage === 'events')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
