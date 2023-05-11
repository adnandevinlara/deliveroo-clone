import React, { useEffect, useLayoutEffect, useState } from "react";
import { withExpoSnack } from 'nativewind';
import { Image, SafeAreaView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import sanityClient from "../sanity";

// import { styled } from 'nativewind';
// const StyledView = styled(View)
// const StyledText = styled(Text)
// const StyledImage = styled(Image)
const HomeScreen = () => {
    // this navigation object so we can access all
    // feature of navigation.
    // this we use to change the default navigation options/settings.
    const navigation = useNavigation();

    // states
    const [featuredCategory, setFeaturedCategory] = useState([]);


    // this useLayoutEffect load when ui loads
    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "Home Screen",
            headerShown: false,
        })
    },[])
    // useEffect load when component loads or rerender
    
    useEffect( async () => {
        // sanityClient.fetch(`
        //     *[_type == "featured"] {
        //         ...,
        //         restaurants[]->{
        //             ...,
        //             dishes[]->
        //         }
        //     }
        // `).then((data) => {
        //     setFeaturedCategory(data);
        // })
        const url = "https://8xdi8ydi.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20restaurants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D";
        let data = await fetch(url);
        data = await data.json();
        setFeaturedCategory(data.result);

    },[]);

    // console.log(featuredCategory);
    
    return (
                <SafeAreaView className="bg-white pt-2">
                    {/* header */}
                    <View className="flex-row pb-3 mx-2 space-x-2">
                        <Image 
                        className="h-12 w-12 bg-gray-300 rounded-full"
                        source={{
                            uri: "https://thumbs.dreamstime.com/b/delivery-man-riding-blue-scooter-parcel-box-back-food-service-fast-shipping-cartoon-vector-illustration-isolated-186330630.jpg",
                        }}
                        />

                        <View className="flex-1">
                            <Text className="text-gray-400 text-xs">Deliver Now!</Text>
                            <Text className="font-bold text-xl">
                                Current Location
                                <ChevronDownIcon size={20} color="#00CCBB"  />
                            </Text>
                        </View>

                        <UserIcon size={40} color="#00CCBB" />

                    </View>

                    {/* search */}
                    <View className="flex-row items-center space-x-2 pb-2 mx-4">
                        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
                            <MagnifyingGlassIcon color="gray" />
                            <TextInput 
                            placeholder="Resturants and cuisines" keyboardType="default" />
                        </View>
                        <AdjustmentsVerticalIcon color="#00CCBB" />
                    </View>

                    <ScrollView 
                    className="bg-gray-100"
                    contentContainerStyle={{
                        paddingBottom:100,
                    }}
                    >
                        {/* categories */}
                        <Categories />

                        {/* featured */}

                    {
                        featuredCategory?.map((category) =>{
                            return (
                                <FeaturedRow
                                key={category._id}
                                id={category._id} 
                                title={category.name}
                                description={category.short_description}
                                />
                            )
                        })
                    }
                    </ScrollView>


                </SafeAreaView>
     )
};

export default withExpoSnack(HomeScreen);