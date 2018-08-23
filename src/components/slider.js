import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    ViewPagerAndroid,
    StyleSheet
} from 'react-native'

import Swiper from 'react-native-swiper'


const width1 = Dimensions.get('window').width;

const Slider = props => (
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: width1
    }
}

export default class Slide extends Component{
    constructor(props){
        super(props)
        this.state = {
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        }
    }

    render(){
        const image = require('../images/1.jpg');
        return(
            
            <Swiper
                autoplay
                height = {240}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider
                    uri= {item}
                    key= {i}
                    />)
                }
            </Swiper>
        
        )
    }
}

