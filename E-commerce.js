let icon=document.querySelector(".icon");
let ul=document.querySelector("ul")
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData")
    if(ul.className=="showData"){
        document.getElementById("bar").className=""
        
    }else{
        document.getElementById("bar").className=""

    }
    
})
//navbar
let shops=document.getElementById("shops")
let reviews=document.getElementById("reviews")
let blogs=document.getElementById("blogs")
let contacts=document.getElementById("contacts")

shops.addEventListener("click",()=>{
    shops.style.color="rgb(4,219,219)"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4,219,219)"
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4,219,219)"
    shops.style.color="white"
    reviews.style.color="white"
    contacts.style.color="white"
})
contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4,219,219)"
    shops.style.color="white"
    reviews.style.color="white"
    blogs.style.color="white"
    
})

let crd=document.querySelectorAll(".crd");
let itemPage=document.querySelector(".itemPage")
let container=document.querySelector(".container")
let itemImg=document.getElementById("itemImg")
let buyBtn=document.getElementById("buyBtn")
console.log(crd)
crd.forEach(function(curValue){
    curValue.addEventListener("click",function(){
        itemPage.style.display="flex";
        container.style.display="none";
        let imgScr=curValue.firstElementChild.src;
        itemImg.src=imgScr;
    })
})

let buyText=document.querySelector(".buyText")
let buypage=document.querySelector('.buyPage')
let cross=document.querySelector(".cross")
cross.addEventListener('click',()=>{
    buypage.style.display="none"

})
buyBtn.addEventListener("click",function(){
    document.querySelector(".buyPage").style.display="block"
    document.querySelector(".buyText").innerHTML=`
    <h3>Enter Details:</h3>
    <form action="">
    <input type="text" placeholder="Enter your Name" id="name" required><br>
    <input type="text" placeholder="Enter your Number" id="number" required><br>
    <input type="text" placeholder="Enter your Address" id="address" required><br><br>
    <h3>Payment Option:</h3><br>
    <select>
        <option value="Google-Pay">Google Pay</option>
        <option value="Bharat-Pay">Bharat Pay</option>
        <option value="Paytm">Paytm</option>
        <option value="Cash-on-Delivery">Cash</option>
    </select><br>
    <input type="submit" value="Submit" id="submitBtn">
    </form>

    
   
    `
})

let button=document.getElementsByTagName("button")
button.addEventListener("click",function(){
    let name=document.getElementById("name")
    if(name.value=="" && number.value==""&&address.value==""){
        alert("please enter details")
    }
    else{
        alert("your details is recorded")
        document.querySelector(".buyPage").style.display="none"
    }
})
