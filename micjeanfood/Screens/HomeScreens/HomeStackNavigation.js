
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ReviewDetails from './ReviewDetails';
import Categories from './Categories';
const Stack = createNativeStackNavigator();

const HomeStackNavigation = ({setBasketQuantity})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ReviewDetails" children={(props)=><ReviewDetails {...props} setBasketQuantity={setBasketQuantity}/>}/>
            <Stack.Screen name="Categories" component={Categories}/>
        </Stack.Navigator>
    )
    
}

export default HomeStackNavigation