import {View, Text, StyleSheet, Image} from "react-native";
import {styles} from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo}/>
        </View>
    );
}

