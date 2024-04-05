export const formatTime = (time) => {
  const getSeconds = time % 60;
  const minutes = Math.floor(time / 60);
  const getMinutes = minutes % 60;
  const getHours = Math.floor(time / 3600);

  return `${getHours < 10 ? "0" + getHours : getHours} : ${
    getMinutes < 10 ? "0" + getMinutes : getMinutes
  } : ${getSeconds < 10 ? "0" + getSeconds : getSeconds}`;
};
