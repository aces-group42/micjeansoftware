import { useLayoutEffect,useState } from "react"
import { View,Text,Image,TextInput,ScrollView,Button, Modal} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Categories from "../../Components/Categories";
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
        setTimeout(()=>{
            // setShowModal(true)
            setShowModal(false);
        },2000)
    },[])
    return (
        <SafeAreaView  >
            <Modal visible={showModal} >
                <View style={{alignItems:"center",justifyContent:"center",height:"100%",backgroundColor:"#00ccbb"}}>
                    <Text style={{color:"white",fontSize:40,textAlign:"center",fontWeight:"bold"}}>MIC JEAN ROYAL</Text>
                </View>
            </Modal>
            
            <ScrollView style={{paddingBottom:100}}>
            <View style={{backgroundColor:"white"}}>
                {/* Header */}
                <View style={{
                    padding:10,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:4
                }}>
                    <Image
                    source={{
                        uri:"https://links.papareact.com/wru"
                    }}
                    style={{
                        width:40,
                        height:40,
                        backgroundColor:"#ccc",
                        borderRadius:20,
                    }}
                    />
                    <View style={{marginHorizontal:10,flex:1}}>
                        <Text style={{fontWeight:"bold",
                    color:"gray"}}>Deliver Now</Text>
                        <Text
                        style={{
                            fontWeight:"bold",
                            fontSize:20
                        }}>Current Location
                        <Entypo name="chevron-down" size={24} color="#00ccbb" /></Text>
                    </View>
                    <View>
                        <Ionicons name="person" size={35} color="#00ccbb" />
                    </View>
                </View>

                {/* Search Box */}
                <View style={{padding:10,flexDirection:"row",
                alignItems:"center"}}>
                    <View style={{flexDirection:"row",flex:1,borderRadius:5,
                        backgroundColor:"lightgray",padding:10}}>
                        <Feather name="search" size={24} color="black" />
                        <TextInput
                        placeholder="Restaurant and cuisines"
                        // Change the keyboard type
                        keyboardType="default"
                        style={{paddingLeft:5}}/>
                    </View>
                    <View style={{padding:10}}>
                        <SimpleLineIcons name="equalizer" size={20} color="#00ccbb" />
                    </View>
                </View>
            </View>

            {/* Content */}
            <ScrollView style={{backgroundColor:"#lightgray"}}  >
                {/* Categories */}
                <Categories navigation={navigation}/>

                {/* Featured row */}
                <FeaturedRow
                    id={1}
                    title="Featured"
                    description="Paid placements from our partners"
                    />

                {/* TastyDiscount */}
                <FeaturedRow
                    id={2}
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discount"
                    />

                {/* Offers near you */}
                <FeaturedRow
                    id={3}
                    title="Offers near you"
                    description="Why not support your local restaurant tonight"
                    />
            </ScrollView>
            </ScrollView>
            
        </SafeAreaView>
    )
}
export default Home
