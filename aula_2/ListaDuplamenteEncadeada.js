class No{
    constructor(valor){
        this.dado = valor;
        this.proximo = undefined;
        this.anterior = undefined;
    }
    get(){
        if(this.anterior == undefined && this.proximo == undefined){
            return "\tNó: { dado: "+this.dado+"}";
        }
        else if(this.anterior != undefined && this.proximo == undefined) {
            return "\tNó: { anterior: "+this.anterior.dado+", dado: "+this.dado+" }";
        }
        else if(this.anterior == undefined && this.proximo != undefined){
            return "\tNó: { dado: "+this.dado+", próximo: "+this.proximo.dado+", }";    
        }
        else {
            return "\tNó: { anterior: "+this.anterior.dado+", dado: "+this.dado+", próximo: "+this.proximo.dado+", }";
        }
    }
}

class Lista{
    constructor(){
        this.inicial = undefined;
        this.final = undefined; 
    }

    append(valor){
        if (this.inicial == undefined && this.final == undefined){
            this.inicial = this.final = new No(valor);
        }
        else {
            var no = new No(valor);
            this.final.proximo = no;
            no.anterior = this.final
            this.final = this.final.proximo
        }
    }
    addFirst(valor){
        var no = new No(valor);
        no.proximo = this.inicial;
        this.inicial = no;

        var proximo = this.inicial.proximo;
        proximo.anterior = no;
    }
    addBefore(valor){
        var no = new No(valor)
        no.proximo = this.final;
        this.final.anterior = no;

    }
    remove(){
        const anterior = this.final;
        this.final.anterior.proximo = undefined;
        return anterior.get(); 
    }
}


var lista = new Lista();

console.log("Append:")
for (var i = 0; i < 10; i++){
    var num = Math.floor(Math.random() * 100);
    console.log(num);
    lista.append(num);
}

var iterador = lista.inicial;
console.log(" Lista {");
while( iterador != undefined){
    console.log(iterador.get());
    iterador = iterador.proximo;
}
console.log("}");


console.log("AddFirst:")
var num = Math.floor(Math.random() * 100);
console.log(num);
lista.addFirst(num);

var iterador = lista.inicial;
console.log(" Lista {");
while( iterador != undefined){
    console.log(iterador.get());
    iterador = iterador.proximo;
}
console.log("}");


console.log("AddBefore:");
var num = Math.floor(Math.random() * 100);
console.log(num);
lista.addBefore(num);

var iterador = lista.inicial;
console.log(" Lista {");
while( iterador != undefined){
    console.log(iterador.get());
    iterador = iterador.proximo;
}
console.log("}");


console.log("Remove:");
console.log(lista.remove());

var iterador = lista.inicial;
console.log(" Lista {");
while( iterador != undefined){
    console.log(iterador.get());
    iterador = iterador.proximo;
}
console.log("}");


