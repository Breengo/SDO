const subjectTDefs = `type Subject{
    id:Int
    title:String
    description:String
    userId:Int
    groups:String
}

type Query {
    subjects:[ExtSubject]
}

input SubjectData {
    title:String
    description:String
    userId:Int
    groups:String
}

type User{
    id:Int
    email:String
    password:String
    login:String
    isStaff: Boolean
}

type ExtSubject {
    id:Int
    title:String
    groups:String
    description:String
    userId:Int
    email:String
    password:String
    login:String
    isStaff: Boolean
}

type Mutation{
    createSubject(data: SubjectData):Subject
    getSubjectById(id:Int!):ExtSubject
}
`;

export default subjectTDefs;
