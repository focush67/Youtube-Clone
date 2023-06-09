import React , {useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import {Context} from './contextApi';
import {fetchDataFromAPI} from '../utilities/api.js';
import LeftNavigation from './LeftNavigation';
import SearchResultsVideoCard from './SearchResultsVideoCard';

const SearchResults = () => {

  const [res,setRes] = useState();
  const {searchQuery} = useParams();
  const {setLoad} = useContext(Context);

  useEffect(() => {

    document.getElementById("root").classList.remove('custom-h');
    fetchSearchQueryResults();

  } , [searchQuery])


  const fetchSearchQueryResults = () => {
    setLoad(true);
    fetchDataFromAPI(`search/?q=${searchQuery}`).then((response) => {

      console.log(response);
      setRes(response.contents);
      setLoad(false);

    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNavigation />

        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {
              res?.map((item) => {
                if(item.type !== 'video')
                return false;

                let video = item.video;
                return (
                  <SearchResultsVideoCard
                  key={video?.videoId} video={video}
                  />
                )
              })
            }
          </div>
        </div>
    
    </div>
  );
}

export default SearchResults;
