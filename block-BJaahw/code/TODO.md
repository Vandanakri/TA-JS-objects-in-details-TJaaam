1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

```js
function createUser(name,age) {
  let user = {}
   user.name = name;
   user.age = age;
   return user;
}
```

2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

```js
function createUser(name,age) {
  let user = {}
   user.name = name;
   user.age = age;
   user.sayHello = function() {
     alert (`Welcome ${user.name}`);
   };
   return user;
}
```

3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

```js
let personOne = creatUser("Vandana", 23)
let personTwo = creatUser("Ashwini", 23)
```

4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

```js
let userMethods = {
  sayHello: function () {
     alert (`Welcome ${this.name}`);
  },
};

function createUser(name,age) {
  let user = Object.create(userMethod)
   user.name = name;
   user.age = age;
   return user;
}
```

5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

```js
function createUser(name,age) {
   this.name = name;
   this.age = age;
}
  createUser.prototype = {
sayHello: function () {
     alert (`Welcome ${this.name}`);
  },
  };
```

6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

```js
let personOne = new creatUser("Ruby", 26);
let personTwo = new creatUser("Rinki", 21);
```


7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

```js
personOne.sayHello()
personTwo.sayHello()
```

8. Convert the `createUser` function into `User` class.

```js
class User {
  constructor(name,age) {
   this.name = name;
   this.age = age;
}
}
  
sayHello() {
     alert (`Welcome ${this.name}`);
  }
  };
```

9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

```js
let personOne = new creatUser("Ruby", 26);
let personTwo = new creatUser("Rinki", 21);
```

10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

```js
personOne.sayHello();
personTwo.sayHello();
```

