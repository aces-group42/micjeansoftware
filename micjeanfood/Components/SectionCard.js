import { View, Text,Image,TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const SectionCard = ({
    imgUrl,
    title,
    price,
    id
}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>{
        // console.log(id)
        navigation.navigate("ReviewDetails",{id:id})}
        } style={{position:"relative",width:200,marginHorizontal:10,borderRadius:10,overflow:"hidden"}}>
        <Image
        source={{uri:imgUrl}} style={{width:200,height:240}} resizeMode="cover"
        />
        <View  style={{position:"absolute",bottom:10,borderRadius:10,padding:5,left:10,right:10,backgroundColor:"white",opacity:0.85,margin:"auto"}}>
            <View>
                <Text style={{color:"#333",textAlign:"center",fontSize:12,fontWeight:"bold"}}>{title}</Text>
            </View>
        </View>
        <View style={{position:"absolute",padding:2,borderRadius:10,top:10,right:10,backgroundColor:"#F51962"}}>
            <Text style={{color:"white"}}>GH₵ {(price).toFixed(2)}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SectionCard