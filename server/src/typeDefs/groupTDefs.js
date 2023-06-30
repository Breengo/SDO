const groupTDefs = `type Group{
    id:Int
    title:String
}

type Query {
    groups:[Group]
}

input GroupData {
    title:String
}

type Mutation{
    createGroup(data: GroupData):Group
}
`;

export default groupTDefs;
