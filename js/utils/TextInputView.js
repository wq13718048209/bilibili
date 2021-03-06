/**
 * textInput 输出中文的问题
 */
import React from 'react';
import {Platform, TextInput} from 'react-native';

export class TextInputView extends React.Component{


    shouldComponentUpdate(nextProps){

        return Platform.OS !== 'ios' || (this.props.value === nextProps.value &&
            (nextProps.defaultValue == undefined || nextProps.defaultValue == '' )) ||
            (this.props.defaultValue === nextProps.defaultValue &&  (nextProps.value == undefined || nextProps.value == '' ));
    }

    render(){

        return(
            <TextInput {...this.props}/>
        )

    }

}