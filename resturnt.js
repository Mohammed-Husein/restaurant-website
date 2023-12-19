//Variable//
const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const counter=document.querySelector('.counter')
const inc=document.querySelector('.btninc');
const dec =document.querySelector('.btndec');
const incordec = document.querySelector('.incordec');
const incordec1 = document.querySelector('.incordec1');

const Done =document.querySelector('.Done');
const Done1 =document.querySelector('.Done1');

//Function to change style button order//
btn1.addEventListener("click", btn23);
function btn23(){
    btn1.style.backgroundColor='green';
    incordec.style.display='block';
}

btn2.addEventListener("click", btn22);
function btn22(){
    btn2.style.backgroundColor='green';
    incordec.style.display='block';
}
//Function to sure  order//
Done.addEventListener("click", Don);
function Don(){
    Done.style.backgroundColor='green';
    Done.innerHTML='Done';
    incordec.style.display='none';

}

var count=0;
dec.addEventListener("click", decs);
function decs(){
count--;
counter.innerHTML=count;
if(count<0){
    counter.style.color='red';
    }
}

inc.addEventListener("click" , incs );
function incs(){
count++;
counter.innerHTML=count;
if(count>0){
    counter.style.color='green';
    }
}
//StartSlider//
var  slidindex=0;
 function showslider(index){
    var sliders=document.querySelectorAll('.slider img');

 if(index<0){
        slidindex=sliders.length-1;
    }
else if(index>=sliders.length)
{
slidindex=0;
}
else
{
    slidindex=index;
}
const offset=slidindex*100;
document.querySelector('.slider').style.transform=translateX(${offset}%);//////////////////
}
function prevslider(){
    showslider(slidindex-1);
}
function nextslider(){
    showslider(slidindex+1);
}
showslider(slidindex);
//EndSlider//