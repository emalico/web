0
const fruta = ["Molle", "Dardhe", "Banane", "Portokall"];
const numra = [10, 20, 30, 40, 50];
const miksuar = ["Shalqi", 25, true, null, { emri: "Qershi", ngjyra: "e kuqe" }];

console.log(fruta[1/*per zgjdhjen e njeres nga frutat*/]);
console.log(numra);
console.log(miksuar);

//per ti zgjedhur te gjitha
for(i=0;i<=3/*sepse indeksi eshte n-1*/;i++){
    console.log(fruta[i]);
}
for(i=0;i<fruta.length/*sepse nuk e dime sa vlera kemi*/;i++){
    console.log(fruta[i]);
}
//krijo nje array me 5 qytete dhe afisho te 3
const qytete = ["elbasan", "tirane", "durres", "athine", "selanik"];
console.log(qytete[2]);
for(i=0;i<=2;i++){
    console.log(qytete[i]);
}

//arraw qe afishon nr nga 1 -10
const nr=[1,2,3,4,5,6,7,8,9,10];
console.log(nr[0],nr[9]);
for( i=0; i<nr.length; i++){
    console.log(nr[j]);
}

let studentet = ["Arben", "Diana", "Elona", "Gentian", "Florian"];

studentet.push("Klea");  
console.log(studentet);

console.log(studentet.slice(0, 3));  

console.log(studentet.shift()); 
console.log(studentet);

studentet.unshift("Bledi");  
console.log(studentet);
 
//mer nje fjali e cila eshtshte string pastaj ruaje ne nje array dhe afisho vleren e trete

let fjali = "Kjo eshte ora e web-it dhe nsr kemi teste ne mat dhe ne so";
let array = fjali.split(" "); 
console.log(array[2]);

//metoda map()
//filter()
//reduce()
