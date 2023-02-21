

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
        imgMosaico: "img/cabana2.jpg",
        imgFullScren:"img/cabana2.jpg"
    },
    {
        name: 'cabana 2',
        imgMosaico: "img/cabana2.jpg",
        imgFullScren:"img/cabana2.jpg"
    },
    {
        name: 'cabana 3',
        imgMosaico: "img/cabana2.jpg",
        imgFullScren:"img/cabana2.jpg"
    },
    {
        name: 'cabana 4',
        imgMosaico: 'img/interno_04_big.jpg',
        imgFullScren:'img/interno_04_big.jpg'
    },
    {
        name: 'cabana 5',
        imgMosaico: "img/cabana3.jpg",
        imgFullScren:"img/cabana3.jpg"
    },
    {
        name: 'cabana 6',
        imgMosaico: 'img/cocina.jpg',
        imgFullScren:'img/cocina.jpg'
    },
    {
        name: 'cabana 7',
        imgMosaico: "img/cabana2.jpg",
        imgFullScren:"img/cabana2.jpg"
    },
    {
        name: 'cabana 8',
        imgMosaico: "img/cabana3.jpg",
        imgFullScren:"img/cabana3.jpg"
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
};

/* Rent Area */
const areaList = [
    {
      name: 'Psina',
      precio: "25$/5H",
      img:["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"]
    },
    {
      name: 'Salon',
      precio: "35$/5H",
      img:["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"]
    },
    {
      name: 'Parque',
      precio: "15$/5H",
      img:["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"]
    },
    {
      name: 'Retarurante',
      precio: "20$/5H",
      img:["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"]
    }
  ];
  // recorrer una list
  areaList.forEach((areaRe) => {
    console.log(areaRe.name, areaRe.precio , areaRe.img[1]);
  });
  
  const areasList = areaList.map((areaRe,i) => {
    return `<div class="AreaR">
              <h2>${areaRe.name} </h2>
              <div class="subContainer precio">
                  <div class="imgReserve2">
                      <img id="slider${i}" class="imgSlider" />
                  </div>
                  <p class="precio"><b>${areaRe.precio} </b> </p>
              </div>
              
          </div>`
  });
  
  const RentAreas = document.querySelector('.RentAreas');
  RentAreas.innerHTML = areasList.join(' ');


/*psina*/
const slider0 = document.getElementById("slider0");
const imgRent0 = ["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"];
let rentImg0 = 0;

const changeImg0 = function(){
    slider0.src = `img/${imgRent0[rentImg0]}`;
    if (rentImg0 < (imgRent0.length - 1)){
        rentImg0++;
    }else {
        rentImg0 = 0;
    }
};
changeImg0();
setInterval(changeImg0, 2000);

/*Salon*/
const slider1 = document.getElementById("slider1");
const imgRent1 = ["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"];
let rentImg1 = 0;

const changeImg1 = function(){
  slider1.src = `img/${imgRent1[rentImg1]}`;
  if (rentImg1 < (imgRent0.length - 1)){
      rentImg1++;
  }else {
      rentImg1 = 0;
  }
};
changeImg1();
setInterval(changeImg1, 2000);

/*parque*/
const slider2 = document.getElementById("slider2");
const imgRent2 = ["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"];
let rentImg2 = 0;

const changeImg2 = function(){
  slider2.src = `img/${imgRent2[rentImg2]}`;
  if (rentImg2 < (imgRent2.length - 1)){
      rentImg2++;
  }else {
      rentImg2 = 0;
  }
};
changeImg2();
setInterval(changeImg2, 2000);

/*restaurante*/
const slider3 = document.getElementById("slider3");
const imgRent3 = ["cabana2.jpg", "cabana3.jpg", "cocina.jpg", "interno.jpg"];
let rentImg3 = 0;

const changeImg3 = function(){
  slider3.src = `img/${imgRent3[rentImg3]}`;
  if (rentImg3 < (imgRent3.length - 1)){
      rentImg3++;
  }else {
      rentImg3 = 0;
  }
};
changeImg3();
setInterval(changeImg3, 2000);