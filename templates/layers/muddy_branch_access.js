module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "circle",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Point"],
    "paint": {
      "circle-color": ["case",["==",["get", "ford"], "yes"], context.colors.water_dark, context.colors.trail_highzoom],
      "circle-radius": ["case",["==",["get", "highway"], "trailhead"], 4.5, 3.5],
      "circle-stroke-width": 1,
      "circle-stroke-color": ["case",["==",["get", "ford"], "yes"], context.colors.water_light, context.colors.halo],
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};