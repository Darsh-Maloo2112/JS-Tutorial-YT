const name = "Darsh"

const age = "12"

console.log(`Hello My Name is ${name} and my age is ${age}`);
console.log(name[0]);
const grade = new String ("Eighth-grade")
console.log(grade.__proto__);
console.log(grade.toUpperCase());
console.log(grade.length);
console.log(grade.charAt(2));
console.log(grade.indexOf("E"));
const newGrade = grade.substring(0, 4)
console.log(newGrade);
const thirdInput = grade.slice(-4, 12)
console.log(thirdInput);
const anotherGrade = "   Third    "
console.log(anotherGrade.trim());
const url = "https://google.com/my%20page"
console.log(url.replace('%20', '-'))
console.log(url.includes('google'));
console.log(url.includes('Hello'));
console.log(grade.split("-"));