import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories,setCategories] = useState('general');
  const [page, setPage] = useState(1);
  const pageSize = 10; 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            page: page,
            pageSize: pageSize,
            category: categories,
            country: 'us',
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
  }, [categories, page]);

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
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">News Articles</h1>

      <div className="my-10 gap-40 md:flex md:gap-5 justify-center">
        <button onClick={() => handleCategoryChange('general')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">General</button>
        <button onClick={() => handleCategoryChange('business')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Business</button>
        <button onClick={() => handleCategoryChange('technology')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Technology</button>
        <button onClick={() => handleCategoryChange('health')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Health</button>
        <button onClick={() => handleCategoryChange('science')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Science</button>
        <button onClick={() => handleCategoryChange('sports')} className="mr-2 p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Sports</button>
        <button onClick={() => handleCategoryChange('entertainment')} className="p-4 shadow-black shadow-2xl  bg-rose-800 text-white rounded-full">Entertainment</button>
      </div>

      <ul className=' bg-[#7A2048] p-6 text-white rounded-2xl shadow-2xl border shadow-black'>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <img className=' mb-2 h-20 rounded-3xl' src={article.urlToImage} alt="" />
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className='py-2'>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className=" bg-red-800 text-white p-2 rounded-lg ">
              Read more
            </a>
            <hr className='mt-4 h-0.5 bg-black' />
          </li>
          
        ))}
      </ul>
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
    </div>
    
  );
};

export default News;
