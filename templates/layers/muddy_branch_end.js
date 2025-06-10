module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_end",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "minzoom": 10,
    "filter": ["==",["get", "@id"], "way/411222691"],
    "layout": {
      "icon-image": "finish_flag1",
      "icon-size": context.settings.iconSizeMarkers,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};