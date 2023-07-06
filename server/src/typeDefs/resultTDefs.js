const resultTDefs = `
type Result{
    id:Int
    value:Int
    taskId:Int
    userId:Int
}

type User{
  id:Int
  email:String
  password:String
  login:String
  isStaff: Boolean
  group:String
}

type ResultWithUserData{
  id:Int
  value:Int
  taskId:Int
  userId:Int
  user:User
}

input ResultData {
    value:Int
    taskId:Int
    userId:Int
}
  
  type Mutation {
    createResult(data: ResultData): Result
    getTaskResults(taskId:Int):[ResultWithUserData]
    getTaskUserResult(taskId:Int,userId:Int):Result
  }
`;

export default resultTDefs;
