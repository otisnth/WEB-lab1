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