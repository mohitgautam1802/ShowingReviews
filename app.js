const reviews = [
    {
        id: 1,
        name: "Mohit Krishan Gautam",
        job: "web developer",
        img: "img/image1.jpg",
        text: "my request from vs code makers that please allow lorem ipsum in js file, I don't want to write this but still I am helpless because this project is supposed to be done"
        
    },
    {
        id: 2,
        name: "Shyaam Lal",
        job: "HR Recruiter",
        img: "img/image2.jpg",
        text: "70 days of development challenge is gonna be awesomme my request from vs code makers that please allow lorem ipsum in js file, I don't want to write this but still I am helpless because this project is supposed to be done"
        
    },
    {
        id: 3,
        name: "Ban Bihari Lal",
        job: "Graphic designer",
        img: "img/image3.jpg",
        text: "MOney is not everything make sure u earn a lot before saying such nonesense my request from vs code makers that please allow lorem ipsum in js file, I don't want to write this but still I am helpless because this project is supposed to be done"
        
    },
    {
        id: 4,
        name: "Brock Lesner",
        job: "MArketing Manager",
        img: "img/image4.jpg",
        text: "Life is tooo short to hang out with peaple who aren't resourceful my request from vs code makers that please allow lorem ipsum in js file, I don't want to write this but still I am helpless because this project is supposed to be done"
        
    }

]
const img = document.getElementById("person-img")
const author  = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item
let currentItem = 0

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})

//show person based on item

function showPerson() {
    const item = reviews[currentItem]
    // const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name

    job.textContent = item.job
    info.textContent = item.text

}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > reviews.length-1){
        currentItem = 0
    }
    showPerson()
})
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem<0){
        currentItem = reviews.length - 1
    }
    showPerson()
})

//show random person

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson()
})
