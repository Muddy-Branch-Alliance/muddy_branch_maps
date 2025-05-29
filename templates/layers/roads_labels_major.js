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
      "text-field": ["get", "name"],
      "text-size": 12
    },
    "paint": {
      "text-color": context.colors.road_label,
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