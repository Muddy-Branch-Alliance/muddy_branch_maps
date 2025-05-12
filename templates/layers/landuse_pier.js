module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_pier",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["==", "kind", "pier"],
    "paint": {"fill-color": "#e0e0e0"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};