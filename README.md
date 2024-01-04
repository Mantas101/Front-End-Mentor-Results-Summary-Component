# Frontend Mentor - Results summary component

![Design preview for the Results summary component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

## The challenge

The challenge is to build out this results summary component and get it looking as close to the design as possible.

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

  - Solution URL: [https://github.com/Mantas101/Front-End-Mentor-Results-Summary-Component]
  - Lvie Site URL: (https://front-end-mentor-results-summary-component-eight.vercel.app/)

## My process

## Built with

- Semantic HTML5 markup
- CSS
- Javascript
- Flexbox

### What I learned

## Flexbox

I started this project to learn more about Flexbox by putting the theory i have learnt into practise.
This is what i have learnt in the process of making this project.

  1. The flex-direction property in Flexbox controls the layout direction of flex items.
  Switching the flex-direction from row to column flips the container, inverting the main axis (from horizontal to vertical or vice versa). This causes the roles of justify-content and align-items to swap, meaning one function now behaves as the other did previously.
  2. The display: Flexbox/Grid property on an element only makes it so it is inherited by the immediate child, and the other children don't inherit it unless specified by adding display: inherit on to them.
  3. The flex-flow property although i haven't used it in the project, i learned it is great for combining flex: nowrap/wrap and the flex-direction properties.

## Breakpoints

I have learned that setting breakpoints with media queries should mainly be used if you're planning on having a layout shift when the screen gets smaller, which helps style the second portion after the breakpoint, I noticed that using clamps doesn't fix my resonsiveness fully when there is a layout shift and using a media query solves that problem.

## Javascript

I have tried to use only HTML/CSS, but then decided later to dinamically populate the "Results Summary List" and have learned how to fetch data from a local file, then parse it into an JS Object, iterate over each item in the data array. Furthermore,, a good way for me to implement the data inside my <ul> element was to create a html markup in my script and insert the parsed items from the data array where i needed them to be placed. Although it looks cluncky and not very readable, it did the job.

## Custom Border

Using CSS i learned that to make a border inside a component that doesn't span aroung the whole container I can use multiple <div> elements and style them all in to corners and use border properties on them and make them into a shape i want, then by using position: absolute on them and position: relative on the parent i can place them accordingly to looks like a cool border.

## Root Variables

I have started implementing root variables for my colors, I found that making variables for my colors makes it easier to manage and use the plethora of colors I had for this project.

### Continued development

I plan to upadate this and other project in the future and develop them, by adding a css framework, making the code more clean, readable and reusable.

### Useful resources

- [https://codesandbox.io/p/sandbox/clamp-linear-intepolation-based-on-viewport-width-builder-xgkft] - This helped me calculate my clamp values more accuratelly.

### Author

- Frontend Mentor - [@mantas101](https://www.frontendmentor.io/profile/mantas101)
  
