module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_ford",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==",["get", "ford"], "yes"],
    "minzoom": 15,
    "layout": {
      "icon-image": "ford",
      "text-field": ["step", ["zoom"], "", 16, "Stream Crossing"],
      "icon-size": context.settings.iconSizeTrail,
      "text-font": context.settings.iconLabelFont,
      "text-size": context.settings.iconLabelFontSize,
      "text-justify": "auto",
      "text-variable-anchor": context.settings.iconLabelAnchors,
      "text-variable-anchor-offset": context.settings.iconLabelAnchorOffsets,
      "text-padding": context.settings.iconTextPadding,
      "text-max-width": 6,
    }, "paint": {
      "text-color": context.colors.trailLabel,
      "text-halo-color": context.colors.other_vegetation,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};