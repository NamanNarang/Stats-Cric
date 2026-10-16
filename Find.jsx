import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const apiUrl = 'https://jameagle.pythonanywhere.com/stats/matches/';

const mainTeams = [
  'Chennai Super Kings', 'Mumbai Indians', 'Royal Challengers Bangalore',
  'Delhi Capitals', 'Kolkata Knight Riders', 'Rajasthan Royals',
  'Punjab Kings', 'Sunrisers Hyderabad', 'Gujarat Titans', 'Lucknow Super Giants',
];

const Find = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    upcoming: false,
    past: true,
  });
  const [selectedTeams, setSelectedTeams] = useState(
    mainTeams.reduce((acc, team) => ({ ...acc, [team]: true }), {})
  );
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the matches from the API
    const fetchMatches = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
        const data = await response.json();
        setMatches(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleTeamFilterChange = (e) => {
    setSelectedTeams({
      ...selectedTeams,
      [e.target.name]: e.target.checked,
    });
  };

  const isAllTeamsUnchecked = !Object.values(selectedTeams).includes(true);

  const filteredMatches = matches.filter((match) => {
    const matchType = new Date(match.date) > new Date() ? 'upcoming' : 'past';
    const isUpcoming = selectedFilters.upcoming && matchType === 'upcoming';
    const isPast = selectedFilters.past && matchType === 'past';

    const teamFilter =
      isAllTeamsUnchecked ||
      Object.keys(selectedTeams).some(
        (team) =>
          selectedTeams[team] &&
          (match.bat_first.includes(team) || match.bat_second.includes(team))
      );

    const searchMatch =
      match.bat_first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.bat_second.toLowerCase().includes(searchTerm.toLowerCase());

    return (isUpcoming || isPast) && teamFilter && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex p-4">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Upcoming/Past Matches */}
        <h3 className="font-bold text-md mb-2">Match Type</h3>
        <div className="space-y-2 mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="upcoming"
              checked={selectedFilters.upcoming}
              onChange={handleFilterChange}
              className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
            />
            Upcoming
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="past"
              checked={selectedFilters.past}
              onChange={handleFilterChange}
              className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
            />
            Past
          </label>
        </div>

        {/* Team Filters */}
        <h3 className="font-bold text-md mb-2">Teams</h3>
        <div className="space-y-2">
          {mainTeams.map((team) => (
            <label className="block" key={team}>
              <input
                type="checkbox"
                name={team}
                checked={selectedTeams[team]}
                onChange={handleTeamFilterChange}
                className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
              />
              {team}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-4">
        <h2 className="font-bold text-lg mb-4">Find Matches</h2>

        {/* Search Bar */}
        <div className="mb-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search matches..."
            className="w-full p-2 bg-gray-700 rounded-md text-white"
          />
        </div>

        {/* Matches List */}
        <div className="overflow-auto h-[70vh] bg-gray-800 p-4 rounded-md shadow-md">
          {loading ? (
            <p>Loading matches...</p>
          ) : filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div key={match.match_id} className="bg-gray-700 p-4 mb-4 rounded-md">
                <Link to={`/ipl/${match.match_id}`}><h3 className="font-bold">{`${match.bat_first} vs ${match.bat_second}`}</h3></Link>
                <p>Date: {match.date}</p>
                <p>Venue: {match.venue}</p>
                <p>Target Score: {match.target_score}</p>
                <p>Winner: {match.winner}</p>
              </div>
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Find;
