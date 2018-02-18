import React from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native'
import style from "./scenes.tab.add-place.style"
import I18n from '../../../I18n/index'


export default renderView = (component) => {
    return (
        <View style={style.view}>
            <Text style={style.text}>Title</Text>
            <TextInput
                style={style.textInput}
            />
            <Text style={style.text}>Latitude</Text>
            <TextInput
                keyboardType="numbers-and-punctuation"
                style={style.textInput}
            />
            <Text style={style.text}>Longitude</Text>
            <TextInput
                keyboardType="numbers-and-punctuation"
                style={style.textInput}
            />
            <TouchableHighlight style={style.button}>
                <Text style={style.buttonText}>Add Place</Text>
            </TouchableHighlight>
        </View>
    )
}