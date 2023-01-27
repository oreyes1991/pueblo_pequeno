

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
if (Xboton){
    Xboton.addEventListener('click', () => {
        poput.classList.add('hide');
    });  
}
 



/* Gallery settings */

const dataGallery = [
    {
        name: 'cabana 1',
        imgMosaico: 'img/cabanas-02_big.jpg',
        imgFullScren:'img/cabanas-02_big.jpg'
    },
    {
        name: 'cabana 2',
        imgMosaico: 'img/cabanas-02_big.jpg',
        imgFullScren:'img/cabanas-02_big.jpg'
    },
    {
        name: 'cabana 3',
        imgMosaico: 'img/cabanas-02_big.jpg',
        imgFullScren:'img/cabanas-02_big.jpg'
    },
    {
        name: 'cabana 4',
        imgMosaico: 'img/interno_04_big.jpg',
        imgFullScren:'img/interno_04_big.jpg'
    },
    {
        name: 'cabana 5',
        imgMosaico: 'img/cabanas-02_big.jpg',
        imgFullScren:'img/cabanas-02_big.jpg'
    },
    {
        name: 'cabana 6',
        imgMosaico: 'img/cocina_big.jpg',
        imgFullScren:'img/cocina_big.jpg'
    },
    {
        name: 'cabana 7',
        imgMosaico: 'img/interno_02_big.jpg',
        imgFullScren:'img/interno_02_big.jpg'
    },
    {
        name: 'cabana 8',
        imgMosaico: 'img/cabanas-05_big.jpg',
        imgFullScren:'img/cabanas-05_big.jpg'
    },
  
];

const imgGallery = dataGallery.map((imgPP, i) =>{
    return `
<div class="img">
    <img class="liked" src= ${imgPP.imgMosaico} />
</div>
<div id="a${i}" class="img_Fullscreen back-Ground hide">
    <div class="fulls">
        <button class="Xboton">X</button>
        <img class="liked-full" src=${imgPP.imgFullScren} />
    </div>
</div>`;
})

const mainGallery = document.querySelector('.gallery');
if(mainGallery){
    mainGallery.innerHTML = imgGallery.join(' ');
    
    const likedPhoto = document.querySelectorAll('.liked');
    const eBoton = document.querySelectorAll('.Xboton');
    let currentPhoto = undefined
    
    for (let i=0; i< likedPhoto.length; i+=1) {
        const likedF =likedPhoto[i];
        likedF.addEventListener('click', () =>{
        const backGround= document.querySelector(`#a${i}`)
        backGround.classList.remove('hide');
    
        })
    }console.log(currentPhoto)
    
    eBoton.forEach((btn, i) =>{
        btn.addEventListener('click',() =>{
        const backGround= document.querySelector(`#a${i}`)
        backGround.classList.add('hide');    
        })
    })
}
