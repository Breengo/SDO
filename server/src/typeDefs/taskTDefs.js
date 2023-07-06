const taskTDefs = `
type Task{
    id:Int
    title:String!
    description:String!
    subjectId:Int
    questions:[String]!
    result:Int
}

input TaskData {
    title:String!
    description:String!
    subjectId:Int
    questions:[String]!
}
  
  type Mutation {
    createTask(data: TaskData): Task
    getSubjectTasks(subjectId:Int,userId:Int):[Task]
    getTaskById(taskId:Int):Task
  }
`;

export default taskTDefs;
