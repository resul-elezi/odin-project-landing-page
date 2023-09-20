'use strict';

// Body
function webPage(page) {
    page.style.margin = "0";
    page.style.padding = "0";
}
webPage(document.body);

// NavBar
function navBar() {
    let navigation = document.createElement('nav');
    navigation.style.background = "#1f2937";
    navigation.style.width = "100%";
    navigation.style.height = "4.25rem";
    navigation.style.display = "flex";
    navigation.style.justifyContent = "center";
    navigation.style.alignItems = "center";
    return navigation;
}
let nav = navBar();


// NavElements
function logoDiv() {
    let div = document.createElement('div');
    div.style.width = "50%";
    div.style.height = "100%";
    div.style.display = "flex"
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    return div;
}
let logoD = logoDiv();

function navLogo(text) {
    let logo = document.createElement('p');
    logo.style.color = "#f9faf8";
    logo.style.fontSize = "1.5rem";
    logo.innerText = text;
    return logo;
}
let logo = navLogo("Header Logo");
logoD.appendChild(logo);

function navLinkDiv() {
    let div = document.createElement('div');
    div.style.width = "50%";
    div.style.height = "100%";
    div.style.display = "flex"
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.gap = "1.5rem";
    return div;
}
let linksDiv = navLinkDiv();

function navLink1(text) {
    let link1 = document.createElement("a");
    link1.style.color = "#e5e7eb";
    link1.style.fontSize = "1.125rem";
    link1.innerText = text;
    link1.setAttribute("href", "#");
    link1.style.textDecoration = "none";
    return link1;
}
function navLink2(text) {
    let link2 = document.createElement("a");
    link2.style.color = "#e5e7eb";
    link2.style.fontSize = "1.125rem";
    link2.innerText = text;
    link2.setAttribute("href", "#");
    link2.style.textDecoration = "none";
    return link2;
}
function navLink3(text) {
    let link3 = document.createElement("a");
    link3.style.color = "#e5e7eb";
    link3.style.fontSize = "1.125rem";
    link3.innerText = text;
    link3.style.textDecoration = "none";
    link3.setAttribute("href", "#");
    return link3;
}
let link1 = navLink1();
let link2 = navLink2();
let link3 = navLink3();
let headerLinkOne = navLink1("Header Link One");
let headerLinkTwo = navLink2("Header Link Two");
let headerLinkThree = navLink3("Header Link Three");
linksDiv.appendChild(headerLinkOne);
linksDiv.appendChild(headerLinkTwo);
linksDiv.appendChild(headerLinkThree);



// Hero Section
function heroSection() {
    let heroS = document.createElement('section');
    heroS.style.background = "#1f2937";
    heroS.style.width = "100%";
    // heroS.style.margin = "0";
    return heroS;
}
let hero = heroSection();

// Hero Heading
function heroHeading(text) {
    let heading = document.createElement('h1');
    heading.style.color = "#f9faf8";
    heading.style.fontSize = "3rem";
    heading.innerText = text;
    // heading.style.margin = "0";
    return heading;
}
// let heroH = heroHeading();
let headingText = heroHeading("This Website is awesome");


// Adding Elements to the Navigation Bar
nav.appendChild(logoD);
nav.appendChild(linksDiv);

// Adding Elements to the Hero Section
hero.appendChild(headingText);



// Adding Navigation Bar and Hero Section to the Body
document.body.appendChild(nav);
document.body.appendChild(hero);