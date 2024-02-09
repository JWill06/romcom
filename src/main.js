// Create variables targetting the relevant DOM elements here 👇
document.addEventListener('DOMContentLoaded', function () {
  // Get references to different sections and buttons
  var homeSection = document.querySelector('.home-view');
  var formSection = document.querySelector('.form-view');
  var savedCoversSection = document.querySelector('.saved-covers-view');
  
  var homeButton = document.querySelector('.home-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  var saveCoverButton = document.querySelector('.save-cover-button');
  var viewSavedButton = document.querySelector('.view-saved-button');
  var makeNewButton = document.querySelector('.make-new-button');


  makeNewButton.addEventListener('click', function(event){
    event.preventDefault();
    locationUpdate(formSection, homeButton, homeSection, homeSection, saveCoverButton, randomCoverButton, true)

  });
 
  viewSavedButton.addEventListener('click', function(event){
    event.preventDefault();
    locationUpdate(homeButton, viewSavedButton, homeSection, makeNewButton, randomCoverButton, saveCoverButton, true)
    formSection.classList.add('hidden')
  }); 
 
  homeButton.addEventListener('click', function(event){
    event.preventDefault();
    locationUpdate(formSection, homeButton, homeSection, randomCoverButton, viewSavedButton, saveCoverButton, makeNewButton, false)
    makeNewButton.classList.remove('hidden')
  }); 

  saveCoverButton.addEventListener('click', function(event){
    event.preventDefault();
    toSaveCover = document.querySelector('.cover-image');
    toSaveTitle = document.querySelector('.cover-title');
    toSaveTagline1 = document.querySelector('.tagline-1');
    toSaveTagline2 = document.querySelector('.tagline-2');
    toSaveComplete = createCover (toSaveCover, toSaveTitle, toSaveTagline1, toSaveTagline2);
  
    var originalCover = true;

    for (var i = 0; i < savedCovers.length; i++){
      if (
        (toSaveComplete.title === savedCovers[i].title) && 
        (toSaveComplete.tagline1 === savedCovers[i].tagline1) && 
        (toSaveComplete.tagline2 === savedCovers[i].tagline2) && 
        (toSaveComplete.coverImg === savedCovers[i].coverImg)
        ){
          originalCover = false;
          console.log('Not Saved')
          return
        } 
      }
        if(originalCover = true){
          savedCovers.push(toSaveComplete)
          console.log('Success!!!!!!')
        }
  });
// We've provided a few variables below
var savedCovers = [
  
];
var currentCover = document.querySelector('.main-cover');



// Add your event listeners here 👇

document.querySelector('.random-cover-button').addEventListener('click', createRandomCover);

// Create your event handlers and other functions here 👇

function createRandomCover() {
  newCover = createCover(covers[getRandomIndex(covers)],titles[getRandomIndex(titles)],descriptors[getRandomIndex(descriptors)],descriptors[getRandomIndex(descriptors)])
  currentCover.innerHTML = 
  `<img class="cover-image" src="${newCover.coverImg}">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${newCover.tagline1}</span> and <span class="tagline-2">${newCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">`
  

  
};
function displayCover(newCover){
  currentCover.innerHTML = 
  `<img class="cover-image" src="${newCover.coverImg}">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${newCover.tagline1}</span> and <span class="tagline-2">${newCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">`


  
}
function locationUpdate(element1,element2,element3,element4,element5,element6,switchVar) {
  if (switchVar === true){
  element1.classList.remove('hidden')
  element2.classList.remove('hidden')

  element3.classList.add('hidden')
  element4.classList.add('hidden')
  element5.classList.add('hidden')
  element6.classList.add('hidden')
  }
  else{
  element1.classList.add('hidden')
  element2.classList.add('hidden')

  element3.classList.remove('hidden')
  element4.classList.remove('hidden')
  element5.classList.remove('hidden')
  element6.classList.remove('hidden')
  }
}


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

document.querySelector('.create-new-book-button').addEventListener('click', function(event) {
  event.preventDefault();

  var coverValue = document.getElementById('cover').value;
  var titleValue = document.getElementById('title').value;
  var firstDescValue = document.getElementById('descriptor1').value;
  var secDescValue = document.getElementById('descriptor2').value;

  var newCover = createCover(coverValue, titleValue, firstDescValue, secDescValue);


  //savedCovers.push(newCover);
  covers.push(coverValue)
  titles.push(titleValue);
  descriptors.push(firstDescValue, secDescValue);

  locationUpdate(formSection, homeButton, homeSection, randomCoverButton, viewSavedButton, saveCoverButton, makeNewButton, false)
  displayCover(newCover);
});

createRandomCover()
});

