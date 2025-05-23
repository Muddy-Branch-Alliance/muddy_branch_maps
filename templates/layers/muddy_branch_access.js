module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["any", ["==", "highway", "trailhead"],["==", "$type", "Polygon"]],
    "layout": {
      "icon-image": [
        "match",
        ["geometry-type"],
        "Polygon",
        "poi_car_shop",
        "place_dot"
      ],
      "icon-size": [
        "match",
        ["geometry-type"],
        "Polygon",
        0.7,
        0.5
      ],
      "icon-allow-overlap": true,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};