import prisma from "../db";

export const getUpdatePoints = async (req, res) => {
  const updatePoints = await prisma.updatePoint.findMany();
  res.json({ data: updatePoints });
};

export const getOneUpdatePoint = async (req, res) => {
  const updatePoint = await prisma.updatePoint.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: updatePoint });
};

// export const createUpdatePoint = async (req, res) => {
//   const updatePoint = await prisma.updatePoint.create({
//     data: {
//       name: req.body.name,
//       description: req.body.description,
//       updateId: req.body.updateId,
//     },
//   });
//   res.json({ data: updatePoint });
// };

export const updateProductUpdatePoint = async (req, res) => {
  const update = await prisma.updatePoint.update({
    where: {
      id: req.params.is,
    },
    data: {
      name: req.body.name,
      description: req.body.description,
      updateId: req.body.updateId,
    },
  });
  res.json({ data: update });
};

export const deleteUpdatePoint = async (req, res) => {
  const deletedUpdatePoint = await prisma.updatePoint.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: deleteUpdatePoint });
};
