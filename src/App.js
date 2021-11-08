import React from 'react'
import LazyLoad from 'react-lazyload';
import { JsonToExcel } from "react-json-to-excel";
const App = () => {

  const samplejson1 = [
    { label: "C" },
    { label: "Java" },
    { label: "Go" },
    { label: "Javascript" },
    { label: "HTML" },
    { label: "CSS" },
    { label: "REACT" },
    { label: "JQUERY" }
  ];
  
  const samplejson2 = [
    { name: "name01" , age:"20",sex:"M" },
    { name: "name02" , age:"22",sex:"F" },
    { name: "name03" , age:"20",sex:"M" }
  ];


  return (
    <div>
       <JsonToExcel
        title="Download as Excel"
        data={samplejson1}
        fileName="sample-file"
      />
       <JsonToExcel
        title="Download as Excel"
        data={samplejson2}
        fileName="sample-file"
      />
    </div>
  )
}

export default App
