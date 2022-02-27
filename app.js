class Restaraunt{
    constructor(name,type,served){
        this.name=name;
        this.type=type;
        this.served=0;
    }
    greet() {
       return `Наш ресторан ${this.name} и кухня ${this.type}`
    }
   
    openClosed(){
        let current = new Date();
 let hours=current.getHours();
 if(hours>9&&hours<22){
     return `Наш ресторан открыт <br>`
 }else{
     `наш ресторан закрыт <br>`
 }
 
    }
 serve(){
    return this.served++;
 }   
 setServed(numberOfServed){
     this.served += numberOfServed;
 }
 
 showTotalServed(){
     document.write(`Total served: ${this.served}<br>`);
 }
   
 }
 
 
 const china=new Restaraunt("China-Town","китайская ")
 document.write(china.greet()+"<br>")
 document.write(china.openClosed())
 console.log(china.serve())
 china.showTotalServed();
 china.setServed(5);
 china.showTotalServed();