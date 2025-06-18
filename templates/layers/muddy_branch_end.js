module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_end",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "@id"], "way/411222691"],
    "layout": {
      "icon-image": "finish_flag",
      "icon-size": context.settings.iconSize,
      "icon-allow-overlap": true,
    }
  };
  let overrides = {};

  return {
    baseStyle,
    overrides
  };
};