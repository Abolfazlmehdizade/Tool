const hamBtn = document.querySelector("#hamBtn");
const nav = document.querySelector('#nav');


// select button for Hamburger icon
hamBtn.addEventListener("click", () => {
    String(nav.className) === 'hidden w-full md:block md:w-auto' ? nav.className = 'w-full md:block md:w-auto' : nav.className = 'hidden w-full md:block md:w-auto';
})



// get ip and show in user profile
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {document.getElementById("showIp").innerHTML = data.ip; document.getElementById("showIpMobile").innerHTML = data.ip});