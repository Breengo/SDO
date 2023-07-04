const textTDefs = `
type Text{
    id:Int
    title:String
    description:String
    content:String!
    subjectId:String
}

input TextData {
    title:String!
    description:String!
    subjectId:Int
    content:String!
}
  
  type Mutation {
    createText(data: TextData): Text
    getSubjectTexts(subjectId:Int!):[Text]
    getTextById(textId:Int!):Text
  }
`;

export default textTDefs;
