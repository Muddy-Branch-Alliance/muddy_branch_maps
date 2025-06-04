module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Point"],
    "layout": {
      "icon-image": "car_11",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 13, 1, 16, 1.5],
      "icon-allow-overlap": true,
      "icon-ignore-placement": true
    },
    "paint": {
      "icon-color": ["case",["==",["get", "ford"], "yes"], context.colors.water_dark, context.colors.trail_highzoom],
      "icon-halo-color": ["case",["==",["get", "ford"], "yes"], context.colors.water_light, context.colors.halo],
      "icon-halo-width": 1,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};