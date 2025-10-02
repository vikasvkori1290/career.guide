"use client";

import { useState } from "react";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
}

interface RoadmapTrack {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  items: RoadmapItem[];
}

const roadmapData: RoadmapTrack[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description:
      "Master modern web development with HTML, CSS, JavaScript and frameworks",
    icon: "🎨",
    color: "bg-blue-500",
    items: [
      {
        id: "html-css",
        title: "HTML & CSS Fundamentals",
        description: "Learn semantic HTML structure and modern CSS styling",
        completed: false,
        resources: ["MDN Web Docs", "CSS Grid Guide", "Flexbox Guide"],
        difficulty: "Beginner",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "javascript",
        title: "JavaScript Core Concepts",
        description:
          "Master ES6+, async/await, closures, and modern JavaScript patterns",
        completed: false,
        resources: ["JavaScript.info", "Eloquent JavaScript", "MDN JS Guide"],
        difficulty: "Beginner",
        estimatedTime: "4-6 weeks",
      },
      {
        id: "react",
        title: "React Framework",
        description:
          "Build interactive UIs with components, hooks, and state management",
        completed: false,
        resources: ["React Docs", "React Tutorial", "Redux Toolkit"],
        difficulty: "Intermediate",
        estimatedTime: "6-8 weeks",
      },
      {
        id: "typescript",
        title: "TypeScript",
        description: "Add type safety to your JavaScript applications",
        completed: false,
        resources: ["TypeScript Handbook", "TS in 5 Minutes"],
        difficulty: "Intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "nextjs",
        title: "Next.js Full-Stack Framework",
        description:
          "Build production-ready React applications with SSR and API routes",
        completed: false,
        resources: ["Next.js Docs", "Learn Next.js"],
        difficulty: "Advanced",
        estimatedTime: "4-6 weeks",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Build scalable server-side applications and APIs",
    icon: "⚙️",
    color: "bg-green-500",
    items: [
      {
        id: "nodejs",
        title: "Node.js Runtime",
        description: "Master server-side JavaScript with Node.js and npm",
        completed: false,
        resources: ["Node.js Docs", "Express.js Guide"],
        difficulty: "Beginner",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "databases",
        title: "Database Design & SQL",
        description:
          "Learn relational databases, SQL queries, and data modeling",
        completed: false,
        resources: ["SQL Tutorial", "Database Design Guide"],
        difficulty: "Beginner",
        estimatedTime: "4-5 weeks",
      },
      {
        id: "rest-api",
        title: "RESTful API Design",
        description:
          "Build scalable APIs with proper HTTP methods and status codes",
        completed: false,
        resources: ["REST API Tutorial", "API Design Best Practices"],
        difficulty: "Intermediate",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "authentication",
        title: "Authentication & Security",
        description: "Implement secure user authentication and authorization",
        completed: false,
        resources: ["JWT Guide", "OAuth 2.0 Tutorial"],
        difficulty: "Intermediate",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        description:
          "Design scalable systems with microservices and containers",
        completed: false,
        resources: ["Microservices Guide", "Docker Tutorial"],
        difficulty: "Advanced",
        estimatedTime: "6-8 weeks",
      },
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack Development",
    description:
      "Combine frontend and backend skills to build complete applications",
    icon: "🔧",
    color: "bg-purple-500",
    items: [
      {
        id: "mern-stack",
        title: "MERN Stack",
        description: "Master MongoDB, Express.js, React, and Node.js",
        completed: false,
        resources: ["MERN Tutorial", "Full-Stack Open"],
        difficulty: "Intermediate",
        estimatedTime: "8-10 weeks",
      },
      {
        id: "deployment",
        title: "Deployment & DevOps",
        description:
          "Deploy applications to cloud platforms and manage production systems",
        completed: false,
        resources: ["Vercel Guide", "AWS Tutorial", "Docker Guide"],
        difficulty: "Intermediate",
        estimatedTime: "4-6 weeks",
      },
      {
        id: "testing",
        title: "Testing & Quality Assurance",
        description: "Write comprehensive tests for robust applications",
        completed: false,
        resources: ["Jest Guide", "Testing Best Practices"],
        difficulty: "Intermediate",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "performance",
        title: "Performance Optimization",
        description: "Optimize application speed and user experience",
        completed: false,
        resources: ["Web Performance Guide", "React Performance"],
        difficulty: "Advanced",
        estimatedTime: "3-4 weeks",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    description:
      "Automate deployment, monitoring, and infrastructure management",
    icon: "🚀",
    color: "bg-orange-500",
    items: [
      {
        id: "linux",
        title: "Linux & Command Line",
        description: "Master essential Linux commands and shell scripting",
        completed: false,
        resources: ["Linux Journey", "Bash Guide"],
        difficulty: "Beginner",
        estimatedTime: "2-3 weeks",
      },
      {
        id: "git",
        title: "Git & Version Control",
        description: "Master collaborative development with Git workflows",
        completed: false,
        resources: ["Git Guide", "Git Flow Tutorial"],
        difficulty: "Beginner",
        estimatedTime: "1-2 weeks",
      },
      {
        id: "docker",
        title: "Containerization with Docker",
        description: "Package applications with Docker containers",
        completed: false,
        resources: ["Docker Tutorial", "Docker Compose Guide"],
        difficulty: "Intermediate",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "ci-cd",
        title: "CI/CD Pipelines",
        description: "Automate testing and deployment with GitHub Actions",
        completed: false,
        resources: ["GitHub Actions Guide", "Jenkins Tutorial"],
        difficulty: "Intermediate",
        estimatedTime: "3-4 weeks",
      },
      {
        id: "cloud",
        title: "Cloud Platforms",
        description: "Deploy and manage applications on AWS, Azure, or GCP",
        completed: false,
        resources: ["AWS Training", "Google Cloud Guide"],
        difficulty: "Advanced",
        estimatedTime: "6-8 weeks",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Build native and cross-platform mobile applications",
    icon: "📱",
    color: "bg-pink-500",
    items: [
      {
        id: "react-native",
        title: "React Native",
        description: "Build cross-platform mobile apps with React Native",
        completed: false,
        resources: ["React Native Docs", "Expo Tutorial"],
        difficulty: "Intermediate",
        estimatedTime: "6-8 weeks",
      },
      {
        id: "flutter",
        title: "Flutter Framework",
        description: "Create beautiful native apps with Dart and Flutter",
        completed: false,
        resources: ["Flutter Docs", "Flutter Codelab"],
        difficulty: "Intermediate",
        estimatedTime: "6-8 weeks",
      },
      {
        id: "ios-android",
        title: "Native iOS & Android",
        description: "Build platform-specific apps with Swift/Kotlin",
        completed: false,
        resources: ["Swift Tutorial", "Kotlin Guide"],
        difficulty: "Advanced",
        estimatedTime: "8-12 weeks",
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science & ML",
    description: "Analyze data and build machine learning models",
    icon: "📊",
    color: "bg-indigo-500",
    items: [
      {
        id: "python-data",
        title: "Python for Data Science",
        description: "Master Python libraries: NumPy, Pandas, Matplotlib",
        completed: false,
        resources: ["Python Data Science Handbook", "Pandas Guide"],
        difficulty: "Beginner",
        estimatedTime: "4-6 weeks",
      },
      {
        id: "statistics",
        title: "Statistics & Probability",
        description: "Learn statistical analysis",
        completed: false,
        resources: ["Statistics Textbook", "Khan Academy Stats"],
        difficulty: "Intermediate",
        estimatedTime: "4-6 weeks",
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        description: "Build predictive models with scikit-learn and TensorFlow",
        completed: false,
        resources: ["Machine Learning Course", "TensorFlow Guide"],
        difficulty: "Advanced",
        estimatedTime: "8-12 weeks",
      },
    ],
  },
];

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<RoadmapTrack | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const toggleComplete = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const getTrackProgress = (track: RoadmapTrack) => {
    const completed = track.items.filter((item) =>
      completedItems.has(item.id),
    ).length;
    return Math.round((completed / track.items.length) * 100);
  };

  if (selectedTrack) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => setSelectedTrack(null)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
            >
              ← Back to Tracks
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedTrack.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {selectedTrack.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  {selectedTrack.description}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">Progress</span>
                <span className="text-sm text-gray-500">
                  {getTrackProgress(selectedTrack)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${selectedTrack.color}`}
                  style={{ width: `${getTrackProgress(selectedTrack)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {selectedTrack.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div
                  className="p-4 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={completedItems.has(item.id)}
                      onChange={() => toggleComplete(item.id)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            item.difficulty === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : item.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">
                          ⏱️ {item.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">
                      {item.resources.length} resources
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${expandedItems.has(item.id) ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {expandedItems.has(item.id) && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 mt-3 mb-3">
                      {item.description}
                    </p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Resources:
                      </h4>
                      <ul className="space-y-1">
                        {item.resources.map((resource, index) => (
                          <li
                            key={index}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            • {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Software Engineering Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to becoming a successful software engineer.
            Choose a track and start your learning journey with curated
            resources and progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {roadmapData.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200"
              onClick={() => setSelectedTrack(track)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${track.color} flex items-center justify-center text-white text-xl`}
                  >
                    {track.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {track.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {track.items.length} topics
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{track.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Difficulty Levels:</span>
                  </div>
                  <div className="flex gap-2">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => {
                      const count = track.items.filter(
                        (item) => item.difficulty === level,
                      ).length;
                      return count > 0 ? (
                        <span
                          key={level}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {level}: {count}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
