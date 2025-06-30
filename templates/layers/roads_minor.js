module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_minor",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "minor_road"],
      ["!=", "kind_detail", "service"]
    ],
    "paint": {
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        11,
        0,
        12.5,
        0.5,
        15,
        2,
        18,
        11
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