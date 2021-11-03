"use strict"

let dogs=[]  // contain dog objects (instances of the class Dog)

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

function setupDogs(){
    dogs.push(new Dog("Fluffy","Poodle","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/330px-Full_attention_%288067543690%29.jpg"))
    dogs.push(new Dog("Otto","Chihuahua","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chihuahua1_bvdb.jpg/330px-Chihuahua1_bvdb.jpg"))
    dogs.push(new Dog("Alfie","French Bulldog","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2008-07-28_Dog_at_Frolick_Field.jpg/330px-2008-07-28_Dog_at_Frolick_Field.jpg"))
    dogs.push(new Dog("Cody","Golden retriever","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYPoEJb8nNPoIhg-GsxotOs8xaGEdqcbPSQ&usqp=CAU"))
    dogs.push(new Dog("Roy","German shepherd","https://www.akc.org/wp-content/uploads/2016/06/German-Shepherd-Dog-laying-down-in-the-backyard.jpeg"))

}

function saveDog(e){
    //use getElementById to read the VALUE (or text) from the input elements
    //Instance a new Dog from these values - and push (that) dog into your dogs array
    let dogName=document.getElementById("dogName").value
    let age=document.getElementById("age").value
    let breed=document.getElementById("breed").value

    //new class
    dogs.push(new Dog(dogName,breed,"",age))

     //dogs.push(new Dog(document.getElementById("dogName",document.getElementById("breed"),"",document.getElementById("age")))

     // Save ('persist') the array of dogs to localStorage using Serialization (JSON.stringify)
     //localStorage.setItem("dogs", JSON.stringify(dogs));
     saveDogs()
     showDogs()
     
     e.preventDefault()
     return false

}

function saveDogs(){
    localStorage.setItem("dogs", JSON.stringify(dogs));
}

function showDogs(){

    let dogsPanel=document.getElementById("dogs")
    dogsPanel.innerHTML=""

    for(let i=0;i<dogs.length;i++){

        let dog=dogs[i]
        
        let card = document.createElement("div")
        card.classList.add("card")
        dogsPanel.appendChild(card)

        let dogName=document.createElement("h1")
        card.appendChild(dogName)
        dogName.innerHTML=dog.name

        let image = document.createElement("img")
        image.src=dog.picture
        image.classList.add("photo")
        card.appendChild(image)

        let button=document.createElement("button")
        button.innerHTML="Like"
        card.appendChild(button)
        
        let likesH2element=document.createElement("h2")
        
        likesH2element.innerHTML=0
        card.appendChild(likesH2element)
        
        button.addEventListener("click", ()=>{dog.like(likesH2element)})
       
        let del=document.createElement("button")
        del.innerHTML = "delete"
        card.appendChild(del)
        del.classList.add("deleteButton")
        del.addEventListener("click", ()=>{deleteDog(i);})
    }
}

function deleteDog(i) {
    dogs.splice(i,1)
    saveDogs()
    showDogs()
}

class Dog{
    //properties
    name
    breed
    picture
    likes
    constructor(name,breed,picture,age){ //Makes an instance of the class Dog
        //these are properties
        this.name=name
        this.breed=breed
        this.picture=picture
        this.likes=0        
        this.age=age
    }
    //this is a "method"
    like(h2){
        this.likes+=1        
        h2.innerHTML=this.likes
    }
}

function loadDogs(){
    dogs=JSON.parse(localStorage.getItem("dogs"))
}


loadDogs()

//setupDogs()

showDogs()