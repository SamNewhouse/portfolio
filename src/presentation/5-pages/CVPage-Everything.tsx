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

const CVPageEverything: NextPage<Props> = () => {
  return (
    <>
      <CVLayout className="CV">
        <SinglePage className="Page">
          <Header
            name="Sam Newhouse"
            location="Brighton / United Kingdom"
            phone="07867 424 919"
            email="samnewhouse@outlook.com"
            linkedin="linkedin.com/in/snewhouse"
          />
          <main className="flex-grow">
            <Section>
              <p className="text-sm mb-2 leading-relaxed text-gray-800">
                Brighton-based professional with experience in software
                engineering, administration, and logistics. Skilled in process
                optimisation, problem-solving, and technical solutions across
                property, retail, and technology sectors. Adaptable to diverse
                work environments.
              </p>
            </Section>
            <Section
              title="Professional Experience"
              className="current-employment"
            >
              <Job
                title="Administrator"
                company="Bearded Bros"
                period="Jul 2025 - Present"
                location="Brighton"
                responsibilities={[
                  "Conducted video calls to assess and calculate clients move volumes for accurate planning.",
                  "Booked and coordinated client appointments, optimising removals team schedules.",
                  "Acted as a point of contact for clients, providing clear information and resolving issues promptly.",
                  "Managed incoming calls and emails, responding promptly to client inquiries.",
                  "Assisted in preparing move documentation and quotations to support accurate billing and planning.",
                ]}
              />
              <Job
                title="Software Engineer"
                company="Freelance"
                period="Nov 2023 - Present"
                location="Remote"
                responsibilities={[
                  "Developed, maintained, and optimised a variety of web applications, from small projects to large-scale platforms.",
                  "Worked across both new and legacy codebases, improving performance, security, and maintainability.",
                  "Collaborated closely with clients to define project requirements and deliver tailored software solutions.",
                  "Applied version control and CI/CD pipelines to streamline deployment and collaboration.",
                  "Implemented automated testing and monitoring to improve system reliability and reduce downtime.",
                ]}
              />
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
              />
            </Section>
          </main>
        </SinglePage>
        <SinglePage className="Page">
          <main className="flex-grow">
            <Section>
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
              />
              <Job
                title="Administrator"
                company="SmartLet"
                period="July 2018 - Jan 2019"
                location="Brighton"
                responsibilities={[
                  "Maintained and updated rental property records using InventoryBase, ensuring accuracy for landlords and tenants.",
                  "Planned daily schedules and optimised travel routes for property clerks to maximise efficiency.",
                  "Compiled property inventory reports by transcribing audio recordings with attention to detail.",
                  "Handled administrative tasks, including managing emails and organising key documentation.",
                ]}
              />

              <Job
                title="Operations Assistant"
                company="Marks & Spencer"
                period="Oct 2014 - May 2018"
                location="Brighton"
                responsibilities={[
                  "Handled backstage grocery logistics, stock management, and order fulfilment.",
                  "Assisted with inventory control, ensuring smooth store operations.",
                  "Managed deliveries and optimised storage organisation for efficiency.",
                  "Coordinated stock replenishment and ensured timely product availability on the sales floor.",
                ]}
              />
            </Section>
            <Section title="Technical Expertise">
              <SkillCategory
                title="Software & Development"
                skills="JavaScript, TypeScript, React, Next.js, Node.js, GraphQL, PostgreSQL, MongoDB, AWS, Docker, CI/CD, Serverless"
                description="Experienced in full-stack development, API design, and cloud infrastructure. Skilled in building scalable, maintainable applications, optimising database performance, and implementing CI/CD pipelines."
              />

              <SkillCategory
                title="Operations & Logistics"
                skills="Stock management, Inventory control, Order fulfilment, Supply chain coordination, Process optimisation"
                description="Skilled in managing stock and inventory control, ensuring efficient supply chain coordination, and improving operational workflows for increased efficiency."
              />

              <SkillCategory
                title="Administrative & Organisational"
                skills="Scheduling, Document management, Compliance, Customer support, Property inventory, Data entry"
                description="Experienced in administrative support across multiple industries, including property and retail. Strong ability to manage documents, maintain compliance, and provide efficient customer service."
              />

              <SkillCategory
                title="Cloud & Infrastructure"
                skills="AWS (Lambda, EC2, S3, DynamoDB, CloudFront), Serverless, Docker, GitHub Actions, Terraform"
                description="Proficient in cloud architecture and infrastructure automation, focusing on security, scalability, and cost efficiency."
              />

              <SkillCategory
                title="Development Practices"
                skills="Agile, TDD, Microservices, Security Best Practices, Performance Optimisation"
                description="Dedicated to writing clean, maintainable code with a focus on best practices, security, and performance improvements."
              />
            </Section>
          </main>
        </SinglePage>
      </CVLayout>
    </>
  );
};

export default CVPageEverything;
