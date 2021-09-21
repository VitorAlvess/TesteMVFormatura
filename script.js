var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')

a.addEventListener('mouseover', function(){

    var numero = document.querySelector('#a')
    var min = 1
    var max = 100

    for(var i = min; i <= max; i++){
        setTimeout(function(nr){
            numero.innerHTML = nr;
        }, i * 1000 / max, i);
    }
})

b.addEventListener('mouseover', function(){
    var numero = document.querySelector('#b')
    var min = 1
    var max = 5000
    
    for(var i = min; i <= max; i++){
        setTimeout(function(nr){
            numero.innerHTML = nr;
        }, i * 2000 / max, i);
    }

})

c.addEventListener('mouseover', function(){
    var numero = document.querySelector('#c')
    var min = 1
    var max = 12
    
    for(var i = min; i <= max; i++){
        setTimeout(function(nr){    
            numero.innerHTML = nr;
        }, i * 700 / max, i);
    }

})




function mv(){
    /*menuSection.classList.remove('on')
    show = !show;*/
    window.location='#quemsomos';
}






