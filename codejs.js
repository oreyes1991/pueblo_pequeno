

const cabanas = document.querySelectorAll (".cabana");
const poput = document.querySelector('.back-Ground');
const Xboton = document.querySelector('.Xboton');

let currentCabana = undefined;

for (let i=0; i < cabanas.length; i++) {
    const aCabana = cabanas[i];
    aCabana.addEventListener('click', () => {
        currentCabana = i;
        poput.classList.remove('hide');
    });
};

Xboton.addEventListener('click', () => {
    poput.classList.add('hide');
});

