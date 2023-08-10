const animalData = require('./animal-data.json');

class Animal {
 constructor (name,species,color,hunger = 50){
  this.name = name
  this.species = species
  this.color = color
  this.hunger = hunger
 }
  greet(greeting = 'Hi'){
    console.log(`${greeting} my name is ${this.name} and I am a ${this.species}`)
  }
  feed(food = 'food'){
    this.hunger -= 20
    console.log(`Yum, I love ${food}`)
  }
}

class Cat extends Animal {
  constructor (name,color,hunger = 50){
  super(name,'cat',color,hunger)
  this.food = 'fish'
}
greet(){
  super.greet('Meow')
}
feed(){
  super.feed(this.food)
}
}

class Dog extends Animal {
  constructor(name,color,hunger = 50){
    super(name,'dog',color,hunger)
    this.food = 'kibble'
    
  }
  greet(){
    super.greet('Woof')
  }
  feed(){
    super.feed(this.food)
  }
}



class AnimalShelter {
  constructor (){
    this.animals = []
  
  }
  addAnimal (newAnimal){
    this.animals.push(newAnimal)
  }
  adopt (adopted){
    const adoptedAni = this.animals.findIndex(ani => ani === adopted)
    this.animals.splice(adoptedAni,1)
  }
  getAnimalbySpecies (species){
    return this.animals.filter(ani => ani.species === species)
    /* also this.animals.filter(function(ani) {
      return ani.species === species
    })*/
  }
}

const shelter = new AnimalShelter()

for (const ani of animalData) {
  let animal
  if (ani.hunger){
    ani.hunger
  } else {
    ani.hunger = 50
  }
  if (ani.species === 'dog'){
    animal = new Dog(ani.name,ani.color,ani.hunger)
  } else if (ani.species === 'cat'){
    animal = new Dog(ani.name,ani.color,ani.hunger)
  } else {
  animal = new Animal(ani.name,ani.species,ani.color,ani.hunger)
  }
shelter.addAnimal(animal)
}
// console.log(shelter.animals)

//  const annie = new Dog('Annie','mixed')
//  console.log(annie)


for (const animal of shelter.animals){
  animal.greet()
  animal.feed()
}