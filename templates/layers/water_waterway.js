module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_stream",
    "type": "line",
    "source": "protomaps",
    "source-layer": "water",
    "filter": ["in", "kind", "stream","river"],
    "paint": {
      "line-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 10, context.colors.water_dark, 14, context.colors.water_light ],
      "line-blur": 1,
      "line-width": [
        "interpolate",
        ["exponential", 1.2],
        ["zoom"],
        10,
        1,
        12,
        1.5,
        18,
        8
      ]}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};