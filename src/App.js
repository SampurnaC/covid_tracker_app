import Pagination from './Components/Pagination';
import ListData from './Components/ListData';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItem]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const getData=async()=>{
    const result=await axios(`https://api.covid19api.com/summary`);
    const actualData=result.data;
    setItem(actualData.Countries);
  }
  useEffect(()=>{
    getData();
  },[])

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
     <ListData items={currentPosts}/>
     
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}
      />
    </div>
  );
}

export default App;
