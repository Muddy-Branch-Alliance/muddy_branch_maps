module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_taxiway",
    "type": "line",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 13,
    "filter": ["==", "kind_detail", "taxiway"],
    "paint": {
      "line-color": context.colors.pavementLight,
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        13,
        0,
        13.5,
        1,
        15,
        6
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};