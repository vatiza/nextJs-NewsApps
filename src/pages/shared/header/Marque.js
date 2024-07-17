import Marquee from "react-fast-marquee";

const Marque = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();
  const topNews = data.articles;

  return (
    <div className="w-full bg-slate-500 overflow-hidden">
      <div className=" relative join join-vertical lg:join-horizontal">
        <p className="bg-red-600 p-3">Latest</p>
        <Marquee>
          {topNews.map((news, index) => (
            <h1 className="text-white " key={index}>
              {news.title}
            </h1>
          ))}
        </Marquee>
      </div>
    </div>
    // <div className="w-full overflow-hidden">
    //   <div className="whitespace-nowrap animate-marquee">
    //     {topNews.map((news, index) => (
    //       <h1 className="inline-block text-red-600 px-4" key={index}>
    //         {news.title}
    //       </h1>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Marque;
