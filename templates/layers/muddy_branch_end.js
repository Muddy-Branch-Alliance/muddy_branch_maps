module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_end",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "minzoom": 10,
    "filter": ["==",["get", "@id"], "way/411222691"],
    "layout": {
      "icon-image": "finish_flag2",
      "icon-size": ["interpolate", ["exponential", 1], ["zoom"], 10, 0.6, 16, 1, 18, 1.2]
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};