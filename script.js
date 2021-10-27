"use strict"

let dogs=[]


dogs.push({name:"fluffy", breed: "poodle", age: "2"})
dogs.push({name:"otto", breed: "chihuahua", age: "3"})
dogs.push({name: "alfie", breed: "french bulldog", age:"4"})
dogs.push({name: "cody", breed: "poodle", age: "2"})
dogs.push({name: "roy", breed: "german shepherd", age: "3"})
dogs.push({name: "ruby", breed: "pug", age: "4"})

// 6 dogs - on 300-400 pixel cards (w padding + margins + nice background color
// add img for each dog
// display breed
// add an age property for every dog
// add an 'adopt now' button on each dog

for (let i=0; i<dogs.length; i++){

    let card=document.createElement("div")
    document.body.appendChild(card)
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML= dogs[i].name

    let dogBreed=document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML= dogs[i].breed

}





























































//let colors=["red", "orange", "yellow", "green", "blue", "purple"]

//dogs[i].style.backgroundColor=colors




