import { useRef, useState } from "react";

enum Operators {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')
    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setPreviousNumber('0')
    }

    const buildNumber = (textNumber: string) => {
        if(number.includes('.') && textNumber === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')) {
            // allow decimal point with leading 0
            if(textNumber === '.'){
                setNumber(number + textNumber)

            // allow more 0's after the decimal point
            } else if(textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
            
            // diferent than 0 and no decimal point
            } else if(textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)

            } else if(textNumber === '0' && !number.includes('.')){
                setNumber(number)

            } else {
                setNumber(number + textNumber)

            }

        } else {
            setNumber(number + textNumber)

        }
    }

    const deleteLastNumber = () => {
        let negative = '';
        let tempNumber = number;

        if(number.startsWith('-')) {
            negative = '-'
            tempNumber = number.substring(1)

        }


        if(tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const positiveNegative = () => {
        if(number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const assignPreviousNumber = () => {
        if(number.endsWith('.')) {
            setPreviousNumber(number.slice(0,-1))
        } else {
            setPreviousNumber(number)
        }
        setNumber('0')
    }

    const add = () => {
        assignPreviousNumber()
        lastOperation.current = Operators.ADD
    }

    const subtract = () => {
        assignPreviousNumber()
        lastOperation.current = Operators.SUBTRACT
    }

    const multiply = () => {
        assignPreviousNumber()
        lastOperation.current = Operators.MULTIPLY
    }

    const divide = () => {
        assignPreviousNumber()
        lastOperation.current = Operators.DIVIDE
    }

    const calculate = () => {
        switch (lastOperation.current) {
            case Operators.ADD:
                setNumber(`${Number(previousNumber) + Number(number)}`)
                break;
            case Operators.SUBTRACT:
                setNumber(`${Number(previousNumber) - Number(number)}`)
                break;
            case Operators.MULTIPLY:
                setNumber(`${Number(previousNumber) * Number(number)}`)
                break;
            case Operators.DIVIDE:
                if(number === '0' || number === '-0' || previousNumber === '0' || previousNumber === '-0') {
                    setNumber('0')
                    setPreviousNumber('0')
                } else {
                    setNumber(`${Number(previousNumber) / Number(number)}`)
                }
                break;
            default:
                break;
        }
    }

    return {
        number,
        previousNumber,
        buildNumber,
        clean,
        positiveNegative,
        deleteLastNumber,
        add,
        subtract,
        divide,
        multiply,
        calculate
    }
};