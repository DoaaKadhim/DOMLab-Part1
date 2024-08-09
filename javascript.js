// Part 1: Getting Started
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

//Part 2: Creating a Menu Bar

const topMenueEl = document.getElementById('top-menu');

topMenueEl.style.height = '100%';

topMenueEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenueEl.classList.add('flex-around');

//Part 3: Adding Menu Buttons
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

const link = menuLinks.map((obj) => {
    const linkEl = document.createElement('a');
    linkEl.href = obj.href;
    linkEl.textContent = obj.text;
    topMenueEl.appendChild(linkEl)
    console.log(linkEl)
})

//Nayden 
//Jalita
//Rakyra
//Vinncent
//Doaa

