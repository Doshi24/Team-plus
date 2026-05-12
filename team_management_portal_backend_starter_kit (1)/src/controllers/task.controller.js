const asyncHandler = require('../utils/asyncHandler');
const taskService = require('../services/task.service');

exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json({ success: true, data: tasks });
});
