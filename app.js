document.addEventListener( 'keydown', function(event){
    if(event.code == "KeyA"){
        document.getElementById("button").style.backgroundColor = "red";
    }

})
document.addEventListener( 'keyup', function(event){
    if(event.code == "KeyA"){
        document.getElementById("button").style.backgroundColor = "rgb(18, 210, 231,0.3)";
    }

})
 document.addEventListener('keydown', function(event){
    if(event.code == "KeyS"){
        document.getElementById("h1").style.color = "green";
        document.getElementById("h1").style.fontSize = "150px";
        document.getElementById("h1").innerText = "medical";
    }
    
 })
 
 document.addEventListener('keyup', function(event){
    if(event.code == "KeyS"){
        document.getElementById("h1").style.color = "black";
        document.getElementById("h1").style.fontSize = "75px";
        document.getElementById("h1").innerText = "медицина для всех";
    }
    
 })
 
document.getElementById("name").addEventListener("input", function(){
    if(this.value.lenght>10){
        this.value = this.value.substring(0, 10)
    }
})