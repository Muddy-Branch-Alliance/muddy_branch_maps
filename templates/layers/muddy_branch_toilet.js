module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_toilet",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "amenity"], "toilets"],
    "layout": {
      "icon-image": "outhouse",
      "icon-size": context.settings.iconSizeAmenities,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};