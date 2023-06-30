const subjectTDefs = `type Subject{
    id:Int
    title:String
    description:String
    userId:Int
}

type Query {
    subjects:[Subject]
}

input SubjectData {
    title:String
    description:String
    userId:Int
}

type Mutation{
    createSubject(data: SubjectData):Subject
}
`;

export default subjectTDefs;
