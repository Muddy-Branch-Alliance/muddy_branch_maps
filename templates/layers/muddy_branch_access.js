module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "circle",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Point"],
    "paint": {
      "circle-color": context.colors.trail_highzoom,
      "circle-radius": 3.5,
      "circle-stroke-width": 1,
      "circle-stroke-color": context.colors.other_vegetation,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};