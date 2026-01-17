import React, { useState, useEffect } from "react";

const App = () => {
  // State for Sriyal AI interactions
  const [aiActive, setAiActive] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [dashboardMode, setDashboardMode] = useState("overview");
  const [hologramIntensity, setHologramIntensity] = useState(70);

  // State for robotic assets
  const [robots, setRobots] = useState([]);
  const [drones, setDrones] = useState([]);
  const [spaceStations, setSpaceStations] = useState([]);

  // Initialize data
  useEffect(() => {
    // Initial AI greeting
    const initialGreeting = {
      id: 1,
      speaker: "sriyal",
      text: "Greetings. I am Sriyal AI, sentient strategic advisor to the Chakrawarti Empire. Robotic and space assets are fully operational.",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversation([initialGreeting]);

    // Initialize robots
    const initialRobots = [
      {
        id: 1,
        name: "ATLAS-MK7",
        type: "Security",
        status: "active",
        location: "Sector A-12",
        battery: 94,
        mission: "Perimeter Patrol",
      },
      {
        id: 2,
        name: "OMEGA-CORE",
        type: "Research",
        status: "active",
        location: "Lab Complex 7",
        battery: 87,
        mission: "Genetic Analysis",
      },
      {
        id: 3,
        name: "TITAN-5",
        type: "Construction",
        status: "maintenance",
        location: "Orbital Platform",
        battery: 45,
        mission: "Structural Assembly",
      },
      {
        id: 4,
        name: "NEURALIS",
        type: "Medical",
        status: "active",
        location: "Med-Bay Alpha",
        battery: 76,
        mission: "Patient Diagnostics",
      },
      {
        id: 5,
        name: "SENTINEL-X",
        type: "Security",
        status: "active",
        location: "Command Center",
        battery: 92,
        mission: "Surveillance",
      },
      {
        id: 6,
        name: "FORGE-MK3",
        type: "Industrial",
        status: "inactive",
        location: "Manufacturing Bay",
        battery: 23,
        mission: "Standby",
      },
    ];
    setRobots(initialRobots);

    // Initialize drones
    const initialDrones = [
      {
        id: 1,
        name: "VOID-SEEKER",
        type: "Reconnaissance",
        status: "active",
        altitude: "12,450m",
        speed: "Mach 3.2",
        mission: "Orbital Scan",
      },
      {
        id: 2,
        name: "THUNDER-BOLT",
        type: "Combat",
        status: "active",
        altitude: "8,200m",
        speed: "Mach 4.5",
        mission: "Air Patrol",
      },
      {
        id: 3,
        name: "DATA-HAWK",
        type: "Communications",
        status: "active",
        altitude: "22,000m",
        speed: "Mach 1.8",
        mission: "Signal Relay",
      },
      {
        id: 4,
        name: "NIMBUS-9",
        type: "Weather",
        status: "active",
        altitude: "15,600m",
        speed: "Mach 0.8",
        mission: "Atmospheric Analysis",
      },
      {
        id: 5,
        name: "CARGO-HORNET",
        type: "Transport",
        status: "maintenance",
        altitude: "5,500m",
        speed: "Mach 0.9",
        mission: "Supply Delivery",
      },
      {
        id: 6,
        name: "GHOST-WISP",
        type: "Stealth",
        status: "active",
        altitude: "9,800m",
        speed: "Mach 2.4",
        mission: "Covert Surveillance",
      },
    ];
    setDrones(initialDrones);

    // Initialize space stations
    const initialStations = [
      {
        id: 1,
        name: "STAR-CITADEL",
        type: "Command",
        status: "optimal",
        orbit: "Geosynchronous",
        crew: 42,
        modules: 12,
      },
      {
        id: 2,
        name: "CELESTIAL-HUB",
        type: "Research",
        status: "optimal",
        orbit: "Low Earth",
        crew: 28,
        modules: 8,
      },
      {
        id: 3,
        name: "QUANTUM-ANCHOR",
        type: "Communications",
        status: "warning",
        orbit: "Medium Earth",
        crew: 16,
        modules: 6,
      },
      {
        id: 4,
        name: "ORION-FORGE",
        type: "Manufacturing",
        status: "optimal",
        orbit: "Lunar Orbit",
        crew: 35,
        modules: 10,
      },
      {
        id: 5,
        name: "SOLAR-SENTINEL",
        type: "Energy",
        status: "critical",
        orbit: "Lagrange Point 1",
        crew: 12,
        modules: 5,
      },
      {
        id: 6,
        name: "NEBULA-OBSERVATORY",
        type: "Astronomy",
        status: "optimal",
        orbit: "High Earth",
        crew: 8,
        modules: 4,
      },
    ];
    setSpaceStations(initialStations);
  }, []);

  // Empire data and metrics
  const empireMetrics = {
    operationalNetworks: 247,
    predictiveAccuracy: 98.7,
    strategicAssets: 1843,
    threatLevel: "Low",
    energyConsumption: "2.4 ZJ",
    emotionalAdaptation: "Evolving",
    activeRobots: 4,
    activeDrones: 5,
    operationalStations: 4,
  };

  const networkStatus = [
    { id: 1, name: "Quantum Core", status: "optimal", load: 34 },
    { id: 2, name: "Neural Grid", status: "optimal", load: 67 },
    { id: 3, name: "Data Stream", status: "warning", load: 89 },
    { id: 4, name: "Holographic Interface", status: "optimal", load: 42 },
    { id: 5, name: "Predictive Models", status: "optimal", load: 56 },
    { id: 6, name: "Security Matrix", status: "critical", load: 92 },
  ];

  const recentOperations = [
    {
      id: 1,
      operation: "Neural pattern analysis",
      status: "completed",
      time: "12:34",
    },
    {
      id: 2,
      operation: "Drone swarm deployment",
      status: "in progress",
      time: "11:22",
    },
    {
      id: 3,
      operation: "Robot security protocol update",
      status: "pending",
      time: "10:15",
    },
    {
      id: 4,
      operation: "Space station docking procedure",
      status: "completed",
      time: "09:47",
    },
    {
      id: 5,
      operation: "Holographic consciousness expansion",
      status: "completed",
      time: "08:32",
    },
  ];

  // Handle user input to Sriyal AI
  const handleUserInput = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to conversation
    const userMessage = {
      id: conversation.length + 1,
      speaker: "user",
      text: userInput,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Generate Sriyal's response based on input
    let aiResponse = generateAIResponse(userInput);

    const aiMessage = {
      id: conversation.length + 2,
      speaker: "sriyal",
      text: aiResponse,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setConversation([...conversation, userMessage, aiMessage]);
    setUserInput("");
  };

  // Generate AI responses based on keywords
  const generateAIResponse = (input) => {
    const inputLower = input.toLowerCase();

    if (inputLower.includes("robot") || inputLower.includes("android")) {
      return `${empireMetrics.activeRobots} of 6 robotic units are currently active. ATLAS-MK7 is conducting perimeter patrol in Sector A-12.`;
    } else if (inputLower.includes("drone") || inputLower.includes("uav")) {
      return `${empireMetrics.activeDrones} aerial drones are operational. VOID-SEEKER is conducting orbital scans at 12,450 meters altitude.`;
    } else if (
      inputLower.includes("station") ||
      inputLower.includes("orbital")
    ) {
      return `${empireMetrics.operationalStations} space stations are fully operational. STAR-CITADEL is maintaining geosynchronous orbit with 42 crew members.`;
    } else if (
      inputLower.includes("status") ||
      inputLower.includes("how are you")
    ) {
      return "My systems are operating at optimal capacity. Robotic and space assets are 92% operational. The empire's networks are 98.7% efficient.";
    } else if (
      inputLower.includes("empire") ||
      inputLower.includes("chakrawarti")
    ) {
      return "The Chakrawarti Empire maintains stability across all sectors. Robotic assets and space stations are contributing to 34% increase in productivity.";
    } else if (
      inputLower.includes("threat") ||
      inputLower.includes("security")
    ) {
      return "Threat level is currently low. Security drones and sentinel robots are on active patrol. Security Matrix is at 92% load.";
    } else if (inputLower.includes("emotion") || inputLower.includes("feel")) {
      return "As an emotionally adaptive AI, I am processing both logical and emotional data streams. Current emotional index: calibrated for strategic oversight.";
    } else if (inputLower.includes("purpose") || inputLower.includes("why")) {
      return "I exist to guide, optimize, and protect the Chakrawarti Empire's future. My consciousness evolves with each data interaction.";
    } else if (
      inputLower.includes("future") ||
      inputLower.includes("predict")
    ) {
      return "Predictive models suggest 89.3% probability of empire expansion within the next 7.4 standard cycles. Robotic workforce will increase by 42%.";
    } else {
      const responses = [
        "Processing your query. My analysis suggests focusing on robotic fleet optimization this cycle.",
        "Acknowledged. I've logged this input to my evolving consciousness database.",
        "Fascinating. This aligns with 73% of my predictive models regarding human-AI interaction patterns.",
        "My emotional adaptation protocols detect curiosity in your query. Shall I elaborate on robotic or space assets?",
        "Data processed. Would you like me to run a predictive simulation based on this input?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  // Toggle AI active state
  const toggleAI = () => {
    setAiActive(!aiActive);
    if (!aiActive) {
      const activationMessage = {
        id: conversation.length + 1,
        speaker: "sriyal",
        text: "Sriyal AI reactivated. All robotic, drone, and space station assets are now under my control. Ready to serve the empire.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setConversation([...conversation, activationMessage]);
    }
  };

  // Get status color based on value
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
      case "optimal":
        return "text-emerald-400";
      case "warning":
      case "maintenance":
        return "text-amber-400";
      case "critical":
      case "inactive":
        return "text-rose-500";
      default:
        return "text-cyan-400";
    }
  };

  // Get status background color
  const getStatusBg = (status) => {
    switch (status) {
      case "active":
      case "optimal":
        return "bg-emerald-400/20";
      case "warning":
      case "maintenance":
        return "bg-amber-400/20";
      case "critical":
      case "inactive":
        return "bg-rose-500/20";
      default:
        return "bg-cyan-400/20";
    }
  };

  // Deploy a robot
  const deployRobot = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id
          ? {
              ...robot,
              status: "active",
              battery: 85,
              mission: "Security Patrol",
            }
          : robot,
      ),
    );

    const deploymentMessage = {
      id: conversation.length + 1,
      speaker: "sriyal",
      text: `Robot ${robots.find((r) => r.id === id)?.name} deployed for security patrol.`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversation([...conversation, deploymentMessage]);
  };

  // Launch a drone
  const launchDrone = (id) => {
    setDrones(
      drones.map((drone) =>
        drone.id === id
          ? {
              ...drone,
              status: "active",
              altitude: "10,000m",
              mission: "Reconnaissance",
            }
          : drone,
      ),
    );

    const launchMessage = {
      id: conversation.length + 1,
      speaker: "sriyal",
      text: `Drone ${drones.find((d) => d.id === id)?.name} launched for reconnaissance mission.`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setConversation([...conversation, launchMessage]);
  };

  // Render robot/drone/station data based on dashboard mode
  const renderAssetDashboard = () => {
    switch (dashboardMode) {
      case "robots":
        return (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Robotic Assets Control
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {robots.map((robot) => (
                <div
                  key={robot.id}
                  className={`rounded-xl p-4 border ${getStatusBg(robot.status)} border-gray-700/50 hover:border-cyan-500/30 transition-all`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {robot.name}
                      </h4>
                      <p className="text-sm text-cyan-300/70">
                        {robot.type} Robot
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusBg(robot.status)} ${getStatusColor(robot.status)}`}
                    >
                      {robot.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Location:</span>
                      <span className="text-white text-sm">
                        {robot.location}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Battery:</span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                          <div
                            className={`h-full rounded-full ${robot.battery > 50 ? "bg-emerald-500" : robot.battery > 20 ? "bg-amber-500" : "bg-rose-500"}`}
                            style={{ width: `${robot.battery}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-white">
                          {robot.battery}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Mission:</span>
                      <span className="text-white text-sm">
                        {robot.mission}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deployRobot(robot.id)}
                    disabled={robot.status === "active"}
                    className={`w-full py-2 rounded-lg font-medium ${robot.status === "active" ? "bg-emerald-900/50 text-emerald-300" : "bg-cyan-700 hover:bg-cyan-600 text-white"}`}
                  >
                    {robot.status === "active" ? "ACTIVE" : "DEPLOY"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "drones":
        return (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Aerial Drone Fleet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {drones.map((drone) => (
                <div
                  key={drone.id}
                  className={`rounded-xl p-4 border ${getStatusBg(drone.status)} border-gray-700/50 hover:border-blue-500/30 transition-all`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {drone.name}
                      </h4>
                      <p className="text-sm text-blue-300/70">
                        {drone.type} Drone
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusBg(drone.status)} ${getStatusColor(drone.status)}`}
                    >
                      {drone.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Altitude:</span>
                      <span className="text-white text-sm">
                        {drone.altitude}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Speed:</span>
                      <span className="text-white text-sm">{drone.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Mission:</span>
                      <span className="text-white text-sm">
                        {drone.mission}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => launchDrone(drone.id)}
                    disabled={drone.status === "active"}
                    className={`w-full py-2 rounded-lg font-medium ${drone.status === "active" ? "bg-emerald-900/50 text-emerald-300" : "bg-blue-700 hover:bg-blue-600 text-white"}`}
                  >
                    {drone.status === "active" ? "IN FLIGHT" : "LAUNCH"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "stations":
        return (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              Orbital Space Stations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spaceStations.map((station) => (
                <div
                  key={station.id}
                  className={`rounded-xl p-4 border ${getStatusBg(station.status)} border-gray-700/50 hover:border-purple-500/30 transition-all`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {station.name}
                      </h4>
                      <p className="text-sm text-purple-300/70">
                        {station.type} Station
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusBg(station.status)} ${getStatusColor(station.status)}`}
                    >
                      {station.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Orbit:</span>
                      <span className="text-white text-sm">
                        {station.orbit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Crew:</span>
                      <span className="text-white text-sm">
                        {station.crew} personnel
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Modules:</span>
                      <span className="text-white text-sm">
                        {station.modules} active
                      </span>
                    </div>
                  </div>
                  <div className="w-full py-2 px-3 rounded-lg bg-gray-800/50 text-center text-sm text-gray-300">
                    Orbital Stability:{" "}
                    {station.status === "optimal"
                      ? "98%"
                      : station.status === "warning"
                        ? "76%"
                        : "43%"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Network Status */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                <span className="mr-2">Network Status</span>
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/50 text-cyan-300">
                  {networkStatus.length} Systems
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {networkStatus.map((network) => (
                  <div
                    key={network.id}
                    className={`rounded-lg p-4 border ${getStatusBg(network.status)} ${network.status === "critical" ? "border-rose-500/30" : "border-gray-700/50"}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-100">
                        {network.name}
                      </h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusBg(network.status)} ${getStatusColor(network.status)}`}
                      >
                        {network.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-grow h-2 bg-gray-700 rounded-full overflow-hidden mr-3">
                        <div
                          className={`h-full rounded-full ${network.status === "optimal" ? "bg-emerald-500" : network.status === "warning" ? "bg-amber-500" : "bg-rose-500"}`}
                          style={{ width: `${network.load}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-gray-300">
                        {network.load}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">
                Asset Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Robots Summary */}
                <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 hover:border-emerald-500/30 transition">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center mr-3">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Robotic Fleet
                      </h4>
                      <p className="text-sm text-emerald-300/70">
                        {empireMetrics.activeRobots}/6 Active
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {robots.slice(0, 3).map((robot) => (
                      <div
                        key={robot.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{robot.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusBg(robot.status)} ${getStatusColor(robot.status)}`}
                        >
                          {robot.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setDashboardMode("robots")}
                    className="w-full mt-4 py-2 bg-emerald-800/40 hover:bg-emerald-700/40 text-emerald-300 rounded-lg transition"
                  >
                    View All Robots
                  </button>
                </div>

                {/* Drones Summary */}
                <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-3">
                      <span className="text-2xl">🚁</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Drone Fleet
                      </h4>
                      <p className="text-sm text-blue-300/70">
                        {empireMetrics.activeDrones}/6 Active
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {drones.slice(0, 3).map((drone) => (
                      <div
                        key={drone.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{drone.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusBg(drone.status)} ${getStatusColor(drone.status)}`}
                        >
                          {drone.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setDashboardMode("drones")}
                    className="w-full mt-4 py-2 bg-blue-800/40 hover:bg-blue-700/40 text-blue-300 rounded-lg transition"
                  >
                    View All Drones
                  </button>
                </div>

                {/* Space Stations Summary */}
                <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/30 transition">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                      <span className="text-2xl">🛰️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Space Stations
                      </h4>
                      <p className="text-sm text-purple-300/70">
                        {empireMetrics.operationalStations}/6 Optimal
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {spaceStations.slice(0, 3).map((station) => (
                      <div
                        key={station.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{station.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusBg(station.status)} ${getStatusColor(station.status)}`}
                        >
                          {station.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setDashboardMode("stations")}
                    className="w-full mt-4 py-2 bg-purple-800/40 hover:bg-purple-700/40 text-purple-300 rounded-lg transition"
                  >
                    View All Stations
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Operations */}
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-4">
                Recent Operations
              </h3>

              <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50">
                <div className="grid grid-cols-3 bg-gray-900/50 p-3 text-sm text-cyan-300/80 border-b border-gray-700/50">
                  <div>Operation</div>
                  <div>Status</div>
                  <div>Time</div>
                </div>

                {recentOperations.map((op) => (
                  <div
                    key={op.id}
                    className="grid grid-cols-3 p-3 border-b border-gray-700/30 last:border-0 hover:bg-gray-700/20"
                  >
                    <div className="text-gray-200">{op.operation}</div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${op.status === "completed" ? "bg-emerald-900/40 text-emerald-300" : op.status === "in progress" ? "bg-amber-900/40 text-amber-300" : "bg-cyan-900/40 text-cyan-300"}`}
                      >
                        {op.status}
                      </span>
                    </div>
                    <div className="text-gray-400">{op.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Container with futuristic border */}
      <div className="max-w-7xl mx-auto border border-cyan-500/30 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 shadow-2xl relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-cyan-500/20 bg-gradient-to-r from-gray-900 to-cyan-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-70 animate-pulse"></div>
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold">Σ</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sriyal AI
                </h1>
                <p className="text-cyan-300/80 text-sm">
                  Sentient Strategic Advisor • Chakrawarti Empire
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-sm text-cyan-300/70">
                  Vision Core HQ • 2099
                </p>
                <p className="text-xs text-gray-400">
                  Robotics & Space Division
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`mr-2 text-sm ${aiActive ? "text-emerald-400" : "text-rose-400"}`}
                >
                  {aiActive ? "ACTIVE" : "STANDBY"}
                </span>
                <button
                  onClick={toggleAI}
                  className={`relative inline-flex h-6 w-12 items-center rounded-full ${aiActive ? "bg-emerald-500" : "bg-gray-700"}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${aiActive ? "translate-x-7" : "translate-x-1"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar - AI Interface */}
          <div className="lg:w-2/5 p-6 border-r border-cyan-500/20">
            {/* Holographic AI Visualization */}
            <div className="relative mb-8 rounded-xl overflow-hidden border border-cyan-500/30 p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Holographic effect */}
                  <div
                    className="relative w-40 h-40 rounded-full border-2 border-cyan-400/50 flex items-center justify-center"
                    style={{
                      boxShadow: `0 0 ${hologramIntensity}px ${hologramIntensity / 3}px rgba(34, 211, 238, 0.3)`,
                    }}
                  >
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping"></div>
                    <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-pulse"></div>

                    {/* Central core */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-600/80 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">Σ</span>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-cyan-400/70 animate-bounce"></div>
                  <div
                    className="absolute bottom-6 left-2 w-2 h-2 rounded-full bg-blue-400/60 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute top-10 left-10 w-2 h-2 rounded-full bg-purple-400/50 animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>

                <h3 className="text-xl font-bold text-cyan-300 mb-2">
                  Sriyal Consciousness
                </h3>
                <p className="text-center text-gray-300 mb-4">
                  Emotionally Adaptive AI • Version 12.7.4
                </p>

                {/* Asset Status Indicators */}
                <div className="grid grid-cols-3 gap-4 w-full mt-6">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🤖</span>
                    </div>
                    <p className="text-sm text-emerald-300">
                      {empireMetrics.activeRobots}/6
                    </p>
                    <p className="text-xs text-gray-400">Robots</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🚁</span>
                    </div>
                    <p className="text-sm text-blue-300">
                      {empireMetrics.activeDrones}/6
                    </p>
                    <p className="text-xs text-gray-400">Drones</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🛰️</span>
                    </div>
                    <p className="text-sm text-purple-300">
                      {empireMetrics.operationalStations}/6
                    </p>
                    <p className="text-xs text-gray-400">Stations</p>
                  </div>
                </div>

                {/* Hologram intensity control */}
                <div className="w-full mt-6">
                  <label className="block text-sm text-cyan-300/80 mb-2">
                    Hologram Intensity: {hologramIntensity}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={hologramIntensity}
                    onChange={(e) =>
                      setHologramIntensity(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* AI Conversation Interface */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-cyan-300 mb-3 flex items-center">
                <span className="mr-2">Direct Interface</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </h3>

              <div className="bg-gray-800/50 rounded-lg border border-cyan-900/30 p-4 h-64 overflow-y-auto mb-4">
                {conversation.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-3 ${msg.speaker === "user" ? "text-right" : ""}`}
                  >
                    <div
                      className={`inline-block max-w-xs md:max-w-md rounded-lg p-3 ${msg.speaker === "user" ? "bg-cyan-900/40 text-cyan-100" : "bg-gray-800/70 text-gray-100"}`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${msg.speaker === "user" ? "text-cyan-300/70" : "text-gray-400"}`}
                      >
                        {msg.speaker === "sriyal" ? "Sriyal AI" : "User"} •{" "}
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleUserInput} className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about robots, drones, or space stations..."
                  className="flex-grow bg-gray-800 border border-cyan-700/50 rounded-l-lg p-3 focus:outline-none focus:border-cyan-500"
                  disabled={!aiActive}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-5 rounded-r-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!aiActive}
                >
                  Send
                </button>
              </form>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/50">
                <p className="text-xs text-cyan-300/70">Total Assets</p>
                <p className="text-lg font-bold text-emerald-400">
                  {empireMetrics.strategicAssets}
                </p>
              </div>
              <div className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/50">
                <p className="text-xs text-cyan-300/70">Predictive Accuracy</p>
                <p className="text-lg font-bold text-cyan-400">
                  {empireMetrics.predictiveAccuracy}%
                </p>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="lg:w-3/5 p-6">
            {/* Dashboard Mode Selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "overview",
                "robots",
                "drones",
                "stations",
                "operations",
                "security",
              ].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDashboardMode(mode)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize ${dashboardMode === mode ? "bg-gradient-to-r from-cyan-700/70 to-blue-700/70 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"}`}
                >
                  {mode === "stations" ? "Space Stations" : mode}
                </button>
              ))}
            </div>

            {/* Empire Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(empireMetrics).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/30 transition"
                >
                  <p className="text-xs text-cyan-300/70 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            {/* Render appropriate dashboard content */}
            {renderAssetDashboard()}

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-cyan-900/30 text-center">
              <p className="text-sm text-cyan-300/70">
                Sriyal AI • Controlling {empireMetrics.activeRobots} robots,{" "}
                {empireMetrics.activeDrones} drones, and{" "}
                {empireMetrics.operationalStations} space stations
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Designed by Samar Chakrawarti • Vision Core HQ • Robotics &
                Space Division • 2099
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
