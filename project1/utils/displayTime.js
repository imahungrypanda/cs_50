const convertToDisplayTime = (time) => {
  const minutes = Math.floor(time % 3600 / 60)
  const seconds = Math.floor(time % 60)

  return `${minutes < 10 ? 0 : null}${minutes}:${seconds < 10 ? 0 : null}${seconds}`
}

export default convertToDisplayTime
