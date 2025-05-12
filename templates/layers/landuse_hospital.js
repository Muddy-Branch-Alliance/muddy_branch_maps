module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_hospital",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["==", "kind", "hospital"],
    "layout": {"visibility": "none"},
    "paint": {"fill-color": "#e4dad9"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};