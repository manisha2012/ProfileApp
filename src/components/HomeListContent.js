import React, {Component, Fragment} from 'react';
import {Text} from 'react-native';
import { ListItem, Left, Right, Icon, Button, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/Home.style';

class HomeListContent extends Component {

    renderProfile = () => {
        Actions.profile();
    };

    render() {
        return (
            <Fragment>
                <ListItem icon onPress={this.renderProfile} style={styles.listItem}>
                    <Left style={styles.leftItem}>
                        <Button transparent>
                            <Icon active name="contact" style={styles.listContent}/>
                        </Button>
                    </Left>
                    <Body style={styles.middleItem}>
                        <Text style={styles.listContent}>Manage Profile</Text>
                    </Body>
                    <Right style={styles.rightItem}>
                        <Icon active name="arrow-forward" style={styles.listContent}/>
                    </Right>
                </ListItem>
                <ListItem icon style={styles.listItem}>
                    <Left style={styles.leftItem}>
                        <Button transparent>
                            <Icon active name="call" style={styles.listContent}/>
                        </Button>
                    </Left>
                    <Body style={styles.middleItem}>
                        <Text style={styles.listContent}>Phonebook Calls Only</Text>
                    </Body>
                    <Right style={styles.rightItem}>
                        <Icon active name="arrow-forward" style={styles.listContent}/>
                    </Right>
                </ListItem>
                <ListItem icon style={styles.listItem}>
                    <Left style={styles.leftItem}>
                        <Button transparent>
                            <Icon active name="close-circle" style={styles.listContent}/>
                        </Button>
                    </Left>
                    <Body style={styles.middleItem}>
                        <Text style={styles.listContent}>Block Callers</Text>
                    </Body>
                    <Right style={styles.rightItem}>
                        <Icon active name="arrow-forward" style={styles.listContent}/>
                    </Right>
                </ListItem>
                <ListItem icon style={styles.listItem}>
                    <Left style={styles.leftItem}>
                        <Button transparent>
                            <Icon active name="checkmark-circle-outline" style={styles.listContent}/>
                        </Button>
                    </Left>
                    <Body style={styles.middleItem}>
                        <Text style={styles.listContent}>Always Allow Calls</Text>
                    </Body>
                    <Right style={styles.rightItem}>
                        <Icon active name="arrow-forward" style={styles.listContent}/>
                    </Right>
                </ListItem>
                <ListItem icon style={styles.listItem}>
                    <Left style={styles.leftItem}>
                        <Button transparent>
                            <Icon active name="calendar" style={styles.listContent}/>
                        </Button>
                    </Left>
                    <Body style={styles.middleItem}>
                        <Text style={styles.listContent}>Schedule Profile</Text>
                    </Body>
                    <Right style={styles.rightItem}>
                        <Icon active name="arrow-forward" style={styles.listContent}/>
                    </Right>
                </ListItem>
            </Fragment>
        )
    }
    
}

export default HomeListContent;