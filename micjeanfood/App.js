
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabs/BottomTabNavigation';
import {createStore} from "redux";
import allReducers from './Reducers';
import {useState} from "react";
import { Provider } from 'react-redux';

const store = createStore(allReducers);

export default function App() {
  const [basketQuantity,setBasketQuantity] = useState(0);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation basketQuantity={basketQuantity} setBasketQuantity={setBasketQuantity}/>
      </NavigationContainer>
    </Provider>
  );
}

