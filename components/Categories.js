import { withExpoSnack } from 'nativewind';
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from 'react';
import sanityClient, { urlFor } from "../sanity";
const Categories = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]`
        ).then(data => {
            setCategories(data);
        });
    },[]);
    console.log(categories);
    return ( 
        <ScrollView 
        contentContainerStyle={{
            paddingTop:10,
            paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >

            {
                categories?.map((category) => (
                    <CategoryCard
                    key={category._id} 
                    imgUrl= {urlFor(category.image).url()}
                    title={category.name} />
                ))
            }
            {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 1' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 2' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 3' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 4' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 5' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 6' />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" 
            title='testing 7' /> */}
            </ScrollView>
     );
}
 
export default Categories;