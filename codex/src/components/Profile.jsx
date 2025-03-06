import { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Globe, 
  FileText,
  MapPin,
  School,
  Clock,
  Eye,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Check,
  Info
} from "lucide-react";
import * as d3 from 'd3';
import pp from "../assets/pp.png";
import heatmap from "../assets/heatmap.png";
import leetcode from "../assets/leetcode.png";
import leetcode1 from "../assets/leetcode1.png";

export default function CodingProfile() {
  const [name, setName] = useState("Aditya Singh");
  const [username, setUsername] = useState("@6snE10zc");
  const [bio, setBio] = useState(
    "I am a second-year Computer Science undergraduate at SRM University, Chennai, specializing in both frontend and backend web development.",
  );
  const [location, setLocation] = useState("India");
  const [university, setUniversity] = useState("SRM University");
  const [lastRefresh, setLastRefresh] = useState("05 Mar 2025");
  const [profileViews, setProfileViews] = useState("1");
  const [isStatsOpen, setIsStatsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleStats = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const CircularProgressBar = ({ value, maxValue = 100, color }) => {
    const percentage = (value / maxValue) * 100;
    return (
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
          {value}
        </div>
      </div>
    );
  };

  const RatingGraph = () => {
    return (
      <div className="w-full h-24 bg-gray-800">
        {/* Placeholder for D3 or Chart.js graph */}
      </div>
    );
  };

  const ActivityHeatmap = () => {
    return (
      <div className="w-full h-24 bg-gray-700 grid grid-cols-6 gap-1">
        {[...Array(24)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full ${i % 4 === 0 ? 'bg-green-500' : 'bg-green-200'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} p-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Profile Card - Left Side */}
        <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg shadow-md`}>
          <div className="p-0">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={pp}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`text-2xl font-bold text-center bg-transparent border-none outline-none w-full ${isDarkMode ? 'text-white' : 'text-black'}`}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`text-sm text-center bg-transparent border-none outline-none w-full mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className={`text-sm text-center bg-transparent border-none outline-none w-full resize-none ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                rows={5}
              />
            </div>

            <div className="flex justify-center space-x-4 p-4">
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Mail size={20} /></button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Linkedin size={20} /></button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Twitter size={20} /></button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><Globe size={20} /></button>
              <button className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}><FileText size={20} /></button>
            </div>

            <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} my-2`}></div>

            <div className="p-4 space-y-2">
              <div className="flex items-center text-sm">
                <MapPin size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`bg-transparent border-none outline-none ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                />
              </div>
              <div className="flex items-center text-sm">
                <School size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className={`bg-transparent border-none outline-none ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                />
              </div>
            </div>

            <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} my-2`}></div>

            <div className="p-4 flex justify-between text-sm">
              <div className="flex items-center">
                <Clock size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                Last Refresh:
              </div>
              <input
                type="text"
                value={lastRefresh}
                onChange={(e) => setLastRefresh(e.target.value)}
                className={`bg-transparent border-none outline-none text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              />
            </div>
            <div className="px-4 pb-4 flex justify-between text-sm">
              <div className="flex items-center">
                <Eye size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                Profile Views:
              </div>
              <input
                type="text"
                value={profileViews}
                onChange={(e) => setProfileViews(e.target.value)}
                className={`bg-transparent border-none outline-none text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              />
            </div>

            <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} my-2`}></div>

            <button
              className={`w-full p-4 flex items-center justify-between ${isDarkMode ? 'text-white bg-[#222] hover:bg-[#333]' : 'text-black bg-gray-200 hover:bg-gray-300'}`}
              onClick={toggleStats}
            >
              <span className="font-medium">Problem Solving Stats</span>
              {isStatsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isStatsOpen && (
              <div className="p-4 space-y-4">
                {[
                  { name: 'LeetCode', letter: 'λ', color: 'text-yellow-500', status: true },
                  { name: 'GeeksForGeeks', letter: 'G', color: 'text-green-500', status: true },
                  { name: 'InterviewBit', letter: 'I', color: 'text-blue-500', status: false },
                  { name: 'CodeChef', letter: 'C', color: 'text-white', status: true },
                  { name: 'HackerRank', letter: 'H', color: 'text-green-500', status: true }
                ].map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center">
                        <span className={`${platform.color} font-bold`}>{platform.letter}</span>
                      </div>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{platform.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {platform.status && <Check size={16} className="text-green-500" />}
                      <ExternalLink size={16} className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle and Right Content */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
          {/* Total Questions and Total Active Days */}
          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Questions</div>
                <div className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>239</div>
              </div>
              <Info size={16} className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Active Days</div>
                <div className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>94</div>
              </div>
              <Info size={16} className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
          </div>

          {/* Activity Heatmap */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Total Contests (Moved to the Upper Column) */}
            <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4 md:col-span-1 xl:col-span-1`}>
              <div className="flex justify-between items-center">
                <div>
                  <div className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Contests</div>
                  <div className={`text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>3</div>
                </div>
              </div>
            </div>

            {/* GitHub Stats (Moved to the Bottom Column) */}
            <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-6 md:col-span-1 xl:col-span-1 xl:w-[225%]`}>
              <div className="flex justify-between items-center mb-2">
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>204 submissions in past 6 months</div>
                <div className="flex space-x-4">
                  <div className="text-sm">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max.Streak</span> <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>31</span>
                  </div>
                  <div className="text-sm">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Current.Streak</span> <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>4</span>
                  </div>
                </div>
              </div>

              {/* Displaying the imported image instead of ActivityHeatmap */}
              <a href="https://github.com/Axestein" target="_blank" rel="noopener noreferrer">
                <img
                  src={heatmap}
                  alt="Hashmap"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* Rating */}
          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4 md:col-span-2`}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rating</div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>1474</div>
              </div>
              <div className="col-span-2">
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>23 Feb 2025</div>
                <div className={`text-md ${isDarkMode ? 'text-white' : 'text-black'}`}>Weekly Contest 438</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rank:17218</div>
              </div>
            </div>
            <a href="https://leetcode.com/u/AdityaKumarSingh7209/" target="_blank" rel="noopener noreferrer">
              <img
                src={leetcode}
                alt="Hashmap"
                className="w-full h-auto object-cover rounded-lg"
              />
            </a>
          </div>

          {/* Problems Solved */}
          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4 md:col-span-2 xl:col-span-1`}>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fundamentals</span>
                    <Info size={14} className={`ml-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                  </div>
                </div>
                <div className="flex items-center">
                  <CircularProgressBar value={73} color="#FFD700" />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div className="text-green-500">GFG</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>7</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-yellow-500">HackerRank</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>66</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>DSA</div>
                </div>
                <div className="flex items-center">
                  <CircularProgressBar value={123} maxValue={200} color="#FFD700" />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div className="text-green-500">Easy</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>65</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-yellow-500">Medium</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>50</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-red-500">Hard</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>8</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Competitive Programming</div>
                </div>
                <div className="flex items-center">
                  <CircularProgressBar value={43} color="#22c55e" />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div className="text-green-500">Codechef</div>
                      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>43</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contest Rankings */}
          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4 md:col-span-2 xl:col-span-1`}>
            <div className="flex justify-between items-center mb-4">
              <div className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contest Rankings</div>
            </div>
            <div className="flex items-center justify-center h-64">
              <img 
                src={leetcode1} 
                alt="Contest Rankings Placeholder" 
                className="max-w-full max-h-full rounded-xl object-contain"
              />
            </div>
          </div>

          {/* DSA Topic Analysis */}
          <div className={`${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-0 rounded-lg p-4 md:col-span-2 xl:col-span-2`}>
            <div className="flex justify-between items-center mb-4">
              <div className={`text-sm font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>DSA Topic Analysis</div>
              <button className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>show more</button>
            </div>
            <div className="space-y-2">
              {[
                { topic: 'Array', value: 72 },
                { topic: 'Two Pointers', value: 21 },
                { topic: 'Sorting', value: 20 },
                { topic: 'HashMap and Set', value: 18 },
                { topic: 'String', value: 17 },
                { topic: 'Binary Search', value: 17 },
                { topic: 'Dynamic Programming', value: 15 },
                { topic: 'Math', value: 12 },
                { topic: 'Algorithms', value: 11 },
                { topic: 'Simulation', value: 10 }
              ].map((item) => (
                <div key={item.topic} className="flex items-center">
                  <div className={`w-24 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.topic}</div>
                  <div className={`flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mr-2`}>
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{width: `${(item.value / 72) * 100}%`}}
                    ></div>
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        className={`fixed bottom-4 right-4 p-3 rounded-full ${isDarkMode ? 'bg-[#222] text-white' : 'bg-gray-200 text-black'}`}
        onClick={toggleTheme}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
}