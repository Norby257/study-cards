import React, {Component} from 'react'
import {View, TouchableOpacity, Text, TextInput, Platform, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {white, purple} from '../utils/colors' 


// function add question  TEXT INPUT  - onChange OR on Submit? 
//   pseudocode / algorithm for adding new question may be similar 
// to adding a new deck 
function AddQuestion({onChange}) {
    return (
        <View style={{padding: 10}}>
        
        <TextInput
          placeholder="enter your question here!"
          onChangeText={(text) => this.setState({text})}
          
       
          
        />
         </View>
       
     
    )
}



//   functon add answer TEXT INPUT 
function AddAnswer({onChange}) {
    return (
        <View style={{padding: 10}}>
        <TextInput
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
        style={styles.iosSubmitBtn}>
        
         <Text style={styles.submitBtnTxt}> Submit  </Text>
         </TouchableOpacity>
         
     )
 }





//   class component 

class NewQuestion extends Component { 
    //   state for question and answer 
    //   this is a controlled component 
   state = {
       question: '',
       answer: ''
   }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <AddQuestion
                        style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}              
                         />

                </View>
                <View >
                    <AddAnswer 
                            
                    />
                </View>

                <View>
                    <SubmitNewQuestion style={styles.iosSubmitBtn}/>
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
        marginRight: 40,
        marginBottom: 20
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