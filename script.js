class Cars {
    constructor(brand,year,power,color){
        this.brand=brand;
        this.year=year;
        this.power=power;
        this.color=color;
    }
    greet(){
        return `Марка :${this.brand}<br>
         Год выпуска:${this.year}<br>
         Мощность:${this.power}<br>
         Цвет:${this.color}`
    }
}
const audi= new Cars("audi","1998","2000v","красный");
document.write(audi.greet())

class Electrocar extends Cars{
    constructor(brand,year,power,color,volume){
        super(brand,year,power,color)
        this.volume=volume;

    }
    greet(){
        return super.greet()+"<br>"
    }
    promote(){
        return `Покупайте наши электромашины сэконмить ваши деньги и экологию`
    }
}

const tesla=new Electrocar("tesla","2020","2500v","черный","3000vh")
document.write(tesla.greet());
document.write(tesla.promote())