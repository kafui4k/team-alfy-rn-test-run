import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {firebase} from '../firebase';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={{flex: 1}}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Create your</Text>
                <Text style={styles.titleText}>Account.</Text>
            </View>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        email
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{padding: 20, margin: 20}}>
                        <Text style={{fontWeight: '300', padding: 20}}>
                            or continue with
                        </Text>

                        <Text>G</Text>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '80%',
                            justifyContent: 'space-around',
                            marginBottom: -50,
                        }}
                    >
                        <Text style={{fontWeight: '300'}}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.replace('Login');
                            }}
                            // style={[styles.button, styles.buttonOutline]}
                        >
                            <Text style={styles.buttonOutlineText}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 100,
        paddingLeft: 40,
        alignItems: 'flex-start',
        width: '80%',
    },
    titleText: {
        fontWeight: '900',
        fontSize: 30,
    },
    inputContainer: {
        width: '80%',
        marginTop: -50,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#B79797',
        width: '100%',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#07b2f9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#B79797',
        fontWeight: '300',
        fontSize: 16,
    },
});
