module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_highway_casing_early",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "maxzoom": 12,
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "highway"],
      ["!has", "is_link"]
    ],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-gap-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        3,
        0,
        3.5,
        0.5,
        18,
        15
      ],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 7, 0, 7.5, 1]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};