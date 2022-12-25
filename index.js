
function getApi(){
    
    var access_key = document.getElementById('accessKey').value;
    var location = document.getElementById('locationInput').value;
    // var url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${access_key}&contentType=json`
     var url ="https://jsonplaceholder.typicode.com/users"
    if(access_key!='' && location!=''){
          fetch(url)
          .then(response=>response.json())
          
          .then(data=>{
            console.log(data)
            document.getElementById('display-location').textContent = data.address;
            document.getElementById('lat').textContent = data.latitude;
            document.getElementById('long').textContent = data.longitude;
            document.getElementById('timeZone').textContent = data.timezone;
            document.getElementById('windSpeed').textContent = data.currentConditions.windspeed;
            document.getElementById('pressure').textContent = data.currentConditions.pressure;
            document.getElementById('humidity').textContent = data.currentConditions.humidity;
            document.getElementById('windDirection').textContent = data.currentConditions.winddir;
            document.getElementById('uvIndex').textContent = data.currentConditions.uvindex;
            document.getElementById('feelsLike').textContent = data.currentConditions.feelslike;
          })
    }else{
        alert('location and API key cannot be empty!')
    }

}

