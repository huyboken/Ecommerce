import React, { useRef, useEffect, useState } from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    Alert,
    StyleSheet,
    Pressable,
    Platform,
} from 'react-native';
import { Colors } from '../../Constant';

const NotiModal = ({
    title,
    content,
    modalVisible,
    setModalVisible,
    autoOff,
    actionYes,
}) => {
    const [time, setTime] = useState(5);
    const timerRef = useRef(time);

    useEffect(() => {
        if (autoOff) {
            const timerId = setInterval(() => {
                timerRef.current -= 1;
                if (timerRef.current < 0) {
                    clearInterval(timerId);
                    setModalVisible(false);
                } else {
                    setTime(timerRef.current);
                }
            }, 1000);

            return () => {
                clearInterval(timerId);
                setTime((timerRef.current = 5));
            };
        }
    }, [modalVisible]);

    const modalHeader = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.divider}></View>
        </View>
    );

    const modalBody = (
        <View style={styles.modalBody}>
            <Text style={styles.bodyText}>{content}</Text>
        </View>
    );

    const modalFooter = (
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            {!autoOff && (
                <View style={{ flexDirection: 'row-reverse', margin: 10 }}>
                    <TouchableOpacity
                        style={{ ...styles.actions, backgroundColor: '#db2828' }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={styles.actionText}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.actions, backgroundColor: '#21ba45' }}
                        onPress={() => {
                            actionYes(), setModalVisible(!modalVisible);
                        }}>
                        <Text style={styles.actionText}>Yes</Text>
                    </TouchableOpacity>
                </View>
            )}
            {autoOff && (
                <Text style={{ textAlign: 'center', paddingVertical: 10, color: Colors.BLACK }}>
                    Notification closes itself after{' '}
                    <Text style={{ color: 'red' }}>{time}</Text>s
                </Text>
            )}
        </View>
    );

    const modalContainer = (
        <View style={styles.modalContainer}>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </View>
    );

    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            collapsable={false}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <Pressable
                onPress={event =>
                    event.target == event.currentTarget && setModalVisible(!modalVisible)
                }
                style={styles.modal}>
                <View>{modalContainer}</View>
            </Pressable>
        </Modal>
    );
};

export default NotiModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#f9fafb',
        width: Platform.isPad ? 400 : '80%',
        padding: 10,
        borderRadius: 5,
    },
    modalHeader: {},
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: '#000',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'lightgray',
    },
    modalBody: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    modalFooter: {},
    actions: {
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    actionText: {
        color: '#fff',
    },
    bodyText: {
        color: Colors.BLACK
    }
});

// const test = () => {
//     const [modalVisible, setModalVisible] = useState(false)
//     return (
//         <SafeAreaView>
//             <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
//                 <Text>Show</Text>
//             </TouchableOpacity>
//             <NotiModal
//                 title={"Delete Your Account"}
//                 content={"Are you sure you want to delete your account ?"}
//                 modalVisible={modalVisible}
//                 setModalVisible={setModalVisible}
//                 // autoOff={true}
//                 actionYes={() => { alert("Yes") }}
//             />
//         </SafeAreaView>
//     )
// }
