import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <div id="experience">
      <div className="text-2xl pb-8">Experience</div>
      <ExperienceCard
        duration="Mar 2024 – Present"
        title="Credence Management Solutions, McLean, VA - Junior Front End Developer"
       >
 <div>• Designing a UI with Figma design.</div>
        <div>• Creating a UI/UX implementation using React/Next.js.</div>
        <div>• Developing governmental applications using USWDS standards and components by ensuring 508   compliance, browser compatibility, and responsiveness.</div>
        <div>• Collaborated with senior developers, project owners, and designers to implement tasks.</div>
        <div>• Developing AWS services using S3 bucket, API Gateway and Lambda, and connecting to Next.js applications.</div>
        <div>• Collaborating with AI development team, using AWS Bedrock, developed LLMA-3 chatbot, and implement Next.js app that store chat-history to AWS S3 Bucket and stream responses to the browser.</div>
        <div>• Writing unit test and writing YAML script for CI/CD to secure test results to be 80% pass before deployment.</div>
        <div>• Implementing storybook templates for reusable components and making it available as a package.</div>
        

       </ExperienceCard>
       
      
      <ExperienceCard
        duration="Nov 2022 – Mar 2024"
        title="Solution Ladder, Silver Spring, MD - Junior Front End Developer">
        <div>• Collaborated with senior developers, project owners, and designers to implement tasks, ensuring 508   compliance, browser compatibility, and responsiveness.</div>
        <div>• Developed React features using class and functional components, hooks, and libraries.</div>
        <div>• Implemented RESTful APIs with the MERN stack, emphasizing middleware, Express.js, and Passport.</div>
        <div>• Utilized Docker for basic containerization and GitHub for collaboration and CI/CD.</div>
        <div>• Engaged in end-to-end involvement in the application lifecycle—from inception to deployment and bug resolution.</div>
        <div>• Familiar with Redux making reducers functions and implementing store methods. </div>
        <div>• Environment: Visual Studio Code, HTML5, CSS4, Web API, JSON, GitHub, Typescript, OAuth, JWT, Jira, Postman, AWS, Linux, Windows.</div>
        </ExperienceCard>
      <ExperienceCard
        duration="May 2022 - Nov 2022"
        title="Solution Ladder, Silver Spring, MD - Web Developer (Internship)"
        >
        <div>• Acquired foundational skills in HTML, CSS, and JavaScript for web development.</div>
        <div>• Conducted pre- and post-production manual testing, coordinated team meetings, and addressed HTML/CSS/JS issues.</div>
        <div>• Assisted senior developers, contributed to feature enhancements, and created a sample library application using vanilla JavaScript.</div>
        </ExperienceCard>
    </div>
  );
}
