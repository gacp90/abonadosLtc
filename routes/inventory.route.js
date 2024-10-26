/** =====================================================================
 *  PRODUCTS ROUTER
=========================================================================*/
const { Router } = require('express');
const { check } = require('express-validator');

// MIDDLEWARES
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

// CONTROLLER
const { oneInventory, GetSkuInventory, createInventory, getInventory, getInventoryClients, createInventoryExcel, updateInventory, deleteInventory } = require('../controllers/inventory.controller');

const router = Router();

/** =====================================================================
 *  ONE GET PRODUCT
=========================================================================*/
router.get('/:id', oneInventory);
/** =====================================================================
 *  ONE GET PRODUCT
=========================================================================*/

/** =====================================================================
 *  ONE GET PRODUCT
=========================================================================*/
router.get('/codigo/:sku', validarJWT, GetSkuInventory);
/** =====================================================================
 *  ONE GET PRODUCT
=========================================================================*/

/** =====================================================================
 *  CREATE PRODUCTS
=========================================================================*/
router.post('/', [
        validarJWT,
        check('sku', 'El codigo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createInventory
);
/** =====================================================================
 *  CREATE PRODUCTS
=========================================================================*/

/** =====================================================================
 *  GET PRODUCTS
=========================================================================*/
router.post('/query', validarJWT, getInventory);
/** =====================================================================
 *  GET PRODUCTS 
=========================================================================*/

/** =====================================================================
 *  GET PRODUCTS
=========================================================================*/
router.post('/clients/query', getInventoryClients);
/** =====================================================================
 *  GET PRODUCTS 
=========================================================================*/

/** =====================================================================
 *  GET PRODUCTS
=========================================================================*/
router.post('/query/excel', validarJWT, getInventory);
/** =====================================================================
 *  GET PRODUCTS 
=========================================================================*/

/** =====================================================================
 *  CREATE PRODUCTS EXCEL
=========================================================================*/
router.post('/create/excel', validarJWT, createInventoryExcel);
/** =====================================================================
*  CREATE PRODUCTS EXCEL
=========================================================================*/

/** =====================================================================
 *  UPDATE PRODUCT
=========================================================================*/
router.put('/:id', [
        validarJWT,
        check('sku', 'El codigo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    updateInventory
);
/** =====================================================================
 *  UPDATE PRODUCT
=========================================================================*/

/** =====================================================================
 *  DELETE PRODUCT
=========================================================================*/
router.delete('/:id', validarJWT, deleteInventory);
/** =====================================================================
 *  DELETE PRODUCT
=========================================================================*/


// EXPORT
module.exports = router;