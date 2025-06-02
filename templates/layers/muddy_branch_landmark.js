module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_landmark",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all",["==", "$type", "Polygon"],["!=", "amenity", "parking"]],
    "layout": {
      "icon-image": ["case",["==",["get", "amenity"], "toilets"], "toilet-solid-2","landmark-solid-2"],
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 1.5]
    },
    "paint": {
      "icon-color": context.colors.ground_light,
      "icon-halo-color": "gray",
      "icon-halo-width": 2,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};