

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
 
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap


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
      name: 'Piscina',
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
  
  const areasList = areaList.map((areaRe,i) => {
    return `<div class="AreaR">
              <h2>${areaRe.name} </h2>
              <div class="subContainer">
                  <div class="imgReserve2">
                      ${areaRe.img.map((imgSrc, j) => {
                        return `
                          <img id="slider-${areaRe.name}-${j}" class="imgSlider hidden" src="img/${imgSrc}" />
                        `
                      }).join('')
                      }
                  </div>
                  <p class="precios"><b>${areaRe.precio} </b> </p>
              </div>
              
          </div>`
  });
  
const RentAreas = document.querySelector('.RentAreas');
RentAreas.innerHTML = areasList.join(' ');
let counter = 0;
function showElement(areaName, index) {
  const element = document.querySelector(`#slider-${areaName}-${index}`);
  element.classList.remove('hidden');
}
function hideElement(areaName, index) {
  const element = document.querySelector(`#slider-${areaName}-${index}`);
  element.classList.add('hidden');
}
areaList.forEach((area) => {
  showElement(area.name, counter);
});
setInterval(() => {
  areaList.forEach((area) => {
    hideElement(area.name, counter);
  });
  counter += 1;
  if (counter >= areaList.length) {
    counter = 0;
  }
  areaList.forEach((area) => {
    showElement(area.name, counter);
  });
}, 8000);