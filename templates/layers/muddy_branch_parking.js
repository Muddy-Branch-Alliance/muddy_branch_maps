module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Polygon"],
    "layout": {
      "icon-image": "parking",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 0.7, 16, 0.8],
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};