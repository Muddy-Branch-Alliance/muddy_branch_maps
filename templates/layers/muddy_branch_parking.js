module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Polygon"],
    "layout": {
      "icon-image": "poi_car_shop",
      "icon-size": 0.7
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};