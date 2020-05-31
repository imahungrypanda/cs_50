import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { convertToDisplayTime } from '../utils'

const Timer = ({ startTime }) => {
  const [time, setTime] = React.useState(startTime)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return <Text>Timer: {convertToDisplayTime(time)}</Text>
}

export default Timer
