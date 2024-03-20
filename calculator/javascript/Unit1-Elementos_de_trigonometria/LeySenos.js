try {
    require('mathjs');
    var Math = require('mathjs');
} catch (ignored) {}

const input = (I) => {
    try{
        return require('prompt-sync')()(I);
    } catch(ignored){
        sleep(1000);
        return prompt(I);
    }
}

console.clear();

const printTriangle = (size, a, b, hip) => {
    let triangleBlankSpace = " ", triangleEnd = "===";
    console.log('  '.repeat(a.length) + `|\\`);
    for (let triangleIndex = 0; triangleIndex <= size; triangleIndex++ && (triangleBlankSpace += " ") && (triangleEnd += "="))
        if (triangleIndex !== 0)
            console.log((triangleIndex === size / 2 ? a + '  '.repeat(a.length / 2) : '  '.repeat(a.length)) + `|${triangleBlankSpace}\\   ${triangleIndex === size / 2 ? `${hip}` : ''}`);
    console.log('  '.repeat(a.length) + `${triangleEnd}\n${' '.repeat(triangleBlankSpace.length / 2)}   ${b}`);
}

function resolve() {
    console.log('\n');
    console.log('0: Hipotenusa');
    console.log('1: Cateto desconocido');
    console.log('2: Teorema de Pitagoras');
    console.log('\n');

    const type = input('tipo => ');
    console.log('\n');

    try {
        if (type === '0') {
            const cA = input('b (Cateto Adyacente) => ');
            const cO = input('a (Cateto Opuesto) => ');

            console.log('\n');
            printTriangle(15, cA, cO, Math.sqrt((cA * cA) + (cO * cO)));
            console.log('\n');

            console.log(`h² = √ ${cA}² + ${cO}²`);
            console.log(`h² = √ ${cA * cA} + ${cO * cO}`);
            console.log(`h² = √ ${(cA * cA) + (cO * cO)}`);
            console.log(`h = ${Math.sqrt((cA * cA) + (cO * cO))}`);
        }
        else if (type === '1') {
            const cX = input('Cateto Conocido => ');
            const hip = input('h => ');
            const typeC = input('Tipo de Cateto Conocido [ca/co] => ');

            console.log('\n');
            printTriangle(15, typeC === 'ca' ? Math.sqrt((hip * hip) - (cX * cX)) : cX, typeC === 'co' ? Math.sqrt((hip * hip) - (cX * cX)) : cX, hip);
            console.log('\n');

            console.log(`x² = √ ${hip}² - ${cX}²`);
            console.log(`x² = √ ${hip * hip} - ${cX * cX}`);
            console.log(`x² = √ ${(hip * hip) - (cX * cX)}`);
            console.log(`x = ${Math.sqrt((hip * hip) - (cX * cX))}`);
        }
        else if (type === '2') {
            printTriangle(15, 'a', 'b', 'hip');

            console.log('  h² = a² + b²')
            console.log('\n\n');
            console.log('  h = √ a² + b²');
            console.log('  a = √ h² - b²');
            console.log('  b = √ h² - a²');
        }
    } catch (error) {
        console.log(`Exception: ${error}`);
    } finally {
        console.log('\n');
        if (input('Other? (Boolean expression) => ') === 'true')
            resolve();
    }
}

resolve();
