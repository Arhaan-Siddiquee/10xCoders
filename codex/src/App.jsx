import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState, useEffect, Suspense, lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Profile = lazy(() => import('./components/Profile'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Community = lazy(() => import('./pages/Community'));
const Esmoai = lazy(() => import('./pages/Esmoai'));
const Findevents = lazy(() => import('./pages/Findevents'));
const Interview = lazy(() => import('./components/Interview'));
const InterviewIndex = lazy(() => import('./components/InterviewIndex'));
const Career = lazy(() => import('./components/Career'));
const PersonalizedRoadmap = lazy(() => import('./pages/PersonalizedRoadmap'));
const EnhanceResume = lazy(() => import('./pages/EnhanceResume'));
const AdditionalInterview = lazy(() => import('../src/components/AdditionalInterview'));
const MachineCode = lazy(() => import('./pages/MachineCode'));
const Social = lazy(() => import('./pages/Social'));
const LinkedInEnhancementPage = lazy(() => import('./pages/LinkedIn'));
const GitHubEnhancementPage = lazy(() => import('./pages/Github'));
const LeetCodeEnhancementPage = lazy(() => import('./pages/Leetcode'));
const TypingTest = lazy(() => import('./pages/TypingTest'));
const ResumeForm = lazy(() => import('./pages/ResumeForm'));
const PlanYourDay = lazy(() => import('./pages/Planyourday'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-0">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/userprofile" element={<Profile />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/community" element={<Community />} />
                <Route path="/esmoai" element={<Esmoai />} />
                <Route path="/findevents" element={<Findevents />} />
                <Route path="/interview" element={<InterviewIndex />} />
                <Route path="/interview/:role" element={<Interview />} />
                <Route path="/career" element={<Career />} />
                <Route path="/personalized-roadmap" element={<PersonalizedRoadmap />} />
                <Route path="/resume-enchancer" element={<EnhanceResume />} />
                <Route path="/more-interviews" element={<AdditionalInterview />} />
                <Route path="/machine-coding" element={<MachineCode />} />
                <Route path="/enhance-social" element={<Social />} />
                <Route path="/linkedin" element={<LinkedInEnhancementPage />} />
                <Route path="/github" element={<GitHubEnhancementPage />} />
                <Route path="/leetcode" element={<LeetCodeEnhancementPage />} />
                <Route path="/typing-test" element={<TypingTest />} />
                <Route path="/resume-form" element={<ResumeForm setResumeData={setResumeData} />} />
                <Route path="/planyourday" element={<PlanYourDay />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      ) : (
        <Navigate to="/home" />
      )}
    </Router>
  );
}

export default App;
