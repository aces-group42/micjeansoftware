
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ReviewDetails from './ReviewDetails';

const Stack = createNativeStackNavigator();

const HomeStackNavigation = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails}/>
        </Stack.Navigator>
    )
    
}

export default HomeStackNavigation