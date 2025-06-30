module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_tunnels_link_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "filter": ["all", ["has", "is_tunnel"], ["has", "is_link"]],
    "paint": {
      "line-color": context.colors.pavementMedium,
      "line-dasharray": [3, 2],
      "line-gap-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        13.5,
        1,
        18,
        11
      ],
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        12,
        0,
        12.5,
        1
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};