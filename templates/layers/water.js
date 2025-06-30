module.exports.default = (context) => {
  const baseStyle = {
    "id": "water",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "water",
    "filter": ["==", "$type", "Polygon"],
    "paint": {"fill-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 10, context.colors.waterZoomedOut, 14, context.colors.waterZoomedIn ], }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};