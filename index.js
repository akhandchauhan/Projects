const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector("[.weather-conatiner]");

const grantAcessContainer=document.querySelector("[.grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-contaienr");

//initially variables neeed
let currentTab=userTab;
const API_KEY=