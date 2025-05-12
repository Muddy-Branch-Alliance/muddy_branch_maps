module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_major_casing_early",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "maxzoom": 12,
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "major_road"]
    ],
    "paint": {
      "line-color": "#e0e0e0",
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