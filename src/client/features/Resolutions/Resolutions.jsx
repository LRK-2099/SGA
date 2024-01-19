// import { Link } from "react-router-dom";
import React from "react";
import { useGetResolutionsQuery, useDeleteResolutionMutation } from "./resolutionSlice";
import './Resolutions.less';
 import CreateResolution from "./CreateResolution";
// creating a resoultion is not a thing yet so we will comment it out

export default function Resolutions() {
  const { data, isLoading, error } = useGetResolutionsQuery();
  const [deleteResolution] = useDeleteResolutionMutation();

  if (isLoading) {
    return <p>Loading resolutions...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  if (!data) {
    return <p>Something went wrong...</p>;
  }

  const handleDelete = async (id) => {
    try {

      await deleteResolution (id).unwrap(); 

      // refresh the appointments list after deleting
    } catch (error) {
      console.error('Failed to delete the appointment: ', error);
    }
  };

  return (
    <>
      <h1>Current Resolutions</h1>
      <CreateResolution />
      <ul>
        <h2>Resolution List</h2>
        {data.map((resolutions) => (
          <div key={resolutions.id}>
            <h3>{resolutions.resname}</h3>
            <p>{resolutions.email}</p>
            <p>{resolutions.description}</p>
            <p>{resolutions.date}</p>
            
            <button 
            onClick={() => handleDelete(resolutions.id)} 
            style={{
              color: 'white', 
              backgroundColor: 'red', 
              border: 'none', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              textAlign: 'center', 
              cursor: 'pointer', 
              fontSize: '12px', 
              lineHeight: '20px', 
              padding: '0'
            }}
          >
            X
          </button>
          </div>
        ))}
      </ul>
    </>
  );
}
