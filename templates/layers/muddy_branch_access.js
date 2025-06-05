module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_access",
    "type": "symbol",
    "source": "muddy_branch_relation",
    "filter": ["==", ["get", "highway"], "trailhead"],
    "layout": {
      "icon-image": "trailhead",
      "icon-allow-overlap": true,
      "text-field": ["step", ["zoom"], "", 15, "Trailhead"],
      "icon-size": context.settings.iconSize,
      "text-font": context.settings.iconLabelFont,
      "text-size": context.settings.iconLabelFontSize,
      "text-justify": "auto",
      "text-variable-anchor": context.settings.iconLabelAnchors,
      "text-variable-anchor-offset": context.settings.iconLabelAnchorOffsets,
      "text-padding": context.settings.iconTextPadding
    }, "paint": {
      "text-color": context.colors.trailLabel,
      "text-halo-color": context.colors.other_vegetation,
      "text-halo-width": 1,
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};