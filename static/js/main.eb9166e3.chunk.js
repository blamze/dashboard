(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],[,,,,,,,,,function(a,t,e){a.exports=e.p+"static/media/sunset.3d29eaa3.svg"},function(a,t,e){a.exports=e.p+"static/media/sunrise.236b21d1.svg"},function(a,t,e){a.exports=e.p+"static/media/kurts-logo.b0b22aa8.svg"},function(a,t,e){a.exports=e(19)},,,,,function(a,t,e){},function(a,t,e){},function(a,t,e){"use strict";e.r(t);var s=e(0),n=e.n(s),o=e(8),r=e.n(o),m=(e(17),e(6)),u=(e(18),e(1)),c=e(2),p=e(4),l=e(3),d=e(5),i=e(9),K=e.n(i),h=e(10),g=e.n(h),k="https://community-open-weather-map.p.rapidapi.com/weather?q=kaunas&units=metric",v="wjZqL855a4msh34pawTk4IbaHwrwp1LcGUhjsnunhhQ0LrHrIG",w=function(a){function t(a){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(l.a)(t).call(this,a))).parseTime=function(a){var t=new Date(a);return(t.getHours()<10?"0":"")+t.getHours()+":"+((t.getMinutes()<10?"0":"")+t.getMinutes())},e.fetchWeather=function(){fetch(k,{headers:{"X-RapidAPI-Key":v}}).then((function(a){return a.json()})).then((function(a){e.setState({temp:"".concat(a.main.temp,"\xb0"),weatherIcon:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),sunrise:e.parseTime(1e3*a.sys.sunrise),sunset:e.parseTime(1e3*a.sys.sunset)})}))},e.state={temp:"0\xb0",weatherIcon:"",sunrise:0,sunset:0},e}return Object(d.a)(t,a),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchWeather(),window.setInterval(this.fetchWeather,36e5)}},{key:"render",value:function(){var a=this.state,t=a.temp,e=a.weatherIcon,s=a.sunrise,o=a.sunset;return n.a.createElement("div",{className:"weather-container"},n.a.createElement("div",{className:"weather-block"},n.a.createElement("div",{className:"weather-weather"},t),n.a.createElement("img",{className:"weather-main-icon",alt:"weather icon",src:e})),n.a.createElement("div",{className:"weather-block"},n.a.createElement("div",{className:"weather-text"},s),n.a.createElement("img",{src:g.a,className:"weather-icon",alt:"sunrise icon"})),n.a.createElement("div",{className:"weather-block"},n.a.createElement("div",{className:"weather-text"},o),n.a.createElement("img",{src:K.a,className:"weather-icon",alt:"sunset icon"})))}}]),t}(n.a.Component),y=e(11),j=e.n(y),x=function(){return n.a.createElement("div",{className:"logo-container"},n.a.createElement("div",{className:"logo-header-container"},n.a.createElement("h2",{className:"logo-header-top"},"Welcome to"),n.a.createElement("img",{className:"logo",alt:"Kurts logo",src:j.a})))},I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],z=["January","February","March","April","May","June","July","August","September","October","November","December"],f=function(a){function t(a){var e;Object(u.a)(this,t),(e=Object(p.a)(this,Object(l.a)(t).call(this,a))).getTime=function(){var a=new Date,t=a.getHours(),s=a.getMinutes(),n=a.getSeconds();s<10&&(s="0"+s),n<10&&(n="0"+n),e.setState({seconds:n,minutes:s,hours:t})},e.getDate=function(){var a=new Date,t=I[a.getDay()],s="".concat(z[a.getMonth()]," ").concat(a.getDate());e.setState({day:t,date:s})};var s=new Date;return e.state={seconds:s.getSeconds(),minutes:s.getMinutes(),hours:s.getHours(),day:I[s.getDay()],date:"".concat(z[s.getMonth()]," ").concat(s.getDate())},e}return Object(d.a)(t,a),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.setInterval(this.getTime,1e3),window.setInterval(this.getDate,108e5)}},{key:"render",value:function(){var a=this.state,t=a.seconds,e=a.minutes,s=a.hours,o=a.day,r=a.date;return n.a.createElement("div",{className:"clock-container"},n.a.createElement("div",{className:"clock-time"},n.a.createElement("span",null,s),":",n.a.createElement("span",null,e),n.a.createElement("span",{className:"clock-time-second"},t)),n.a.createElement("div",{className:"clock-date"},n.a.createElement("span",null,o),", ",n.a.createElement("span",null,r)))}}]),t}(n.a.Component),M=function(a){var t=a.title,e=a.children;return n.a.createElement("div",{className:"slide-container"},n.a.createElement("h3",{className:"slide-title"},t),n.a.createElement("div",{className:"slide-card"},e))},E="https://day.lt/dienos_vardadieniai?charset=utf",S=function(a){function t(){var a,e;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=Object(p.a)(this,(a=Object(l.a)(t)).call.apply(a,[this].concat(n)))).frame=function(a){var t=document.createElement("script");t.src=E,a.contentDocument.body.appendChild(t),a.contentDocument.write(""),t.onload=function(){return e.setState({names:Array.from(a.contentDocument.querySelectorAll("a")).map((function(a){return a.innerHTML}))})}},e}return Object(d.a)(t,a),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(M,{title:"Name days:"},n.a.createElement("iframe",{ref:this.frame,title:"nameDays",className:"hide"}),this.state&&this.state.names.map((function(a){return n.a.createElement("div",{key:a},a)})))}}]),t}(n.a.Component),b="https://day.lt/dienos_info?format=[patarle]&charset=utf",T=function(a){function t(){var a,e;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=Object(p.a)(this,(a=Object(l.a)(t)).call.apply(a,[this].concat(n)))).frame=function(a){var t=document.createElement("script");t.src=b,a.contentDocument.body.appendChild(t),a.contentDocument.write(""),t.onload=function(){e.setState({proverb:a.contentDocument.body.innerHTML})}},e}return Object(d.a)(t,a),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(M,{title:"Daily proverb:"},n.a.createElement("iframe",{ref:this.frame,title:"dailyProverb",className:"hide"}),this.state&&this.state.proverb)}}]),t}(n.a.Component),C=["https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GSB-21-2-RCT.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0GMS-120-Pro720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaBB1T81720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GLI-18V-1900.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720Xo-4.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0HSA-66720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaBB161mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MSA-140-C720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/47/0720x720GSS-140-1-A.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/48/0720x720GSS-160-Multi.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/49/0720x720FSA-65.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0TT-180-BM720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/51/0720x72041CompresorAerotecExtreme-240-5.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0ProfilLufenfeuchter60720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/70/0NovusJ165Profi720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0RothenbergerRospi720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0RemsPressbackeMini720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaBO6030JX720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x72050m-5x25mm-H07RN-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaBO4900VJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x72050m-3x25mm-H07RN-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0JungFlutbox45KS720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GHO-40-82-C.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaSG1251J720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720BGA-85.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GBR-15-CAG.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GBH-5-40-DCE.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720MSA-200-C-BQ.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/59/0BoschGNF-35-CA720x7201.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GSH-3-E.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GSH-11-E.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GSH-27-VC.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720DCS397T2.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720BGA-451.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GWS-13-125-CIE.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0BoschGPO-14-CE720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/6/0MSE-141-C720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0GloriaMultiBrushLion720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GWS-22-230-LVI.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/52/0H-506-WA720x720f.jpeg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GTL-3.jpeg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GST-18V-LI-B.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GAM-220-MF.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GLL-3-80-CG.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720HSA-25.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GE-140L.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/146/0StihlGHE140L720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0StihlRMA235720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FestoolOF1010EBQ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0StihlRMA448TC720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaBB1T61mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/2Cedima81mm1440x900.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FestoolBS75E720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaTrongaardSF14-125720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaGA5040RKDJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FiskarsQuikDrillM720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FestoolCTM55REBQ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaDSMaxxDosensenke82mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0KrnzleRohrreinigungsschlauchF15m720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaDSMaxxDosensenke68mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaGA9020RKF3720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaC-BMH160720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaBB1Tmax131mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x72040m-3x25mm-H07RN-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CedimaBB1T161mm720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDFS452RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/63/0Berina-1008720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/55/0720x720Belle.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/54/0799-TS-T720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/46/0720x720GBH-12-52-DV.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/45/0720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GWS18V.png","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/50/0720x720HSA-451.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/56/0BoschGOF-1250-LCE720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0CTS-56720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/58/0Roscop-i2000720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720CARRYMATE-XL.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/145/0Krnzle1152TST720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x72025m-5x25mm-H07RN-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x72025m-3x25mm-H07RN-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/19/0720x720GSH-16-305.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/53/02160-TS-T720x720f.jpg","https://cdn.staging.kurts.de/Screenshot_at_Aug_05_11-59-53.5dcbce377d83f105529359.png","https://cdn.staging.kurts.de/81v1vFC4QfL._SX425_.5d8de301ef919737013565.jpg","https://cdn.staging.kurts.de/IDH18201_hero(4).5d676249dc9b6740500183.png","https://cdn.staging.kurts.de/000-1068x534.5d498e1610517052051024.jpg","https://cdn.staging.kurts.de/images_(1).5d40441bc01df440828590.jpeg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/148/0TakeuchiTB216720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FestoolLHS225EQPlus720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDHP459RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaPV7000C720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/67/0BoschGAS55MAFC720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/84/0VikingGE375720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0Euroline-810720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0K-15720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0puzzi-10720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0Cutmaster720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0BoschGLM120C720x.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0K7720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0BerinaL460720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/75/0SchwambornSTR581720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/74/0SchwambornDSM250720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/73/0PCLX-1240Ef.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0TapofixCB75N720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0GOP-55-36720x720f.jpeg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0NortonClipperTT250G720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720HMZ1.png","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720Gartenwalze.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720Saugheber-bis-120kg.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720Ropump-Saug-Druckreiniger.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720Cutmaster-MINI-Cut-230.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0Profi-145-S720x720f.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720120-200kg.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720410T.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GHO-26-82-D.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GEX-125-150-AVE.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GBS-75-AE.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GBH-18-V-26.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720GBH-2-26-F.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0Grun720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FestoolCTM36EAC720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDTW450RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHM1400720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDJN161RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0Alfra1121720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0FeinFMM360QSL720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDGA513RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDDA350RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDHR243RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDJS161RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDHS360RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDKP108RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDHS680RTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaDJV181RT1J720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/GKS-18V-570720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHM1231C720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0SchwambornSTS130720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHM0871C720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHR3210FCT720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHR2811FT720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHP2071FJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0MakitaHR2631FTJ720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0BesseyTurfutterstrebeTU720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0KFSPlattenliftDWM380720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/94/0GardenaTCSLi1820720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/93/0GardenaTHSLi18-20720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0RemsMiniPress22VACC720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/91/0MakitaUV3600720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0RollBullystripper720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0LorchMicroStick160CEL720x720.jpg","https://s3.eu-central-1.amazonaws.com/kurts-asset-upload/media/KKInventory/0720x720DJIPhantom4.png"];var G=function(){var a=Object(s.useState)(""),t=Object(m.a)(a,2),e=t[0],o=t[1];return Object(s.useEffect)((function(){var a=function(){var a=C[Math.floor(Math.random()*C.length)];o("url(".concat(Math.random()<.5?a:"https://source.unsplash.com/1920x1080/?painting,arts-culture",")"))};a(),setInterval((function(){a()}),3e5)}),[]),n.a.createElement("div",{className:"background",id:"background",style:{backgroundImage:e}},n.a.createElement("main",{className:"content"},n.a.createElement("header",{className:"header"},n.a.createElement(x,null),n.a.createElement(f,null)),n.a.createElement("div",{className:"content-block"},n.a.createElement("div",{id:"slider-container",className:"slider-container"},n.a.createElement("div",{className:"slide"}),n.a.createElement("div",{className:"slide"},n.a.createElement(S,null)),n.a.createElement("div",{className:"slide"},n.a.createElement(T,null)))),n.a.createElement("footer",{className:"footer"},n.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.eb9166e3.chunk.js.map