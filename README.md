# weather-app

## Live Demo
https://mrsashemi.github.io/weather-app/

All photographs in the page are my own, and the copyright belongs to me personally. 

**Introduction**
The goal of this project is to create a simple weather app to practice using API's. I also incorporated a few fun components like an image slider to improve the aesthetics of the page. 

**Functionality**
The app is a static page that works similarly to any other weather app. It pulls information from the openweather API. As the page loads, the weather information is slowly faded in for a clean effect. Displayed on the page initially is the current weather in Joshua Tree, which corresponds with the first image displayed on the page. The temp is displayed in faranheit, along with the current weather status, wind speed, humidity, and cloudiness. A forecast of highs and lows for the following 5 days is also displayed. Finally, the local time is also displayed. 

To search for a new location, simply use the search bar to search by City, City,Country, or if you are in the USA then you can use City,State,Country. You can also search via zipcode, but the location information isn't as accurate (94582 (San Ramon, CA) shows up as Hayward, CA). 

In addition, there is a "Let's Travel" button that changes the background image (film photographs by yours truly) to a certain location and displays the weather from that location. The background images are displayed in slider style and can also be changed via the arrow buttons. 

**Process**
This was a fairly simple and straight forward project:

1) Build the UI, create an image slider for the background (Create an array of images, and index through them for the slider), add some unique effects to the slider
2) Add search input and a lets travel dropdown menu to change the background images
3) Build the content structure in the DOM
4) Plug in the JS, start by connecting the Open Weather API and displaying the information to the appropriate DOM elements using async/await functions
5) Add search functionality, use backticks in the await fetch function so a variable can placed where one would enter the location they are searching for, and edit the original async/await getWeather functions to accept a location variable. Export those functions to search event listeners.
6) Add similar functionality to the lets travel button, so the displayed weather will change with the background
7) Fix any typos or style mistakes

Fun note: the background images contain a special effect to give them the illusion of depth. To acheive this effect, I layer 3 background images in the following order:

1) Desired Image
2) CSS Blurred Glass effect on top (See CSS.glass), essentially a transparent layer with a blur effect to make the layer below seem like it's behind frosted glass
3) Desired image on top of everything else with it's opacity turned way down

I designed the slider in such a way that the current image fades out and the new one fades in. While this is happening, the bottom and top desired image layer positions slide ever so slightly in opposite directions. It's a cool effect with a lot of depth to it, there is somewhat of a glitch that occurs when the slide image button is pressed multiple times where the page shakes and it all of a sudden lands on a new image. I feel like this is an issue with the set interval functions that fade the image. However...I like this glitch. It looks really cool, so the artist in me is going to keep it as is. 

**Conclusion**
This one was super easy and fun break from the harder projects I've been tackling. I intend on returning soon to add a button to change the temp to Celsius. I also intend on adjusting the page into a mobile friendly version. 