alert("Do you want to play the tictac game made by Rishit?");

let playing=document.querySelectorAll('.box');
let rstbutton=document.querySelector('.reset-button');
let trueX=true;//initializing true if user inputs X
let winningcombination=[
    [0, 1, 2],  //represents pattern[0]
    [3, 4, 5],  
    [6, 7, 8],  
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]
]
playing.forEach(box => {
box.addEventListener("click",()=>{
if(trueX==true)
    {
        box.innerText="X";
        trueX=false;
    }
    else
    {
    box.innerText="0";
    trueX=true;
    }
    box.disabled=true;
    checkwinner();

});
});
rstbutton.addEventListener("click",()=>{
    playing.forEach(box => {
        box.innerText = ''; 
        box.disabled=false;
    });
    result.innerText='';
});
const checkwinner=()=>{
for(let pattern of winningcombination)
    {
let pos1=playing[pattern[0]];
let pos2=playing[pattern[1]];
let pos3=playing[pattern[2]];
    
if(pos1.innerText!='' && pos2.innerText!='' && pos3.innerText!='')
    {
        if (pos1.innerText==pos2.innerText && pos2.innerText==pos3.innerText && pos1.innerText==pos3.innerText)
           {
            console.log("Winner is ",pos1.innerText);  
           result.innerText="Winner!!";    
           }
 }
        
    }
 
};
