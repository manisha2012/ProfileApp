import React, { Component } from 'react';
import {Text} from 'react-native';
import { Container, Icon, Button, Footer, FooterTab} from 'native-base';

import Home from './Home';
import Alerts from './Alerts';
import Subscribe from './Subscribe';
import Dashboard from './Dashboard';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    renderSelectedTab = () => {
        switch (this.state.selectedTab) {
            case 'home':
                return (<Home />);
                break;
            case 'alerts':
                return (<Alerts />);
                break;
            case 'subscribe':
                return (<Subscribe />);
                break;
            case 'dashboard':
                return (<Dashboard />);
                break;
            default:
                return (<Home />);
        }
    }

    render() {
      return (
        <Container>
            {this.renderSelectedTab()}
            <Footer>
                <FooterTab>
                    <Button vertical active={this.state.selectedTab==='home'} onPress={() => this.setState({selectedTab: 'home'})}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical active={this.state.selectedTab==='alerts'} onPress={() => this.setState({selectedTab: 'alerts'})}>
                        <Icon name="call" />
                        <Text>Alerts</Text>
                    </Button>
                    <Button vertical active={this.state.selectedTab==='subscribe'} onPress={() => this.setState({selectedTab: 'subscribe'})}>
                        <Icon active name="arrow-dropright-circle" />
                        <Text>Subscribe</Text>
                    </Button>
                    <Button vertical active={this.state.selectedTab==='dashboard'} onPress={() => this.setState({selectedTab: 'dashboard'})}>
                        <Icon name="easel" />
                        <Text>Dashboard</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
      );
    }
}

export default Index;