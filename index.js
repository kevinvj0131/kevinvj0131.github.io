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