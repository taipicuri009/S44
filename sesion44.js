//Ejemplo pila
console.log("Ejemplo pila")
class Strack{
    constructor(){
        this.stack = [];
    }
    //Definir metodo
    push (element){
    this.stack.push(element);
    return this.stack
    }   
    //se define el elmento para quitar
    pop(){
        return this.stack.pop();
    }
    //Retonar el ultimo valor  ingresado a la pila ,sin sacarlo de esta 
    peek(){
        return this.stack[this.stack.length-1]
    }
    //Retorna el numero de elementos que contiene la pila
    size(){
        return this.stack.length;
    }
    //Muestra el contenido de la pila
    print(){
        console.log(this.stack);
    }
}
const stack =new Strack();
console.log(stack.size()); //0
console.log(stack.push('Enero'));//['enero']
console.log(stack.push('Febrero'));//['enero,febrero']
console.log(stack.push('Marzo'));
console.log(stack.push('Abril'));
console.log(stack.push('Mayo'));
console.log(stack.push('Junio'));
console.log(stack.push('Julio'));
console.log(stack.push('Agosto'));
console.log(stack.push('Setiembre'));
console.log(stack.push('Octubre'));
console.log(stack.push('Noviembre'));
console.log(stack.push('Diciembre'));
console.log(stack.size());
stack.print(); //['enero,febrero']
console.log(stack.peek()); //febrero
console.log(stack.pop());
console.log(stack.peek());

//Ejemplo de Cola
console.log("Ejemplo de cola");
class Queue{ 
    //Se define constructor
    constructor(){
        this.queue = [];

    }
    //Se define metodo para agregar elementos a la cola
    enqueue(element){
        this.queue.push(element);
        return this.queue
    }
    //Se define metodo para quitar elementos a la cola
    dequeue(){
        return this.queue.shift();
    }
    //Se define el metodo para ver el primer elemento de la cola
    peek(){
        return this.queue[0];
    }
    //Se define metodo para ver la cantidad en la cola
    size(){
        return this.queue.length; 
    }
    //cola vacia
    isEmpty(){
        return this.queue.length === 0;
    }
    //definir metodos de elementos en la cola
    print(){
        return this.queue;
    }
}
const queue = new Queue();
console.log(queue.size());
console.log(queue.enqueue('Lunes'));
console.log(queue.enqueue('Martes'));
console.log(queue.enqueue('Miercoles'));
console.log(queue.enqueue('Jueves'));
console.log(queue.enqueue('Viernes'));
console.log(queue.enqueue('Sábado'));
console.log(queue.enqueue('Domingo'));
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.print());

//Ejemplo de matrices
console.log("Ejemplo de Matrices");
let ejemplo = ["Gatito", "Conejito" , 150, 9, ""];
console.log(ejemplo[1]); // "sanchez"
console.log(ejemplo.length);// 5
ejemplo.push("otro elemento");
console.log(ejemplo);
ejemplo.pop();
console.log(ejemplo);

//Ejemplo de Arboles
console.log("ejemplo de Arboles")
class Arbolnodo{
    //Se deifine el constructor
    constructor(node){
        this.node = node;
        this.descendientes =[];
    }
}
//se crean varios elementos
const a = new Arbolnodo(1000000)
const b = new Arbolnodo(9000)
const c = new Arbolnodo(500)
const d = new Arbolnodo(250)
const e = new Arbolnodo(100)

a.descendientes.push(b);
b.descendientes.push(c,d,e);
console.log(a);
console.log(b);