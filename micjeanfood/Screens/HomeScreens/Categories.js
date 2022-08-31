import {View,Text,ScrollView,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect,useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
const Categories = ({route})=>{

    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    })

    useEffect(()=>{
        const getCategoriesFromDB=async()=>{
            try {
                const result = await fetch(`http://127.0.0.1:4500/category/${route.params.category}`)
                const data = await result.json()
                console.log(data)
                // setCategoriesFromDB(data)
            } catch (error) {
                console.log("Server is slow")
            }
        }
        getCategoriesFromDB()
    })

    const [categoriesFromDB,setCategoriesFromDB]=useState([]);

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{margin:10}}>
                    <Text style={{fontSize:20}}>Categories {route.params.category}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Categories;
