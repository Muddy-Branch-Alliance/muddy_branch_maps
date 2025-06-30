module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["in", "kind", "other", "path"]],
    "paint": {
      "line-color": context.colors.pavementLight,
      "line-dasharray": [2, 1],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 14, 0, 20, 7]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};