var input=document.getElementById('input');
var pencil=document.getElementById('pencil');
var alltems=document.getElementById("allitems");
 
pencil.addEventListener('click',function(){
    alltems.innerHTML="";
})
input.addEventListener('keydown',function(event){
    if(event.key=='Enter') addItem();
})
function addItem(){
    var h2=document.createElement('h2');
    h2.innerHTML="- " + input.value;
    h2.addEventListener('click',function(){
        h2.style.textDecoration="line-through";
    })
    alltems.insertAdjacentElement('beforeend',h2);
    input.value ='';
}