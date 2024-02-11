// Create variables targetting the relevant DOM elements here 👇
document.addEventListener('DOMContentLoaded', function () {
  // Get references to different sections and buttons
  var homeSection = document.querySelector('.home-view');
  var formSection = document.querySelector('.form-view');
  var savedCoversSection = document.querySelector('.saved-view');
  var miniCover = document.querySelector('.saved-covers-section')

  var homeButton = document.querySelector('.home-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  var saveCoverButton = document.querySelector('.save-cover-button');
  var viewSavedButton = document.querySelector('.view-saved-button');
  var makeNewButton = document.querySelector('.make-new-button');

  // Add your event listeners here 👇
  makeNewButton.addEventListener('click', function (event) {
    event.preventDefault();
    locationUpdate(formSection, homeButton, homeSection, homeSection, saveCoverButton, randomCoverButton, true)
    savedCoversSection.classList.add('hidden')
    miniCover.innerHTML = ``



  });

  viewSavedButton.addEventListener('click', function (event) {
    event.preventDefault();
    locationUpdate(homeButton, viewSavedButton, homeSection, saveCoverButton, randomCoverButton, saveCoverButton, true)
    formSection.classList.add('hidden');
    savedCoversSection.classList.remove('hidden');
    miniCover.innerHTML = ``
    for (var i = 0; i < savedCovers.length; i++) {
      newCover = savedCovers[i]
      console.log(newCover)
      addMiniCover(newCover.coverImg.currentSrc, newCover.title.innerText, newCover.tagline1.innerText, newCover.tagline2.innerText)
    };


  });

  homeButton.addEventListener('click', function (event) {
    event.preventDefault();
    locationUpdate(formSection, homeButton, homeSection, randomCoverButton, viewSavedButton, saveCoverButton, makeNewButton, false)
    savedCoversSection.classList.add('hidden');
    makeNewButton.classList.remove('hidden');
    miniCover.innerHTML = ``

  });

  saveCoverButton.addEventListener('click', function (event) {
    event.preventDefault();
    toSaveCover = document.querySelector('.cover-image');
    toSaveTitle = document.querySelector('.cover-title');
    toSaveTagline1 = document.querySelector('.tagline-1');
    toSaveTagline2 = document.querySelector('.tagline-2');
    toSaveComplete = createCover(toSaveCover, toSaveTitle, toSaveTagline1, toSaveTagline2);

    var originalCover = true;
    miniCover.innerHTML = ``

    for (var i = 0; i < savedCovers.length; i++) {
      if (
        (toSaveComplete.title === savedCovers[i].title) &&
        (toSaveComplete.tagline1 === savedCovers[i].tagline1) &&
        (toSaveComplete.tagline2 === savedCovers[i].tagline2) &&
        (toSaveComplete.coverImg === savedCovers[i].coverImg)
      ) {

        originalCover = false;
        return
      }
    }
    if (originalCover = true) {
      savedCovers.push(toSaveComplete)
    }
  });

  miniCover.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.detail === 2) {
      var activeCover = event.target.closest('section')
      var miniCoverId = activeCover.id;
      activeCover.remove();
      for (var i = 0; i < savedCovers.length; i++) {
        if (savedCovers[i].id === miniCoverId) {
          savedCovers.splice(i, 1)
        }
      }
    }
  });


  document.querySelector('.random-cover-button').addEventListener('click', createRandomCover);
  // We've provided a few variables below
  var savedCovers = [

  ];
  var currentCover = document.querySelector('.main-cover');



  // Create your event handlers and other functions here 👇

  function createRandomCover() {
    newCover = createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
    currentCover.innerHTML =
      `<img class="cover-image" src="${newCover.coverImg}">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${newCover.tagline1}</span> and <span class="tagline-2">${newCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">`
  };
  function addMiniCover(coverImg, title, tagline1, tagline2) {
    miniCover.innerHTML +=
      `<section class="mini-cover">
    <img class="cover-image" src="${coverImg}">
    <h3 class = "cover-title">${title}</h3>
    <h3 class="tagline">A tale of <span class="tagline-1">${tagline1}</span> and <span class="tagline-2">${tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>`

  }


  function displayCover(newCover) {
    currentCover.innerHTML =
      `<img class="cover-image" src="${newCover.coverImg}">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${newCover.tagline1}</span> and <span class="tagline-2">${newCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">`



  }
  function locationUpdate(element1, element2, element3, element4, element5, element6, switchVar) {
    if (switchVar === true) {
      element1.classList.remove('hidden')
      element2.classList.remove('hidden')

      element3.classList.add('hidden')
      element4.classList.add('hidden')
      element5.classList.add('hidden')
      element6.classList.add('hidden')
    }
    else {
      element1.classList.add('hidden')
      element2.classList.add('hidden')

      element3.classList.remove('hidden')
      element4.classList.remove('hidden')
      element5.classList.remove('hidden')
      element6.classList.remove('hidden')
    }
  }

  document.querySelector('.create-new-book-button').addEventListener('click', function (event) {
    event.preventDefault();

    var coverImg = document.getElementById('cover').value;
    var title = document.getElementById('title').value;
    var tagline1 = document.getElementById('descriptor1').value;
    var tagline2 = document.getElementById('descriptor2').value;

    var newCover = createCover(coverImg, title, tagline1, tagline2);


    covers.push(coverImg)
    titles.push(title);
    descriptors.push(tagline1, tagline2);

    locationUpdate(formSection, homeButton, homeSection, randomCoverButton, viewSavedButton, saveCoverButton, makeNewButton, false)
    displayCover(newCover);
  });

  createRandomCover()

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

});
