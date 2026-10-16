import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const T20 = () => {
  const [ballStats, setBallStats] = useState([]);
  const [matchDetails, setMatchDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Ball by Ball Stats
  useEffect(() => {
    const fetchBallStats = async () => {
      try {
        const response = await fetch(
          'https://live-merely-drum.ngrok-free.app/stats/match/1359539', {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          }
        );
        const data = await response.json();
        setBallStats(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ball stats:', error);
        setLoading(false);
      }
    };

    fetchBallStats();
  }, []);

  // Fetch Match Summary Info (Team that won, who batted first)
  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const response = await fetch(
          'https://live-merely-drum.ngrok-free.app/stats/matches/', {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          }
        );
        const data = await response.json();
        const match = data.find((match) => match.match_id === 1359539); // Get the specific match data
        setMatchDetails(match);
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchMatchDetails();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  // Prepare the data for the graph (Runs Scored by Player)
  const playerPerformanceData = {
    labels: ballStats.map((ball) => ball.batter_name),
    datasets: [
      {
        label: 'Runs Scored',
        data: ballStats.map((ball) => ball.batter_runs),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Prepare data for Runs Per Over graph
  const runsPerOverData = {
    labels: [...new Set(ballStats.map((ball) => ball.over))], // Get unique overs
    datasets: [
      {
        label: 'Runs Per Over',
        data: ballStats.reduce((acc, ball) => {
          acc[ball.over] = (acc[ball.over] || 0) + ball.batter_runs;
          return acc;
        }, {}),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  // Prepare data for Wickets Per Bowler graph
  const wicketsPerBowlerData = {
    labels: [...new Set(ballStats.filter(ball => ball.wicket).map((ball) => ball.bowler_name))], // Get unique bowler names
    datasets: [
      {
        label: 'Wickets Per Bowler',
        data: ballStats.reduce((acc, ball) => {
          if (ball.wicket) {
            acc[ball.bowler_name] = (acc[ball.bowler_name] || 0) + 1;
          }
          return acc;
        }, {}),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  // Match Highlights with additional info
  const matchHighlights = [
    `Winning Team: ${matchDetails?.winner || "N/A"}`,
    `Team that batted first: ${matchDetails?.bat_first || "N/A"}`,
    `Team that batted second: ${matchDetails?.bat_second || "N/A"}`,
    `Target Score: ${matchDetails?.target_score || "N/A"}`,
    `Chased Successfully: ${matchDetails?.chased_successfully ? "Yes" : "No"}`,
    `Innings 1 Runs: ${matchDetails?.innings1_runs || "N/A"}`,
    `Innings 1 Wickets: ${matchDetails?.innings1_wickets || "N/A"}`,
    `Innings 2 Runs: ${matchDetails?.innings2_runs || "N/A"}`,
    `Innings 2 Wickets: ${matchDetails?.innings2_wickets || "N/A"}`,
  ];

  return (
    <div className="min-h-screen bg-[#1c2038] p-4 flex flex-col lg:flex-row lg:space-x-4 text-white">
      {/* Highlights Section */}
      <div className="bg-gray-800 rounded shadow-md p-4 mb-4 lg:w-1/4">
        <h3 className="font-bold mb-2 text-lg">Match Highlights</h3>
        <ul className="list-disc list-inside">
          {matchHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Table Section */}
      <div className="bg-gray-900 rounded shadow-md p-4 mb-4 lg:w-1/2 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">IPL Ball by Ball Statistics</h2>
        <table className="w-full table-auto border-collapse text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="border px-4 py-2">Innings</th>
              <th className="border px-4 py-2">Over</th>
              <th className="border px-4 py-2">Ball</th>
              <th className="border px-4 py-2">Batsman</th>
              <th className="border px-4 py-2">Non-Striker</th>
              <th className="border px-4 py-2">Bowler</th>
              <th className="border px-4 py-2">Runs</th>
              <th className="border px-4 py-2">Extras</th>
            </tr>
          </thead>
          <tbody>
            {ballStats.map((ball, index) => (
              <tr key={index} className="border-t border-gray-600">
                <td className="border px-4 py-2">{ball.innings}</td>
                <td className="border px-4 py-2">{ball.over}</td>
                <td className="border px-4 py-2">{ball.ball}</td>
                <td className="border px-4 py-2">{ball.batter_name}</td>
                <td className="border px-4 py-2">{ball.non_striker_name}</td>
                <td className="border px-4 py-2">{ball.bowler_name}</td>
                <td className="border px-4 py-2">{ball.batter_runs}</td>
                <td className="border px-4 py-2">{ball.extra_runs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Graph Section */}
      <div className="lg:w-1/4 space-y-4">
        {/* Runs Scored by Players Graph */}
        <div className="bg-gray-800 rounded shadow-md p-4">
          <h3 className="font-bold mb-2">Runs Scored by Players</h3>
          <Bar data={playerPerformanceData} options={{ responsive: true }} />
        </div>

        {/* Runs Per Over Graph */}
        <div className="bg-gray-800 rounded shadow-md p-4">
          <h3 className="font-bold mb-2">Runs Per Over</h3>
          <Bar data={runsPerOverData} options={{ responsive: true }} />
        </div>

        {/* Wickets Per Bowler Graph */}
        <div className="bg-gray-800 rounded shadow-md p-4">
          <h3 className="font-bold mb-2">Wickets Per Bowler</h3>
          <Bar data={wicketsPerBowlerData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default T20;
