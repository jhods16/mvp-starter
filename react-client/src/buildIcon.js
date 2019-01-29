const iconBuilder = (type) => {
  let icon = {
    url: './images/aqua.png',
    anchor: new google.maps.Point(0,0),
    scaledSize: new google.maps.Size(35,28)
  }

  if (type === 'Narcan') {
    icon.url = './images/purple.png'
  }
  if (type === 'Methadone') {
    icon.url = './images/green.png'
  }
  if (type === 'Suboxone') {
    icon.url = './images/yellow.png'
  }
  if (type === 'NA Meeting') {
    icon.url = './images/pink.png'
  }
  if (type === 'Other Meeting') {
    icon.url = './images/blue.png'
  }
  return icon;
};

module.exports = iconBuilder;