import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {firebase} from '../firebase';

export default function Home({navigation}) {
    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch((error) => alert(error.message));
    };
    return (
        <View style={styles.container}>
            <Text>Email: {firebase.auth().currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});
