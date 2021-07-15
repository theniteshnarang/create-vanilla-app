import Logo from './logo.svg'
const root = document.getElementById("root");

root.innerHTML = `
<h1> Get Started With Your Vanilla JS App With Modern Tools </h1>
<img class="logo" src=${Logo} alt="vanilla icon"/>
<button id="about">About</button>
<div id="route"></div>
`;


const about = document.querySelector('#about')
const route = document.querySelector('#route')

about.addEventListener('click', () => {
    return import('./App')
        .then(({ default: App }) => {
            route.innerHTML = App({ name: "Vanilla App!" })
        })
})

