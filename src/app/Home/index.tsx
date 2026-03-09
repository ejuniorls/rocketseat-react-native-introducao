import {View, Text, StyleSheet, Image} from "react-native";

// @ts-ignore
import {Button} from "@/components/Button";

import {styles} from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo}/>

            <Button title="Opacity 0.1"/>
        </View>
    );
}

