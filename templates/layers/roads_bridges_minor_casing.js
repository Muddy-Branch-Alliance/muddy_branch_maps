module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_bridges_minor_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 12,
    "filter": ["all", ["has", "is_bridge"], ["==", "kind", "minor_road"]],
    "paint": {
      "line-color": "#e0e0e0",
      "line-gap-width": [
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
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        13.5,
        0.8
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};