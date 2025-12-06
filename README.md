Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, photography, and resume, along with an interactive drag-and-drop game to make learning fun. Built using React, React Router, and HTML5/JS for the game section.

Features
Home Page: Welcoming introduction with a personal profile picture and overview.
About Me (Me): Detailed profile including education, career change story, technical skills, soft skills, and hobbies.
Projects: Highlights of key projects including:
	BayAirportRides – A comprehensive database design for an airport ride app.
	ResumeReadyRoll – A frontend design project to help users create resumes quickly.
	A Quick Game – Interactive drag-and-drop game to learn healthy vs unhealthy foods.
Photography: A gallery showcasing my photography work.
Resume: Viewable resume with a dark-themed background effect.
Contact: Contact form to get in touch.
Sidebar & Footer: Persistent navigation and social links for easy access.
Interactive Game: HTML5 drag-and-drop game with instant feedback.

Technologies Used
Frontend: React, JavaScript, CSS, HTML5
Routing: React Router
Game: HTML5 Drag-and-Drop API, JavaScript
Styling: Inline styles, CSS for layout, animations, and responsiveness

Getting Started
1. Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2. Install dependencies
npm install
3. Run the development server
npm start
Open http://localhost:3000 in your browser to see the portfolio.

Folder Structure
/src
  /components
    Footer.tsx
    Sidebar.tsx
  /pages
    Home.tsx
    Me.tsx
    Projects.tsx
    Photography.tsx
    Resume.tsx
    Contact.tsx
/public
  /asset
    /home
    /me
    /project
    /photography
    /resume
    /contact
    /game
      game.html
      game.css
      game.js
      game.json
      success.html
/App.tsx
/App.css

Interactive Game
The game is accessible from the Projects page.
Users drag food items into the correct category: Healthy, Tricky, or Unhealthy.
Instant feedback is provided; correct drops stay in place, incorrect items shake.
Upon completion, a success page displays with a congratulations message.

Usage
Explore each page through the navigation bar or sidebar.
Play the interactive game to learn about nutrition in a fun way.
Use the Contact page to send messages directly.

Design & UI Notes
Fully responsive layout for desktop and mobile.
Smooth transitions for hover effects and animations.
Sidebar with quick social media links.
Dark background effect for Resume page to highlight the document.

