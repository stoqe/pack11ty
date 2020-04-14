// Add a "navigation" collection with all auto collection homepages
module.exports = {
  navigation: (collection) =>
    collection
      .getAll()
      .filter((item) => 'navorder' in item.data)
      .sort(
        (a, b) => parseInt(b.data.navorder, 10) - parseInt(a.data.navorder, 10)
      ),
};
