const apiKey = "924950604d72efe8c2b67f397bc1901f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const countryCapitals = {
    "Afghanistan": "Kabul",
    "Albania": "Tirana",
    "Algeria": "Algiers",
    "Andorra": "Andorra la Vella",
    "Angola": "Luanda",
    "Antigua and Barbuda": "Saint John's",
    "Argentina": "Buenos Aires",
    "Armenia": "Yerevan",
    "Australia": "Canberra",
    "Austria": "Vienna",
    "Azerbaijan": "Baku",
    "Bahamas": "Nassau",
    "Bahrain": "Manama",
    "Bangladesh": "Dhaka",
    "Barbados": "Bridgetown",
    "Belarus": "Minsk",
    "Belgium": "Brussels",
    "Belize": "Belmopan",
    "Benin": "Porto-Novo",
    "Bhutan": "Thimphu",
    "Bolivia": "Sucre",
    "Bosnia and Herzegovina": "Sarajevo",
    "Botswana": "Gaborone",
    "Brazil": "Brasília",
    "Brunei": "Bandar Seri Begawan",
    "Bulgaria": "Sofia",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Cabo Verde": "Praia",
    "Cambodia": "Phnom Penh",
    "Cameroon": "Yaoundé",
    "Canada": "Ottawa",
    "Central African Republic": "Bangui",
    "Chad": "N'Djamena",
    "Chile": "Santiago",
    "China": "Beijing",
    "Colombia": "Bogotá",
    "Comoros": "Moroni",
    "Congo (Congo-Brazzaville)": "Brazzaville",
    "Democratic Republic of the Congo": "Kinshasa",
    "Costa Rica": "San José",
    "Côte d'Ivoire": "Yamoussoukro",
    "Croatia": "Zagreb",
    "Cuba": "Havana",
    "Cyprus": "Nicosia",
    "Czech Republic": "Prague",
    "Denmark": "Copenhagen",
    "Djibouti": "Djibouti",
    "Dominica": "Roseau",
    "Dominican Republic": "Santo Domingo",
    "Ecuador": "Quito",
    "Egypt": "Cairo",
    "El Salvador": "San Salvador",
    "Equatorial Guinea": "Malabo",
    "Eritrea": "Asmara",
    "Estonia": "Tallinn",
    "Eswatini (Swaziland)": "Mbabane",
    "Ethiopia": "Addis Ababa",
    "Fiji": "Suva",
    "Finland": "Helsinki",
    "France": "Paris",
    "Gabon": "Libreville",
    "Gambia": "Banjul",
    "Georgia": "Tbilisi",
    "Germany": "Berlin",
    "Ghana": "Accra",
    "Greece": "Athens",
    "Grenada": "Saint George's",
    "Guatemala": "Guatemala City",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Guyana": "Georgetown",
    "Haiti": "Port-au-Prince",
    "Honduras": "Tegucigalpa",
    "Hungary": "Budapest",
    "Iceland": "Reykjavík",
    "India": "New Delhi",
    "Indonesia": "Jakarta",
    "Iran": "Tehran",
    "Iraq": "Baghdad",
    "Ireland": "Dublin",
    "Israel": "Jerusalem",
    "Italy": "Rome",
    "Jamaica": "Kingston",
    "Japan": "Tokyo",
    "Jordan": "Amman",
    "Kazakhstan": "Astana",
    "Kenya": "Nairobi",
    "Kiribati": "Tarawa",
    "Kuwait": "Kuwait City",
    "Kyrgyzstan": "Bishkek",
    "Laos": "Vientiane",
    "Latvia": "Riga",
    "Lebanon": "Beirut",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libya": "Tripoli",
    "Liechtenstein": "Vaduz",
    "Lithuania": "Vilnius",
    "Luxembourg": "Luxembourg City",
    "Madagascar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Malaysia": "Kuala Lumpur",
    "Maldives": "Malé",
    "Mali": "Bamako",
    "Malta": "Valletta",
    "Marshall Islands": "Majuro",
    "Mauritania": "Nouakchott",
    "Mauritius": "Port Louis",
    "Mexico": "Mexico City",
    "Micronesia": "Palikir",
    "Moldova": "Chișinău",
    "Monaco": "Monaco",
    "Mongolia": "Ulaanbaatar",
    "Montenegro": "Podgorica",
    "Morocco": "Rabat",
    "Mozambique": "Maputo",
    "Myanmar (Burma)": "Naypyidaw",
    "Namibia": "Windhoek",
    "Nauru": "Yaren",
    "Nepal": "Kathmandu",
    "Netherlands": "Amsterdam",
    "New Zealand": "Wellington",
    "Nicaragua": "Managua",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "North Korea": "Pyongyang",
    "North Macedonia": "Skopje",
    "Norway": "Oslo",
    "Oman": "Muscat",
    "Pakistan": "Islamabad",
    "Palau": "Ngerulmud",
    "Panama": "Panama City",
    "Papua New Guinea": "Port Moresby",
    "Paraguay": "Asunción",
    "Peru": "Lima",
    "Philippines": "Manila",
    "Poland": "Warsaw",
    "Portugal": "Lisbon",
    "Qatar": "Doha",
    "Romania": "Bucharest",
    "Russia": "Moscow",
    "Rwanda": "Kigali",
    "Saint Kitts and Nevis": "Basseterre",
    "Saint Lucia": "Castries",
    "Saint Vincent and the Grenadines": "Kingstown",
    "Samoa": "Apia",
    "San Marino": "San Marino",
    "Sao Tome and Principe": "São Tomé",
    "Saudi Arabia": "Riyadh",
    "Senegal": "Dakar",
    "Serbia": "Belgrade",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Singapore": "Singapore",
    "Slovakia": "Bratislava",
    "Slovenia": "Ljubljana",
    "Solomon Islands": "Honiara",
    "Somalia": "Mogadishu",
    "South Africa": "Pretoria",
    "South Korea": "Seoul",
    "South Sudan": "Juba",
    "Spain": "Madrid",
    "Sri Lanka": "Sri Jayawardenepura Kotte",
    "Sudan": "Khartoum",
    "Suriname": "Paramaribo",
    "Sweden": "Stockholm",
    "Switzerland": "Bern",
    "Syria": "Damascus",
    "Taiwan": "Taipei",
    "Tajikistan": "Dushanbe",
    "Tanzania": "Dodoma",
    "Thailand": "Bangkok",
    "Timor-Leste": "Dili",
    "Togo": "Lomé",
    "Tonga": "Nuku'alofa",
    "Trinidad and Tobago": "Port of Spain",
    "Tunisia": "Tunis",
    "Turkey": "Ankara",
    "Turkmenistan": "Ashgabat",
    "Tuvalu": "Funafuti",
    "Uganda": "Kampala",
    "Ukraine": "Kyiv",
    "United Arab Emirates": "Abu Dhabi",
    "United Kingdom": "London",
    "United States": "Washington, D.C.",
    "Uruguay": "Montevideo",
    "Uzbekistan": "Tashkent",
    "Vanuatu": "Port Vila",
    "Vatican City": "Vatican City",
    "Venezuela": "Caracas",
    "Vietnam": "Hanoi",
    "Yemen": "Sana'a",
    "Zambia": "Lusaka",
    "Zimbabwe": "Harare"
};



