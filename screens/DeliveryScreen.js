import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from 'react-native-progress';
// import MapView, { Marker } from 'react-native-maps';
const DeliverScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return ( 
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("home")}>
                        <XMarkIcon size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="text-lg font-light text-white">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-md z-50">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimate Arrival</Text>
                            <Text className="text-4xl font-bold">24-55 Minutes</Text>
                        </View>
                        <Image 
                            source={{uri: "https://links.papareact.com/fls",}}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar progress={0.3} width={200} indeterminate={true} animated={true} color="#00CCBB" />        
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
            {/* this map view not work on web text or see in mobile */}
            {/* <MapView
            initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            className="flex-1 -mt-10 z-0"
            mapType="mutedStandard"
            >
            <Marker
            
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long    
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
            />
            </MapView> */}
            <View className="flex-1 justify-center items-center p-5">
                <Text className="text-xl text-white font-bold text-center">
                    Thanks for odering!
                </Text>
            </View>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
                <Image 
                    source={{uri: "https://links.papareact.com/wru"}}
                    className="h-12 w-12 bg-gray-300 rounded-full ml-5"
                />
                <View className="flex-1">
                    <Text className="text-lg">Adnan Zaib</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
            
        </View>
     );
}
 
export default DeliverScreen;