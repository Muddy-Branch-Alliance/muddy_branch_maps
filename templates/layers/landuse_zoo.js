module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_zoo",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "zoo"],
    "layout": {"visibility": "none"},
    "paint": {"fill-color": "#c6dcdc"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};