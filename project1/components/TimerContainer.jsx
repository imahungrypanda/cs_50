import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Timer from './Timer'

const START_WORK_TIME_AMOUNT = 3 //25 * 60
const START_BREAK_TIME_AMOUNT = 5 //5 * 60

const TimerContainer = () => {
  return (
    <Timer
      startWorkTime={START_WORK_TIME_AMOUNT}
      startBreakTime={START_BREAK_TIME_AMOUNT}
    />
  )
}

export default TimerContainer
