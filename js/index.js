const siteContent = {
  "nav": {
    "item1": "Services",
    "item2": "Product",
    "item3": "Vision",
    "item4": "Features",
    "item5": "About",
    "item6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main": {
    "featuresh4": "Features",
    "featurescontent": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "abouth4": "About",
    "aboutcontent": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "servicesh4": "Services",
    "servicescontent": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "producth4": "Product",
    "productcontent": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "visionh4": "Vision",
    "visioncontent": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contacth4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAV
let navCont = document.querySelector("header").style.backgroundColor = "green";
let nav = document.querySelectorAll("a");
const navLink1 = siteContent.nav.item1;
const navLink2 = siteContent.nav.item2;
const navLink3 = siteContent.nav.item3;
const navLink4 = siteContent.nav.item4;
const navLink5 = siteContent.nav.item5;
const navLink6 = siteContent.nav.item6;
nav[0].textContent = navLink1;
nav[1].textContent = navLink2;
nav[2].textContent = navLink3;
nav[3].textContent = navLink4;
nav[4].textContent = navLink5;
nav[5].textContent = navLink6;

let thing = document.getElementsByTagName("header");
let newDiv = document.createElement("div");
newDiv.appendChild(document.createTextNode("AYE"));
newDiv.prepend(document.createTextNode("YUH"));
document.body.appendChild(newDiv);





// CTA SECTION
let head = document.querySelector("h1");
head.textContent = siteContent.cta.h1;

let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button;

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);

// MAIN SECTION
// TOP SECTION
let features = document.querySelectorAll("h4");
let featuresCont = document.querySelectorAll("p");
const featuresTitle = siteContent.main.featuresh4;
const featuresP = siteContent.main.featurescontent;
features[0].textContent = featuresTitle;
featuresCont[0].textContent = featuresP;

let about = document.querySelectorAll("h4");
let aboutCont = document.querySelectorAll("p");
const aboutTitle = siteContent.main.abouth4;
const aboutP = siteContent.main.aboutcontent;
about[1].textContent = aboutTitle;
aboutCont[1].textContent = aboutP;

// MIDDLE IMG
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main"]["middle-img-src"]);

//BOTTOM SECTION
let service = document.querySelectorAll("h4");
let serviceCont = document.querySelectorAll("p");
const serviceTitle = siteContent.main.servicesh4;
const serviceP = siteContent.main.servicescontent;
service[2].textContent = serviceTitle;
serviceCont[2].textContent = serviceP;

let product = document.querySelectorAll("h4");
let productCont = document.querySelectorAll("p");
const productTitle = siteContent.main.producth4;
const productP = siteContent.main.productcontent;
product[3].textContent = productTitle;
productCont[3].textContent = productP;

// CONTACT
let contact = document.querySelectorAll("h4");
let contactCont = document.querySelectorAll("p");
const contactTitle = siteContent.contact.contacth4;
const contactAddy = siteContent.contact.address;
const contactPhone = siteContent.contact.phone;
const contactEmail = siteContent.contact.email;
contact[5].textContent = contactTitle;
contactCont[5].textContent = contactAddy;
contactCont[6].textContent = contactPhone;
contactCont[7].textContent = contactEmail;

// FOOTER 
let footer = document.querySelectorAll("p");
const footerP = siteContent.footer.copyright;
footer[8].textContent = footerP;