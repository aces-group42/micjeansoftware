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
    <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",{id})} style={{position:"relative",width:200,marginRight:20,borderRadius:10,overflow:"hidden"}}>
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
    // <TouchableOpacity onPress={()=>{
    //     navigation.navigate("ReviewDetails",{title,imgUrl,category,price,whatYouGet})
    // }} style={{width:200 ,backgroundColor:"white",marginRight:10,borderRadius:10,overflow:"hidden"}}>
    //         <Image source={{
    //             uri:imgUrl
    //         }} style={{width:200,height:150}} resizeMode="cover"/>
    //         <View style={{padding:5}}>
    //             <Text style={{fontWeight:"bold",paddingBottom:4}}>{title}</Text>
    //             <View style={{flexDirection:"row",alignItems:"center",paddingBottom:5}}>
    //                 <Text style={{color:"gray"}}>GH₵ {(price).toFixed(2)}</Text>
    //             </View>
    //         </View>
            
    //     </TouchableOpacity>
  )
}

export default SectionCard