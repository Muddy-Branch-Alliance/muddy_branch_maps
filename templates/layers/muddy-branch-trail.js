module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy-branch-trail",
    "type": "line",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "$type", "LineString"]],
    "paint": {
      "line-color": "#e5b636",
      "line-dasharray": [3, 1],
      "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 12, 1, 20, 7]
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};