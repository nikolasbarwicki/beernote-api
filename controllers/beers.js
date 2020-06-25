const Beer = require('../models/Beer');

// @desc    Get all beers
// @rotue   GET /api/v1/beers
// @access  Private
exports.getBeers = async (req, res, next) => {
  try {
    const beers = await Beer.find();

    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );

    res.status(200).json({ success: true, count: beers.length, data: beers });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single beer
// @rotue   GET /api/v1/beers/:id
// @access  Private
exports.getBeer = async (req, res, next) => {
  try {
    const beer = await Beer.findById(req.params.id);

    if (!beer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: beer });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new beer
// @rotue   POST /api/v1/beers
// @access  Private
exports.createBeer = async (req, res, next) => {
  try {
    const beer = await Beer.create(req.body);

    res.status(201).json({ success: true, data: beer });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update beer
// @rotue   PUT /api/v1/beers/:id
// @access  Private
exports.updateBeer = async (req, res, next) => {
  try {
    const beer = await Beer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!beer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: beer });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete beer
// @rotue   DELETE /api/v1/beers/:id
// @access  Private
exports.deleteBeer = async (req, res, next) => {
  try {
    const beer = await Beer.findByIdAndDelete(req.params.id);

    if (!beer) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
