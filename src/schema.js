import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        hello : String
        greet(name:String!) : String
        tasks: [Task]
        users:[User]
        usersById(_id:String):User
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        numero: Int
    }

    type Mutation {
        createTask(input:TaskInput): Task
        createUser(input:UserInput): User
        deleteUser(_id:ID): User
        updateUser(_id:ID, input:UserInput) : User
    }

    input UserInput {
        firstName: String!
        lastName: String!
        age: Int
    }

    type User {
        _id: ID
        firstName: String!
        lastName: String!
        age: Int
    }

    input TaskInput {
        title: String!
        description: String!
        numero: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

