module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_pier",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["==", "kind_detail", "pier"],
    "paint": {
      "line-color": "#e0e0e0",
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        12,
        0,
        12.5,
        0.5,
        20,
        16
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};