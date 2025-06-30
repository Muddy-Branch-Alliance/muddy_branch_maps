module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_pier",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["==", "kind", "pier"],
    "paint": {"fill-color": context.colors.pavementLight}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};