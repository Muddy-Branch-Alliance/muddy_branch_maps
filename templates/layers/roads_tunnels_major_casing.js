module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_major_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "major_road"]
    ],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-dasharray": [3, 2],
      "line-gap-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        7,
        0,
        7.5,
        0.5,
        18,
        13
      ],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 9, 0, 9.5, 1]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};