module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_industrial",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["==", "kind", "industrial"],
    "layout": {"visibility": "none"},
    "paint": {"fill-color": "#d1dde1"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};