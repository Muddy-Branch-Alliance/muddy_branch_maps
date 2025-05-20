module.exports.default = (context) => {
    const baseStyle = {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": context.colors.ground,
      }
    };
    let overrides = {};
    
    return {
      baseStyle,
      overrides
    };
  };