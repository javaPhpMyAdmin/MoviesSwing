import React, { Component } from 'react';
import {
    Image,
    Text,
    ViewPagerAndroid,
    View,
    StyleSheet
} from 'react-native'



export default class Pager extends Component{
    render(){
        return(
            
                
                <ViewPagerAndroid style={styles.mainView} initialPage={0}>
                    <View style={styles.view1}>
                        <Text style={{color: 'white'}}> dede pager1</Text>
                    </View>
                        <View style={styles.view1}>
                    <Text style={{color: 'white'}}> dede pager3</Text>
                        </View>
                    <View style={styles.view1}>
                        <Text style={{color: 'white'}}> dede pager2</Text>
                    </View>
                </ViewPagerAndroid>
                
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

