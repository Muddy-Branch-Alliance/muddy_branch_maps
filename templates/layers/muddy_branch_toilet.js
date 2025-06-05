module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_toilet",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "amenity"], "toilets"],
    "layout": {
      "icon-image": "toilet",
      "icon-size": 1
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};