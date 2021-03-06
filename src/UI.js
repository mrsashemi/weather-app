import './style.css';
import internetWars from './images/internetwars.jpg';
import blackSandWave from './images/blacksandwave.jpg';
import hasibSand from './images/hasibsand.jpg';
import joshuaTree from './images/joshuatree.jpg';
import sunsetMaui from './images/sunsetmaui.jpg';
import adeeb from './images/adeeb.jpg';
import adeebHokkaido from './images/adeebhokkaido.jpg';
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
import { forecastWeather, getWeather } from "./index.js";

//Cache Dom
let bodyBackground = document.querySelector('.bodyBackground')
let displayedImage = document.querySelector('.slider');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let dropdown = document.querySelector('.dropbtn');
let dropContent = document.querySelector('.dropdownContent');
let cities = document.querySelectorAll('.location');

//Create an array to hold the images
let imageSlider = [
    joshuaTree,
    egguaTree,
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
    let pos = 0;
    displayedImage.style.opacity = 0.25;
    bodyBackground.style.opacity = 1;
    let fadeAway = setInterval(() => {
        if (displayedImage.style.opacity > 0 && pos < 2.5) {
            displayedImage.style.opacity -= 0.01;
            bodyBackground.style.opacity -= 0.02;

            pos += 0.05;
            displayedImage.style.right = `${pos}vmin`
            bodyBackground.style.left = `${pos}vmin`
        } else {
            clearInterval(fadeAway);
            (indexDir === "forward") ? changeIndex() : revIndex();
            fadeIn();
        }
    }, 50);
}


function fadeIn() {
    let pos = 1.25;

    let opacity = 0
    let bodyOpacity = 0.5
    let appear = setInterval(() => {
        if (opacity < 0.25) {
            opacity += 0.01;
            bodyOpacity += 0.1;
            displayedImage.style.opacity = opacity;
            bodyBackground.style.opacity += bodyOpacity;

            pos -= 0.05;
            displayedImage.style.right = `${pos}vmin`
            bodyBackground.style.left = `${pos}vmin`
        } else {
            displayedImage.style.right = 0
            bodyBackground.style.left = 0
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

//Create a button to display the "lets travel" dropdown menu
//click outside of it to close it
function dropDownMenu() {
    dropdown.addEventListener('click', () => {
        dropContent.style.display = 'block';
        dropdown.style["border-bottom-right-radius"] = 0;
        dropdown.style["border-bottom-left-radius"] = 0;

        document.addEventListener('click', (e) => {
            let isClickInside = dropContent.contains(e.target);
            let exceptAddButton = dropdown.contains(e.target);

            if (!isClickInside && !exceptAddButton) {
                dropContent.style.display = "none";
                dropdown.style["border-bottom-right-radius"] = "1vmin";
                dropdown.style["border-bottom-left-radius"] = "1vmin";
            };
        });
    })


}

dropDownMenu();

//Add functionality to the dropdown content items to change the background and location
function changePicAndWeather() {
    cities.forEach(element => {
        element.addEventListener('click', () => {
            if (element.textContent == "Maui") {
                let arr = [11, 12, 13, 14, 15, 16];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
                getWeather("Lahaina");
                forecastWeather("Lahaina");
            } else if (element.textContent == "Osaka") {
                let arr = [22, 23, 24, 25];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
            } else if (element.textContent == "Joshua Tree") {
                let arr = [0, 1];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
            } else if (element.textContent == "Tokyo") {
                let arr = [6, 7, 8, 9 ,10];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
            } else if (element.textContent == "Lake Tahoe") {
                let arr = [19, 20, 21];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
                getWeather("Tahoe City");
                forecastWeather("Tahoe City");
            } else if (element.textContent == "Sapporo") {
                let arr = [2, 3, 4, 5];
                let random = Math.floor(Math.random() * arr.length)
                index = arr[random];
                displayedImage.style['background-image'] = `url(${imageSlider[index]})`;
                bodyBackground.style['background-image'] = `url(${imageSlider[index]})`;
            }
            
            if (element.textContent != "Maui" && element.textContent != "Lake Tahoe") {
                getWeather(element.textContent);
                forecastWeather(element.textContent);
            }

            dropContent.style.display = "none";
        })
    });
}

changePicAndWeather();

