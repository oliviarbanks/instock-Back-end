const router = require('express').Router();
const inventoryController = require('../controllers/inventoryController');

router
    .route('/')
    .get(inventoryController.index)
    .post(inventoryController.addInventory);

router
  .route('/:id')
  .get(inventoryController.singleInventory)
  .put(inventoryController.updateInventories)
  .delete(inventoryController.deleteInventory);


module.exports = router;