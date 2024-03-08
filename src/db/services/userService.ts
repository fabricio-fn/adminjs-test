import { UserCreationAttributes } from '../models/User.js';
import { User } from '../models/index.js';

export const userService = {
  findByIdEmail: async (email: string) => {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes);
    return user;
  },

  update: async (
    id: string | number,
    values: {
      firstName?: string;
      lastName?: string;
      phone?: string;
      birth?: Date;
      email?: string;
    },
  ) => {
    const {
      firstName,
      lastName,
      phone,
      birth,
      email,
    } = values;

    const [affectedRows, updatedUsers] = await User.update({
      firstName,
      lastName,
      phone,
      birth,
      email,
    }, {
      where: { id },
      returning: true,
    });

    return updatedUsers[0];
  },
};
