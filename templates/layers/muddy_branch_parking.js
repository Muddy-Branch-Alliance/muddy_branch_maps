module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "amenity", "parking"],
    "layout": {
      "icon-image": "p-circle",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 1.5],
      "icon-allow-overlap": true,
      "icon-ignore-placement": true
    },
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};