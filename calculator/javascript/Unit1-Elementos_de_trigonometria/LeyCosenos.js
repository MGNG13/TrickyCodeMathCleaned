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

function resolveArgs(typeFormule, xA, xB, xC, senA, senB, senR) {
    let operationResult = '';
    if (typeFormule == 0) {
        operationResult += `c² = ${xA}² + ${xB}² - 2(${xA})(${xB})·Cos(${senR}°)`;
        operationResult += '\n';
        operationResult += `c² = ${(xA * xA)} + ${(xB * xB)} - ${(2 * xA) * xB}(${Math.cos(senR * Math.pi / 180)}°)`;
        operationResult += '\n';
        const result = ((xA * xA) + (xB * xB)) - (((2 * xA) * xB) * Math.cos(senR * Math.pi / 180));
        operationResult += `c² = ${result}`;
        operationResult += '\n';
        operationResult += `c = ${Math.sqrt(result)}`;
    } else if (typeFormule == 1) {
        operationResult += `a² = ${xC}² + ${xB}² - 2(${xB})(${xC})·Cos(${senA}°)`;
        operationResult += '\n';
        operationResult += `a² = ${(xC * xC)} + ${(xB * xB)} - ${(2 * xB) * xC}(${Math.cos(senA * Math.pi / 180)}°)`;
        operationResult += '\n';
        const result = ((xC * xC) + (xB * xB)) - (((2 * xB) * xC) * Math.cos(senA * Math.pi / 180));
        operationResult += `a² = ${result}`;
        operationResult += '\n';
        operationResult += `a = ${Math.sqrt(result)}`;
    } else if (typeFormule == 2) {
        operationResult += `b² = ${xA}² + ${xC}² - 2(${xA})(${xC})·Cos(${senB}°)`;
        operationResult += '\n';
        operationResult += `b² = ${(xA * xA)} + ${(xC * xC)} - ${(2 * xA) * xC}(${Math.cos(senB * Math.pi / 180)}°)`;
        operationResult += '\n';
        const result = ((xA * xA) + (xC * xC)) - (((2 * xA) * xC) * Math.cos(senB * Math.pi / 180));
        operationResult += `b² = ${result}`;
        operationResult += '\n';
        operationResult += `b = ${Math.sqrt(result)}`;
    }
    return operationResult;
}

function resolve(...args) {
    const recycledArgs = args.length > 0 ? args[0] : args;

    const xA = recycledArgs.length > 0 ? recycledArgs[0] : input('xA => ');
    const xB = recycledArgs.length > 0 ? recycledArgs[1] : input('xB => ');
    const xC = recycledArgs.length > 0 ? recycledArgs[2] : input('xC => ');

    const senA = recycledArgs.length > 0 ? recycledArgs[3] : input('sen A => ');
    const senB = recycledArgs.length > 0 ? recycledArgs[4] : input('sen B => ');
    const senR = recycledArgs.length > 0 ? recycledArgs[5] : input('sen R => ');

    console.log('\n');
    console.log('0: FORMULAS LADOS');
    console.log('1: FORMULAS LADOS (INGRESAR DATOS)');
    console.log('\n');

    const type = input('tipo => ');
    console.log('\n');

    try {
        if (type == 0 || type == 1) {
            let indexLinked = ['', '', ''];

            if (type == 1) {
                indexLinked[0] = '0: ';
                indexLinked[1] = '1: ';
                indexLinked[2] = '2: ';
            }

            console.log(`${indexLinked[0]} c² = a² + b² - 2ab·CosR`);
            console.log(`${indexLinked[1]} a² = c² + b² - 2bc·CosA`);
            console.log(`${indexLinked[2]} b² = a² + c² - 2ac·CosB`);

            if (type == 1)
                console.log(`\n${resolveArgs(input('tipo => '), xA, xB, xC, senA, senB, senR)}\n`);
        }
    } catch (error) {
        console.log('Exception: ' + error);
    } finally {
        if (input('Other? (Boolean expression) => ') === 'true')
            resolve(input('Same args? => ') === 'true' ? [xA, xB, xC, senA, senB, senR] : []);
    }
}

resolve();
