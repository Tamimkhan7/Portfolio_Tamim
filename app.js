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