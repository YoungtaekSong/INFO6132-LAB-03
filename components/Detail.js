import {
    Text,
    View
} from 'react-native'

export default function Detail(props, params) {

    console.log(">>>>>>>>>>>>>>")
    console.log(props)
    console.log(props.id)
    console.log(params)

    return (
        <>
            <View>
                <Text>Detail</Text>
            </View>
        </>
    )
}