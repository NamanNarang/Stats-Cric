export default function AboutUs() {
  return (
    <div className="flex flex-col items-center p-6 bg-[#0c0e2b] min-h-screen text-white">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-lg max-w-xl text-gray-300">
          We are passionate about cricket, bringing you the most exciting news, statistics, and updates from the world of IPL and beyond.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white">Our Mission</h2>
        <p className="text-base max-w-3xl text-gray-400">
          Our mission is to create a platform where cricket fans can stay connected with the game they love. We aim to provide real-time match statistics, player profiles, and the latest news, keeping the excitement of IPL alive all year round.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-white">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          

          {/* Team Member 2 */}
        
          {/* Team Member 3 */}
          <div className="bg-[#14163f] shadow-lg rounded-lg p-6 max-w-xs">
            <img
              src="src\virat.jpg"
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Pratham Manjrekar</h3>
            <p className="text-gray-400">Founder &CEO</p>
          </div>
          <div className="bg-[#14163f] shadow-lg rounded-lg p-6 max-w-xs">
            <img
              src="src\virat.jpg"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Vinayak Mohanty</h3>
            <p className="text-gray-400">Lead Developer</p>
          </div>

          <div className="bg-[#14163f] shadow-lg rounded-lg p-6 max-w-xs">
            <img
              src="src\virat.jpg"
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Yash Mali</h3>
            <p className="text-gray-400">COO</p>
          </div>
          <div className="bg-[#14163f] shadow-lg rounded-lg p-6 max-w-xs">
            <img
              src="src\virat.jpg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Malhaar Mirchandani</h3>
            <p className="text-gray-400">Content Manager</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white">Our Values</h2>
        <p className="text-base max-w-3xl text-gray-400">
          We value integrity, transparency, and community. Our goal is to foster a positive environment for cricket fans from all walks of life, where they can come together and share their passion for the game.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Cricket World. All rights reserved.</p>
      </div>
    </div>
  );
}
