module.exports.default = (context) => {
    const baseStyle = {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 10, context.colors.backgroundDark, 14, context.colors.backgroundLight ],
        "background-opacity": 0.25,
      }
    };
    let overrides = {};
    
    return {
      baseStyle,
      overrides
    };
  };