'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// fix header // фиксирований header

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 10) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

navToggleBtn.addEventListener('click', function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener('click', function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// dark & light theme // перемикання тем

const themeToggleBtn = document.querySelector('[data-theme-btn]');
themeToggleBtn.addEventListener('click', function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains('active')) {
    document.body.classList.remove('dark_theme');
    document.body.classList.add('light_theme');

    localStorage.setItem('theme', 'light_theme');
  } else {
    document.body.classList.add('dark_theme');
    document.body.classList.remove('light_theme');

    localStorage.setItem('theme', 'dark_theme');
  }
});

// writing and GЕТ temes to localStorage // запись и получения последнего варианта

if (localStorage.getItem('theme') === 'light_theme') {
  themeToggleBtn.classList.add('active');
  document.body.classList.remove('dark_theme');
  document.body.classList.add('light_theme');
} else {
  themeToggleBtn.classList.remove('active');
  document.body.classList.remove('light_theme');
  document.body.classList.add('dark_theme');
}

/**
 * expirience toggle
 */

const expirienceBtns = document.querySelectorAll('.expirience-btn');
const jobs = document.querySelectorAll('.job-decsruption-wrapper');
expirienceBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const textContent = e.target.textContent;
    jobs.forEach(job => {
      if (job.dataset.job === textContent) {
        job.classList.remove('is-hidden');
      } else {
        job.classList.add('is-hidden');
      }
    });
  });
});
