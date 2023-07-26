const background = document.querySelector('.background');

function updateBackgroundPosition() {
    const x = -window.scrollX / 20;
    const y = -window.scrollY / 20;
    background.style.backgroundPosition = `${x}px ${y}px`;
}

window.addEventListener('scroll', updateBackgroundPosition);