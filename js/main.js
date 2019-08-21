const images = [
    "https://s8.postimg.cc/4qx5sbppx/41065641011_6c39a4b898_k.jpg",
    "https://images.unsplash.com/flagged/photo-1556669546-b1f29875df1c?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/24Pnyv7.jpg",
    "https://i.imgur.com/66TpiPx.jpg",
    "https://image.ibb.co/nLzsMy/fg2cIjh.jpg",
    "https://image.ibb.co/f7o8uJ/6W3pTTX.jpg",
    "https://image.ibb.co/jR3DTd/Yb3O7XQ.jpg",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/W08XnXT.jpg",
    "https://i.imgur.com/hPp2rve.jpg",
    "https://i.imgur.com/6dh6AtW.jpg",
    "https://image.ibb.co/cc1duJ/jOHvxJp.jpg",
    "https://s8.postimg.cc/k26ysluo5/P9g_Oq_DB.jpg",
    "https://image.ibb.co/c8k4ZJ/4eu6a27.jpg",
    "https://s8.postimg.cc/gvcf8xzxh/Ia_CADWi.jpg",
    "https://i.imgur.com/U350Tir.jpg",
    "https://i.imgur.com/pKqQTUR.jpg",
    "https://s8.postimg.cc/xvvbhxi79/KZ7_IS5j.jpg",
    "https://s8.postimg.cc/4qx5sbppx/41065641011_6c39a4b898_k.jpg",
    "https://image.ibb.co/f7o8uJ/6W3pTTX.jpg",
    "https://s8.postimg.cc/gvcf93ctx/Pcs2_Eu_Q.jpg",
    "https://image.ibb.co/jfTV8d/KTPcZho.jpg",
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2286&q=80",
    "https://image.ibb.co/c8k4ZJ/4eu6a27.jpg",
    "https://images.unsplash.com/photo-1556290160-d006087340ac?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/vmT1CSP.jpg",
    "https://image.ibb.co/dHfGgy/dZZziey.jpg",
    "https://image.ibb.co/kzLM1K/Dark_Gloomy_Forest2.jpg",
    "https://s8.postimg.cc/omt57ptut/t56gmhvnw6i01.jpg",
    "https://i.imgur.com/WQOl86e.jpg",
    "https://s8.postimg.cc/ywvk6wekl/40580142501_c5bef7ed43_k.jpg",
    "https://image.ibb.co/dLwa8d/31KEAA0.jpg",
    "https://image.ibb.co/nLzsMy/fg2cIjh.jpg",
    "https://s8.postimg.cc/4gpn8sg6t/Aq0q_Lp_L.jpg",
    "https://image.ibb.co/f7o8uJ/6W3pTTX.jpg",
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/GcxpRgx.jpg",
    "https://i.imgur.com/kMU5D6J.jpg",
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2286&q=80",
    "https://image.ibb.co/jfTV8d/KTPcZho.jpg",
    "https://image.ibb.co/f7o8uJ/6W3pTTX.jpg",
    "https://images.unsplash.com/photo-1498206005704-36d87df55231?auto=format&fit=crop&w=2286&q=80",
    "https://s8.postimg.cc/mgyudfnw5/8wwphe9kv1m01.jpg",
    "https://s8.postimg.cc/gvcf93ctx/Pcs2_Eu_Q.jpg",
    "https://images.unsplash.com/photo-1471622710663-8f18c20d6ee3?auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1561022107-23ba5b910e02?auto=format&fit=crop&w=1600&q=80",
    "https://s8.postimg.cc/5gfy4lxyd/40270332284_dd7c5f38b3_o.jpg",
    "https://live.staticflickr.com/7922/46734800561_886b8ce764_k.jpg",
    "https://s8.postimg.cc/rsdqxvugl/x3th6yqrq5v01-2.jpg",
    "https://images.unsplash.com/flagged/photo-1556669546-b1f29875df1c?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/gvcf93ctx/Pcs2_Eu_Q.jpg",
    "https://images.unsplash.com/photo-1498206005704-36d87df55231?auto=format&fit=crop&w=2286&q=80",
    "https://image.ibb.co/nLzsMy/fg2cIjh.jpg",
    "https://s8.postimg.cc/dr4f3v45x/VAHup_L1.jpg",
    "https://i.imgur.com/Tey4p7M.jpg",
    "https://image.ibb.co/c8k4ZJ/4eu6a27.jpg",
    "https://images.unsplash.com/photo-1471622710663-8f18c20d6ee3?auto=format&fit=crop&w=2100&q=80",
    "https://s8.postimg.cc/svxva3mw5/3w_ZI5_IY.jpg",
    "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?auto=format&fit=crop&w=2249&q=80",
    "https://s8.postimg.cc/jo5mt9an9/uwttnlzielh01.jpg",
    "https://i.imgur.com/pKqQTUR.jpg",
    "https://i.imgur.com/24Pnyv7.jpg",
    "https://i.imgur.com/WQOl86e.jpg",
    "https://i.imgur.com/U350Tir.jpg",
    "https://image.ibb.co/f7o8uJ/6W3pTTX.jpg",
    "https://i.imgur.com/66TpiPx.jpg",
    "https://image.ibb.co/nLzsMy/fg2cIjh.jpg",
    "https://image.ibb.co/dHfGgy/dZZziey.jpg",
    "https://s8.postimg.cc/xvvbhxi79/KZ7_IS5j.jpg",
    "https://s8.postimg.cc/k26ysluo5/P9g_Oq_DB.jpg",
    "https://i.imgur.com/TeZwBZp.jpg",
    "https://i.imgur.com/Z1rPUs2.jpg",
    "https://s8.postimg.cc/rsdqxvugl/x3th6yqrq5v01-2.jpg",
    "https://images.unsplash.com/photo-1561022107-23ba5b910e02?auto=format&fit=crop&w=1600&q=80",
    "https://s8.postimg.cc/gvcf8xzxh/Ia_CADWi.jpg",
    "https://s8.postimg.cc/k26ysluo5/P9g_Oq_DB.jpg",
    "https://i.imgur.com/vmT1CSP.jpg",
    "https://s8.postimg.cc/svxva3mw5/3w_ZI5_IY.jpg",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/omt57ptut/t56gmhvnw6i01.jpg",
    "https://s8.postimg.cc/vejkanb5h/g_Gxs_ZFx.jpg",
    "https://i.redd.it/qq3gbgr3s7b11.jpg",
    "https://s8.postimg.cc/5gfy4lxyd/40270332284_dd7c5f38b3_o.jpg",
    "https://i.imgur.com/24Pnyv7.jpg",
    "https://i.imgur.com/kMU5D6J.jpg",
    "https://image.ibb.co/nLzsMy/fg2cIjh.jpg",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/gvcf8xzxh/Ia_CADWi.jpg",
    "https://images.unsplash.com/flagged/photo-1556669546-b1f29875df1c?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/W08XnXT.jpg",
    "https://s8.postimg.cc/svxva3mw5/3w_ZI5_IY.jpg",
    "https://i.imgur.com/pKqQTUR.jpg",
    "https://i.imgur.com/hPp2rve.jpg",
    "https://image.ibb.co/gC4L8d/EeefyVL.jpg",
    "https://i.imgur.com/Tey4p7M.jpg",
    "https://i.imgur.com/Z1rPUs2.jpg",
    "https://i.imgur.com/5w7Djwp.jpg",
    "https://s8.postimg.cc/k26ysluo5/P9g_Oq_DB.jpg",
    "https://images.unsplash.com/photo-1556290160-d006087340ac?auto=format&fit=crop&w=2250&q=80",
    "https://i.imgur.com/vmT1CSP.jpg",
    "https://i.imgur.com/vmT1CSP.jpg",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2286&q=80",
    "https://s8.postimg.cc/k26ysluo5/P9g_Oq_DB.jpg",
    "https://image.ibb.co/ctVP1y/x2P47Lr.jpg",
    "https://i.imgur.com/6dh6AtW.jpg",
    "https://i.imgur.com/Tey4p7M.jpg",
    "https://i.imgur.com/GcxpRgx.jpg",
    "https://images.unsplash.com/flagged/photo-1556669546-b1f29875df1c?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/vejkanb5h/g_Gxs_ZFx.jpg",
    "https://image.ibb.co/ctVP1y/x2P47Lr.jpg",
    "https://i.imgur.com/6vD83zD.jpg",
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=2286&q=80",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/ywvk6wekl/40580142501_c5bef7ed43_k.jpg",
    "https://i.imgur.com/vFnjFVJ.jpg",
    "https://image.ibb.co/c8k4ZJ/4eu6a27.jpg",
    "https://s8.postimg.cc/uw268j05x/1_F7w_GP0.jpg",
    "https://i.imgur.com/aAaDnvZ.jpg",
    "https://image.ibb.co/jR3DTd/Yb3O7XQ.jpg",
    "https://image.ibb.co/cc1duJ/jOHvxJp.jpg",
    "https://images.unsplash.com/photo-1498206005704-36d87df55231?auto=format&fit=crop&w=2286&q=80",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=2250&q=80",
    "https://s8.postimg.cc/svxva3mw5/3w_ZI5_IY.jpg",
    "https://image.ibb.co/j5aouJ/HxGUdGl.jpg",
    "https://i.imgur.com/5w7Djwp.jpg",
    "https://i.imgur.com/Tey4p7M.jpg",
    "https://image.ibb.co/gC4L8d/EeefyVL.jpg",
    "https://i.imgur.com/kMU5D6J.jpg",
    "https://i.imgur.com/vFnjFVJ.jpg",
]

