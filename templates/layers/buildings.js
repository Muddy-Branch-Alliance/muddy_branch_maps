module.exports.default = (context) => {
  const baseStyle = {
    "id": "buildings",
    "type": "line",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "line-opacity": context.opacity.half,
      "line-color": context.colors.built_dark,
      "line-width": {
        "base": 0.5,
        "stops": [
          [12, 0.25],
          [14, 0.5],
          [16, 1]
        ]
      }
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};