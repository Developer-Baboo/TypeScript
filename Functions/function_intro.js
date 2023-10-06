/* function greet(name: string, id: number) {
    console.log(`Your name is ${name} and your id is : ${id}`);
}

greet("Baboo Kumar Heerani", 21); */
// Using Arrow functions
/* const greet = (name: string, id: number) => console.log(`Your name ${name}  and your id is ${id}`);
greet("Baboo Kumar Herani", 21); */
//Return Type
/* const greet = (name: string, id: number): void => {
    console.log(`Your name ${name}  and your id is ${id}`);
}
    
greet("Baboo Kumar Herani", 21);
 */
/* const greet = (name: string, id: number): string =>  `Your name ${name} and your id is ${id}`;
const greetingMessage: string = greet("Baboo Kumar Herani", 21);
console.log(greetingMessage);
 */
//Check PalinDrome
var Ispalindrome = function (palin) {
    var Mypalin = palin.split("").reverse().join("");
    return Mypalin === palin;
};
console.log(Ispalindrome("123212"));
