import React, { Component } from 'react'
import {
    Text,
    Image,
    ViewPagerAndroid,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => (
    <View style={styles1.container}>
        <Image style={styles1.image} source={props.uri}/>
    </View>
)

const styles1 = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width 
    }
}

const image1 = require('../images/1.jpg');

export default class Pager extends Component{
    render(){
        return(
                            
                    <Swiper
                        autoplay
                        height = {240}
                        >
                        <Slider uri={image1}/>
                        <Slider uri={require('../images/2.jpg')}/>
                        <Slider uri={require('../images/3.jpg')}/>
                    </Swiper>
                
        )
    }
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    view1:{
        backgroundColor: 'lightseagreen'
    }

  });
