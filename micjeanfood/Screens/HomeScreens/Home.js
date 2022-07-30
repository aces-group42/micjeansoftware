import { useLayoutEffect,useState } from "react"
import { View,Text,Image,ScrollView} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Ionicons } from '@expo/vector-icons';

import Recommended from "../../Components/Recommended";
import FeaturedRow from "../../Components/FeaturedRow";
const Home=({navigation})=>{

    const [showModal,setShowModal] = useState(true)
    // Modify
    useLayoutEffect(()=>{
        // navigation.navigate("ReviewDetails")
        navigation.setOptions({
            // Hide the header
            headerShown:false
        })
        
    },[])
    return (
        <SafeAreaView  >
            
            
            <ScrollView style={{paddingBottom:100}}>
            <View style={{backgroundColor:"white"}}>
                {/* Header */}
                
                <View style={{
                    padding:10,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:4
                }}>
                    <View style={{flex:1}}>
                        <Image
                        source={require("../../images/logo.jpeg")}
                        style={{
                            width:60,
                            height:60,
                            backgroundColor:"#ccc",
                            borderRadius:10,
                            paddingHorizontal:40,
                        }}
                        />
                    </View>
                    {/* <View style={{marginHorizontal:10,flex:1}}>
                        <Text style={{fontWeight:"bold",
                    color:"gray"}}>Deliver Now</Text>
                        <Text
                        style={{
                            fontWeight:"bold",
                            fontSize:20
                        }}>Current Location
                        <Entypo name="chevron-down" size={24} color="#F51962" /></Text>
                    </View> */}
                    <View>
                        <Ionicons name="person" size={35} color="#F51962" />
                    </View>
                </View>

                {/* Search Box */}
                
            </View>

            {/* Content */}
            <View style={{paddingLeft:15,paddingTop:10}}>
                    <Text style={{fontWeight:"bold"}}>Recommended</Text>
            </View>
            <ScrollView style={{backgroundColor:"#lightgray"}}  >
                {/* Categories */}
                <Recommended navigation={navigation}/>

                {/* Featured row */}
                <FeaturedRow
                    id={1}
                    title="Breakfast"
                    description="All happiness depends on a leisurely breakfast."
                    />

                {/* TastyDiscount */}
                <FeaturedRow
                    id={2}
                    title="LocalDishes"
                    description="Everyone's been enjoying these juicy discount"
                    />

            </ScrollView>
            {/* Elevator */}
            <View style={{height:70}}>

            </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}
export default Home
