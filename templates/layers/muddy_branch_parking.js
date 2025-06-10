module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "amenity", "parking"],
    "layout": {
      "icon-image": "p-circle",
      "icon-size": context.settings.iconSizeAmenities,
    },
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};