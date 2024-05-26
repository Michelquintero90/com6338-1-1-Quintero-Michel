function greet() {
 let name = prompt("What is your name?");
 alert ("Hello " + name);

 let age = prompt("How old are you?");
 parseInt (age);

 let currentYear = new Date().getFullYear();

 if (window.confirm("Have you celebrated your birthday yet this year?")) {
    let birthYear= currentYear - age;
    alert ("You born in " + birthYear); 
 } else {
    let birthYear= currentYear - age - 1;
    alert ("You born in " + birthYear);

 }

}
