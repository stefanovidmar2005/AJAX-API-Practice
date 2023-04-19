"use strict";

// SELECTIONS

// const header = document.querySelector(".header");
// const image = document.querySelector("img");
// // NOTES:

// // alert method is an example of stopping the exectuion from going on until the user clicks the okay button

// // alert("click ok ");

// // so in this case the code below will not run until the user clicks okay

// // this is an example of Async code as here we are not stopping the exection but instead running the task in the background and when it is ready to be exectured then we are calling the function

// const time = setTimeout(() => (header.style.color = "limegreen"), 5000);
// // this code is run it is not waiting for the task above to finish
// header.style.color = "crimson";
// image.style.width = "90%";
// image.style.height = "50%";
// image.style.objectFit = "cover";
// // this is being rendered asynchronoslu let me show you by changing somethings in my network tab until this loads
// image.src = "/Async JS/pexels-elina-volkova-16362926.jpg";
// // so in this example we can see that this line was ran even tought the image did not show up which means that the src attribute runs in a Asynchronasly way
// header.textContent = "I run even before the image was rendered";

// // to show more proff im going to add a load event that is going to change the text again once it loads

// image.addEventListener("load", () => {
//   header.textContent =
//     "This text only changed once the image was loaded asynchronously";
// });
// keep in mind that the setTimout was also running in the background along side the image loading too Both having Async Behavior

// SELECTIONS
const input = document.querySelector("#country");
const button = document.querySelector("button");
const BASE_URL = `https://restcountries.com/v3.1/name/`;
const countries = document.querySelector(".countries");

// API Related Code
let allDataRetrieved;
// Function to call the countries API
const countryWeather = (countryName) => {
  // AJAX CALL
  const request = new XMLHttpRequest();
  request.open("GET", `${BASE_URL}${countryName}/?fullText=true`);
  request.send();
  setTimeout(() => {
    allDataRetrieved = JSON.parse(request.responseText);
    const [filteredData] = allDataRetrieved;
    const { region } = filteredData;
    const { common } = filteredData.name;
    const { png } = filteredData.flags;
    const html = `
    <div class="country">
    <br />
    <div class="countryName">Country Name: ${common}</div>
    <br />
    <div class="countryRegion">Country Region: ${region}</div>
    <br />
    <div class="flex">
    <div class="countryFlagName">Flag of ${common}: </div>
      <img
        width="40px"
        height="40px"
        src="${png}"
        alt=""
        class="countryFlag"
      />
      </div>`;

    countries.insertAdjacentHTML("beforeend", html);
  }, 1000);
};
button.addEventListener("click", () => {
  countryWeather(input.value);
  input.value = "";
  input.blur();
});
