module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_runway",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["any", ["in", "kind", "runway", "taxiway"]],
    "paint": {"fill-color": context.colors.pavementLight}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};