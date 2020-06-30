import { tasks } from './sample'
import User from './models/User';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello word with GRAPHQL"
        },
        // greet(root,args){
        greet(root, { name }, ctx) {
            return `Hello!, ${name}`;
        },
        tasks() {
            return tasks;
        },
        async users() {
            const users = User.find();
            return users;
        },
        async usersById(_, { _id }) {
            const resultUser = await User.findById(_id);
            return resultUser;

        }
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save()
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }

}; 