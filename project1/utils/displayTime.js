const convertToDisplayTime = (time) => {
  const minutes = Math.floor(time % 3600 / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds}`
}

export default convertToDisplayTime
