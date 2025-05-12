module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_link_casing",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 13,
    "filter": ["has", "is_link"],
    "paint": {
      "line-color": "#e0e0e0",
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
        13,
        0,
        13.5,
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