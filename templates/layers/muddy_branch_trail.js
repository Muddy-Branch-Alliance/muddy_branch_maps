module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_trail",
    "type": "line",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "$type", "LineString"]],
    "paint": {
      "line-color": ["interpolate", ["exponential", 2.5], ["zoom"], 11, context.colors.trail_lowzoom, 18, context.colors.trail_highzoom],
      "line-dasharray": ["step",["zoom"], ["literal", [3, 1]], 16, ["literal", [2, 1]], 18, ["literal", [2, 0]] ],
      "line-width": ["interpolate", ["exponential", 1.5], ["zoom"], 11, 1.5, 20, 12]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};