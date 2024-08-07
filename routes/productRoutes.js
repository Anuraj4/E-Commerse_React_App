import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

// get products
router.get('/get-product', getProductController);

// single product
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:pid', deleteProductController);

// Filter Product
router.post('/product-filters', productFilterController);

// Count product
router.get('/product-count', productCountController);

// Product per page
router.get('/product-list/:page', productListController);

// Search product
router.get('/search/:keyword', searchProductController);

// Similar product
router.get('/related-product/:pid/:cid', relatedProductController);

// Category wise product
router.get('/product-category/:slug', productCategoryController)

export default router;
