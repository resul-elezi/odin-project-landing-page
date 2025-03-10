'use strict';

// ------------- Body --------------
function webPage(page) {
    page.style.margin = "0 auto";
    page.style.padding = "0";
    page.style.minHeight = "100vh";
    page.style.maxWidth = "120rem";
    page.style.backgroundColor = "#1f2937";
    page.style.display = "flex";
    page.style.flexDirection = "column";
}
webPage(document.body);

// ------------ NavBar -----------
function navBar() {
    let navigation = document.createElement('nav');
    navigation.style.background = "#1f2937";
    navigation.style.width = "100%";
    navigation.style.maxWidth = "90rem"
    navigation.style.margin = "0 auto"
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
    div.style.justifyContent = "flex-start";
    div.style.alignItems = "center";
    div.style.paddingLeft = "13.125rem";
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
    div.style.justifyContent = "flex-end";
    div.style.alignItems = "center";
    div.style.paddingRight = "13.125rem";
    div.style.gap = "1.5rem";
    return div;
}
let linksDiv = navLinkDiv();

function navLink1(text) {
    let link1 = document.createElement("a");
    link1.style.color = "#e5e7eb";
    link1.style.fontSize = "1.125rem";
    link1.innerText = text;
    link1.setAttribute("href", "#main");
    link1.style.textDecoration = "none";
    return link1;
}
function navLink2(text) {
    let link2 = document.createElement("a");
    link2.style.color = "#e5e7eb";
    link2.style.fontSize = "1.125rem";
    link2.innerText = text;
    link2.setAttribute("href", "#quote");
    link2.style.textDecoration = "none";
    return link2;
}
function navLink3(text) {
    let link3 = document.createElement("a");
    link3.style.color = "#e5e7eb";
    link3.style.fontSize = "1.125rem";
    link3.innerText = text;
    link3.style.textDecoration = "none";
    link3.setAttribute("href", "#cta");
    return link3;
}
let link1 = navLink1();
let link2 = navLink2();
let link3 = navLink3();
let headerLinkOne = navLink1("Main section");
let headerLinkTwo = navLink2("Quote section");
let headerLinkThree = navLink3("CTA section");
linksDiv.appendChild(headerLinkOne);
linksDiv.appendChild(headerLinkTwo);
linksDiv.appendChild(headerLinkThree);

// -------------- Hero Section ---------------------------
function heroSection() {
    let heroS = document.createElement('section');
    heroS.style.background = "#1f2937";
    heroS.style.margin = "0 auto";
    heroS.style.width = "100%";
    heroS.style.maxWidth = "90rem";
    heroS.style.paddingTop = "5.9375rem"
    heroS.style.paddingBottom = "8.125rem";
    heroS.style.display = "flex";
    heroS.style.justifyContent = "center";
    heroS.style.alignContent = "center";
    return heroS;
}
let hero = heroSection();

function heroDivLeft() {
    let divL = document.createElement('div');
    divL.style.background = "#1f2937";
    divL.style.paddingLeft = "13.125rem";
    divL.style.paddingRight = "3.4375rem";
    divL.style.width = "50%";
    return divL;
}
let heroDivL = heroDivLeft();

// Hero Heading
function heroHeading(text) {
    let heading = document.createElement('h1');
    heading.style.margin = "0"
    heading.style.color = "#f9faf8";
    heading.style.fontSize = "3rem";
    heading.innerText = text;
    return heading;
}
let headingText = heroHeading("This Website is awesome");

function heroParagraph(text) {
    let par = document.createElement('p')
    par.style.color = "#e5e7eb"
    par.style.margin = ".25rem 0 1rem 0"
    par.style.fontSize = "1.125rem";
    par.innerText = text;
    return par;
}
let heroPar = heroParagraph("Because this page is created only with JavaScript. To see the source code click on the button");

function heroButton(text) {
    let btn = document.createElement('a');
    btn.setAttribute("href", "https://github.com/resul-elezi/odin-project-landing-page/blob/main/script.js");
    btn.setAttribute("target", "_blank");
    btn.style.display = "inline-block";
    btn.style.backgroundColor = "#3882f6";
    btn.style.color = "white";
    btn.style.fontSize = "1.125rem";
    btn.style.textDecoration = "none";
    btn.style.padding = ".5rem 2rem";
    btn.style.borderRadius = ".5rem";
    btn.innerText = text;
    return btn;
}
let heroBtn = heroButton("Show code");

function heroDivRight() {
    let divR = document.createElement('div');
    divR.style.background = "#1f2937";
    divR.style.paddingRight = "13.125rem";
    divR.style.width = "50%";
    return divR;
}
let heroDivR = heroDivRight();

function heroDivRightImg() {
    let img = document.createElement('img');
    img.setAttribute("src", "https://picsum.photos/seed/picsum/520/235");
    img.setAttribute("alt", "Random Image");
    img.style.maxWidth = "100%";
    img.style.width = "100%";
    return img;
}
let imgHeroRight = heroDivRightImg();

