const neonButton = document.getElementById('neonButton');
const popupContainer = document.querySelector('.popup-container');
const popup = document.getElementById('popup');

neonButton.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'dragging');
    document.body.style.backgroundColor = 'black';
});

neonButton.addEventListener('drag', (e) => {
    neonButton.style.textShadow = '0 0 10px rgba(0, 0, 255, 0.7), 0 0 20px rgba(0, 0, 255, 0.7), 0 0 30px rgba(0, 0, 255, 0.7)';
});

neonButton.addEventListener('dragend', () => {
    neonButton.style.textShadow = 'none';
});

neonButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    setTimeout(() => {
        popupContainer.style.opacity = '1';
        popup.style.transform = 'translate(-50%, -50%) scale(1)'; 
    }, 10);
});

function closePopup() {
    popupContainer.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 500);
}
