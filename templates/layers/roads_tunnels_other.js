module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_other",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["in", "kind", "other", "path"]],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-dasharray": [4.5, 0.5],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 14, 0, 20, 7]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};