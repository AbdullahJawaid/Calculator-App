let string="";
let buttons=document.querySelectorAll('.button');
let input=document.getElementById('output-screen');
let equal=document.getElementById('equal');
let clBtn=document.getElementById('clear');
let delBtn=document.getElementById('delete');


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{


        if (e.target.innerHTML === "=") {

            try {
                string=eval(string);
                input.value=string;
            } catch (error) {
                alert('Invalid Syntax')
                
            }
          
        }
        else if (e.target.innerHTML === 'CL') {
            string='';
            input.value=string;
            
        }   
         else if (e.target.innerHTML === 'DEl') {
            string= input.value.slice(0,-1);
            input.value=string;
            
        }
        else{

            console.log(e.target)
            string=string + e.target.innerHTML;
            input.value=string;
          
        }
      
    });
    
})

