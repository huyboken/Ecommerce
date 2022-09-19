import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Colors } from '../../Constant';
import ProductCard from '../Home/ProductCard';
import Display from '../../Utils/Display';

const FilterProducts = () => {
    const { products } = useSelector(state => state.products);
    const [data, setData] = useState(products);
    const [active, setActive] = useState('All');

    const categories = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Personal',
        },
        {
            id: 3,
            name: 'cloth',
        },
        {
            id: 4,
            name: 'Ladies Cloth',
        },
        {
            id: 5,
            name: 'Gift',
        },
        {
            id: 6,
            name: 'Food',
        },
        {
            id: 7,
            name: 'Electronics',
        },
        {
            id: 8,
            name: 'Sports',
        },
    ];

    const productsFilter = active => () => {
        if (active !== 'All') {
            setData([...products.filter(item => item.category === active)]);
        } else {
            setData(products);
        }
        setActive(active);
    };

    return (
        <View>
            <ScrollView
                style={{ flexDirection: 'row', marginVertical: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        style={[
                            styles.category,
                            active === item.name && styles.categoryActive,
                        ]}
                        key={index}
                        onPress={productsFilter(item.name)}>
                        <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.productCard}>
                {data.length === 0 ? (
                    <Text
                        style={{
                            color: Colors.BLACK,
                            marginTop: 100,
                            alignSelf: 'center',
                            fontSize: 16,
                        }}>
                        No Products Found!
                    </Text>
                ) : (
                    <>
                        {data &&
                            data.map(item => <ProductCard key={item._id} product={item} />)}
                    </>
                )}
            </View>
        </View>
    );
};

export default FilterProducts;

const styles = StyleSheet.create({
    category: {
        backgroundColor: Colors.CRIMSON,
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryActive: {
        backgroundColor: Colors.BLACK,
    },
    productCard: {
        width: Display.width * 1 - 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
    },
});
