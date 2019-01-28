const iconBuilder = (type) => {
  let icon = {
    url: './images/squat-marker-cyan.svg',
    anchor: new google.maps.Point(0,0),
    scaledSize: new google.maps.Size(40,40)
  }

  if (type === 'Narcan') {
    icon.url = './images/squat-marker-crimson.svg'
  }
  if (type === 'Methadone') {
    icon.url = './images/squat-marker-green.svg'
  }
  if (type === 'Suboxone') {
    icon.url = './images/squat-marker-yellow.svg'
  }
  if (type === 'NA Meeting') {
    icon.url = './images/squat-marker-purple.svg'
  }
  return icon;
};

module.exports = iconBuilder;
