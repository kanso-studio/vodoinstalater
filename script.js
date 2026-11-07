 // Promena izgleda header-a pri skrolovanju
 window.addEventListener('scroll', function() {
     const header = document.getElementById('header');
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Intersection Observer za fade-in animacije
 const observerOptions = {
     root: null,
     rootMargin: '0px',
     threshold: 0.1
 };

 const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
             observer.unobserve(entry.target); // Animiraj samo jednom
         }
     });
 }, observerOptions);

 document.querySelectorAll('.fade-in').forEach(element => {
     observer.observe(element);
 });

 // Glatko skrolovanje za navigacione linkove
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             window.scrollTo({
                 top: target.offsetTop - 80, // Offset zbog fixed headera
                 behavior: 'smooth'
             });
         }
     });
 });

 // --- LOGIKA ZA POPUP FORMU ---
 const modal = document.getElementById('quoteModal');
 const closeBtn = document.querySelector('.close-modal');

 // Funkcija za otvaranje modala
 function openModal(e) {
     if (e) e.preventDefault(); // Sprečava skrolovanje do linka
     modal.style.display = 'flex';
 }

 // Funkcija za zatvaranje modala
 function closeModal() {
     modal.style.display = 'none';
 }

 // Zatvaranje na klik X
 closeBtn.addEventListener('click', closeModal);

 // Zatvaranje na klik van forme
 window.addEventListener('click', function(e) {
     if (e.target === modal) {
         closeModal();
     }
 });

 // Dodavanje klase 'trigger-modal' na dugmiće u HTML-u
 // (Pronalazimo sve dugmiće koji sadrže određeni tekst i dodajemo im event)
 document.querySelectorAll('.trigger-modal').forEach(btn => {
     btn.addEventListener('click', openModal);
 });
