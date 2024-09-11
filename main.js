

function LargFont(){

   document.querySelector("body").classList.add("large")
   document.querySelector("body").classList.remove("small")
}


function SmallFont(){

    document.querySelector("body").classList.add("small")
    document.querySelector("body").classList.remove("large")
 }
 
 
 document.querySelector(".zoom_out").onclick=SmallFont;

document.querySelector(".zoom_in").onclick=LargFont;


console.log();