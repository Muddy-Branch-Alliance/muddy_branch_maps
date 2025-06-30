module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_labels_major",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 11,
    "filter": ["in", "kind", "highway", "major_road"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "symbol-placement": "line",
      "text-font": ["Noto Sans Regular"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["exponential",0.7], ["zoom"], 11, 12, 18, 15]
    },
    "paint": {
      "text-color": context.colors.roadLabel,
      "text-halo-color": context.colors.pavementLightest,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};