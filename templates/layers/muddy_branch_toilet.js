module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_toilet",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "amenity"], "toilets"],
    "layout": {
      "icon-image": "outhouse2",
      "icon-size": context.settings.iconSizeToilets,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};