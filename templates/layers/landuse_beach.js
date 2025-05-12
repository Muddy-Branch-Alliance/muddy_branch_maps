module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_beach",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "beach"],
    "layout": {"visibility": "visible"},
    "paint": {"fill-color": "#e8e4d0"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};