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
                            // Change the keyboard type
                            onChangeText={(value)=>searchDB(value)}
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