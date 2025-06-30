module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_link",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["has", "is_link"]],
    "paint": {
      "line-color": context.colors.pavementMedium,
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