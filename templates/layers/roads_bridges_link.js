module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_link",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["has", "is_link"]],
    "paint": {
      "line-color": context.colors.white,
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        13.5,
        1,
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