 var lat,lon;
    navigator.geolocation.getCurrentPosition(success,fail);        
      
        function success(position){
            
            lon=position.coords.longitude;
            lat=position.coords.latitude;
        }
        
        function fail(msg){
            alert("Sorry..! can get your current location")
        }

  window.onload=function(){

      
    document.getElementById("button").onclick=function(){
        console.log(lat+" "+lon);
        
         var name=document.getElementById("loc").value;
         var category=document.getElementById("category").value;
        console.log(name+ " "+category);
        
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ouput").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("post", "/add", true);
    xhttp.send("fname="+name+"&category="+category); 
        
       
    }
        }