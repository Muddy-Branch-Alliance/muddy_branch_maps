module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["all",["==", "$type", "Polygon"],["==", "amenity", "parking"]],
    "layout": {
      "icon-image": "p-circle",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 1.5],
      "icon-allow-overlap": true,
      "icon-ignore-placement": true
    },
    "paint": {
      "icon-color": context.colors.parkingIcon,
      "icon-halo-color": context.colors.halo,
      "icon-halo-width": 1,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};