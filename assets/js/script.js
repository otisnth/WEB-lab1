document.querySelectorAll('a[href^="#"').forEach(link =>{
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});


document.querySelectorAll('.hamburger-menu__button').forEach(hamburgerBtn =>{
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');

        this.nextElementSibling.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                this.closest('.hamburger-menu__content').classList.remove('active');
                this.closest('.hamburger-menu__content').previousElementSibling.classList.remove('active');
            })
        })
    })
});

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    let count = 0;
    const target = parseInt(counter.getAttribute('data-target'));
    const delay = parseInt(counter.getAttribute('delay'));

    const updateCount = () => {

    if (count === target) {
        count = 0;
    } else {
        ++count;
    }

    if (count < 10){
        counter.innerHTML = count;
    } else {
        counter.innerHTML = count + "+";
    }
    
    setTimeout(updateCount, delay);
  };
  updateCount();
});

