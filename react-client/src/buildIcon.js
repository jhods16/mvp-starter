const iconBuilder = (type) => {
  let icon = {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Map_symbol_location_02.png",
    anchor: new google.maps.Point(40,40),
    scaledSize: new google.maps.Size(40,40)
  }

  if (type === 'Narcan') {
    icon.url = 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Font_Awesome_5_solid_heartbeat.svg'
  }
  if (type === 'Methadone') {
    icon.url = 'https://cdn.pixabay.com/photo/2014/04/03/11/07/pharmacy-311773_1280.png'
  }
  if (type === 'Suboxone') {
    icon.url = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Rx_symbol_border.svg'
  }
  if (type === 'NA Meeting') {
    icon.url = 'https://upload.wikimedia.org/wikipedia/commons/3/37/People_icon.svg'
  }
  return icon;
};

module.exports = iconBuilder;
