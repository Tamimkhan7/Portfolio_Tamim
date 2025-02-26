const navLinks = document.querySelectorAll('header nav a');
const section = document.querySelectorAll('section');
const logoLink = document.querySelector('.logo');

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const barsBox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    section.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }
});

const resumebtn = document.querySelectorAll('.resume-btn');

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
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 0;
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = totalSlides - 1;
    }
    activePortfolio();
});
