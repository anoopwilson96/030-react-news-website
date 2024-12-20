import React from 'react'

import { Outlet, Link,useLoaderData, } from "react-router-dom";


export async function loader() {
  const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=${import.meta.env.VITE_API_URL0}`)
  const data = await response.json()
  return {data}
}


export default function NewsArticles() {
  const { data } = useLoaderData();

  return (
    <>
      <div
        id="blog-container"
        className="container lg:container   sectionThree grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1"
      >
        {data.articles.map((article, index) => (
          <div
            key={article.id || index}
            className=" mx-auto max-w-64 m-5 cursor-pointer p-3 border rounded-md border-slate-400 flex flex-col  align-middle"
          >
            <img className='max-h-32 rounded-md' src={article.image} alt={article.title} />
            <h2 className="text-xl font-semibold mt-3">{article.title}</h2>
            <h3 className="mt-2 mb-2">
              {article.description}
            </h3>
            <h3 className="mt-2 mb-2">
              {article.content}
            </h3>
            <Link className="self-center" to={article.url}>
              <button className="  bg-slate-400 p-2 border-none rounded-full m-2">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

      


