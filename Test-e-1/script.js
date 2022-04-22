function clocktime(){
    var dateTime = new Date ();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    if( hrs >= 12){
        session.innerHTML= 'PM' ;
    }else {
        session.innerHTML = 'AM';
    }
    document.getElementById('hours').innerHTML = hrs ;
    document.getElementById('minutes').innerHTML = min ;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(clocktime, 10);
var box = document.getElementById("box");
box.style.background="black";

box.addEventListener("mouseover", e=> {
    box.style.backgroundImage = "url(quanh.jpg)";
  box.style.backgroundPosition= "top center";
  box.style.backgroundSize="cover";
})
box.addEventListener("mouseleave", e=> {
    box.style.background = "black";
   
});

 
function onetriangle(x){
    let kq = "";
    for (let i = 1 ; i <= x ; i++) {
        for (let k = x ; k > i ; k--) {
          kq += " ";
        }
        for (let j = 1 ; j<= i ; j++) {
            kq += "1" + " ";
        }
        kq += "\n";
    }
    return kq;
}
console.log(onetriangle(3));


for(let i =4 ; i<=20;i+=2){
    if(i%2==0){
console.log(i+"...");
    }
}