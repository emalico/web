//metodat length at charat padstart padend 
//char
let text = "Ema";
let letter = text.charAt(0);

let text4 = "Ema is a girl";
let result = text.endsWith("girl");

let text2 = "bro";
let length = text.length;

let text1 = "2";
let padded = text.padStart(6,"0");

let text11 = "15";
let padded111 = text.padEnd(6,"0");

let text44 = "no comment!";
let result44 = text.slice(0, 5);

let t4ext = "Hello i am ema.";
text.startsWith("Hello");

let t8ext = "Hello World!";
let re8sult = text.toString();

let text444 = "emaaaaa!";
let result4444 = text.toUpperCase();

let tex9t = "i am not here!";
let resul8t = text.toLowerCase();

let tex4t = "emma";
let character = text.at(0);

let mehapsira="       hello        ";
let pahapsira= mehapsira.trim();

let texxxt="a,b,c,d";
let texxxt2=texxxt.split("," );

//meer nje nr dhe kteìhen ne nje code 6 shiferoror dhe i shton code-
const numri=6;
const code="code-"+ String(numri).padStart(6,0);
console.log(code);


///krijo nje funksion me metoda me te cilen nese nje url eshte e sakte
function urlesakte(url){
}
if(url.startsWith()=="https://"&&url.endsWith()==".com"){
    console.log(urlsakte);
}
else{
    console.log(urlgabim);
}

//do ta formatojme do heqim hapsiren boshe dhe do bejme shkronjat kapitale
function Format(emri){
   let emri=trim().toUpperCase().split(" ");
   let rezultat = emri[0].concat("_", emri[1]);
   return rezultat;
}

//merr nje fjale dhe merr 4 karakteret e para dhe i