import React, { useEffect, useState } from 'react'
import MapView, {Marker, Callout} from 'react-native-maps'
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
function Main({navigation}){
    const [currentRegion, setCurrentRegion] = useState(null)
    useEffect(()=>{
        async function loadInitialPosition(){
           const {granted} = await requestPermissionsAsync()
           if(granted){
               const {coords} = await getCurrentPositionAsync({
                   enableHighAccuracy: true
               })
               const {latitude, longitude} = coords
               setCurrentRegion({
                   latitude, longitude,
                   latitudeDelta: 0.04,
                   longitudeDelta: 0.04
               })
           }
        }
    })
    if(!currentRegion){
        return null
    }
    return(
        <>
        <MapView initialRegion={currentRegion} style={style.map}>
            <Marker coordinate={{latitude: -27.111, longitude: -53.17}}>
                <Image style={style.avatar} source={{uri: ''}}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', {github_username: 'vinibispo'})
                }}>
                    <View style={style.callout}>
                        <Text style={style.devName}>Vinícius Bispo</Text>
                        <Text style={style.devBio}>I'm just a curious guy</Text>
                        <Text style={style.devTechs}>ReactJS, React Native, Node.js</Text>
                        <TouchableOpacity style={style.loadButton}>
                            
                        </TouchableOpacity>
                    </View>
                </Callout>
            </Marker>
        </MapView>
        <View style={style.searchForm}>
            <TextInput style={style.searchInput} placeholder={"Buscar devs por techs"} placeholderTextColor="#999" autoCapitalize="words" autoCorrect={false}/>
        </View>
        </>
    )
}
const style = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar:{
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },
    callout:{
        width: 260
    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5,

    },
    devTechs:{
        marginTop: 5
    }
})
export default Main