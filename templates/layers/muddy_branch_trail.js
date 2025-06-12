module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_trail",
    "type": "line",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "$type", "LineString"]],
    "paint": {
      "line-color": ["interpolate", ["exponential", 1.2], ["zoom"], 11, context.colors.trail_lowzoom, 18, context.colors.trail_highzoom],
      "line-dasharray": [3, 1],
      "line-width": ["interpolate", ["exponential", 1.2], ["zoom"], 11, 2, 20, 7]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};