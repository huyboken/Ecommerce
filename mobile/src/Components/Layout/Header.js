import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Display from '../../Utils/Display';
import { Colors } from '../../Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigation = useNavigation();
    const { products } = useSelector(state => state.products);
    const [data, setData] = useState(products);
    const [search, setSearch] = useState('');

    const searchHandler = text => {
        if (text) {
            const newData =
                data &&
                data.filter(item => {
                    const iteamData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return iteamData.indexOf(textData) > -1;
                });
            setData(newData);
            setSearch(text);
        } else {
            setData(products);
            setSearch(text);
        }
    };

    const openProductDetails = item => () => {
        navigation.navigate('ProductDetails', item);
    };

    return (
        <>
            <View style={styles.headerMain}>
                <View style={styles.headerFlex}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Ionicons name="menu-outline" size={30} />
                    </TouchableOpacity>
                    <TextInput
                        placeholderTextColor={'#333'}
                        placeholder={'Search...'}
                        style={styles.searchBox}
                        value={search}
                        onChangeText={text => searchHandler(text)}
                    />
                    <TouchableOpacity>
                        <Ionicons name="search-outline" style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            {search.length !== 0 ? (
                <>
                    <ScrollView
                        style={{
                            position: 'absolute',
                            width: '100%',
                            left: 0,
                            top: Platform.isPad
                                ? Display.height / 9 - 30
                                : Platform.OS === 'ios'
                                    ? Display.height / 6 - 30
                                    : Display.height / 8 - 40,
                            zIndex: 100,
                            height: Display.height * 1,
                            backgroundColor: 'rgba(61, 107, 115, 0.80)',
                            paddingVertical: 10,
                        }}>
                        {Array.isArray(data) &&
                            data.map((item, index) => (
                                <TouchableOpacity
                                    onPress={openProductDetails(item)}
                                    key={index}>
                                    <View
                                        style={{
                                            margin: 15,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Image
                                            source={{ uri: item.images[0].url }}
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <Text
                                            style={{
                                                color: Colors.WHITE,
                                                fontWeight: '700',
                                                paddingLeft: 20,
                                            }}>
                                            {item.name}
                                        </Text>
                                        <Ionicons
                                            name="star"
                                            color={Colors.GOLDEN_ROD}
                                            size={18}
                                            style={{ paddingLeft: 20 }}
                                        />
                                        <Text style={{ color: Colors.WHITE, paddingLeft: 5 }}>
                                            ({item.numOfReviews})
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </>
            ) : null}
        </>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        width: Display.width,
        height: Platform.isPad ? Display.width / 9 - 35 : Display.width / 4 - 35,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        padding: 10,
        justifyContent: 'center',
        marginVertical: Platform.isPad && 10,
    },
    headerFlex: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchBox: {
        width: Display.width - 70,
        height: Platform.isPad ? Display.width / 15 - 15 : Display.width / 7 - 15,
        backgroundColor: Colors.LIGHT_GREY1,
        marginHorizontal: 10,
        borderRadius: Platform.isPad ? 30 : 25,
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 40,
        position: 'relative',
    },
    searchIcon: {
        right: Platform.isPad ? 55 : 45,
        fontSize: 20,
    },
});
