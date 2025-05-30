module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", "$type", "Point"],
    "layout": {
      "icon-image": "place_dot",
      "icon-size": 0.5,
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