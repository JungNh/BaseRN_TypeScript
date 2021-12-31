import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import GameScreen from './../screen/game/GameScreen';
import ApplicationScreen from './../screen/application/ApplicationScreen';
import FilmScreen from './../screen/film/FilmScreen';
import BookScreen from './../screen/book/BookScreen';

// const TabArr = [
//   { name: "Game", component: HomeScreen, typeIcons: 'Ionicons', activeIcon: 'game-controller', unActiveIcon: 'game-controller-outline', label: 'Trò chơi' },
//   { name: "Application", component: SettingsScreen, typeIcons: 'AntDesign', activeIcon: 'windows', unActiveIcon: 'windowso', label: 'Ứng dụng' },
// ]


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Game" component={GameScreen}
          options={{
            tabBarIcon: ({ focused }) =>
            (<>
              <Ionicons
                name={focused ? 'game-controller' : 'game-controller-outline'}
                size={24}
                color={focused ? '#0f9d58' : '#7d7c7f'} />
              <Text style={{ color: focused ? '#0f9d58' : '#7d7c7f', fontSize: 10 }}>Trò chơi</Text>
            </>),
            tabBarShowLabel: false
          }} />
        <Tab.Screen name="Applications" component={ApplicationScreen}
          options={{
            tabBarIcon: ({ focused }) =>
            (
              <>
                <AntDesign
                  name={focused ? 'windows' : 'windowso'}
                  size={24}
                  color={focused ? '#0f9d58' : '#7d7c7f'} />
                <Text style={{ color: focused ? '#0f9d58' : '#7d7c7f', fontSize: 10 }}>Ứng dụng</Text>
              </>
            ),
            tabBarShowLabel: false

          }}
        />
        <Tab.Screen name="Film" component={FilmScreen}
          options={{
            tabBarIcon: ({ focused }) =>
            (
              <>
                <Ionicons
                  name={focused ? 'film' : 'film-outline'}
                  size={24}
                  color={focused ? '#0f9d58' : '#7d7c7f'} />
                <Text style={{ color: focused ? '#0f9d58' : '#7d7c7f', fontSize: 10 }}>Phim</Text>
              </>
            ),
            tabBarShowLabel: false
          }}
        />
        <Tab.Screen name="Book" component={BookScreen}
          options={{
            tabBarIcon: ({ focused }) =>
            (
              <>
                <MaterialCommunityIcons
                  name={focused ? 'book' : 'book-outline'}
                  size={24}
                  color={focused ? '#0f9d58' : '#7d7c7f'} />
                <Text style={{ color: focused ? '#0f9d58' : '#7d7c7f', fontSize: 10 }}>Sách</Text>
              </>
            ),
            tabBarShowLabel: false
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}