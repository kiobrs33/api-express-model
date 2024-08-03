const { response, request } = require("express");

const albumGet = (req = request, res = response) => {
  const query = req.query;

  // Example: http://localhost:8000/api/?index=10&page=24&code=lagarto

  res.status(200).json({
    msg: "get API GET",
    ...query,
  });
};

const albumPost = (req = request, res = response) => {
  const body = req.body;
  res.status(200).json({
    msg: "get API POST",
    ...body,
  });
};

const albumPut = (req = request, res = response) => {
  const params = req.params;

  // Example: http://localhost:8000/api/399

  res.status(200).json({
    msg: "get API PUT",
    ...params,
  });
};

const albumDelete = (req = request, res = response) => {
  res.status(200).json({
    msg: "get API DELETE",
  });
};

module.exports = {
  albumGet,
  albumPost,
  albumPut,
  albumDelete,
};
