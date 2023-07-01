const userTDefs = `type User{
    id:Int
    email:String
    password:String
    login:String
    isStaff: Boolean
}

type Query {
    users:[User]
}

input UserData {
    email: String
    password: String
    login: String
    isStaff: Boolean
}

type UserDataWithToken {
    user: User
    token: String
  }
  
  type Mutation {
    createUser(data: UserData): UserDataWithToken
    login(login: String!, password: String!): UserDataWithToken
    check(token:String!): User
  }
`;

export default userTDefs;
