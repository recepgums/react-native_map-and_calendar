import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {Action} from "react-native-router-flux";
export default  class  Mesajlar extends  React.Component{
    render(){
        return (
            <View style={styles.kirmizi_alan}>
                <Text style={styles.kirmizi_metin}> Burasi kirmizi sayfa</Text>
            </View>

        );
    }

}
const styles=StyleSheet.create(
    {
        kirmizi_metin:{
            marginTop:150,
            color:"white",
            fontSize:37,
            textAlign:'center'
        },
        kirmizi_alan:{
            height:650,
            backgroundColor:'red',
        }
    }
);