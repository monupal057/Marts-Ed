// //import React from 'react';

// const Page = () => {
//   return (
//     <div>
//       <h1>Page Title</h1>
//       <p>This is the Page content.</p>
//     </div>
//   );
// }

// export default Page;

// import  { useEffect, useState } from "react";

// function Pages() {
//   const [pagesData, setPagesData] = useState([]);

//   useEffect(() => {
//     fetch("https://your-fake-api-endpoint.com/pages")
//       .then(response => response.json())
//       .then(data => setPagesData(data))
//       .catch(error => console.error('Error fetching pages data:', error));
//   }, []);

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Pages</h1>
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {pagesData.map(page => (
//           <div key={page.id} className="border p-4 rounded">
//             <h2 className="text-xl font-semibold">{page.title}</h2>
//             <p>{page.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pages;


import React, { useEffect, useState } from "react";

function Pages() {
  const [pagesData, setPagesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://your-fake-api-endpoint.com/pages")
      .then(response => response.json())
      .then(data => {
        setPagesData(data);
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching pages data:', error));
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, category]);

  const filterData = () => {
    let data = pagesData;
    if (category !== "All") {
      data = data.filter(page => page.category === category);
    }
    if (searchTerm) {
      data = data.filter(page => page.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredData(data);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Pages</h1>
      <div className="mb-4 flex justify-between">
        <input 
          type="text"
          className="border p-2 rounded"
          placeholder="Search pages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map(page => (
          <div key={page.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{page.title}</h2>
            <p>{page.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
