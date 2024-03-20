import os
import math as Math


def clear(): return os.system('clear')


clear()


def resolveArgs(typeFormule, xA, xB, xC, senA, senB, senR):
    operationResult = '\n'
    if (typeFormule == 0):
        operationResult += f'c² = {xA}² + {xB}² - 2({xA})({xB})·Cos({senR}°)'
        operationResult += '\n'
        operationResult += f'c² = {(xA*xA)} + {(xB*xB)} - {(2*xA)*xB}({Math.cos(senR * Math.pi / 180)}°)'
        operationResult += '\n'
        result = ((xA*xA) + (xB*xB)) - (((2*xA)*xB)
                                        * Math.cos(senR * Math.pi / 180))
        operationResult += f'c² = {result}'
        operationResult += '\n'
        operationResult += f'c = {Math.sqrt(result)}'
    elif (typeFormule == 1):
        operationResult += f'a² = {xC}² + {xB}² - 2({xB})({xC})·Cos({senA}°)'
        operationResult += '\n'
        operationResult += f'a² = {(xC*xC)} + {(xB*xB)} - {(2*xB)*xC}({Math.cos(senA * Math.pi / 180)}°)'
        operationResult += '\n'
        result = ((xC*xC) + (xB*xB)) - (((2*xB)*xC)
                                        * Math.cos(senA * Math.pi / 180))
        operationResult += f'a² = {result}'
        operationResult += '\n'
        operationResult += f'a = {Math.sqrt(result)}'
    elif (typeFormule == 2):
        operationResult += f'b² = {xA}² + {xC}² - 2({xA})({xC})·Cos({senB}°)'
        operationResult += '\n'
        operationResult += f'b² = {(xA*xA)} + {(xC*xC)} - {(2*xA)*xC}({Math.cos(senB * Math.pi / 180)}°)'
        operationResult += '\n'
        result = ((xA*xA) + (xC*xC)) - (((2*xA)*xC)
                                        * Math.cos(senB * Math.pi / 180))
        operationResult += f'b² = {result}'
        operationResult += '\n'
        operationResult += f'b = {Math.sqrt(result)}'
    return operationResult


def resolve(args):
    xA = args[0] if len(args) > 0 else input('xA => ')
    xB = args[1] if len(args) > 0 else input('xB => ')
    xC = args[2] if len(args) > 0 else input('xC => ')

    senA = args[3] if len(args) > 0 else input('sen A => ')
    senB = args[4] if len(args) > 0 else input('sen B => ')
    senR = args[5] if len(args) > 0 else input('sen R => ')

    try:
        print('\n')
        print('0: c² = a² + b² - 2ab·CosR')
        print('1: a² = c² + b² - 2bc·CosA')
        print('2: b² = a² + c² - 2ac·CosB')
        print('\n')
        print(resolveArgs(int(input("tipo => ")), int(xA), int(
            xB), int(xC), int(senA), int(senB), int(senR)))
    except Exception as error:
        print(f'Exception: {error}')
    finally:
        if (input('Other? (Boolean expression) => ') == 'true'):
            resolve([xA, xB, xC, senA, senB, senR] if input(
                'Same args? => ') == 'true' else [])


resolve([])
