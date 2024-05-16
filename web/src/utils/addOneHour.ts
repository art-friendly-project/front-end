function addOneHour(time: string) {
  let [hours, minutes] = time.split(':');

  hours = String(Number(hours) + 1);

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export default addOneHour;
