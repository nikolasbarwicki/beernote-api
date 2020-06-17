// @desc    Get all beers
// @rotue   GET /api/v1/beers
// @access  Private
exports.getBeers = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all beers' });
};

// @desc    Get single beer
// @rotue   GET /api/v1/beers/:id
// @access  Private
exports.getBeer = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show single beer ${req.params.id}` });
};

// @desc    Create new beer
// @rotue   POST /api/v1/beers
// @access  Private
exports.createBeer = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Add new beer' });
};

// @desc    Update beer
// @rotue   PUT /api/v1/beers/:id
// @access  Private
exports.updateBeer = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update beer ${req.params.id}` });
};

// @desc    Delete beer
// @rotue   DELETE /api/v1/beers/:id
// @access  Private
exports.deleteBeer = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete beer ${req.params.id}` });
};
