module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy-branch-trail",
    "type": "line",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "$type", "LineString"]],
    "paint": {
      "line-color": context.colors.trail,
      "line-dasharray": [3, 1],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 10, 1.2, 20, 7]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};