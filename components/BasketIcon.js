import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();
    if(items.length === 0) return null;
    return ( 
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={()=>navigation.navigate('basket')} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
                <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-lg text-white font-extrabold text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">{basketTotal} GBP</Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default BasketIcon;