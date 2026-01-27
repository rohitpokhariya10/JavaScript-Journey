//DAY-63 JavaScript
//JS Question based on ------>fetch(),.then(),.catch(),async await
//JS Question based on ------>promises,promise.all

//Q1)Scenario 1-->Fetch Weather Details
// Async function jo city name leke weather data fetch karta hai
async function fetchWeather(city){
    try{
        // OpenWeather API key
        let apikey = "35c303226475e68208175893083b31ed";
        
        // API URL
        // units=metric → temperature Celsius me milega
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        
        // fetch() API call karta hai (Promise return karta hai)
        let raw = await fetch(url);
        
        // Raw response ko JSON me convert kar rahe hain
        let data = await raw.json();
        
        // Poora weather object console me dekhne ke liye
        console.log(data);

        // -------- Weather Details --------
         let temp = data.main.temp;
        // Current temperature (°C)
        console.log(`Temperature = ${temp} °C`);
        
        // Maximum temperature (°C)
        console.log(`Max Temperature = ${data.main.temp_max} °C`);
        
        // Minimum temperature (°C)
        console.log(`Min Temperature = ${data.main.temp_min} °C`);
        
        // Humidity percentage
        console.log(`Humidity = ${data.main.humidity} %`);

        if(temp >= 40){
            console.log(`Extreme High Temperature = ${temp}°C`);
            
        }
        else if(temp < 0){
            console.log(`Extreme Low Temperature = ${temp}`);
            
        }

    }
    catch(err){
        // Agar fetch ya JSON me koi error aaye
        console.log("Kuch Toh Gadbad Hai....", err);
    }
}

// Function call with city name
//fetchWeather("Astana");



//Scenario 2---Bulk Email Sending Simulation with Paralel Promises and Error Handling
const useremails =["rohit1@gmail.com" , "cat2@ai" , "bird@org"]

function sendEmail(email){
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 10);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) {
        resolve(`✅ Email sent to ${email}`);
      } else {
        reject(`❌ Email failed for ${email}`);
      }
    }, time * 1000);
  });
}



//2 function jo email sendEmail() ko dega
async function sendEmails(userlist){
  let allresponses = userlist.map(email => 
    sendEmail(email)
    //sendEmail() function ka promise return hua vo ab yha ayega
      .then(data => data)
      .catch(err => err)   //  err return karo data nahi
  );
   
     //console.log(allresponses);

  //Promise.all--->
  let ans = await Promise.all(allresponses);
 console.log(ans);
}

//call
sendEmails(useremails);