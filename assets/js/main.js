// Render events based on container ID and filter
function renderEvents(containerId, eventsList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  eventsList.forEach(event => {
    // Generate badge color based on category
    let badgeClass = 'bg-primary';
    if(event.category === 'موسيقى') badgeClass = 'bg-info';
    if(event.category === 'رياضة') badgeClass = 'bg-success';
    if(event.category === 'ثقافة') badgeClass = 'bg-warning text-dark';
    if(event.category === 'عائلي') badgeClass = 'bg-danger';

    container.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
        <div class="card h-100">
          <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <span class="badge ${badgeClass} mb-2">${event.category}</span>
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text text-muted small"><i class="bi bi-calendar-event"></i> ${event.date} | <i class="bi bi-geo-alt"></i> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm mt-auto">التفاصيل</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Render team members
function renderTeam(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  teamMembers.forEach(member => {
    let classInfo = member.class ? `<p class="card-text small m-0">الصف: ${member.class}</p>` : '';
    container.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
        <div class="card text-center p-3 h-100">
          <img src="${member.image}" class="rounded-circle mx-auto mb-3" alt="${member.name}" style="width: 100px; height: 100px; object-fit: cover; border: 3px solid var(--primary-color);">
          <div class="card-body p-0">
            <h6 class="card-title fw-bold">${member.name}</h6>
            <p class="card-text text-muted small m-0">${member.role}</p>
            <p class="card-text small m-0">ID: ${member.id}</p>
            ${classInfo}
          </div>
        </div>
      </div>
    `;
  });
}

// Filter events for events.html
function filterEvents() {
  const searchInput = document.getElementById('searchInput')?.value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter')?.value;
  const dateFilter = document.getElementById('dateFilter')?.value;
  
  if (!searchInput && searchInput !== "" && !categoryFilter && !dateFilter) return;

  const filtered = events.filter(event => {
    const matchSearch = event.title.toLowerCase().includes(searchInput) || event.description.toLowerCase().includes(searchInput);
    const matchCategory = categoryFilter === '' || event.category === categoryFilter;
    const matchDate = dateFilter === '' || event.date === dateFilter;
    return matchSearch && matchCategory && matchDate;
  });
  
  renderEvents('allEventsContainer', filtered);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize AOS
  if(typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) document.body.classList.add('dark-mode');
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
  }

  // Scroll To Top
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // index.html specific
  if (document.getElementById('recentEventsContainer')) {
    renderEvents('recentEventsContainer', events.slice(0, 6)); // Display 6 recent
    renderTeam('teamContainer');
  }

  // events.html specific
  if (document.getElementById('allEventsContainer')) {
    filterEvents();
    
    // add event listeners
    document.getElementById('btnSearch')?.addEventListener('click', filterEvents);
    document.getElementById('categoryFilter')?.addEventListener('change', filterEvents);
  }

  // event.html specific
  if (document.getElementById('eventDetailsContainer')) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));
    const event = events.find(e => e.id === eventId) || events[0]; // fallback to first event
    
    document.getElementById('eventTitle').innerText = event.title;
    document.getElementById('eventImage').src = event.image;
    document.getElementById('eventDate').innerText = event.date;
    document.getElementById('eventLocation').innerText = event.location;
    document.getElementById('eventCategory').innerText = event.category;
    document.getElementById('eventDescription').innerText = event.description;

    // render related
    const related = events.filter(e => e.category === event.category && e.id !== event.id).slice(0, 3);
    renderEvents('relatedEventsContainer', related);
  }

  // about.html specific
  if (document.getElementById('aboutTeamContainer')) {
    renderTeam('aboutTeamContainer');
  }

  // contact.html validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const alertArea = document.getElementById('alertArea');
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message) {
        alertArea.innerHTML = '<div class="alert alert-danger">الرجاء تعبئة جميع الحقول.</div>';
      } else if (!emailRegex.test(email)) {
        alertArea.innerHTML = '<div class="alert alert-danger">صيغة البريد الإلكتروني غير صحيحة.</div>';
      } else {
        alertArea.innerHTML = '<div class="alert alert-success">تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.</div>';
        contactForm.reset();
      }
    });
  }
});
