const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
// Change the color of the navigation text to be green.
// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const nav = document.querySelector('nav');

const navLinks = nav.querySelectorAll('a');
const nameKey = 'nav-item-';
navLinks.forEach( (item, index) => {
  item.textContent = siteContent['nav'][`${nameKey}${index + 1}`]; 
  item.style.color = 'green';
});

const newNav1 = document.createElement('a');
newNav1.textContent = 'Home';
newNav1.style.color = 'green';
nav.prepend(newNav1);

const newNav2 = document.createElement('a');
newNav2.textContent = 'Blog';
newNav2.style.color = 'green';
nav.appendChild(newNav2);


// cta
const cta = document.querySelector('.cta');
const ctaH1 = cta.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];
const ctaButton = cta.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];
const ctaImg = cta.querySelector('#cta-img');
ctaImg.setAttribute('src', `${siteContent['cta']['img-src']}`);

// main content - top content
const container = document.querySelector('.container');
const contentText = container.querySelectorAll('p');
const contentHeadings = container.querySelectorAll('h4');

contentText[0].textContent = siteContent['main-content']['features-content'];
contentHeadings[0].textContent = siteContent['main-content']['features-h4'];

contentText[1].textContent = siteContent['main-content']['about-content'];
contentHeadings[1].textContent = siteContent['main-content']['about-h4'];


// main content - middle img
const contentImg = container.querySelector('.middle-img');
contentImg.setAttribute('src', `${siteContent['main-content']['middle-img-src']}`);

// main content - bottom content

contentText[2].textContent = siteContent['main-content']['services-content'];
contentHeadings[2].textContent = siteContent['main-content']['services-h4'];

contentText[3].textContent = siteContent['main-content']['product-content'];
contentHeadings[3].textContent = siteContent['main-content']['product-h4'];

contentText[4].textContent = siteContent['main-content']['vision-content'];
contentHeadings[4].textContent = siteContent['main-content']['vision-h4'];


// contact 
contentHeadings[5].textContent = siteContent['contact']['contact-h4'];

contentText[5].textContent = siteContent['contact']['address'];
contentText[6].textContent = siteContent['contact']['phone'];
contentText[7].textContent = siteContent['contact']['email'];

// footer
contentText[8].textContent = siteContent['footer']['copyright'];


// stretch task 3
cta.style.background = '#E0FFFF';

function callback(){
 container.style.background = '#FFFAF0';
}
window.addEventListener('scroll', callback)

const button = document.querySelector('button');

function listener(event){
  event.currentTarget.style.background = '#FFD700';
  button.style.fontWeight = 'bold';
  console.log(event.currentTarget);
}

cta.addEventListener('focusin', listener);
// button.addEventListener('click', listener);


cta.addEventListener('focusout', event =>{
  event.target.style.background = '';
  cta.style.background = '#E0FFFF';
  button.style.fontWeight = '';
})
// ❓ why the event listener only work when I focusin and focusout on the button not the cta section?
// ❓ when i change the event from focusin to click on line 129, the whole cta section work, but the focusout only works afte I click the button and then focusout of the cta