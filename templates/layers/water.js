module.exports.default = (context) => {
  const baseStyle = {
    "id": "water",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "water",
    "filter": ["==", "$type", "Polygon"],
    "paint": {"fill-color": "#80deea"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};