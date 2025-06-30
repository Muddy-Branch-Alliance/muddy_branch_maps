module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_rail",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["==", "kind", "rail"],
    "paint": {
      "line-dasharray": [0.3, 0.75],
      "line-opacity": 0.5,
      "line-color": context.colors.pavementDark,
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        3,
        0,
        6,
        0.15,
        18,
        9
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};