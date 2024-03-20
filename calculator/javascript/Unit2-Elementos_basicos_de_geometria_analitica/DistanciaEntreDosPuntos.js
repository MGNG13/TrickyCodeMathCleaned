try {
    require('mathjs');
    var Math = require('mathjs');
} catch (ignored) {}

const input = (I) => {
    try{
        return require('prompt-sync')()(I);
    } catch(ignored){
        return prompt(I);
    }
}

console.clear();

function resolveDist() {
    console.log("\n");
    const x2 = input("Ingresa X2 => ");
    const x1 = input("Ingresa X1 => ");
    const y2 = input("Ingresa Y2 => ");
    const y1 = input("Ingresa Y1 => ");
    console.log("");
    console.log(`√(${x2}-${x1 < 0 ? '(' + x1 + ')' : x1})² + (${y2}-${y1 < 0 ? '(' + y1 + ')' : y1})²`);
    console.log(`√(${x2 - (x1 < 0 ? (x1) : x1)}² + ${y2 - (y1 < 0 ? (y1) : y1)}²)`);
    console.log(`√${Math.pow(x2 - (x1 < 0 ? (x1) : x1), 2)} + ${Math.pow(y2 - (y1 < 0 ? (y1) : y1), 2)}`);
    const result = Math.sqrt(Math.pow(x2 - (x1 < 0 ? (x1) : x1), 2) + Math.pow(y2 - (y1 < 0 ? (y1) : y1), 2));
    console.log(`√${Math.pow(x2 - (x1 < 0 ? (x1) : x1), 2) + Math.pow(y2 - (y1 < 0 ? (y1) : y1), 2)} ${(result + '').split(".").length - 1 >= 1 ? "≈" : "="} ${result}`);
    console.log("");
    return result;
}

function getInfo() {
    console.log("0: Procedimiento");
    console.log("1: Perimetro");
    console.log("2: Colineales (Misma linea recta)");
    console.log("3: Obtener ABC")

    console.log("\n");
    const type = input("Elige el procedimiento => ");

    if (type == 0)
        resolveDist();
    else if (type == 1 || type == 2) {
        let valores = [];
        const maximo = input("Ingresa la cantidad de valores => ");

        for (let i = 0; i < maximo; i++)
            valores.push(resolveDist());

        if (type == 1) {
            console.log(`P = ${valores.join(" + ")}`);
            let valorFinal = 0;
            for (index in valores)
                valorFinal += valores[index];
            console.log(`P = ${valorFinal}`);
        }
        else if (type == 2) {
            let valorFinal = 0;
            valores = valores.sort((a, b) => { return a - b; });
            for (index in valores) {
                if (index == valores.length - 1)
                    break;
                valorFinal += valores[index];
            }
            console.log("Al parecer " + (parseFloat(valorFinal).toPrecision(4 + ((valorFinal.toFixed() + '').split('').length > 1 ? valorFinal.toFixed() + ''.split('').length - 1 : 0)) == parseFloat(valores[valores.length - 1]).toPrecision(4) ? "es colineal." : "no es colineal."));
            console.log("\n" + valores.join(" ~ "));
        }
    }
    else if (type == 3) {
        console.log("\n~ Ejemplo: -7 30\n");
        let A = input("Escribe A => ");
        let B = input("Escribe B => ");
        let C = input("Escribe C => ");
        A = A.split(" ");
        B = B.split(" ");
        C = C.split(" ");

        console.log("\n");
        console.log(`AB= [${B[0]}, ${A[0]}] [${B[1]}, ${A[1]}]`);
        console.log(`AC= [${C[0]}, ${A[0]}] [${C[1]}, ${A[1]}]`);
        console.log(`BC= [${C[0]}, ${B[0]}] [${C[1]}, ${B[1]}]`);
    }

    console.log("\n");

    if (input("Other? (Boolean expression) => ") == "true") {
        console.log("~~~~~~~~~~~~~~~~ OTRO ~~~~~~~~~~~~~~~~");
        getInfo();
    }
}

getInfo();