// -------------- Main Section ---------------------------
function mainS() {
    let main = document.createElement('main');
    main.style.width = "100%";
    main.style.backgroundColor = "white";
    main.style.margin = "0 auto";
    main.setAttribute("id", "main");
    return main;
}
let mainSection = mainS();

// Main Section Top 
function mainDivT() {
    let main = document.createElement('div');
    main.style.width = "100%";
    main.style.display = "flex";
    main.style.justifyContent = "centre";
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
    return main;
}
let mainDivTop = mainDivT();

function mainDivTopH(text) {
    let heading = document.createElement('h3');
    heading.style.color = "#1f2937"
    heading.style.fontSize = "2.25rem";
    heading.innerText = text;
    return heading;
}
let mainTitle = mainDivTopH("Some random information.");

function cardDiv() {
    let card = document.createElement('div');
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.gap = "3.125rem";
    return card;
}
let cardCtr = cardDiv();

// ---------- Card One --------------
function cardOne() {
    let one = document.createElement('div');
    one.style.width = "10.625rem";
    one.style.textAlign = "center";
    return one;
}
let card01 = cardOne();

function cardOneImg() {
    let img = document.createElement('img');
    img.setAttribute("src", "https://picsum.photos/170");
    img.setAttribute("alt", "Random Image");
    img.style.maxWidth = "100%";
    img.style.borderRadius = ".5rem";
    return img;
}
let card01Img = cardOneImg();

function cardOneT(text) {
    let txt = document.createElement('p');
    txt.style.fontSize = "1.125rem";
    txt.style.marginTop = ".625rem";
    txt.style.marginBottom = "7.5rem";
    txt.innerText = text;
    return txt;
}
let card01Text = cardOneT("this is some subtext under an illustration or image");

// Adding Elements to Card one
card01.appendChild(card01Img);
card01.appendChild(card01Text);

// ---------- Card Two --------------
function cardTwo() {
    let two = document.createElement('div');
    two.style.width = "10.625rem";
    two.style.textAlign = "center";
    return two;
}
let card02 = cardTwo();

function cardTwoImg() {
    let img = document.createElement('img');
    img.setAttribute("src", "https://picsum.photos/170");
    img.setAttribute("alt", "Random Image");
    img.style.maxWidth = "100%";
    img.style.borderRadius = ".5rem";
    return img;
}
let card02Img = cardTwoImg();

function cardTwoT(text) {
    let txt = document.createElement('p');
    txt.style.fontSize = "1.125rem";
    txt.style.marginTop = ".625rem";
    txt.style.marginBottom = "7.5rem";
    txt.innerText = text;
    return txt;
}
let card02Text = cardTwoT("this is some subtext under an illustration or image");

// Adding Elements to Card two
card02.appendChild(card02Img);
card02.appendChild(card02Text);

// ---------- Card Three --------------

function cardThree() {
    let three = document.createElement('div');
    three.style.width = "10.625rem";
    three.style.textAlign = "center";
    return three;
}
let card03 = cardThree();

function cardThreeImg() {
    let img = document.createElement('img');
    img.setAttribute("src", "https://picsum.photos/170");
    img.setAttribute("alt", "Random Image");
    img.style.maxWidth = "100%";
    img.style.borderRadius = ".5rem";
    // img.style.width = "100%";
    return img;
}
let card03Img = cardThreeImg();

function cardThreeT(text) {
    let txt = document.createElement('p');
    txt.style.fontSize = "1.125rem";
    txt.style.marginTop = ".625rem";
    txt.style.marginBottom = "7.5rem";
    txt.innerText = text;
    return txt;
}
let card03Text = cardThreeT("this is some subtext under an illustration or image");

// Adding Elements to Card three
card03.appendChild(card03Img);
card03.appendChild(card03Text);

// ---------- Card Four --------------

function cardFour() {
    let four = document.createElement('div');
    four.style.width = "10.625rem";
    four.style.textAlign = "center";
    return four;
}
let card04 = cardFour();

function cardFourImg() {
    let img = document.createElement('img');
    img.setAttribute("src", "https://picsum.photos/170");
    img.setAttribute("alt", "Random Image");
    img.style.maxWidth = "100%";
    img.style.borderRadius = ".5rem";
    // img.style.width = "100%";
    return img;
}
let card04Img = cardFourImg();

function cardFourT(text) {
    let txt = document.createElement('p');
    txt.style.fontSize = "1.125rem";
    txt.style.marginTop = ".625rem";
    txt.style.marginBottom = "7.5rem";
    txt.innerText = text;
    return txt;
}
let card04Text = cardFourT("this is some subtext under an illustration or image");

// Adding Elements to Card four
card04.appendChild(card04Img);
card04.appendChild(card04Text);

//Adding Elements to Card div
cardCtr.appendChild(card01);
cardCtr.appendChild(card02);
cardCtr.appendChild(card03);
cardCtr.appendChild(card04);

// Adding Elements to Main section top div
mainDivTop.appendChild(mainTitle);
mainDivTop.appendChild(cardCtr);

// Main Section Bottom 

