//active my others services not only home
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click', () => {
    //The contains() method returns true if a node is a descendant of a node.
    //The contains() method returns false if not.

    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');
    }
});

const resumebtn = document.querySelectorAll('.resume-btn');

//btn means resume-btn ar value gula, mention here
resumebtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumedetails = document.querySelectorAll('.resume-detail');

        resumebtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumedetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const totalSlides = document.querySelectorAll('.portfolio-carousel .img-item').length;


const activePortfolio = () => {
    const ImaSlide = document.querySelector('.portfolio-carousel');
    ImaSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = totalSlides - 1;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
