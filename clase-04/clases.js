class Persona {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    saludar(){
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }
}

class Empleado extends Persona {
    
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
        this.saludar = () => console.log("Soy empleado");
    }
}

const persona1 = new Persona("Nicolas",30);
const persona2 = new Persona("Kevin",23);
persona1.saludar();
const empleado = new Empleado("Sergio",44,3.000);
empleado.saludar();