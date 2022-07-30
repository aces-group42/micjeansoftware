import { View,TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'; 
const Search=()=>{
    return(
        <SafeAreaView>
            <View style={{padding:10,flexDirection:"row",
                alignItems:"center"}}>
                    <View style={{flexDirection:"row",flex:1,borderRadius:5,
                        backgroundColor:"lightgray",padding:10}}>
                        <Feather name="search" size={24} color="black" />
                        <TextInput
                        placeholder="Restaurant and cuisines" 
                        // onBlur={()=>console.log("Gone")}
                        // Change the keyboard type
                        keyboardType="default"
                        style={{paddingLeft:5}}/>
                    </View>
            </View>
        </SafeAreaView>
    )
}
export default Search