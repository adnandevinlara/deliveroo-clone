import { View, Text,Image, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
const PrepareOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('delivery');
        },4000)
    },[])
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            
            <Animatable.Image 
                source={require("../assets/delivery-boy.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-60 w-96 rounded-lg bg-[#00CCBB]"
            />
            <Animatable.Text 
                animation="slideInUp"
                iterationCount={1}
                className="my-10 text-white text-lg text-center font-bold"
            >
                Preparing your order please wait...
            </Animatable.Text>
            {/* <Progress.Circle size={60} indeterminate={true} color="white" style={{backgroundColor:'#00CCBB'}} /> */}
        </SafeAreaView> 
        
     );
}
 
export default PrepareOrderScreen;