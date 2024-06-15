import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }, subject: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#1A4D2E",
        textAlign: 'center',

    }, row: {
        flexDirection: "row",
        flexWrap: "wrap"
    }, margin: {
        margin: 5
    }, avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        // width:80,
        // height:80,
        // borderRadius:20,
    },
    name: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "#F5EFE6",
    },
    banner: {
        flex: 0.5,
        backgroundColor: "#6495ed"
    },
    status: {
        padding: 5,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
    },
    pending: {
        backgroundColor: 'yellow',
        color: 'black',
    },
    pass: {
        backgroundColor: 'green',
    },
    header: {
        backgroundColor: "#1A4D2E",
        alignItems: "center",
        padding: 20,
    },
    button: {
        marginHorizontal: 24,
        marginVertical: 12,
        backgroundColor: '#1A4D2E',
    },
});