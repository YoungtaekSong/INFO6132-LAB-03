import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function Transactions(props) {

    const handleItemPress = (item) => {
        console.log(item.amount);
        console.log(item.id);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.renderItem}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>${item.amount.toFixed(2)} &gt;</Text>
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
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
    renderItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});