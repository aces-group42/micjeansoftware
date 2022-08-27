import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import allReducers from '../../Reducers'
import {useSelector} from "react-redux"
const Cart = () => {

  const cartItem = useSelector(state=>state.cartReducer)
  const navigation = useNavigation()
  
  useEffect(()=>{
    console.log(cartItem.length)
  },[])



  return (
    <SafeAreaView>
      {
        cartItem.map((item,index)=>{
          return(
            <View key={index} style={{margin:10}}>
              <View style={{borderRadius:10}}>
                <Image source={{uri:item.imagePreview}} style={{width:"100%",height:200,borderRadius:10}}/>
              </View>
            </View>
          )
        })
      }
      <View>
        <Text>Place Order</Text>
      </View>
    </SafeAreaView>
  )
}

export default Cart