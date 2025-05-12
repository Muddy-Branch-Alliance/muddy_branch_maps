module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_runway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["==", "kind_detail", "runway"],
    "paint": {
      "line-color": "#e9e9ed",
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        10,
        0,
        12,
        4,
        18,
        30
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};