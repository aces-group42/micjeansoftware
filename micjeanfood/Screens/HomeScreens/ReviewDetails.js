import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { useState } from "react"
import { useLayoutEffect } from "react"
import { View,Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {addItem} from "../../Actions/index"
import {useDispatch, useSelector} from "react-redux"
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const ReviewDetails=({route,setBasketQuantity})=>{

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {id} = route.params

    const [enableAdd,setEnableAdd]=useState(false);
    const [whatYouGet,setWhatYouGet]=useState([])

    useLayoutEffect(()=>{
        // console.log(route.params)
        navigation.setOptions({
            headerShown:false,
        })
    })

    const [data,setData]=useState({})

    //Fetch from DB
    useEffect(()=>{
        const getData = async(id)=>{
            try{
                const result = await fetch(`https://micjeanapi.herokuapp.com/food/get/${id}`)
                const dataFromDB = await result.json()
                setWhatYouGet(dataFromDB.whatYouGet.split(','))
                setEnableAdd(true)
                setData(dataFromDB)
            }
            catch(error){
                
                console.log(error.message)
            }
        }
        getData(id)
    },[])

    return(
        <ScrollView>
            <View style={{position:"relative"}}>
                    <Image style={{width:"100%",height:400,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                    source={{
                        uri:data.imagePreview
                    }}
                />
                <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                }} style={{padding:10,borderRadius:10,position:"absolute",top:50,left:10,backgroundColor:"white"}}>
                    <FontAwesome name="arrow-left" size={20} color="#F51962" />
                </TouchableOpacity>
                <TouchableOpacity style={{position:"absolute",top:50,right:10,backgroundColor:"white",padding:10,borderRadius:10}}>
                    <AntDesign  name="hearto" size={20} color="#F51962" />
                </TouchableOpacity>
            </View>

            <View>
                <View style={{margin:10,padding:10,borderRadius:10}}>
                    <View >
                        <Text style={{color:"#F51962",fontSize:25,textAlign:"center",fontWeight:"bold"}}>{data.name}</Text>
                    </View>
                    <View style={{backgroundColor:"white",flexDirection:"row",alignItems:"center",padding:20,margin:10,borderRadius:10}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:16}}>GH₵ {Number(data.price).toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity disabled={enableAdd?false:true} onPress={()=>{
                            setBasketQuantity(old=>old+1)
                            dispatch(addItem(data))
                            }} style={{backgroundColor:"#F51962",padding:10,borderRadius:10}}>
                            <Text style={{color:"white",fontWeight:"bold"}}>ADD TO BASKET +</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10}}>
                        <View>
                            <Text style={{textAlign:"center",fontWeight:"bold"}}>COMES WITH</Text>
                        </View>
                        {whatYouGet.map((text,index)=>{
                            return(<View key={index}>
                                <Text style={{fontSize:20}}>
                                    · {text}
                                </Text>
                            </View>)
                        })}
                    </View>
                </View>
            </View>
            
            
        </ScrollView>
    )
}
export default ReviewDetails