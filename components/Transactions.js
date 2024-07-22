import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function Transactions(props) {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({})

    const handleItemPress = async (item) => {
        setSelectedItem(item)
        setShowModal(!showModal);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.renderItem}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.value}>${item.amount.toFixed(2)}
                <AntDesign name="right" size={18} />
            </Text>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={props.transactions}
                    KeyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={renderItem}
                />
            </View>

            {/* movie detail modal */}
            <Modal visible={showModal} transparent={true}>
                <View style={styles.modal.container}>
                    <View style={styles.modal.box}>
                        {/* Item Detail */}
                        <View style={styles.modal.view}>
                            {selectedItem.amount && <Text style={styles.modal.amount}>${selectedItem.amount.toFixed(2)}</Text>}
                            <Text style={styles.modal.text}>{selectedItem.street}</Text>

                            <Text style={styles.modal.text}>{selectedItem.province}</Text>
                        </View>

                        <View>
                            <Text style={styles.modal.text}>Transaction Date:&nbsp;&nbsp;&nbsp;{selectedItem.date}</Text>
                        </View>

                        {/* function area */}
                        <View style={styles.options}>
                            {/* Close Modal */}
                            <TouchableOpacity onPress={handleItemPress}>
                                <View style={styles.close.container}>
                                    <MaterialIcons name='close' size={32} style={styles.close.icon} />
                                    <Text style={styles.close.label}>Close</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    value: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'green'
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
    renderItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },
    modal: {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.25)'
        },
        box: {
            backgroundColor: 'white',
            padding: 20,
            width: '80%',
            borderRadius: 15,
            elevation: 5,
            shadowOpacity: 0.25,
            shadowRadius: 4,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4
            }
        },
        view: {
            borderRadius: 6,
            backgroundColor: '#61dafb',
            borderWidth: 4,
            borderColor: '#20232a',
            padding: 10,
        },
        amount: {
            textAlign: 'center',
            fontSize: 30,
            padding: 4,

        },
        text: {
            marginTop: 10,
            textAlign: 'center',
            fontSize: 20
        }
    },
    close: {
        container: {
            marginTop: 20
        },
        icon: {
            color: '#c00',
            alignSelf: 'center'
        },
        label: {
            alignSelf: 'center',
            fontSize: 12,
        }
    }
});