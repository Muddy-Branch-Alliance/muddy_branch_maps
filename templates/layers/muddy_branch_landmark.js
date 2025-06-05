module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_landmark",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all",["==", "$type", "Polygon"],["!=", "amenity", "parking"]],
    "layout": {
      "icon-image": ["case",["==",["get", "amenity"], "toilets"], "outhouse","finish_flag2"],
      "text-field": ["step", ["zoom"], "", 16, "Stream Crossing"],
      "icon-size": context.settings.iconSize
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};