module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_labels_trail",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 14,
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
      "text-size": ["interpolate", ["exponential",0.7], ["zoom"], 14, 12, 18, 14],
      "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 14, 0.1, 15, 0.05],
    },
    "paint": {
      "text-color": context.colors.locality,
      "text-halo-color": context.colors.halo,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};