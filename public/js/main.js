const todayDate = document.getElementById("todayDate");
const dayname = document.getElementById("day");

const cityname = document.getElementById("cityname");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector(".middle_lyr");
const output = document.getElementById("city_name");
const submitbtn = document.getElementById("submitbtn");


const getinfo = async(e) =>{
    e.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        output.innerHTML = "Please write Name before Search";
        output.style.color = "red";
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=716ac8edddc53b7d888919771c89c46e&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            output.innerHTML = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp.innerHTML = arrdata[0].main.temp;
            // temp_status.innerHTML = arrdata[0].weather[0].main;

            const tempMood = arrdata[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML =  '<i style="font-size:60px; color: rgb(255, 208, 0);" class="fa-solid fa-sun "></i>'
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML =  '<i style="color: #f1f2f6; font-size:60px;" class="fa-solid fa-cloud" ></i>'
            }else if(tempMood == "Rain"){
                temp_status.innerHTML =  '<i style=" font-size:60px; color: #a4b0be;" class="fa-solid fa-cloud-showers-water" ></i>'
            }else{
                temp_status.innerHTML =  '<i style="font-size:60px; color:  #44c3de;" class =" fa-solid fa-cloud "></i>'
            }
            datahide.classList.remove('data_hide');
        }catch{
            output.innerHTML = "Please Enter City Name Properly";
            output.style.color = "red";
            datahide.classList.add('data_hide');
        }
        
    }
}


const getCurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wensday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    let currentTime = new Date();
        let day = weekday[currentTime.getDay()];
        return day;
};

var months = [
    "jan",
    "fab",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

const date = new Date()
dayname.innerHTML = getCurrentDay();
todayDate.innerHTML = `${date.getDate()}-${months[date.getMonth()]}`;

submitbtn.addEventListener('click',getinfo);