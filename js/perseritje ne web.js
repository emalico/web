//krijoni nje objekt me disa te dhena me emer dhe moshe dhe bej nje metode pershendetese
function person(emer,mosha){
    this.emer=emri;
    this.mosha=this.mosha;

    this.mesazh=function(){
        return 'pershendetje, une jam $(this.emer)'}
}
const person1=new person("tnoi", 16);
console.log(person1.mesazh());