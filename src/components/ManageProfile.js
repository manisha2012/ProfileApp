import React, { Component } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import {Container, Header, Left, Right, Icon, Button, Body, Title} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Actions} from 'react-native-router-flux';

import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles, { colors } from '../styles/Slider.style';
import { ENTRIES } from '../static/entries';

const SLIDER_1_FIRST_ITEM = 0;

export default class ManageProfile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 !== 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 !== 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

    _renderSlider () {
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.sliderContainer}>
                
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={ENTRIES.length}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    
    
    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    renderHome = () => {
        Actions.index();
    };
    
    render () {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Container style={styles.container}>
                    <Header transparent>
                        <Left>
                            <Button transparent onPress={this.renderHome}>
                                <Icon name="arrow-back" style={styles.textColor}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.textColor}>Manage Profile</Title>
                        </Body>
                        <Right></Right>
                    </Header>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { this._renderSlider() }
                        
                    </ScrollView>
                </Container>
            </SafeAreaView>
        );
    }
}
