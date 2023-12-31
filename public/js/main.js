const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

// const getInfo = async(event) =>{
//     console.log(temp);
//     console.log(city_name);
// }

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
//    console.log(cityVal);
    if(cityVal=== ""){
     city_name.innerText = 'Please Write the name before search';
     datahide.classList.add('data_hide');

    }
    else{
        try{
             
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=84c40aac8ba9509b877573fb85aa6622`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
      
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            console.log(city_name);
            console.log(temp_real_val);
            console.log(temp_status);

            const tempMood = arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML =
                      "<i class= 'fas fa-sun' style='color: #eccc68;'</i>";
            } else if (tempMood=="Clouds") {
                temp_status.innerHTML = 
                    "<i class= 'fas fa-cloud' style='color: #f1f2f6;'</i>";
            } else if(tempMood=="Rain"){
                temp_status.innerHTML =
                "<i class= 'fas fa-cloud-rain' style='color: #a4b0be;'</i>";
            } else if(tempMood=="Mist"){
                temp_status.innerHTML =
                "<i class='fas fa-wind' style='color: #fff;>'</i>";
            }
            else {
                "<i class= 'fas fa-cloud' style='color: #f1f2f6;'</i>";
            }

        }catch{
            city_name.innerText = 'Please Write the city name before properly';
            datahide.classList.remove('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);