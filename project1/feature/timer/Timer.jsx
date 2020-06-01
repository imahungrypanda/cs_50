import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { convertToDisplayTime, vibrate } from '../../utils'

const styles = StyleSheet.create({
  timerView: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
  },
})

const Timer = ({ startWorkTime, startBreakTime }) => {
  const [useWorkTime, setUseWorkTime] = React.useState(true)
  const [time, setTime] = React.useState(startWorkTime)
  let interval = null

  const resetTime = React.useCallback(() => {
    if (useWorkTime) {
      setTime(startBreakTime)
    } else {
      setTime(startWorkTime)
    }
  }, [useWorkTime])

  React.useEffect(() => {
    interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  React.useEffect(() => {
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
    </View>
  )
}

export default Timer
