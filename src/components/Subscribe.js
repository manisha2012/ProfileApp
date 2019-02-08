import React from 'react';
import {Text, View} from 'react-native';
import { Content} from 'native-base';
import styles from '../styles/Screens.style';

const Subscribe = () => {
    return (
        <Content>
            <View style={styles.screenTextContainer}>
                <Text style={styles.screenText}>Subscribe</Text>
            </View>
        </Content>
    )
};

export default Subscribe;