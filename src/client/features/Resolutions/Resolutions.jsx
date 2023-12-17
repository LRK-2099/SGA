import { Link } from "react-router-dom";
import { useGetResolutionQuery } from "./resolutionSlice"
import CreateResolution from "./CreateResolution";

export default function Resolutions() {
  const { data, isLoading } = useGetResolutionQuery();

  if (isLoading) {
    return <p>Loading resolutions...</p>;
  }

  return (
    <>
      <h1>Current Resolutions</h1>

      <ul>
        <h2>Resolution List</h2>
        {data?.map((resolution) => (
          <div key={resolution.id}>
            <h1>{resolution.ResName}</h1>
            <Link to={`/resolutions/${resolution.id}`}>More Info</Link>
            <CreateResolution/>
          </div>
        ))}
      </ul>
    </>
  );
}


