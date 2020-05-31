import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { convertToDisplayTime } from '../utils'

const Timer = ({ startWorkTime, startBreakTime }) => {
  const [useWorkTime, setUseWorkTime] = React.useState(true)
  const [time, setTime] = React.useState(startWorkTime)
  let interval = null

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
      if (useWorkTime) {
        setTime(startBreakTime)
      } else {
        setTime(startWorkTime)
      }

      setUseWorkTime(!useWorkTime)
    }
  }, [time])

  return (
    <View>
      <Text>{useWorkTime ? 'Work' : 'Relax'}</Text>
      <Text>Timer: {convertToDisplayTime(time)}</Text>
    </View>
  )
}

export default Timer
