import React, { useState, useRef } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../Theme/appTheme';

const CalculatorScreen = () => {

    const {
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
    } = useCalculator();

    return (
        <SafeAreaView style={styles.calculatorContainer}>
            <Text style={styles.previousResult}>
                { Number(previousNumber) == 0 ? '' : previousNumber }
            </Text>
            <Text 
                style={styles.result}
                adjustsFontSizeToFit
                numberOfLines={1}
            >
                { number }
            </Text>
            {/* row */}
            <View style={styles.row}>
                {/* Buttons */}
                <Button text='C'color="#9B9B9B" action={clean}/>
                <Button text='+/-' color="#9B9B9B" action={positiveNegative}/>
                <Button text='del' color="#9B9B9B" action={deleteLastNumber}/>
                <Button text='/' color="#FF9427" action={divide}/> 
            </View>
            <View style={styles.row}>
                {/* Buttons */}
                <Button text='7'action={buildNumber}/>
                <Button text='8' action={buildNumber}/>
                <Button text='9' action={buildNumber}/>
                <Button text='X' color='#FF9427' action={multiply}/>                
            </View>

            <View style={styles.row}>
                {/* Buttons */}
                <Button text='4' action={buildNumber}/>
                <Button text='5' action={buildNumber}/>
                <Button text='6' action={buildNumber}/>
                <Button text='-' color='#FF9427' action={subtract}/>                
            </View>

            <View style={styles.row}>
                {/* Buttons */}
                <Button text='1' action={buildNumber}/>
                <Button text='2' action={buildNumber}/>
                <Button text='3' action={buildNumber}/>
                <Button text='+' color='#FF9427' action={add}/>                
            </View>

            <View style={styles.row}>
                {/* Buttons */}
                <Button text='0' wide action={buildNumber}/>
                <Button text='.' action={buildNumber}/>
                <Button text='=' color='#FF9427' action={calculate}/>                
            </View>
        </SafeAreaView>
    )
}

export default CalculatorScreen
