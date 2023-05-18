// завдання 1
const email = "ogsaf566@gmail.com" ; 
console.log(email.includes("@"));

// завдання 2
const my = "My "
const name = "name "
const is = "is "
const fullName = my + name + is + "Max";
console.log(fullName)

// завдання 3

const userName = "Maksym" ; 
const payment = 500;
const sentence = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
alert(sentence) ;

// завдання 4

const myName = "Max"
const replacedName = myName.replace("M", "@");
console.log(replacedName)


// завдання 5

const firstName = "max ";
const lastName = "terekh" ;

const fullSentence = firstName + lastName ;
console.log(fullSentence.indexOf(" "))

// завдання 6

const balance = "Ваш баланс поповнено на 10000000000000000"
console.log(balance.length)

// завдання 7

const result= 5 + 5 + "5";
console.log(result)

// завдання 8 

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message)




// // завдання 9 

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = deliveryFee + pricePerDroid + orderedQuantity ; 
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
console.log(message)

// завдання 10 

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic.slice(0, 1);
const lastElement = courseTopic.slice(20, courseTopicLength);
console.log(courseTopicLength, firstElement, lastElement);