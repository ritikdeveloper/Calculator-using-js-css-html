let string="";
let buttons=document.querySelectorAll('.buttons');
Array.from(buttons).forEach((elemen)=>{
  elemen.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      string = eval(string);
    
    }
     else if(e.target.innerHTML=='C'){
      string = "";
    
    }
      
    else{
    
    console.log(e.target)
    string = string+ e.target.innerHTML;}
    document.querySelector('input').value=string;
    
  })
})