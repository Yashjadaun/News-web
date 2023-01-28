//variables


const generalBtn = document.getElementById("general");
const bussinessBtn = document.getElementById("bussiness");
const sportsBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery =document.getElementById("newsQuery");
const newsType =document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
const selectCountry = document.getElementById('selectCountry');

var SELECTED_COUNTRY_CODE = '';

//arrry
var newsDataArr = [];
const defaultcode='in';
const countryCodeMapping = {
    'United Arab Emirates': 'ae',
    'Argentina': 'ar',
    'Austria': 'at',
    'Australia': 'au',
    'Belgium': 'be',
    'Bulgaria': 'bg',
    'Brazil': 'br',
    'Canada': 'ca',
    'Switzerland': 'ch',
    'China': 'cn',
    'Colombia': 'co',
    'Cuba': 'cu',
    'Czechi': 'cz',
    'Germany': 'de',
    'Egypt': 'eg',
    'Frence':'fr',
    'United Kingdom of Great Britain and Northern Ireland': 'gb',
    'Greece': 'gr',
    'Hong Kong': 'hk',
    'Hungary': 'hu',
    'Indonesia': 'id',
    'Ireland': 'ie',
    'Israel': 'il',
    'India': 'in',
    'Italy': 'it',
    'Japan': 'jp',
    'Korea': 'kr',
    'Lithuania': 'lt',
    'Latvia': 'lv',
    'Morocco': 'ma',
    'Mexico': 'mx',
    'Malaysia': 'my',
    'Nigeria': 'ng',
    'Nicaragua': 'nl',
    'Norway': 'no',
    'Newzealand': 'nz',
    'Philippines': 'ph',
    'Poland': 'pl',
    'Portugal': 'pt',
    'Romania': 'ro',
    'Serbia': 'rs',
    'Russian Federation': 'ru',
    'South Africa': 'sa',
    'Sweden': 'se',
    'Singapore': 'sg',
    'Slovenia': 'si',
    'Slovakia': 'sk',
    'Thailand': 'th',
    'Turkey': 'tr',
    'Taiwan': 'tw',
    'Ukraine': 'ua',
    'The United States Of America': 'us',
    'Venezuela': 've'
}

//apis


const API_KEY = "963e45c8dff54df983a18cdc79d8e6ad";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines";
const BUSSINESS_NEWS = "https://newsapi.org/v2/top-headlines";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

window.onload = function() {
    newsType.innerHTML="<h4>General news</h4>";
    fetchHeadlines('in');
};



generalBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews(SELECTED_COUNTRY_CODE);
});

bussinessBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBussinessNews(SELECTED_COUNTRY_CODE);
});

sportsBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews(SELECTED_COUNTRY_CODE);
});

entertainmentBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews(SELECTED_COUNTRY_CODE);
});

technologyBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews(SELECTED_COUNTRY_CODE);
});

searchBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Search :"+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async (countryCode) => {

    let headlineUrl = HEADLINES_NEWS + '?apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(headlineUrl);

    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

selectCountry.addEventListener('submit', function(event){
    event.preventDefault();

    // get selected country value 
    let countries = document.getElementById('countries')

    let country = countries.value;


    // find code of country
    let code = findCode(country);

    SELECTED_COUNTRY_CODE = code;

    fetchHeadlines(code)
})

const fetchGeneralNews = async (countryCode) => {
    // ?country=in&&apiKey=
    let generalUrl = GENERAL_NEWS + '?category=general&apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(generalUrl);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}




function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


 
const fetchBussinessNews = async (countryCode) => {
    //?country=in&
    let businessUrl = BUSSINESS_NEWS + '?category=business&apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(businessUrl);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchSportsNews = async (countryCode) => {
    //?country=in&category=sports&apiKey=
    let sportsUrl = SPORTS_NEWS + '?category=sports&apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(sportsUrl);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchEntertainmentNews = async (countryCode) => {
    //?country=in&category=entertainment&apiKey=
    let entertainmentUrl = ENTERTAINMENT_NEWS + '?category=entertainment&apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(entertainmentUrl);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchTechnologyNews = async (countryCode) => {
    //?country=in&category=technology&pageSize=8&apiKey=
    let technologyUrl = TECHNOLOGY_NEWS + '?category=technology&apiKey=' + API_KEY + '&country=' + countryCode;
    const response = await fetch(technologyUrl);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //display errors
        console.log(response.status, response.statusText);
    }

    displayNews();

}

function displayNews() {

    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0){
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        var name = news.author;
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "";
        newsHeading.innerHTML = news.title;

        var namedetail =document.createElement('h7');
        namedetail.className = "card-title";
        namedetail.innerHTML = name;

        var dateHeading =document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var time = document.createElement('p');
        time.className = "text-primary";
        time.innerHTML=date[1];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML=news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target","_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(namedetail);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(time);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);


    })
}



function findCode(countryName){
    return countryCodeMapping[countryName];
}