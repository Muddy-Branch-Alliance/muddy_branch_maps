module.exports.default = (context) => {
    const baseStyle = {
      "id": "muddy_branch_watershed",
      "type": "fill",
      "source": "muddy_branch_watershed",
      "paint": {
        "fill-color": context.colors.highlightWatershed,
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 16, 0.2],
      }
    };
    let overrides = {};
    
    return {
      baseStyle,
      overrides
    };
  };