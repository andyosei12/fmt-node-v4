import prisma from "../db";

// Get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// Get one product
export const getOneProduct = async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      userId: req.user.id,
    },
  });

  res.json({ data: product });
};

// Create Product
export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        userId: req.user.id,
      },
    });

    res.json({ data: product });
  } catch (error) {
    next(error);
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id_userId: {
        id: req.params.is,
        userId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updatedProduct });
};

// delete product
export const deleteProduct = async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id_userId: {
        id: req.params.is,
        userId: req.user.id,
      },
    },
  });

  res.json({ data: deletedProduct });
};
