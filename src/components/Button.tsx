import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/appTheme';

interface ButtonProps {
    text: string;
    color?: string;
    wide?: boolean;
    action: ( action: string ) => void;
}

const Button = ({ text, color = '#2D2D2D', wide = false, action}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={ () => action(text)}
        >
            <View style={{
                ...styles.button,  
                backgroundColor: color,
                width: wide ? 180 : 76,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button
