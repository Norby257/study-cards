import React, {Component} from 'react'
import {View, TouchableOpacity, Text, TextInput, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {white, purple} from '../utils/colors' 


// function add question  TEXT INPUT  - onChange OR on Submit? 

function AddQuestion({onChange}) {
    return (
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="enter your question here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
        </Text>
      </View>
    )
}



//   functon add answer TEXT INPUT 
function AddAnswer({onChange}) {
    return (
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="enter your answer here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
        </Text>
      </View>
    )

}

//   function submit(question, answer) BUTTON
 function SubmitNewQuestion({onPress}) {
     return (
        <TouchableOpacity
        onPress={onPress} 
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}>
        
         <Text style={styles.submitBtnTxt}> Submit  </Text>
         </TouchableOpacity>
         
     )
 }





//   class component 

class NewQuestion extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <AddQuestion />

                </View>
                <View style={styles.row}>
                    <AddAnswer />
                </View>

                <View style={styles.row}>
                    <SubmitNewQuestion/>
                </View>

            </View>

        )
    }
}

//   styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7, 
        height: 45, 
        marginLeft: 40,
        marginRight: 40
    },

    submitBtnTxt: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
        
    }
    
})



// export 

export default NewQuestion 