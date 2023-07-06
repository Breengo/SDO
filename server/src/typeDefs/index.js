import userTDefs from "./userTDefs.js";
import subjectTDefs from "./subjectTDefs.js";
import textTDefs from "./textTDefs.js";
import taskTDefs from "./taskTDefs.js";
import resultTDefs from "./resultTDefs.js";

const typeDefs = `
${userTDefs}
${subjectTDefs}
${textTDefs}
${taskTDefs}
${resultTDefs}
`;

export default typeDefs;
