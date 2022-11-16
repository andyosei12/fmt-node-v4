import { Router } from "express";
import { body } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createProductUpdate,
  deleteProductUpdate,
  getOneProductUpdate,
  getUpdates,
  updateProductUpdate,
} from "./handlers/update";
import {
  // createUpdatePoint,
  deleteUpdatePoint,
  getOneUpdatePoint,
  getUpdatePoints,
  updateProductUpdatePoint,
} from "./handlers/updatepoint";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/*
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

/*
 * Update
 */
router.get("/update", getUpdates);
router.get("/update/:id", getOneProductUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  handleInputErrors,
  updateProductUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  handleInputErrors,
  createProductUpdate
);
router.delete("/update/:id", deleteProductUpdate);

/*
 * Update Point
 */
// router.get("/updatepoint", getUpdatePoints);
// router.get("/updatepoint/:id", getOneUpdatePoint);
// router.put(
//   "/updatepoint/:id",
//   body("name").optional().isString(),
//   body("description").optional().isString(),
//   handleInputErrors,
//   updateProductUpdatePoint
// );

// router.post(
//   "/updatepoint",
//   body("name").optional().isString(),
//   body("description").optional().isString(),
//   body("updateId").exists().isString(),
//   handleInputErrors,
//   createUpdatePoint
// );
// router.delete("/updatepoint/:id", deleteUpdatePoint);

export default router;
