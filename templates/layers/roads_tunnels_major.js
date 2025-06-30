module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_major",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["==", "kind", "major_road"]],
    "paint": {
      "line-color": context.colors.pavementMedium,
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