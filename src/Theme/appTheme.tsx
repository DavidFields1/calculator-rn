import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: "#000",
        flex: 1,        
    },
    calculatorContainer: {        
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    previousResult: {
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: 30,
        textAlign: "right",
    },
    result: {
        color: "#fff",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 18,
        // paddingHorizontal: 100,
        // paddingLeft: 20,
        // paddingRight: 20,
    },
    button: {
        height: 76,
        width: 76,
        borderRadius: 100,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "#000",
        fontSize: 30,
        textAlign: "center",
        padding: 18,
        fontWeight: "400",
    }
})