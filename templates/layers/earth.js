module.exports.default = (context) => {
  const baseStyle = {
    "id": "earth",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "earth",
    "filter": ["==", "$type", "Polygon"],
    "layout": {"visibility": "none"},
    "paint": {"fill-color": "#e2dfda"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};