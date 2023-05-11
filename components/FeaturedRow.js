import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";
import { useEffect, useState } from "react";
const FeaturedRow = ({id, title, description}) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "featured" && _id == $id] {
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type->{
                        name
                    }
                },
            }[0]
            `,{id:id}).then(data => {
                setRestaurants(data?.restaurants);
            });
    },[]);
    // console.log(restaurants);
    return ( 
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,    
            }}
            className="pt-4"
            >
                {/* resturants cards */}
                {
                restaurants?.map((restaurant) => (
                    <ResturantCard 
                    key={restaurant._id}
                    id={restaurant._id}
                    imgUrl={restaurant.image}
                    title={restaurant.name}
                    rating = {restaurant.rating}
                    genre = {restaurant.type?.name}
                    address = {restaurant.address}
                    short_description = {restaurant.short_description}
                    dishes={restaurant.dishes}
                    long={restaurant.long}
                    lat={restaurant.lat}

                />
                ))
                }
               
            </ScrollView>
        </View>
     );
}
 
export default FeaturedRow;