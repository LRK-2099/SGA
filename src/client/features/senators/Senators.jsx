import { useGetStudentsQuery } from "./studentSlice";
import Senatorinfo from "./Senatorinfo";
import CreateSenator from "./CreateSenator";


export default function senator(){

const {data} = useGEtSenatorQuery();
console.log("senator array is here", data)

return(
<>
<h1>"this is where the list of senators should render</h1>

<ul>

    
</ul>

</>
)
}