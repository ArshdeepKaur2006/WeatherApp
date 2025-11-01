document.addEventListener("DOMContentLoaded", () => {
  let d1 = document.querySelector(".day1");
  let d2 = document.querySelector(".day2");
  let d3 = document.querySelector(".day3");
  let d4 = document.querySelector(".day4");
  let input = document.querySelector(".input");
  let btn = document.querySelector(".button");
  let place = document.querySelector("#place");
  let tmp = document.querySelector("#temp");
  let tmp2 = document.querySelector(".temp2");
  let tmp3 = document.querySelector(".temp3");
  let tmp4 = document.querySelector(".temp4");
  let cdn = document.querySelector("#condn");
  
  
 // let api="http://api.weatherapi.com/v1/current.json?key=9682c46d17354b69970110735250102&q=London&aqi=yes";
 const fetchResults=async(place)=>{
 let url=`http://api.weatherapi.com/v1/current.json?key=9682c46d17354b69970110735250102&q={place}&aqi=yes`
 let Furl=`http://api.weatherapi.com/v1/forecast.json?key=9682c46d17354b69970110735250102&q={place}&aqi=yes&days=5`
 const res=await fetch(url)
 const data=await res.json()
 console.log(data)
 const Fres=await fetch(Furl)
 const Fdata=await Fres.json()
 console.log(Fdata)
 let temp=data.current.temp_c;
 let condition=data.current.condition.text;
 let img1 = document.querySelector("#img1");
 let img2 = document.querySelector(".img2");
 let img3 = document.querySelector(".img3");
 let img4 = document.querySelector(".img4");
 const avgTempD1=Fdata.forecast.forecastday[0].day.avgtemp_c;
  const avgTempD2=Fdata.forecast.forecastday[1].day.avgtemp_c;
   const avgTempD3=Fdata.forecast.forecastday[2].day.avgtemp_c;
  const avgCondD1=Fdata.forecast.forecastday[0].day.condition.text;
   const avgCondD2=Fdata.forecast.forecastday[1].day.condition.text;
    const avgCondD3=Fdata.forecast.forecastday[2].day.condition.text;
 tmp.innerHTML=temp;
 tmp2.innerHTML=avgTempD1+`&deg;C`;
 tmp3.innerHTML=avgTempD2+`&deg;C`;
 tmp4.innerHTML=avgTempD3+`&deg;C`;
 cdn.innerHTML=condition;

 if(condition=="Clear"){
    img1.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    img1.style.color="rgb(241, 160, 10)";
 }
 else if(condition=="Patchy rain nearby"){
    img1.innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>`;
    img1.style.color="rgb(241, 160, 10)";
 }

 if(avgCondD1=="Clear"){
    img2.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    img2.style.color="rgb(241, 160, 10)";
 }
 else if(avgCondD1=="Patchy rain nearby"){
    img2.innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>`;
    img2.style.color="rgb(241, 160, 10)";
 }

 if(avgCondD2=="Clear"){
    img3.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    img3.style.color="rgb(241, 160, 10)";
 }
 else if(avgCondD2=="Patchy rain nearby"){
    img3.innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>`;
    img3.style.color="rgb(241, 160, 10)";
 }

 if(avgCondD3=="Clear"){
    img4.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    img4.style.color="rgb(241, 160, 10)";
 }
 else if(avgCondD3=="Patchy rain nearby"){
    img4.innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>`;
    img4.style.color="rgb(241, 160, 10)";
 }
}

  const d = new Date();
  const weekday = [ "Sunday", "Monday",  "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  let day = weekday[d.getDay()];
  let day1 = weekday[(d.getDay() + 1) % 7];
  let day2 = weekday[(d.getDay() + 2) % 7];
  let day3 = weekday[(d.getDay() + 3) % 7];

  d1.innerHTML = day1;
  d2.innerHTML = day2;
  d3.innerHTML = day3;

  btn.addEventListener("click",()=>{
    place.innerHTML=input.value;
    fetchResults(place);
    
  });
});
