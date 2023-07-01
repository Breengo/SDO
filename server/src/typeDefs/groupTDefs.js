const groupTDefs = `type Group{
    id:Int
    title:String
}

type Query {
    groups:[Group]
}

type Mutation{
    createGroup(title: String!):Group
}
`;

export default groupTDefs;
