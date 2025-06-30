module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_major",
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
      ],
      "line-color": context.colors.pavementLight
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};