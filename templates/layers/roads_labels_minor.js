module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_labels_minor",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 15,
    "filter": ["in", "kind", "minor_road"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "symbol-placement": "line",
      "text-font": ["Noto Sans Medium"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": 12
    },
    "paint": {
      "text-color": context.colors.road_label_light,
      "text-halo-color": context.colors.halo_light,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};