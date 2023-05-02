const { countModel } = require("../model/totalCount");

const getTotalCount = async () => {
  await countModel
    .find({ count: 0 }, { count: 1 })
    .then((result) => {
      if (result.length > 0) {
        return result;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};

module.exports = { getTotalCount };
