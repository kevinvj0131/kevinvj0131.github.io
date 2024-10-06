function turnOffBackground() {
    let sideA = document.getElementById('sideA');
    let sideB = document.getElementById('sideB');
    let logo = document.getElementById('logo');
    currentBackground = window.getComputedStyle(sideA).backgroundColor;
    currentBackground2 = window.getComputedStyle(sideB).backgroundColor;
    currentBackground3 = window.getComputedStyle(logo).backgroundColor;
    if (currentBackground === 'rgba(0, 255, 255, 0)' &&
        currentBackground2 === 'rgba(127, 255, 212, 0)' &&
        currentBackground3 === 'rgba(255, 0, 0, 0)') {
        sideA.style.backgroundColor = 'rgba(0, 255, 255, 0.5)';
        sideB.style.backgroundColor = 'rgba(127, 255, 212, 0.5)';
        logo.style.backgroundColor = 'rgba(255, 0, 0, 1)';
    } else {
        sideA.style.backgroundColor = 'rgba(0, 255, 255, 0)'
        sideB.style.backgroundColor = 'rgba(127, 255, 212, 0)';
        logo.style.backgroundColor = 'rgba(255, 0, 0, 0)';
    }

}

function changeLogo() {
    let logo = document.getElementById('logo');
    let anchor = document.getElementById('anchor');
    let ship = document.getElementById('ship');
    let body = document.body;

    if (logo.src.includes('logo.svg')) {
        logo.src = 'resources/images/logo.png'
        anchor.style.listStyleImage = 'url(resources/images/anchor-solid.svg)';
        anchor.style.listStyleType = 'none';
        ship.style.listStyleImage = 'url(resources/images/ship-solid.svg)';
        ship.style.listStyleType = 'none';
        body.style.fontFamily = 'Rum';
        body.style.backgroundImage = 'url(resources/images/pirate.jpg)';

    } else {
        logo.src = 'resources/images/logo.svg'
        anchor.style.listStyleImage = 'none';
        anchor.style.listStyleType = 'disc';
        ship.style.listStyleImage = 'none';
        ship.style.listStyleType = 'disc';
        body.style.fontFamily = 'Roboto';
        body.style.backgroundImage = 'none';
    }




}