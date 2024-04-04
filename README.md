# React.js Project Documentation

## Project Overview
This project is developed using React.js, a popular JavaScript library for building user interfaces. The project leverages several technologies and frameworks to create a robust and responsive web application.

### Technologies Used
- **React.js**: Core library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Ant Design**: UI library for React applications.
- **Material UI**: React components that implement Google's Material Design.
- **useContext API**: React's built-in state management for managing global state.
- **Authentication**: Added authentication feature for user management.
- **Protected Routes**: Ensured certain routes are accessible only when authenticated.

### Development Approach
The project is structured around a layout skeleton, with individual components developed separately and then integrated into the layout for a cohesive user experience.

### Deployment and Version Control
- **Deployment**: The project is deployed on Netlify.
- **Version Control**: GitHub is used for version control, hosting the project's source code.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/S-NANTHAKUMAR-github-io/insta-profile.git
   ```

2. **Navigate to Project Directory**
   ```bash
   cd insta-profile
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

### Running the Project

1. **Development Mode**
   ```bash
   npm start
   ```
   This command will start the development server, typically on `http://localhost:3000`.

2. **Production Build**
   ```bash
   npm run build
   ```
   This command builds the app for production to the `build` folder.

---

## Project Structure

- **Layout Skeleton**: Main structure of the application.
- **Components**: Individual components developed separately.
- **Integration**: Components integrated into the layout for a unified user interface.

---

## Features

- **Styling**: Utilized Tailwind CSS for styling.
- **UI Components**: Leveraged Ant Design and Material UI for building UI components.
- **Global State Management**: Managed global state using useContext API.
- **Authentication**: Implemented authentication for user management.
- **Protected Routes**: Ensured certain routes are protected and accessible only when authenticated.

---

## Deployment

The project is deployed using Netlify, providing continuous deployment and hosting services.

### Deployment Steps

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Login to Netlify and create a new site.
   - Link the GitHub repository to Netlify for automatic deployments.
   - Deploy the built project to the Netlify site.

---

## Version Control

GitHub is used for version control, allowing for collaboration and tracking changes to the project's source code.

### Version Control Steps

1. **Initialize Repository**
   ```bash
   git init
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/S-NANTHAKUMAR-github-io/insta-profile.git
   git push -u origin master
   ```

---

This documentation provides an overview of the React.js project, detailing the technologies used, development approach, installation and deployment steps, and features implemented. Follow the provided steps to clone, run, and deploy the project successfully.
