export default `
   type Post {
     id: ID!
     title: String
     body: String
     author: User
   }
 
   type User {
     id: ID!
     username: String
     email: String
     posts: [Post]
   }
 
   type Query {
     posts: [Post]
     post (id: ID!): Post
     users: [User]
     user (id: ID!): User
   }

   type Mutation {
     addPost(title: String!, body: String!, userId: ID!): Post!
   }
 
   schema {
     query: Query
     mutation: Mutation
   }
 `;
