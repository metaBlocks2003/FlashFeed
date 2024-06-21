import React, { useState, useEffect } from 'react';
import axios from 'axios';   // for api calls

// functional react rendering using arrow function

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories,setCategories] = useState('general');
  const [page, setPage] = useState(1);
  const pageSize = 10; 
  var [type,setType] = useState("");
  var [search, setSearch] = useState("");


// useEffect used for api calling, error handling and useState used for state managments  

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=b53e4c2abc75415bbf56478978c8861e`, {
          params: {
            page: page,
            pageSize: pageSize,
            language: "en",
            category: categories,
            apiKey: '71a74c1a4bbc47ce97d5550cda986dd9'
          }
        });
        console.log(`Fetched ${categories} news.}`);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categories, page, search]);


  const handletype = (e) => {
    setType(e.target.value);
    console.log(type);
  }
  const handleSearch = () => {
    setSearch(type);
    setLoading(true);
    console.log(type);
  }


  const handleCategoryChange = (newCategory) => {
    setCategories(newCategory);
    setLoading(true); 
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setLoading(true); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-0">
{/* navbar */}
<section className='pb-10'>
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <button href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fd21112dc-736f-4db3-959a-6304909957dc%2FLogo_green_png.png?table=block&id=b12625b9-cb25-4feb-96fb-fe5162121c4d&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=250&userId=&cache=v2" class="h-16" alt="NeighborGood" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NeighborGood</span>
  </button  >
  <div className="hidden md:flex gap-20">

 
<div class="max-w-md mx-auto">   
    <div for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</div>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handletype} type="search" id="default-search" class="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search News" required />
        <button onClick={handleSearch} class="text-white absolute end-2.5 bottom-2.5 bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>


  <a className="text-white" href="https://github.com/metaBlocks2003"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>

<a className="text-white" href="https://www.linkedin.com/in/aditya-sengupta-5308a52a5/"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
  </div>

        </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    </ul>
  </div>
</nav>

        </section>

        {/* navbar end */}

        {/*  category buttons  */}

      <div className="my-10 mt-10 pt-10 gap-40 md:flex md:gap-5 justify-center">
        <button onClick={() => handleCategoryChange('general')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">General</button>
        <button onClick={() => handleCategoryChange('business')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Business</button>
        <button onClick={() => handleCategoryChange('technology')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Technology</button>
        <button onClick={() => handleCategoryChange('health')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Health</button>
        <button onClick={() => handleCategoryChange('science')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Science</button>
        <button onClick={() => handleCategoryChange('sports')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Sports</button>
        <button onClick={() => handleCategoryChange('entertainment')} className="p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Entertainment</button>
      </div>

      {/* category buttons end */}

      {/* news articles */}

      <ul className=' bg-[#7A2048] p-5 text-white rounded-2xl shadow-2xl border shadow-black'>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <img className=' shadow-black shadow-xl mb-5 h-20 rounded-3xl' src={article.urlToImage} alt="" />
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p className=' font-medium py-2'>{article.description}</p>
            <p href={article.url} className='py-4 text-blue-300'>{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className=" bg-red-700 text-white p-2 rounded-lg ">
              Read more
            </a>
            <hr className='mt-4 h-0.5 bg-black' />
          </li>
          
        ))}
      </ul>

     {/* news articles end */}

     {/* pagination */}

      <center>
      <div className=" my-10">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="mr-2 p-2 bg-blue-900 text-white rounded disabled:bg-gray-800"
        >
          Previous  
        </button>
        <span><b>Page  {page}</b></span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={articles.length < pageSize}
          className="ml-2 p-2 bg-red-900 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
      </center>

      {/* pagination ends */}
    </div>
    
  );
};


export default News;

