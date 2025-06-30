module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_link_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["has", "is_link"]],
    "paint": {
      "line-color": context.colors.pavementMedium,
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
        1.5
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};