document.querySelectorAll(".allPaths").forEach(path => {
    path.addEventListener("click", function () {
        const countryName = this.getAttribute("id"); // Get country name from SVG
        const capitalCity = countryCapitals[countryName]; // Get capital from map

        // Remove previous highlight
        document.querySelectorAll(".allPaths").forEach(p => p.style.fill = ""); 

        // Highlight the selected country
        this.style.fill = "#D8CAA7";

        if (capitalCity) {
            checkWeather1(capitalCity); // Fetch weather for the capital
        } else {
            console.error("Capital not found for", countryName);
        }
    });
});

async function checkWeather1(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector("#namep").innerHTML = data.name; 
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";

}

async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else {

    var data = await response.json();
    console.log(data);

    // Updating name and temperature
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){ 
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else{
        weatherIcon.src = "images/clouds.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); 
})


document.addEventListener("DOMContentLoaded", function () {
    const contactLink1 = document.getElementById("contactLink1");
    const contactLink2 = document.getElementById("contactLink2");
    const contactPopup = document.getElementById("contactPopup");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.querySelector(".close");
    const body = document.getElementById("body1");

    if (contactLink1 && contactLink2 && contactPopup && overlay && closeBtn && body) {
        contactLink1.addEventListener("click", function (event) {
            event.preventDefault();
            contactPopup.style.display = "block";
            overlay.style.display = "block";
            body.classList.add("blurred");
        });

        contactLink2.addEventListener("click", function (event) {
            event.preventDefault();
            contactPopup.style.display = "block";
            overlay.style.display = "block";
            body.classList.add("blurred");
        });

        closeBtn.addEventListener("click", function () {
            contactPopup.style.display = "none";
            overlay.style.display = "none";
            body.classList.remove("blurred");
        });

        window.addEventListener("click", function (event) {
            if (event.target === overlay) {
                contactPopup.style.display = "none";
                overlay.style.display = "none";
                body.classList.remove("blurred");
            }
        });
    } else {
        console.warn("One or more elements not found. Check your IDs and class names.");
    }
});


  const slider = document.getElementById("mood-slider");
  const icons = document.querySelectorAll(".mood-icon");
  const moodInput = document.getElementById("mood");

  const moodLabels = {
    1: "Stormy (Got urgent issues))",
    2: "Rainy (Need help!)",
    3: "Cloudy (Exploring ideas)",
    4: "Sunny (Feeling great!)"
  };

  const colorImages = [
    "/images/thunder.png",
    "/images/rainy.png",
    "/images/cloudy.png",
    "/images/sunny.png"
  ];
  const greyImages = [
    "/images/thunder_off.png",
    "/images/rainy_off.png",
    "/images/cloudy_off.png",
    "/images/sunny_off.png"
  ];

  slider.addEventListener("input", () => {
    const value = parseInt(slider.value);

    icons.forEach((icon, index) => {
      icon.src = (index + 1 === value) ? colorImages[index] : greyImages[index];
      icon.classList.toggle("selected", index + 1 === value);
    });

    moodInput.value = moodLabels[value];
  });

  // Initialize on load
  slider.dispatchEvent(new Event("input"));

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu').querySelector('ul');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  window.addEventListener('load', function() {
    const mapContainer = document.querySelector('.map-container');
    // Scroll to the center horizontally
    mapContainer.scrollLeft = (mapContainer.scrollWidth - mapContainer.clientWidth) / 2;
  });
  
