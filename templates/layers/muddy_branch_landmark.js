module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_landmark",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all",["==", "$type", "Polygon"],["!=", "amenity", "parking"]],
    "layout": {
      "icon-image": ["case",["==",["get", "amenity"], "toilets"], "toilet","finish_flag2"],
      "text-field": ["step", ["zoom"], "", 16, "Stream Crossing"],
      "icon-size": ["interpolate", ["exponential", 1], ["zoom"], 13, 1, 16, 1.2, 18, 1.5],
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};