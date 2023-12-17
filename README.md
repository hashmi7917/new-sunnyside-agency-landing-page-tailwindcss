# React + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Installation: Clone the Repo and Install Modules Using

## npm install

# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Desktop

![desktop](https://github.com/hashmi7917/new-sunnyside-agency-landing-page-tailwindcss/assets/38833326/4a58a26b-7e17-4221-8730-5baf84fc4ed1)

<br/>
### Mobile

![mobile](https://github.com/hashmi7917/new-sunnyside-agency-landing-page-tailwindcss/assets/38833326/5bee32de-757d-4bb9-9fa0-ee6df8a6ec40)

### Links

- Solution URL: [Github](https://github.com/hashmi7917/new-sunnyside-agency-landing-page-tailwindcss)
- Live Site URL: [Netlify](https://sunnyside-landing-page-hashmi.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library + Vite
- [Fontawesome](https://fontawesome.com/icons) - Icons
- [Tailwind CSS](https://tailwindcomponents.com/cheatsheet/) - Tailwind CSS Cheatsheet

### What I learned

Tailwind CSS , Flexbox, Layouts

```html
<nav className="flex justify-between items-center p-5">
  <img className="w-40" src="{Logo}" alt="logo header" />
  <ul className="w-1/3 flex justify-around items-center text-neutral-White">
    <li className="cursor-pointer">About</li>
    <li className="cursor-pointer">Services</li>
    <li className="cursor-pointer">Products</li>
    <button
      className="bg-neutral-White font-Fraunces text-neutral-VeryDarkDesaturatedBlue text-sm w-32 h-10 rounded-full hover:bg-transparent hover:border hover:text-neutral-White"
      type="submit"
    >
      CONTACT
    </button>
  </ul>
</nav>
```

```css
theme: {
    extend: {
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        md: '16px',
      },
      colors: {
        primary: {
          SoftRed: 'hsl(7, 99%, 70%)',
          Yellow: 'hsl(51, 100%, 49%)',
          DarkDesaturatedCyanGDesignText: 'hsl(167, 40%, 24%)',
          DarkBluePhotographyText: 'hsl(198, 62%, 26%)',
          DarkModerateCyanFooter: 'hsl(167, 44%, 70%)',
          FooterText: 'hsl(167, 46%, 31%)',
        },
        neutral: {
          VeryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
          VeryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
          DarkGrayishBlue: 'hsl(232, 10%, 55%)',
          GrayishBlue: 'hsl(210, 4%, 67%)',
          White: 'hsl(0, 0%, 100%)',
        },
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-short': 'ping 1s ease-in 1',
      },
    },
  },
```

### Continued development

Tailwind CSS, CSS Grids, Flexbox, Layouts

### Useful resources

- [Tailwind CSS Cheatsheet](https://tailwindcomponents.com/cheatsheet/) - This helped me for easily access to tailwind css. I really liked this pattern and will use it going forward.

## Author

- Website - [Github-Profile](https://github.com/hashmi7917)
- Frontend Mentor - [@hashmi7917](https://www.frontendmentor.io/profile/hashmi7917)
- Instagram - [@hashmi.developer](https://www.instagram.com/hashmi.developer/)

## Acknowledgments

Thanks to Tailwind CSS Community and Frontend Mentor Community.
