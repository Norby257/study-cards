import React from 'react';
import {  Text, View, StatusBar} from 'react-native'
import { Constants } from 'expo'

import {white, purple, lightBlue, darkerBlue, darkblue} from '../utils/colors'

export function StudyCardsStatusBar({ backgroundColor, ...props}) {
    return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    
      </View>
    )
  } 