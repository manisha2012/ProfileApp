import React from 'react';
import {Text, View} from 'react-native';
import { Content} from 'native-base';
import styles from '../styles/Screens.style';

const Alerts = () => {
    return (
        <Content>
            <View style={styles.screenTextContainer}>
                <Text style={styles.screenText}>Alerts</Text>
            </View>
        </Content>
    )
};

export default Alerts;