var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var $small_time=document.getElementsByClassName("time_small")[0];//getting small_time element
var $big_time=document.getElementsByClassName("time_big")[0];//getting the big time
var $day=document.getElementsByClassName("day")[0];//getting the date element
var $chat=document.getElementsByClassName("chat")[0];//getting that chat icon element
var $music=document.getElementsByClassName("music")[0];
var $new_screen=document.getElementsByClassName("time_day")[0];//getting the first time_day element
var $img=document.getElementsByClassName("images")[0];//getiing the images tag
var $screen2=document.getElementsByClassName("screen2")[0];//getiing the second screen
var $next_screen=document.createElement("div");//creating new element to replace the previous screen when clicking
var $next_screen2=document.createElement("div");//creating new element to replace the previous screen when clicking
var $msg1=document.createElement("div");//creating new element to replace the previous element when clicking
var $msg2=document.createElement("div");//creating new element to replace the previous element when clicking
var $msg3=document.createElement("div");//creating new element to replace the previous element when clicking
$msg1.textContent="C";
$msg2.textContent="Java";
$msg3.textContent="Python";
var $audios=[[]]

var d=new Date();//getting date object
$small_time.innerHTML=d.getHours()+":"+d.getMinutes();
$big_time.innerHTML=d.getHours()+":"+d.getMinutes();
$day.innerHTML=day_list[d.getDay()]

var v=0;
var x=0;
$music.addEventListener("click",myfun1)
function myfun1(){
    if(v==0){
        $music.style.color="red";
        $new_screen.replaceWith($next_screen)//replace default screen with the newly created screen1
        $next_screen.classList.add("screen3");
        if(x==0){
        $div=document.createElement("div");
        $div.classList.toggle("section1")
        $next_screen.appendChild($div)
        }
        v=1
    }
    else{
        $music.style.color="white";
        $div.innerHTML=""
        $next_screen.replaceWith($new_screen)
        v=0
    }
    if(x==0){
    var $div1=document.createElement("div");
        $div1.classList.add("section2")
        $next_screen.appendChild($div1)

        $div1_1=document.createElement("div");
        $div1_1.innerHTML="1."+ '&nbsp  &nbsp'+"Vaathi_Coming"+ '&nbsp &nbsp  '+"7.5S";
        $div1.appendChild($div1_1)

        $div1_2=document.createElement("div");
        $div1_2.innerHTML="2."+ '&nbsp  &nbsp'+"Kaatu_Payalae"+ '&nbsp &nbsp &nbsp  '+"6S"
        $div1.appendChild($div1_2)

        $div1_3=document.createElement("div");
        $div1_3.innerHTML="3."+ '&nbsp  &nbsp'+"Jigidi_Kiladi"+ '&nbsp &nbsp &nbsp &nbsp &nbsp '+"8S"
        $div1.appendChild($div1_3)

        $div1_4=document.createElement("div");
        $div1_4.innerHTML="4."+ '&nbsp  &nbsp'+"Rakkita_Rakitta"+ '&nbsp  &nbsp'+"4S"
        $div1.appendChild($div1_4)

        $div1_5=document.createElement("div");
        $div1_5.innerHTML="5."+ '&nbsp  &nbsp'+"Munbae_Vaa"+'&nbsp &nbsp &nbsp &nbsp &nbsp '+"8S"
        $div1.appendChild($div1_5)

        $div1_6=document.createElement("div");
        $div1_6.innerHTML="6."+'&nbsp &nbsp'+"Ammuli_kumuli"+'&nbsp &nbsp &nbsp'+"8S"
        $div1.appendChild($div1_6)

$div1_1.addEventListener("click",function(){
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Vaathi_Coming"+"<br>"+"(MASTER)"+"<br>"+"Anirudh";
    
})

$div1_2.addEventListener("click",function(){
   
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Kaatu_Payalae"+"<br>"+"(S-P)"+"<br>"+"Gv Prakash";
    
})
$div1_3.addEventListener("click",function(){
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Jigidi_Kiladi"+"<br>"+"(Pattas)"+"<br>"+"Anirudh";
    
})
$div1_4.addEventListener("click",function(){
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Rakkita Rakkita"+"<br>"+"(J-T)"+"<br>"+"Imman D";
    
})
$div1_5.addEventListener("click",function(){
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Munbae_Vaa"+"<br>"+"(SOK)"+"<br>"+"Ar Rahman";
    
})
$div1_6.addEventListener("click",function(){
    $div.innerHTML=""
    $img=document.createElement("img");
    $img.setAttribute("src","data:image/png;base64,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")
    $div.appendChild($img);
    $div.innerHTML+=" "+"Ammuli_kumuli"+"<br>"+"(Koo)"+"<br>"+"Harrish Jeyaraj";
    
})



x=1;
}
}
