import React from 'react'
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={
        {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"50vh"
        }
    }>
      <SyncLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;