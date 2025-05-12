module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["==", "kind", "minor_road"]],
    "paint": {
      "line-color": "#ffffff",
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        11,
        0,
        12.5,
        0.5,
        15,
        2,
        18,
        11
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};