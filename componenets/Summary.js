import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default function Summary(props) {

    const handleCalcSummary = () => {

        var LowSpendingStore = props.transactions[0].name
        var LowSpendingAmount = props.transactions[0].amount
        var HighSpendingStore = props.transactions[0].name
        var HighSpendingAmount = props.transactions[0].amount
        var TransactionsCount = 0
        var TransactionsBalance = 0

        props.transactions.map((transaction) => {
            if (HighSpendingAmount < transaction.amount) {
                HighSpendingAmount = transaction.amount
                HighSpendingStore = transaction.name
            }

            if (LowSpendingAmount > transaction.amount) {
                LowSpendingAmount = transaction.amount
                LowSpendingStore = transaction.name
            }

            TransactionsCount += 1
            TransactionsBalance += transaction.amount
        })

        return [
            { title: 'Transactions', count: TransactionsCount },
            { title: 'Balance', amount: TransactionsBalance },
            { title: HighSpendingStore, amount: HighSpendingAmount, subTitle: 'High Spending' },
            { title: LowSpendingStore, amount: LowSpendingAmount, subTitle: 'Low Spending' },
        ]
    }

    const [transactionSummary, setTransactionSummary] = useState(handleCalcSummary())

    const renderItem = ({ item }) => (
        <View>
            {item.subTitle && <Text style={styles.subTitle}>{item.subTitle}</Text>}
            <View style={styles.renderItem}>
                <Text style={styles.title}>{item.title}</Text>
                {
                    item.amount == undefined
                        ? <Text style={styles.value}>{item.count}</Text>
                        : <Text style={styles.value}>$ {item.amount.toFixed(2)}</Text>
                }
            </View>
        </View >
    );

    return (
        <>
            <View>
                <FlatList
                    data={transactionSummary}
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
    title: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    subTitle: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'green'
    },
    value: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'gray'
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
});