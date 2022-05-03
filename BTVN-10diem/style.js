document.addEventListener("DOMContentLoaded", ()=> {
    const box = document.querySelector("#card");
    const card =  document.querySelector("#card2"); 
    const text = document.querySelector("#text");
    const text1 = document.querySelector("#text-1");
    const text2 = document.querySelector("#text-2");
    const text3 = document.querySelector("#text-3");
    const text4 = document.querySelector("#text-4");
    
    
    
    document.querySelector("#buton").addEventListener("click",e=>{
      card.style.display = "block";
    
    
    
      let messi =setInterval(function(){
        text.innerText = "Anh quang sẽ cho em 10 điểm...";
      clearInterval(messi)
    } ,3000);
    
    
    let l1 = setInterval(function(){
        text1.innerText = "Đúng ko hả anh..?";
        clearInterval(l1)
    } ,4500);
    
    let l2 = setInterval(function(){
        text2.innerText = "10 điểm anh quang anh ơi..";
        clearInterval(l2)
    } ,6000);
    
    let l3 = setInterval(function(){
        text3.innerText = "10 điểm anh quang anh ơi..";
        clearInterval(l3)
    } ,7500);
    
    let l4 = setInterval(function(){
        
            text4.innerText = "Tại vì xứng đáng.!";
        
        clearInterval(l4)
    } ,9000);
    
    });
    document.querySelector("#eh2").addEventListener("click", ()=>{
        card.style.display ="none";
    text.innerText="";
    text1.innerText = "";
    text2.innerText = "";
    text3.innerText = "";
    text4.innerText = "";
    })
    });
    
    
    
    //  let hello = setInterval(function(){
      
    //         text.innerText = "hello";
    // } ,5000);
    
      
    let person = [
    {
    name:"phước",
    age:28,
    job:"no"
    },
    {
        name:"thành",
        age:16,
        job:"yes"  
    }
    ]
    localStorage.setItem('newList',person)
    setTimeout(()=>{
        localStorage.setItem('ChangeName',person[0].name ="Hà")
    },5000)
    
    setTimeout(()=>{
        localStorage.removeItem('ChangeName')
        localStorage.removeItem('newList')
    } ,10000)
    
    
    let per = JSON.stringify(person)
    console.log(per)