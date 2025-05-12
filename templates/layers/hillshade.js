module.exports.default = (context) => {
  const baseStyle = {
    "id": "hillshade",
    "type": "hillshade",
    "source": "montgomery_county_dem",
    "paint": {
      "hillshade-method": "standard",
      "hillshade-illumination-altitude": 45,
      "hillshade-illumination-direction": 315,
      "hillshade-shadow-color": "#000000",
      "hillshade-highlight-color": "#FFFFFF",
      "hillshade-accent-color": "#000000",
      "hillshade-exaggeration": 0.5
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};