import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function Transactions(props) {

    const renderItem = ({ item, index }) => (
        <View>
            <Text style={styles.item}>{index} | {item.name} | ${item.amount} &gt;</Text>
        </View>
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
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    separator: {
        border: 1,
        borderColor: "red"
    }
});