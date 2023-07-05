// person.js
export default class Person { // Exporting a Person class as the default export
  constructor(name, age) { // Constructor to initialize a new Person
    this.name = name; 
    this.age = age;
  }

  introduce() { // Method to return a string introduction of the person
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

/* Additional Notes

The class keyword creates a new class with the name Person. Inside this class, we have a constructor method and an introduce method.

The constructor Method: This is a special method for creating and initializing an object created with a class. It can take any number of parameters. In this case, it takes two parameters: name and age. Inside the constructor, we set this.name to name and this.age to age. The this keyword refers to the instance of the class. So, when we create a new Person, we can pass in a name and age and these will be set on the Person.

The introduce Method: This is a method we've defined on the class. Any instance of Person can call this method using the dot notation. Inside this method, we return a string that includes the name and age of the Person. We again use the this keyword to refer to the instance of the class.

*/