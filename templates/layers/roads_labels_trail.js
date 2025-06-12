module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_labels_trail",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 15,
    "filter": ["in", "kind", "other", "path"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "symbol-placement": "line",
      "text-font": ["Noto Sans Medium"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["exponential",0.7], ["zoom"], 14, 11, 17, 14],
      "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 14, 0.1, 15, 0.05],
    },
    "paint": {
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