/*objeketet ne js
objekt- entitet(pershkruan), ka te dhena.
te dhenat jane atribute.
entiteti ka dhe sjellje(metoda/funksion)

const makina=kllapagjarperushe
marka="bmv"
modeli="m5"
pasagjeret=5;
vitProdhimi=2018,
const ndizet: function () {
    console.log("Makina u ndez");
}

te dhenat ndahen ne key dhe value qe formojne property

const objekti= new object(..)-qe mos perdorim kllapat gjarperushe


const student ={
    emer: "Lionel",
    shkolla: "hemrnan gmeinner",
    mesatarja: 7.8
};
*/

function Makina(brand,model,vitProdhim){
    Makina.brand=brand; ///mund te vendosim ne vend te Makina vendosim this
    Makina.model=model;
    Makina.vitProdhim=vitProdhim;   //funksion i posatshem per krijimin e opjekteve quhet konstruktor
}
let Makina1=new Makina("BMW", "M5", 2018); //new krijon objekt
////////////////////////////////////////////////////////
//for in perdoret tek objektet
let text ="";
for(let x in Makina1){
    text+=Makina1[x];
}
////////////////////////////////////////////////////
let Makina2=new Makina("Audi" ,"rs7", 2020);
Makina1.vitProdhim=2019;//nese duam ta ndryshojme



//u1krijoni nje konstruktor person me emer mbiemer moshe
function person(emer,mbiemer,moshe){
    this.emer=emer;
    this.mbiemer=mbiemer;
    this.moshe=moshe;
    this.shkonNeShtepi=function () {
        console.log("personi ne shtepi");
    }
}
let person1=new person1("Ema" , "Lico" ,16);

let text1=" ";//nuk duhet te jene njesoj emrat
for(let x in person1){
    text1+=person1[x];
}


//u2krijoni nje konstruktor telefon me brand model cmim
function telefon(brand,cmim,model){
    this.brand=brand;
    this.cmim=cmim;
    this.model=model;
    this.hap=function () { ///per ti dhene funksion
        console.log("telefoni hapet");
    }
}
let telefon1=new person1("samsung" , "200£" ,"S27");


let personi={
    emri: "ema",
    mbiemeri: "lico",
    mosha: 34,
    prezantohu: function(){
        return"Pershendetje, une jam ${this.emri} $ {this.mbiemeri} dhe jam ${this.mosha}";
    }
}
console.log(personi.prezantohu);

function kurs(emer,cmimi,antaret){
    this.emer=emer;
    this.antaret=antaret;
    this.cmim=cmim;

let kurs=new kursijs("ema" , 4 ,40);
}
let kursijs={
    emer: "ema",
    antare: 4,
    cmimi: 40,
 info : function(){
    return"Pershendetje, une jam ${this.emer} $ {this.antare} dhe kushton ${this.cmimi}";
}
}


function banka(emer,mbiemer,interesi){
    this.emer=emer;
    this.mbiemeri=mbiemeri;
    this.interesi=interesi;

let kurs=new bankashqiperise("ema" , "lico" ,4);
}
let bankashqiperise={
    emer: "ema",
    mbiemer: "lico",
    interesi: 4,
 llogariteinteresin : function(){
    return"Pershendetje, ${this.emer} $ {this.mbiemer} dhe interesi ${this.interesi}";
}
}