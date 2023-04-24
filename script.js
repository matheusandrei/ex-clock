function loading(){
var msg = window.document.getElementById('msg')
var picture = window.document.getElementById('picture')
var date = new Date()
var hours = date.getHours()
var min = date.getMinutes()
msg.innerHTML = `it's ${hours}:${min} o'clock!`
if( hours >= 0 && hours < 12){
    //good morning
    picture.src = 'img/day.png'
    document.body.style.backgroundColor='#71A0D3'
} else if(hours >= 12 && hours <=18){
    //good afternoon
    picture.src = 'img/afternoon.png'
    document.body.style.backgroundColor='#E76B4A'
} else{
    //good night
    picture.src = 'img/night.png'
    document.body.style.backgroundColor='#00324B'
}
}
