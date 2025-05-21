module.exports.default = (context) => {
    const baseStyle = {
      "id": "muddy_branch_watershed",
      "type": "fill",
      "source": "muddy_branch_watershed",
      "filter": ["all", ["==", "$type", "Polygon"]],
      "paint": {"fill-color": [ "interpolate", ["exponential", 0.5], ["zoom"], 9, context.colors.ground_dark, 14, context.colors.ground_light ]}
    };
    let overrides = {};
    
    return {
      baseStyle,
      overrides
    };
  };