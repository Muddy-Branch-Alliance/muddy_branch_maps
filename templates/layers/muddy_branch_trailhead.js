module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_trailhead",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "highway", "trailhead"]],
    "layout": {
      "icon-image": "place_star",
      "icon-size": ["interpolate", ["exponential", 1.6], ["zoom"], 10, 0.3, 14, 1],
      "icon-allow-overlap": true,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};