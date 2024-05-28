const User = require('../model/User');

const resolvers = {
    Query: {
        getUser: async (_, { id }) => await User.findById(id),
        getUsers: async () => await User.find(),
    },
    Mutation: {
        createUser: async (_, { email, firstName, lastName, phone }) => {
            const user = new User({ email, firstName, lastName, phone });
            await user.save();
            return user;
        },
        updateUser: async (_, { id, email, firstName, lastName, phone }) => {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { email, firstName, lastName, phone },
                { new: true }
            );
            return updatedUser;
        },
        deleteUser: async (_, { id }) => {
            const deletedUser = await User.findByIdAndDelete(id);
            return deletedUser;
        },
    },
};

module.exports = resolvers;
