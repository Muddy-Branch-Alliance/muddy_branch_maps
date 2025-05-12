module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_river",
    "type": "line",
    "source": "protomaps",
    "source-layer": "water",
    "minzoom": 9,
    "filter": ["in", "kind", "river"],
    "paint": {
      "line-color": "#80deea",
      "line-width": [
        "interpolate",
        ["exponential", 1.6],
        ["zoom"],
        9,
        0,
        9.5,
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