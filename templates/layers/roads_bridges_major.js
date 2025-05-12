module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_major",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["==", "kind", "major_road"]],
    "paint": {
      "line-color": "#f5f5f5",
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        6,
        0,
        12,
        1.6,
        15,
        3,
        18,
        13
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};