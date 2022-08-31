import { View,TextInput,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'; 
import { useState,useEffect } from "react";
const Search=()=>{

    // Make a search to the database
    const [searchData,setSearchData]=useState("");
    

    return(
        <SafeAreaView>
            <View style={{padding:10,flexDirection:"row",
                alignItems:"center"}}>
                    <View style={{flexDirection:"row",flex:1,borderRadius:5,
                        backgroundColor:"lightgray",padding:10}}>
                        <Feather name="search" size={24} color="black" />
                        <TextInput
                        placeholder="Search for cuisines" 
                        // onBlur={()=>console.log("Gone")}
                        // Change the keyboard type
                        onChangeText={(value)=>{
                            //Make a request to the data base
                            const fetchFromDB = async()=>{
                                console.log(value)
                                try{
                                    const result = await fetch("http://127.0.0.1:4500/search", 
                                    {
                                        method:"POST",
                                        header:{"Content-Type":"application/json"},
                                        body:JSON.stringify({data:value})
                                    })
                                    const data=await result.json()
                                    // console.log(data)
                                    // setSearchData(data)
                                }catch{
                                    console.log("Error")
                                }
                            }
                            fetchFromDB()
                        }}
                        keyboardType="default"
                        style={{paddingLeft:5}}/>
                    </View>
            </View>
            <View style={{marginHorizontal:5,marginVertical:10}}>
                <Text>{searchData}</Text>
            </View>
        </SafeAreaView>
    )
}
export default Search