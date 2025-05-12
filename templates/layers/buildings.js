module.exports.default = (context) => {
  const baseStyle = {
    "id": "buildings",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "fill-opacity": 0.5,
      "fill-outline-color": "#000000",
      "fill-color": "#ffffff"
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};