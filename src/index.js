import './style.css';
import internetWars from './images/internetwars.jpg';
import blackSandWave from './images/blacksandwave.jpg';
import hasibSand from './images/hasibsand.jpg';
import joshuaTree from './images/joshuatree.jpg';
import sunsetMaui from './images/sunsetmaui.jpg';
import adeeb from './images/adeeb.jpg';
import adeebHokkaido from './images/adeebhokkaido.jpg';
import doubleView from './images/doubleview.jpg';
import eggTwice from './images/eggtwice.jpg';
import egguaTree from './images/egguatree.jpg';
import flowerPillow from './images/flowerpillow.jpg';
import hakodate from './images/hakodate.jpg';
import hakodateView from './images/hakodateview.jpg';
import hanaCave from './images/hanacave.jpg';
import hasib from './images/hasib.jpg';
import hasibAdeeb from './images/hasibadeeb.jpg';
import hasibAndJebbie from './images/hasibandjebbie.jpg';
import hawaiiView from './images/hawaiiview.jpg';
import hokkaido from './images/hokkaido.jpg';
import hokkaidoFlowers from './images/hokkaidoflowers.jpg';
import milad from './images/milad.jpg';
import murakami from './images/murakami.jpg';
import osakaMan from './images/osakaman.jpg';
import osakaMan2 from './images/osakaman2.jpg';
import osaktapus from './images/osaktapus.jpg';
import osaktapus2 from './images/osaktapus2.jpg';
import sapporo from './images/sapporo.jpg';
import treeStars from './images/treestars.jpg';
import stars from './images/stars.jpg';


//Cache Dom
let bodyBackground = document.querySelector('.bodyBackground')
let displayedImage = document.querySelector('.slider');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

//Create an array to hold the images
let imageSlider = [
    joshuaTree,
    egguaTree,
    eggTwice,
    doubleView,
    sapporo,
    hokkaido,
    hokkaidoFlowers,
    adeebHokkaido,
    adeeb, 
    hasibAdeeb, 
    hasib, 
    flowerPillow, 
    murakami,
    hanaCave,
    blackSandWave,
    hasibSand,
    hasibAndJebbie,
    sunsetMaui,
    hawaiiView,
    hakodate, 
    hakodateView,
    stars,
    treeStars,
    milad, 
    osaktapus2, 
    osaktapus, 
    osakaMan2, 
    osakaMan 
];

//set the displayed image to the first index of the array;
let index = 0;
let indexDir = "forward";

displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;

//Create a set of buttons that will advance the image
let advanceSlider = function() {
    nextButton.addEventListener('click', () => {
        indexDir = "forward";
        fadeOut();
    });

    prevButton.addEventListener('click', () => {
        indexDir = "reverse";
        fadeOut();
    })
}

advanceSlider();

//Create a set of function that fadeOut and then immediately fadeIn the new image
function fadeOut() {
    displayedImage.style.opacity = 0.25;
    bodyBackground.style.opacity = 1;
    let fadeAway = setInterval(() => {
        if (displayedImage.style.opacity > 0) {
            displayedImage.style.opacity -= 0.05;
            bodyBackground.style.opacity -= 0.1;
        } else {
            clearInterval(fadeAway);
            (indexDir === "forward") ? changeIndex() : revIndex();
            fadeIn();
        }
    }, 50);
}


function fadeIn() {
    let opacity = 0
    let bodyOpacity = 0.5
    let appear = setInterval(() => {
        if (opacity < 0.25) {
            opacity += 0.05;
            bodyOpacity += 0.1;
            displayedImage.style.opacity = opacity;
            bodyBackground.style.opacity += bodyOpacity;
        } else {
            displayedImage.style.opacity = 0.25;
            bodyBackground.style.opacity = 1;
            clearInterval(appear);
        }
    }, 100);
}

//Create a functions to advance or reverse the index
function changeIndex() {
    if (index === imageSlider.length - 1) {
        index = 0;
    } else {
        index++;
    }
    displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
    bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
}

function revIndex() {
    if(index === 0) {
        index = imageSlider.length - 1
    } else {
        index--;
    }
    displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
    bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
}

//Create a function to automatically change the background if no click;

function autoAdvance() {
    setInterval(function() {
        nextButton.click();
    }, 20000);
}

autoAdvance();
