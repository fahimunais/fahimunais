import React, { useState, useEffect } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Knowledge base for RAG
  const knowledgeBase = {
    "name": "Muhammed Fahim",
    "role": "AI Engineer & ML Specialist",
    "expertise": ["AI Voicebots", "RASA NLP", "Asterisk & Telephony", "LLMs", "RAG Systems", "Agentic AI", "Python", "Open Source Tech"],
    "education": {
      "degree": "B.Tech in Information Technology",
      "institution": "College of Engineering Thalassery",
      "period": "2019 - 2023"
    },
    "experience": {
      "current": {
        "role": "AI/ML Engineer",
        "company": "astTECS Communications Pvt Ltd",
        "period": "April 2024 - Present",
        "description": "Working on developing advanced AI voicebots and voice agents integrated with telephony systems using Asterisk. Implementing LLM-powered solutions for customer support automation and building RAG pipelines to enhance information access."
      }
    },
    "projects": [
      {
        "title": "Intelligent Voice Agent",
        "description": "A sophisticated AI voice agent powered by LLMs and integrated with telephony systems for natural conversations and customer support automation.",
        "technologies": ["RASA", "Asterisk", "LLMs", "Python"]
      },
      {
        "title": "Enterprise RAG System",
        "description": "Retrieval-Augmented Generation system for enterprise knowledge management, providing accurate information retrieval and contextual responses.",
        "technologies": ["LangChain", "Vector DB", "LLMs", "FastAPI"]
      },
      {
        "title": "Autonomous AI Agent",
        "description": "Self-directed AI agent capable of reasoning, planning, and executing complex multi-step tasks with minimal human intervention.",
        "technologies": ["LLM Chains", "ReAct", "Tool Use", "Python"]
      }
    ],
    "contact": {
      "email": "fahimunais57@gmail.com",
      "phone": "+91 85477 64880",
      "location": "Maniyur, Kozhikode, Kerala, India, 673015"
    }
  };

  const welcomeMessages = [
    "👋 Hi there! I'm Fahim's AI assistant. Ask me anything about his skills, projects, or experience!",
    "Hello! Want to know more about Fahim's AI expertise? I'm here to help!",
    "Welcome! I can tell you all about Fahim's work with AI voicebots, LLMs, and more. What would you like to know?",
    "Hi there! Curious about Fahim's AI engineering skills? Feel free to ask me anything!",
    "Hello! I'm here to share insights about Fahim's experience with conversational AI and ML. What interests you?"
  ];

  // Simple RAG function to find relevant information
  const findRelevantInfo = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("name") || lowerQuery.includes("who")) {
      return `Muhammed Fahim is an AI Engineer & ML Specialist with expertise in conversational AI, NLP, and telephony systems.`;
    }
    
    if (lowerQuery.includes("education") || lowerQuery.includes("study") || lowerQuery.includes("college") || lowerQuery.includes("degree")) {
      return `Fahim graduated with a B.Tech in Information Technology from College of Engineering Thalassery in 2023, where he developed a strong foundation in computer science principles and specialized in AI/ML technologies.`;
    }
    
    if (lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("company") || lowerQuery.includes("experience")) {
      return `Fahim currently works at astTECS Communication Pvt Ltd as an AI/ML Engineer since April 2024. He's developing advanced AI voicebots and voice agents integrated with telephony systems using Asterisk, implementing LLM-powered solutions for customer support automation, and building RAG pipelines.`;
    }
    
    if (lowerQuery.includes("project") || lowerQuery.includes("portfolio") || lowerQuery.includes("work")) {
      return `Fahim has worked on several projects including: 1) An Intelligent Voice Agent using RASA and Asterisk, 2) An Enterprise RAG System for knowledge management, and 3) An Autonomous AI Agent capable of reasoning and executing complex tasks.`;
    }
    
    if (lowerQuery.includes("skill") || lowerQuery.includes("expertise") || lowerQuery.includes("technology") || lowerQuery.includes("tech")) {
      return `Fahim's key skills include AI Voicebots, RASA NLP, Asterisk & Telephony integration, working with LLMs (like GPT and Mistral), building RAG Systems, developing Agentic AI, Python programming, and leveraging open-source technologies.`;
    }
    
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone") || lowerQuery.includes("reach")) {
      return `You can contact Fahim via email at fahimunais57@gmail.com or by phone at +91 85477 64880. He's located in Maniyur, Kozhikode, Kerala, India.`;
    }
    
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey") || lowerQuery.includes("greetings")) {
      return `Hello! I'm Fahim's AI assistant. How can I help you learn more about him today?`;
    }
    
    return `I don't have specific information about that, but Fahim is an AI Engineer specializing in conversational AI, LLMs, and RAG systems. Would you like to know about his projects, skills, or experience instead?`;
  };

  const addMessage = (message, isUser = false) => {
    setMessages(prev => [...prev, { message, isUser, id: Date.now() }]);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    addMessage(inputMessage, true);
    setInputMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsTyping(false);
      const response = findRelevantInfo(inputMessage);
      addMessage(response, false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      addMessage(randomWelcome, false);
    }
  }, [isOpen]);

  return (
    <div className="chat-widget">
      <div 
        className="chat-icon" 
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <i className="fas fa-comment-alt"></i>
      </div>
      
      <div className={`chat-box ${isOpen ? 'show' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">Chat with Fahim AI</div>
          <button 
            className="close-chat" 
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}
            >
              {msg.message}
            </div>
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>
        
        <div className="chat-input-container">
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Ask me anything about Fahim..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-button" 
            onClick={handleSendMessage}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
