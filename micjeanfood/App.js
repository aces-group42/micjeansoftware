
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabs/BottomTabNavigation';
import {createStore} from "redux";
import allReducers from './Reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

