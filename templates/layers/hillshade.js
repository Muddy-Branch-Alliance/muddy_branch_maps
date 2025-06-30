module.exports.default = (context) => {
  const baseStyle = {
    "id": "hillshade",
    "type": "hillshade",
    "source": "hillshade",
    "paint": {
      "hillshade-method": "igor",
      "hillshade-illumination-altitude": 45,
      "hillshade-illumination-direction": 315,
      "hillshade-shadow-color": context.colors.hillshadeShadow,
      "hillshade-highlight-color": context.colors.white,
      "hillshade-accent-color": context.colors.black,
      "hillshade-exaggeration": 0.5
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};