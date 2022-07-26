import { useLayoutEffect } from "react"
import { View,Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
const ReviewDetails=({navigation})=>{

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
            
        })
    })

    return(
        <ScrollView>
            <View style={{position:"relative"}}>
                <Image style={{width:"100%",height:240}}
                source={{
                    uri:"https://foodiesterminal.com/wp-content/uploads/2020/04/instant-pot-chicken-ramen-stir-fry-4.jpg"
                }}
            />
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }} style={{opacity:0.7,paddingHorizontal:10,paddingVertical:3,borderRadius:20,position:"absolute",bottom:30,left:10,backgroundColor:"lightgray"}}>
                <Text style={{fontWeight:"bold",color:"black"}}>BACK</Text>
            </TouchableOpacity>
            </View>
            {/* Name */}
            <View style={{backgroundColor:'white',padding:10}}>
                <View>
                    <Text style={{fontSize:30,fontWeight:"bold",color:"#333"}}>MICJEAN'S Special Indomie</Text>
                </View>
                <View>
                    
                </View>
            </View>
        </ScrollView>
    )
}
export default ReviewDetails