module.exports.default = (context) => {
  const baseStyle = {
    "id": "buildings",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "buildings",
    "paint": {
      "fill-color": context.colors.pavementLight,
      "fill-opacity": [ "interpolate", ["exponential",1.5], ["zoom"], 13, 0.5, 16, 1 ],
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};