function cycleImages() {
    const element = images[Math.floor(Math.random() * images.length)];
    $('#background').css('background-image', 'url(' + element + ')');
}

function handleBackground() {
    const imageChangeInterval = 10 * 60 * 1000;
    cycleImages();
    setInterval(() => {
        cycleImages()
    }, imageChangeInterval);
}

function parseTime(time) {
    const d = new Date(time),
        h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    return h + ':' + m;
}

function fetchWeather() {
    fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=kaunas&units=metric', {
        headers: {
            "X-RapidAPI-Key": "wjZqL855a4msh34pawTk4IbaHwrwp1LcGUhjsnunhhQ0LrHrIG",
        }
    }).then(response => {
            return response.json()
        }
    ).then(data => {
        document.getElementById("weather-temp").innerHTML = `${data.main.temp}°`;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather-sunrise").innerHTML = parseTime(data.sys.sunrise * 1000);
        document.getElementById("weather-sunset").innerHTML = parseTime(data.sys.sunset * 1000);
    })
}

function getTime() {
    const current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function getDate() {
    const current = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = current.getMonth();
    let day = current.getDay();
    let date = current.getDate();
    day = days[day];
    month = months[month];
    document.getElementById("day").innerHTML = day;
    document.getElementById("date").innerHTML = `${month} ${date}`;
}

function handleClock() {
    const oneSec = 1000
    window.setInterval(getTime, oneSec);
    window.setInterval(getDate, oneSec);
}

function handleWeather() {
    const refetchWeatherInterval = 60 * 60 * 1000
    fetchWeather();
    window.setInterval(fetchWeather, refetchWeatherInterval);
}

function initSlider() {
    $('#slider-container').slick({
        arrows: false, appendArrows: false, appendDots: false, autoplay: true,
        autoplaySpeed: 20000,
    })
}

$(() => {
    handleWeather()
    handleBackground();
    handleClock();
    initSlider();
})
