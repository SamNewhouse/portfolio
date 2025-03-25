import { NextPage } from "next";
import Job from "../1-atoms/CV/Job";
import Section from "../1-atoms/CV/Section";
import SinglePage from "../1-atoms/CV/SinglePage";
import SkillCategory from "../1-atoms/CV/SkillCategory";
import Header from "../2-molecules/CV/Header";
import CVLayout from "../4-layouts/CVLayout";

interface Props {
  //
}

const CVPage: NextPage<Props> = () => {
  return (
    <>
      <CVLayout className="CV">
        <SinglePage className="Page">
          <Header
            name="Sam Newhouse"
            location="Brighton / United Kingdom"
            phone="07867 424 919"
            email="hello@samnewhouse.co.uk"
            linkedin="linkedin.com/in/snewhouse"
            github="github.com/SamNewhouse"
          />
          <main className="flex-grow">
            <Section>
              <p className="text-sm mb-2 leading-relaxed text-gray-800">
                Brighton-based Software Engineer with 5+ years of full-stack
                experience, specialising in scalable web applications, modern
                JavaScript frameworks, and cloud technologies. Skilled in
                architecting performant solutions, writing clean, maintainable
                code, and leading technical initiatives to enhance performance,
                security, and scalability.
              </p>
            </Section>
            <Section title="Technical Expertise">
              <SkillCategory
                title="Core Technologies"
                skills="JavaScript, TypeScript, React.js, Next.js, Node.js"
                description="Expert in modern JavaScript development, including state management, component architecture, and performance optimization."
              />
              <SkillCategory
                title="Backend & Databases"
                skills="PHP, Laravel, MySQL, PostgreSQL, MongoDB, GraphQL, REST APIs"
                description="Experienced in building scalable backend systems, optimising databases, and developing efficient APIs."
              />
              <SkillCategory
                title="Cloud & DevOps"
                skills="AWS (Lambda, EC2, S3, CloudFront), Serverless Framework, Docker, GitHub Actions, CircleCI"
                description="Skilled in cloud architecture, CI/CD automation, and infrastructure as code."
              />
              <SkillCategory
                title="Frontend & UI"
                skills="Tailwind CSS, SASS/LESS, Styled Components, Responsive Design"
                description="Focused on building responsive, accessible, and high-performance user interfaces."
              />
              <SkillCategory
                title="Development Practices"
                skills="Agile, TDD, Microservices, Security Best Practices"
                description="Dedicated to writing clean, maintainable code with strong testing and documentation."
              />
              <SkillCategory
                title="Tools & Platforms"
                skills="Git, JIRA, Confluence, Sentry, Cloudflare, Heroku, Vercel, Netlify"
                description="Proficient with modern development tools for efficient workflow and deployment."
              />
            </Section>

            <Section title="Current Employment" className="current-employment">
              <Job
                title="Software Engineer"
                company="Freelance"
                period="Nov 2023 - Present"
                location="Remote"
                responsibilities={[
                  "Developed, maintained, and optimised a variety of web applications, from small projects to large-scale platforms.",
                  "Worked across both new and legacy codebases, improving performance, security, and maintainability.",
                  "Collaborated closely with clients to define project requirements and deliver tailored software solutions.",
                ]}
                achievements={[
                  "Consistently delivered high-quality projects, strengthening client relationships.",
                  "Optimised legacy applications, reducing load times by roughly 40% and improving maintainability.",
                  "Led the setup of new projects, defining architecture and best practices for long-term scalability.",
                ]}
                technologies={[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "AWS DynamoDB",
                  "AWS Lambda",
                  "AWS SNS",
                  "AWS SQS",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                  "REST API",
                  "Docker",
                  "Prisma",
                  "Serverless",
                  "SST",
                  "Jest",
                  "GitHub Actions",
                  "CI/CD",
                ]}
              />
            </Section>
          </main>
        </SinglePage>
        <SinglePage className="Page">
          <main className="flex-grow">
            <Section title="Employment History">
              <Job
                title="Software Engineer"
                company="Shieldpay"
                period="May 2022 - Oct 2023"
                location="Remote"
                responsibilities={[
                  "Handled most platform maintenance for our microservice architecture, ensuring high performance and security.",
                  "Designed and implemented microservices architecture, improving system modularity and scalability.",
                  "Collaborated with cross-functional teams to align technical solutions with business objectives.",
                  "Conducted thorough code reviews and mentored junior developers to maintain best practices.",
                  "Optimised cloud infrastructure to enhance performance and reduce operational costs.",
                ]}
                achievements={[
                  "Helped migrate legacy systems to a microservices architecture, improving reliability and efficiency.",
                  "Reduced deployment times by 50% through CI/CD automation with Docker and GitHub Actions.",
                  "Improved developer efficiency with TypeScript, reducing runtime errors and boosting maintainability.",
                  "Implemented Infrastructure as Code (IaC) using SST, streamlining deployments and enhancing scalability.",
                ]}
                technologies={[
                  "TypeScript",
                  "Node.js",
                  "Serverless",
                  "SST",
                  "AWS DynamoDB",
                  "AWS Lambda",
                  "AWS SNS",
                  "AWS SQS",
                  "Docker",
                  "PostgreSQL",
                  "GraphQL",
                  "GitHub Actions",
                  "CircleCI",
                ]}
              />
              <Job
                title="Full-stack Developer"
                company="Canterbury Council"
                period="Sept 2021 - May 2022"
                location="Remote"
                responsibilities={[
                  "Developed and maintained council web applications and internal tools, ensuring scalability and performance.",
                  "Built and optimised APIs to support various services, ensuring seamless data flow and integration.",
                  "Implemented comprehensive unit and integration testing strategies using Jest to enhance code reliability.",
                  "Led development of a Serverless microservices architecture, enhancing flexibility and maintainability.",
                ]}
                achievements={[
                  "Built a new Serverless project to handle all microservices, improving scalability and maintainability.",
                  "Increased test coverage from 40% to 65% using Jest, significantly reducing bugs in production.",
                ]}
                technologies={[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "AWS Lambda",
                  "AWS DynamoDB",
                  "Jest",
                  "Serverless",
                  "Docker",
                  "CI/CD",
                ]}
              />

              <Job
                title="Full-stack Developer"
                company="The Unit"
                period="Jan 2019 - Sept 2021"
                location="Brighton"
                responsibilities={[
                  "Developed and maintained websites and applications for a diverse range of clients.",
                  "Built and optimised front-end and back-end solutions using PHP, JavaScript, and TypeScript.",
                  "Integrated third-party services, including CRM and data management platforms.",
                  "Managed cloud infrastructure and implemented DevOps best practices to improve deployment workflows.",
                ]}
                achievements={[
                  "Migrated five major client websites to a faster stack, cutting load times by 60%.",
                  "Implemented a new caching strategy that reduced server costs by 30%.",
                  "Developed an internal tool that automated report generation, saving the team 10 hours per week.",
                  "Delivered modern Next.js applications while maintaining and upgrading legacy PHP projects.",
                ]}
                technologies={[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Vue.js",
                  "AWS",
                  "PHP",
                  "Laravel",
                  "WordPress",
                  "Salesforce",
                  "Docker",
                  "GitHub Actions",
                ]}
              />
            </Section>
          </main>
        </SinglePage>
      </CVLayout>
    </>
  );
};

export default CVPage;
