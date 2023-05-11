import { Image, Text, TouchableOpacity, View } from "react-native";
import { urlFor } from "../sanity";
import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems, selectBasketItemsWithId, removeFromBasket } from "../features/basketSlice";

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {
    const [isPress, setIsPress] = useState(false);
    // const items = useSelector(selectBasketItems);
    const items = useSelector((state) => selectBasketItemsWithId(state,id));
    /*
    useDispatch is a hook of redux to call/pass action
    in redux
    */ 
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({
            id,
            name,
            description,
            price,
            image
        }));
    }
    const removeItemFromBasket = () => {
        if(!items.length > 0) return;
        dispatch(removeFromBasket({id}));
    }
    console.log(items);
    return ( 
        <>
        <TouchableOpacity onPress={()=> setIsPress(!isPress)} className={`bg-white border border-gray-200  p-4
        ${isPress && "border-b-0"}`}
        >
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-600 mt-2">{price} <Text className="text-bold">GBP</Text></Text>
                </View>
                <View>
                    <Image
                    style={{ borderWidth:1, borderColor:"#F3F3F4"}} 
                    source={{uri: urlFor(image).url()}}
                    className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
            
        </TouchableOpacity>
        {
            isPress && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity onPress={removeItemFromBasket}
                        disabled={!items.length}
                        >
                            <MinusCircleIcon color="#00CCBB" size={30} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon
                            color="#00CCBB" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        </> 
    );
}
 
export default DishRow;