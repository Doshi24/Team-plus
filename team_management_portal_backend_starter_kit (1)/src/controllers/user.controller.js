const asyncHandler = require('../utils/asyncHandler');
const userService = require('../services/user.service');

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  res.json({ success: true, data: users });
});
