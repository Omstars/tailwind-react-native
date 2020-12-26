function zIndex(theme) {
  const zIndexes = {};

  for (let zIndexName in theme.zIndex) {
    const value = theme.zIndex[zIndexName];

    zIndexes[`zIndex-${zIndexName}`] = {
      zIndex: value,
    };
  }

  return zIndexes;
}

module.exports = zIndex;
