import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

export default function HomePage() {
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome To HomePage</Text>
                <Separator />
                <TouchableOpacity style={styles.button}>
                    <Text>Single Player</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Multiplayer</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 2,
        borderRadius: 10,
        padding: '2%',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
    },
    single: {
        fontSize: 20,
        fontWeight: '400',
    },
    double: {
        fontSize: 20,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    separator: {
        margin: '2%',
        borderBottomColor: 'black',
        borderBottomWidth: 1.4,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        marginTop: '5%',
        marginLeft:'30%',
        marginRight:'30%',
        marginBottom: '5%',
        borderRadius: 10,
        backgroundColor: '#f0c33c',
    },
});