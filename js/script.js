var lat;
var Long;
var x;
var d= new Date();

$(document).ready(function(){



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    } else { 
        alert("Browser dose not suppot geolocation");
    }
}

function getCoordinates(position) {
    lat = position.coords.latitude;
    Long = position.coords.longitude; 

    


    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+Long+"&appid=882d5e1cbe7c2527cc8f39df6b5e2bed"
$.getJSON(url,function(data)

{

	$("#city").append(data.name);
	console.log(data)
	
	
	


	var currentdate = new Date(); 
var datetime =   "  "+currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() 

               var time =  currentdate.getHours() + ":"  
                + currentdate.getMinutes() 
$("#date").append(datetime);
$("#time").append(time);
$("#data").append(data.weather[0].description)

var temp = (300 - data.main.temp);
$("#temp").append(temp.toPrecision(3)+'°C');

 




 x = data.weather[0].icon;

 $("#icon").html("<img src= "+"http://openweathermap.org/img/w/"+x+".png>")

 $(".container-2").css("display","none");

 $(".container").css("display","block");





}

	)

    
}

// actually call the function getLocation
getLocation();




  


  







})
	


	