function mainDivB() {
    let main = document.createElement('div');
    main.style.width = "100%";
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.style.backgroundColor = "#e5e7eb";
    return main;
}
let mainDivBottom = mainDivB();

function heroQ(text) {
    let quote = document.createElement('blockquote');
    quote.style.color = "#1f2937";
    quote.style.fontSize = "2.25rem";
    quote.style.fontStyle = "italic";
    quote.style.margin = "0";
    quote.style.padding = "8.56rem 19rem 0";
    quote.innerText = text;
    quote.setAttribute("id", "quote");
    return quote;
}
let quoteText = heroQ("This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All i know is that it looks nice.");

function heroQP(text) {
    let par = document.createElement('p');
    par.style.fontSize = "2rem";
    par.style.fontWeight = "bold";
    par.style.alignSelf = "end";
    par.style.margin = "0";
    par.style.padding = "0 19rem 6.375rem 0";
    par.innerHTML = text;
    return par;
}
let heroQuoteParagraph = heroQP("-Resul, <cite>The introvert Coder</cite>");

// ---------- Call to action section --------------

function callToActionSection() {
    let section = document.createElement('section');
    section.style.backgroundColor = "white";
    section.style.display = "flex";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";
    section.style.padding = "6.25rem 0";
    section.setAttribute("id", "cta");
    return section;
}
let ctaSection = callToActionSection();

function callToActionDiv() {
    let div = document.createElement('div');
    div.style.backgroundColor = "#3882f6";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.padding = "3.125rem 7.5rem";
    div.style.borderRadius = ".5rem";
    div.style.gap = "10rem";
    return div;
}
let ctaDiv = callToActionDiv();

function callToActionTextDiv() {
    let div = document.createElement('div');
    div.style.display = "flex";
    div.style.flexDirection = "column";
    return div;
}
let ctaTextDiv = callToActionTextDiv();

function callToActionHeading(text) {
    let heading = document.createElement('h4');
    heading.style.marginBlock = "0";
    heading.style.color = "white";
    heading.style.fontSize = "2rem";
    heading.innerText = text;
    return heading;
}
let ctaHeading = callToActionHeading("Call to action! It's time!")


function callToActionParagraph(text) {
    let par = document.createElement('p');
    par.style.marginBlock = "0";
    par.style.color = "#e5e7eb";
    par.style.fontSize = "1.125rem";
    par.innerText = text;
    return par;
}
let ctaParagraph = callToActionParagraph("Fork my repository by clicking that button right over there!")

function ctaBtn(text) {
    let btn = document.createElement('a');
    btn.setAttribute("href", "https://github.com/resul-elezi/odin-project-landing-page");
    btn.setAttribute("target", "_blank");
    btn.innerText = text;
    btn.style.color = "white";
    btn.style.fontSize = "1.125rem";
    btn.style.border = "1px solid white";
    btn.style.padding = ".25rem 2rem";
    btn.style.borderRadius = ".5rem";
    btn.style.textDecoration = "none";
    return btn;
}
let ctaButton = ctaBtn("Fork now");

// ---------- Footer ----------

function footerS() {
    let footer = document.createElement('footer');
    footer.style.background = "#1f2937";
    footer.style.width = "100%";
    footer.style.paddingBlock = "3.125rem";
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.alignItems = "center";
    return footer;
}
let footer = footerS();


function copyRight(text) {
    let copy = document.createElement('p');
    copy.style.color = "white";
    copy.style.fontSize = "1.125rem";
    copy.innerHTML = text;
    return copy;
}
let year = new Date().getFullYear().toString();
let copyRightText = copyRight("Copyright &copy; Resul Elezi " + year);

// Adding Element to Footer
footer.appendChild(copyRightText)

// Adding Elements to CTA text div
ctaTextDiv.appendChild(ctaHeading);
ctaTextDiv.appendChild(ctaParagraph);

// Adding Elements to CTA div
ctaDiv.appendChild(ctaTextDiv);
ctaDiv.appendChild(ctaButton);

// Adding Element to CTA section
ctaSection.appendChild(ctaDiv);

// Adding Element to Main section bottom
mainDivBottom.appendChild(quoteText);
mainDivBottom.appendChild(heroQuoteParagraph);

// Adding Elements to Main section
mainSection.appendChild(mainDivTop);
mainSection.appendChild(mainDivBottom);
mainSection.appendChild(ctaSection);


// Adding Elements to the Navigation Bar
nav.appendChild(logoD);
nav.appendChild(linksDiv);

// Adding Elements to the Hero Section
hero.appendChild(heroDivL);
hero.appendChild(heroDivR);

// Adding Elements to Hero left
heroDivL.appendChild(headingText);
heroDivL.appendChild(heroPar);
heroDivL.appendChild(heroBtn);

// Adding Elements to Hero right
heroDivR.appendChild(imgHeroRight);



// Adding Elements to the Body
document.body.appendChild(nav);
document.body.appendChild(hero);
document.body.appendChild(mainSection);
document.body.appendChild(footer);
