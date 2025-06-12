module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", ["get", "highway"], "trailhead"],
    "minzoom": 13,
    "layout": {
      "icon-image": "trailhead",
      "text-field": ["step", ["zoom"], "", 15, "Trailhead"],
      "icon-size": context.settings.iconSizeTrail,
      "text-font": context.settings.iconLabelFont,
      "text-size": context.settings.iconLabelFontSize,
      "text-justify": "auto",
      "text-variable-anchor": context.settings.iconLabelAnchors,
      "text-variable-anchor-offset": context.settings.iconLabelAnchorOffsets,
      "text-padding": context.settings.iconTextPadding
    }, "paint": {
      "text-color": context.colors.trailLabel,
      "text-halo-color": context.colors.other_vegetation,
      "text-halo-width": context.settings.iconTextHaloWidth,
      "text-halo-blur": context.settings.iconTextHaloBlur
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};