module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_major_casing_late",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "major_road"]
    ],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-gap-width": [
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