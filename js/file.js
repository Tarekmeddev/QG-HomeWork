// change Mode func
let btn = document.querySelector(".Mode");
let myBody = document.body;
console.log(btn);
btn.addEventListener("click",()=>{
    myBody.classList.toggle("dark")
})
// list of qoutes
let qouteList = {
    qout:["It’s not destroying. It’s making something new","When will the lesson be learned! You cannot reason with a tiger when your head is in its mouth!","Don’t let anyone ever make you feel like you don’t deserve what you want.","Life is not the amount of breaths you take. It’s the moments that take your breath away","At some point you’ve got to decide for yourself who you gonna be. Can’t let nobody make that decision for you","Don’t let anyone ever make you feel like you don’t deserve what you want.","Life is not the amount of breaths you take. It’s the moments that take your breath away","At some point you’ve got to decide for yourself who you gonna be. Can’t let nobody make that decision for you"],
    name:["Moonlight","Hitch","The Lion King","Rudy","Darkest Hour","The Lion King","Rudy","Darkest Hour"],
    stat:["none","none","none","none","none"]
}
// setup variabls
let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let favtBtn = document.querySelector(".fav");
let copieBtn = document.querySelector(".copie");
let qouteContainer = document.querySelector("h3");
let authName = document.querySelector(".auth");
let favStar = document.querySelector("i.fa-star");
let count = 0;
console.log(qouteList.qout[3]);
 qouteContainer.textContent = qouteList.qout[count];
 authName.textContent = qouteList.name[count]
nextBtn.addEventListener("click",()=>{
    favtBtn.classList.remove("active")
    if(count < qouteList.qout.length){
        qouteContainer.textContent = qouteList.qout[count];
        authName.textContent = qouteList.name[count]
        count++
        
    }else{
       count = 0
    }
    copieBtn.addEventListener("click",()=>{
        copyContent()
        setTimeout(()=>{
            copieBtn.classList.remove("animet")
        },600)
        copieBtn.classList.add("animet")
      })
})
preBtn.addEventListener("click",()=>{
    favtBtn.classList.remove("active")
    if(count < qouteList.qout.length && count >= 0 ){
        qouteContainer.textContent = qouteList.qout[count];
        authName.textContent = qouteList.name[count]
        count--

    }else {
        count = qouteList.qout.length - 1
    }
    copieBtn.addEventListener("click",()=>{
        copyContent()
        setTimeout(()=>{
            copieBtn.classList.remove("animet")
        },600)
        copieBtn.classList.add("animet")
      })
})
// favorite List funcs
let closeBtn = document.querySelector(".closeBtn");
let showBtn = document.querySelector(".showFav");
let FavContainer = document.querySelector(".favBx");
let favMsg = document.querySelector("p.test");
// creat a favBx func 
function CreateFavBx(){
    let myFavBx = document.createElement("div");
    myFavBx.className = "qFav";
    let myFavP = document.createElement("p");
    let qContent = document.createTextNode(`${qouteContainer.textContent}`)
    let qAuth = document.createTextNode(`${authName.textContent}`)
    myFavP.appendChild(qContent);
    let myFavSpan = document.createElement("span");
    myFavSpan.appendChild(qAuth);
    let removeFav = document.createElement("button");
    let removeIcon = document.createElement("i");
    removeFav.className = "reBtn"
    removeIcon.className = "fa-solid fa-trash";
    removeFav.appendChild(removeIcon)
    myFavBx.appendChild(myFavP)
    myFavBx.appendChild(removeFav)
    myFavP.appendChild(myFavSpan)
    FavContainer.appendChild(myFavBx)
    
    removeFav.addEventListener("click",()=>{
        myFavBx.remove()
    favtBtn.classList.remove("active")
console.log(FavContainer.childElementCount) ;

        if(FavContainer.childElementCount=== 2){
            favMsg.innerHTML= "nothing ...";

        }
    })
}
// close fav container func
closeBtn.addEventListener("click",()=>{
    FavContainer.classList.remove("active")
})
// show fav container func
showBtn.addEventListener("click",()=>{
    FavContainer.classList.add("active")
})
// creat a favbX onclick 
let addMsg = document.querySelector(".addmsg")

favtBtn.addEventListener("click",()=>{
    favMsg.innerHTML= "";
    favtBtn.classList.add("active")
    addMsg.classList.add("active");
    setTimeout(()=>{
        addMsg.classList.remove("active");
    },1500)
    CreateFavBx()
})

// copy to clipboard 
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText( qouteContainer.textContent);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
  let copyMsg = document.querySelector(".copymsg")
copieBtn.addEventListener("click",()=>{
    copyContent()
    copieBtn.classList.add("animet");
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copieBtn.classList.remove("animet");
    copyMsg.classList.remove("active");
    },1500)
  })