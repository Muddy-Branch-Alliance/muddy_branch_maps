module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_urban_green",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "allotments", "village_green", "playground"],
    "layout": {"visibility": "visible"},
    "paint": {"fill-color": "#9cd3b4", "fill-opacity": 0.7}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};