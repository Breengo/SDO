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

type Mutation{
    createUser(data: UserData):User
}
`;

export default userTDefs;
