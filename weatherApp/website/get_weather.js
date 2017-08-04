// setting the values after the window has loaded and begining execution. 
window.onload = function(){
     var c = document.getElementById('country');
     var w = document.getElementById('elem');
     var t = document.getElementById('temp');
     var fahrenheit = new Boolean(false);
     var getClouds =  /Clouds/gi,
        getRain = /rain/gi,
        getSunny = /sunny/gi,
        body = document.getElementsByClassName('body')[0] ;
//setting up the XMLHttpRequest separatly from the actual request.
    var getItem = function(){
    this.get = function(theUrl, callback) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    callback(xmlHttp.responseText);
            }
            xmlHttp.open("GET", theUrl, true); // true for asynchronous 
            xmlHttp.send(null);
            console.log('request sent.');
        }
    }

    //Getting geological data of the user.
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( (pos) =>{
            
                var lat = 'lat='  + pos.coords.latitude;
                var lon = '&lon=' + pos.coords.longitude;
            
                console.log(lat+' '+lon);
                    
                const apiKey='&appid=ce330c13d15df161063f882958be2740';
                const api = 'api.openweathermap.org/data/2.5/weather?';
            
                var url = 'http://api.openweathermap.org/data/2.5/weather?' + lat + lon + apiKey; 
                
                var a = new getItem();
                a.get(url, (response) => {
                    if(response){
                        console.log(response);
                        var res = JSON.parse(response);
                        var country = res.sys.country;
                        var city = res.name;
                        var tempK = res.main.temp;
                        var weather = res.weather[0].description;
                        var main = res.weather[0].main;
                        temp = tempK - 271.15;
                        tempC = Math.floor(temp);
                        console.log(country +' '+ city +' '+ tempC +'°C' +' '+ weather);
                        setValues(country,tempC,weather,city,main);
                    }else{
                        console.log('no information has been recieved');
                    }
                
                })
            
        
            
            })
        }
    //setting HTML to values
    function setValues(con, temp, weather, city, maindes, body){
        c.innerHTML = city + ',' +' '+ con;
        w.innerHTML = weather;
        t.innerHTML = temp;
        var  cl =  getClouds.test(maindes), rain = getRain.test(maindes), clear = getSunny.test(maindes);
        switch(cl, rain, clear){
            case cl == true: 
            body.className += ' cloud';
            break;
            case rain = true:
            body.className += ' rain';
            break;
            case clear = true:
            body.className += ' clear';
            break;
        }
    };
 }

            
        
