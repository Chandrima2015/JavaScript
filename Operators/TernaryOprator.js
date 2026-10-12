let isCITrue = true;

let broswer = isCITrue ? "Chrome" : "Firefox";
console.log(broswer);

//Template Literals 
console.log(`I am using ${broswer} browser`);

//` backticks are used to create template literals. Template literals can contain placeholders, which are indicated by the ${expression} syntax. The expressions inside the placeholders and the text between them get passed to a function.