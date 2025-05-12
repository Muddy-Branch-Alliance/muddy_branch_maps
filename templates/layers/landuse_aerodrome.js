module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_aerodrome",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "aerodrome"],
    "layout": {"visibility": "visible"},
    "paint": {"fill-color": "#dadbdf"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};