module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_landmark",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all",["==", "$type", "Polygon"],["!=", "amenity", "parking"]],
    "layout": {
      "icon-image": ["case",["==",["get", "amenity"], "toilets"], "outhouse","finish_flag1"],
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 1.5]
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};