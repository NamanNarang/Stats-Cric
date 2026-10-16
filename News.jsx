import React from 'react';
import { NavLink } from 'react-router-dom';

const News = () => {
  return (
    <div className="min-h-screen bg-[#0c0e2b] text-white p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Sports News</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Article 1 */}
        <div className="bg-[#1c2038] p-4 rounded-lg shadow-lg">
          <img 
            src="https://wp-rewamp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/11/16539057546294995a40f61.jpeg" 
            alt="IPL Final: Gujarat Titan Lifts the Trophy" 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">IPL Final: Gujarat Titan Lifts the Trophy</h2>
          <p className="text-gray-400 mb-4">
            Gujarat Titan beat Rajasthan Royals to win their first IPL trophy.
          </p>
          <NavLink
            to="https://www.connectedtoindia.com/gujarat-titans-lift-ipl-trophy-in-fairytale-debut-season-ipl-2022/"
            className="text-blue-400 hover:text-blue-600"
          >
            Read More &rarr;
          </NavLink>
        </div>

        {/* Article 2 */}
        <div className="bg-[#1c2038] p-4 rounded-lg shadow-lg">
          <img 
            src="src\download (10).jpg" 
            alt="Pakistan Thrashes Afghanistan in a Thriller" 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">Pakistan Thrashes Afghanistan in a Thriller</h2>
          <p className="text-gray-400 mb-4">
            Pakistan chased down a huge target to defeat Afghanistan in a nail-biting finish.
          </p>
          <NavLink
            to="https://www.dawn.com/news/1797346"
            className="text-blue-400 hover:text-blue-600"
          >
            Read More &rarr;
          </NavLink>
        </div>

        {/* Article 3 */}
        <div className="bg-[#1c2038] p-4 rounded-lg shadow-lg">
          <img 
            src="https://static.toiimg.com/thumb/msid-98139119,width-1280,height-720,resizemode-4/98139119.jpg" 
            alt="England vs South Africa: Semifinal Showdown" 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">England vs South Africa: Semifinal Showdown</h2>
          <p className="text-gray-400 mb-4">
            England and South Africa are set for an epic semifinal clash in the WT20.
          </p>
          <NavLink
            to="https://timesofindia.indiatimes.com/sports/cricket/icc-womens-t20-world-cup/womens-t20-world-cup-england-and-south-africa-set-up-semi-final-clash/articleshow/98139166.cms"
            className="text-blue-400 hover:text-blue-600"
          >
            Read More &rarr;
          </NavLink>
        </div>

        {/* Article 4 */}
        <div className="bg-[#1c2038] p-4 rounded-lg shadow-lg">
          <img 
            src="https://static.cricbuzz.com/a/img/v1/1080x608/i1/c1/cms-img.jpg" 
            alt="India vs Australia: Rivalry Renewed" 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">India vs Australia: Rivalry Renewed</h2>
          <p className="text-gray-400 mb-4">
            India and Australia face off in a series that promises excitement and drama.
          </p>
          <NavLink
            to="https://www.cricbuzz.com/cricket-news/6507/india-renew-heart-stopping-rivalry-with-australia"
            className="text-blue-400 hover:text-blue-600"
          >
            Read More &rarr;
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default News;
