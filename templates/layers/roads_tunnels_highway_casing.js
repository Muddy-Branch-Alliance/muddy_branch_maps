module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_highway_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": [
      "all",
      ["!has", "is_tunnel"],
      ["!has", "is_bridge"],
      ["==", "kind", "highway"],
      ["!has", "is_link"]
    ],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-dasharray": [6, 0.5],
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
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        7,
        0,
        7.5,
        1,
        20,
        15
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};