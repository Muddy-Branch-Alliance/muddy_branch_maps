module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_ford",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "ford"], "yes"],
    "minzoom": 15,
    "layout": {
      "icon-image": "ford2",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 15, 0.5, 18, 2],
      "icon-allow-overlap": true,
      "icon-ignore-placement": true
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};