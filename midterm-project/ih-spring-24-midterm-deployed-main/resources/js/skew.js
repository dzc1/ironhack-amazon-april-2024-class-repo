const content = document.querySelector('.skewContainer');
let currentPosition = window.pageYOffset;
const maxSkew = 0.5;
const maxRotate = 0.5;

function skewEffect() {
    const newPosition = window.pageYOffset;
    const dif = newPosition - currentPosition;

    let skew = dif*.09;
    let rotate = dif*.1;

    if(skew > maxSkew || skew < -maxSkew) {
        if(skew > 0) skew = maxSkew;
        if(skew < 0) skew = -maxSkew;
    };

    if(rotate > maxRotate || rotate < -maxRotate) {
        if(rotate > 0) rotate = maxRotate;
        if(rotate < 0) rotate = -maxRotate;
    };

    content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;

    currentPosition = newPosition;
    requestAnimationFrame(skewEffect);
};

skewEffect();