module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "amenity", "parking"],
    "layout": {
      "icon-image": "parking",
      "icon-size": context.settings.iconSize,
      "icon-allow-overlap": true,
    },
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};