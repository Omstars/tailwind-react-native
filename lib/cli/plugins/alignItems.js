function alignItems(theme) {
  const alignItems = {};

  for (let alignItemsName in theme.alignItems) {
    const value = theme.alignItems[alignItemsName];

    alignItems[`items-${alignItemsName}`] = {
      alignItems: value,
    };
  }

  return alignItems;
}

module.exports = alignItems;
