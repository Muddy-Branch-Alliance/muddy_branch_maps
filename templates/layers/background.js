module.exports.default = (context) => {
    const baseStyle = {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 10, context.colors.ground_dark, 14, context.colors.ground_light ],
      }
    };
    let overrides = {};
    
    return {
      baseStyle,
      overrides
    };
  };