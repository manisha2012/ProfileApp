import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import { Content, Icon } from 'native-base';

import HomeListContent from './HomeListContent';
import styles from '../styles/Home.style';

class Home extends Component {
    render() {
        return (
            <Content>
                <View style={styles.header}>
                    <Image style={styles.background} source={require('../images/profile-background.png')}/>
                </View>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <Icon name="create" style={styles.editIcon}/>
                <Text style={styles.name}>Shobhit Siwach</Text>
                <Text style={styles.info}>Subscription - AFN for 15 days</Text>
                <HomeListContent style={styles.list}/>
            </Content>
        );
    }
}

export default Home;