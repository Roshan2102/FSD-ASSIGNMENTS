document.getElementById("button-checkbox").addEventListener("click",function(){
    if(this.checked){
       document.getElementById("text-title").innerHTML="ON"
       document.getElementById("bulb1").setAttribute("src","../Assignment no 5/bulb on.PNG")
       document.getElementById("bulb2").setAttribute("src","../Assignment no 5/bulb on.PNG")
       document.getElementById("bulb3").setAttribute("src","../Assignment no 5/bulb on.PNG")
       document.getElementById("bulb4").setAttribute("src","../Assignment no 5/bulb on.PNG")
      
    }
    else{
        document.getElementById("text-title").innerHTML="OFF"
        document.getElementById("bulb1").setAttribute("src","../Assignment no 5/bulb off.PNG")
        document.getElementById("bulb2").setAttribute("src","../Assignment no 5/bulb off.PNG")
        document.getElementById("bulb3").setAttribute("src","../Assignment no 5/bulb off.PNG")
        document.getElementById("bulb4").setAttribute("src","../Assignment no 5/bulb off.PNG")
        
       
    }
})