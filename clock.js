    let h=document.getElementById('hour');
    let m=document.getElementById('minute');
    let s=document.getElementById('seconds');
    let ampm=document.getElementById('ampm');

    let h1=document.getElementById('hour1');
    let m1=document.getElementById('minute1');
    let s1=document.getElementById('seconds1');
    let ampm1=document.getElementById('ampm1');

    let settext=document.getElementById('settext');

    let img=document.getElementById('changeimg');
   

function clockStart(){
    let time=new Date();
    // let hours=13;
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();

    if (hours>=6 && hours < 12){
        settext.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
      
    } 
    else if (hours>=12 && hours < 15){
        settext.innerText = "LET'S HAVE SOME LUNCH !!";
        
    }
    else if (hours>=15 && hours <19){
        settext.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!!";
       
    }
    else{
        settext.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
   
    }
    
    if(hours>12){
        hours=hours-12;
        h.innerText=hours;
        m.innerText=minutes;
        s.innerText=seconds;
        ampm.innerText="PM";

        h1.innerText=hours;
        m1.innerText=minutes;
        s1.innerText=seconds;
        ampm1.innerText="PM";

    }
    else{
    h.innerText=hours;
    m.innerText=minutes;
    s.innerText=seconds;
    ampm.innerText="AM";

    h1.innerText=hours;
    m1.innerText=minutes;
    s1.innerText=seconds;
    ampm1.innerText="AM";
    
    }

}

setInterval(()=>{
    clockStart();
},1000);



let span1=document.getElementById('span1');
let span2=document.getElementById('span2');
let span3=document.getElementById('span3');
let span4=document.getElementById('span4');

let button=document.getElementById('button');



let wakeup=document.getElementById('wakeup');
let lunch=document.getElementById('setlunch');
let nap=document.getElementById('setnap');
let night=document.getElementById('setnight');

let changetext=document.getElementById('changetext');



button.addEventListener('click' ,() =>{

    let time=new Date();
    // let hours=13;
    let hours=time.getHours();

    
    
    
    if(hours===parseInt(wakeup.value)){
        changetext.innerText="GRAB SOME HEALTHY BREAKFAST!!!!";
        img.src="./Component 30 – 1.png";
        console.log(wakeup.value);
    }
   
   else if(hours===parseInt(lunch.value)){
        
        changetext.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        img.src="./Component 31 – 1.svg";
    }
    else if(hours===parseInt(nap.value)){
        
        changetext.innerText="GOOD EVENING !!";
        img.src="./lunch_image@2x.png";
    
    }
   else if(hours===parseInt(night.value)){

        settext.innerText="GOOD NIGHT !!";
        img.src="./Component 32 – 1@2x.png";
    }

    let wakeup_value = wakeup.options[wakeup.selectedIndex].textContent;
    span1.textContent = wakeup_value;

    let lunch_value = lunch.options[lunch.selectedIndex].textContent;
    span2.textContent = lunch_value;

    let nap_value = nap.options[nap.selectedIndex].textContent;
    span3.textContent = nap_value;

    let night_value = night.options[wakeup.selectedIndex].textContent;
    span4.textContent = night_value;
})

