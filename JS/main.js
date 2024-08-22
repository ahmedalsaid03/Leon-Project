let myNav = document.querySelector(`.links ul`)
let icon = document.querySelector(`.links .icon`)

// icon.addEventListener("click",function(e){
//      if (myNav.style.display === "block") {
//         myNav.style.display = "none";
//     }   

//     else {
//         myNav.style.display = "block";
//     }
// })

document.body.addEventListener("click",function(e){
    if(e.target == icon)
    {
        if (myNav.style.display === "block") {
            myNav.style.display = "none";
        }   
    
        else {
            myNav.style.display = "block";
        }
    }
    else if (!myNav.contains(e.target)) {
        myNav.style.display = "none";
    }

})


let dateNow = new Date();
let footer = document.querySelector(".footer");


let yearSpan = footer.querySelector("span");


yearSpan.textContent = dateNow.getFullYear();
