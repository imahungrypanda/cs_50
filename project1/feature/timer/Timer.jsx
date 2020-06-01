import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../../components/Button'
import { convertToDisplayTime, vibrate } from '../../utils'

const styles = StyleSheet.create({
  timerView: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
  },
  timerButtonContainer: {
    marginTop: 10,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Timer = ({ startWorkTime, startBreakTime }) => {
  const [useWorkTime, setUseWorkTime] = React.useState(true)
  const [time, setTime] = React.useState(startWorkTime)

  const savedCallback = React.useRef()
  const interval = React.useRef()

  const resetTime = () => {
    if (useWorkTime) {
      setTime(startBreakTime)
    } else {
      setTime(startWorkTime)
    }
  }

  const stopCountDown = () => {
    clearInterval(interval.current)
  }

  const startCounter = () => {
    interval.current = setInterval(() => {
      savedCallback.current()
    }, 1000)
  }

  React.useEffect(() => {
    startCounter()

    return () => stopCountDown
  }, [])

  React.useEffect(() => {
    savedCallback.current = () => setTime(time - 1)
    if (time < 0) {
      // vibrate()
      resetTime()
      setUseWorkTime(!useWorkTime)
    }
  }, [time])

  return (
    <View style={styles.timerView}>
      <Text style={styles.timerText}>{useWorkTime ? 'Work' : 'Relax'}</Text>
      <Text style={styles.timerText}>Timer: {convertToDisplayTime(time)}</Text>
      <View style={styles.timerButtonContainer}>
        <Button title='Reset' onPress={resetTime}></Button>
        <Button title='Stop' onPress={stopCountDown}></Button>
        <Button title='Start' onPress={startCounter}></Button>
      </View>
    </View>
  )
}

export default Timer
