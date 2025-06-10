module.exports.default = (context) => {
  const baseStyle = {
    "id": "watershed_hillshade",
    "type": "raster",
    "source": "watershed_hillshade",
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};