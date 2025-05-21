module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_river",
    "type": "line",
    "source": "protomaps",
    "source-layer": "water",
    "minzoom": 9,
    "filter": ["in", "kind", "river"],
    "paint": {
      "line-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 10, context.colors.water_dark, 14, context.colors.water_light ],
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        10,
        1,
        18,
        12
      ]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};