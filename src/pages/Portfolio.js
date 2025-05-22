import './Portfolio.css';
import { motion } from 'framer-motion';
import Header from "../Components/Header";
import { handleScroll } from "../Components/Header"
import Footer from '../Components/Footer';
import Truworth from "../assests/images/logo.jpg"
import TruworthWebsite from "../assests/images/truworth-website.jpg"
import ThewellnessCorner from "../assests/images/the-wellness-corner.jpg"
import { TwitterOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons"

const Profile = () => {

    const skills = [
        { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Sass/Scss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Ant Design", icon: "https://yourcdn.com/antd-icon.svg" }
    ];

    const experiences = [
        {
            title: "Software Development",
            duration: "June 2023 Present",
            responsibilities: [
                "Developed and maintained responsive user interfaces using React.Js, Next.Js, HTML5 and Tailwind Css, resultin in: Improved user engagement on key pages and successfull launch of several new features.",
                "Updated old code base to modern standardsn successfully reducing operating costs by approximately 10-15% and enhancing applicaiton stability.",
                "Utilized javascript (ES6+) for implementing features and handling data using RESTful APIs, optimizing data fetching process.",
                "Collaborated effectively within an agile framework, participating in sprint planningn and daily stand-ups."
            ],
        },
        {
            title: "Software Development Internship",
            duration: "Nov 2022 May 2023",
            responsibilities: [
                "Developed foundational web pages and components using semantic HTML, Css and Javascript.",
                "Gained hands-on experience with React Js by contributing to small features.",
                "Assisted the development team, learning about Git version control and basic API integration.",
            ],
        },
    ];

    const workTags = [
        { name: "React", url: "https://reactjs.org" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Typescript", url: "https://www.typescriptlang.org" },
        { name: "Tailwindcss", url: "https://tailwindcss.com" },
        { name: "Figma", url: "https://www.figma.com" },
        { name: "Storybook", url: "https://storybook.js.org" },
        { name: "Git", url: "https://git-scm.com" },
        { name: "antd", url: "https://ant.design/"}
    ];

    return (
        <>
            <Header handleScroll={handleScroll} />
            <motion.section
                className="profile-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="profile-left">
                    <h1 >Hi, I’m komal <span role="img" aria-label="wave">👋</span></h1>
                    <p>
                        I’m a higly skilled Front-End developer (React.js & Next.js) with 2 Years of experience in Web Application Development,
                        specializing in building responsive user interfaces and optimizing front -end performance. Proven ability to create
                        engaging user experiences and contribute effectively in Agile teams. proficient in React.Js, Javascript(ES6+), HTML5, CSS3, Tailwindcss,
                        Sass/Scss, Redux, context API , Restful APIs, Unit Testing and Git Workflow
                    </p>
                    <p><strong>Location:</strong> Jaipur, Rajasthan</p>
                    <p><strong>Status:</strong> Available for new projects</p>
                    <div className='logos' style={{ display: "flex", gap: "1rem", marginTop: "1rem", fontSize: "1.5rem", cursor: "pointer" }}>
                        <a href="#" aria-label="GitHub" style={{ color: "inherit", textDecoration: "none" }}><TwitterOutlined /></a>
                        <a href="https://github.com/Komal5700" aria-label="Twitter" style={{ color: "inherit", textDecoration: "none" }}><GithubOutlined /></a>
                        <a href="https://www.linkdin.com/in/komsl-saini-739038221/" aria-label="Dribbble" style={{ color: "inherit", textDecoration: "none" }}><LinkedinOutlined /></a>
                    </div>
                </div>

                <div className="profile-right">
                    <img
                        src="https://cdn-thewellnesscorner.s3.ap-southeast-1.amazonaws.com/WeeklyNewsletterImages/protecting-your-emotional-wellness_202505091053499421.jpg"
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
            </motion.section>

            <motion.section id='/about' className="about-me-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >

                <p className="section-label">About me</p>

                <div className="about-me-wrapper">
                    <div className="about-me-image">
                        <img
                            src="https://cdn-thewellnesscorner.s3.ap-southeast-1.amazonaws.com/WeeklyNewsletterImages/protecting-your-emotional-wellness_202505091053499421.jpg"
                            alt="About Me"
                        />
                    </div>
                    <div className="about-me-content">
                        <h2>Curious about me? Here you have it:</h2>
                        <p>
                            I’m a passionate, <a href="https://example.com" target="_blank" rel="noopener noreferrer">self-proclaimed designer</a> who specializes in Front-end development (React.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p>
                            I began my journey as a web developer in 2022, and since then, I’ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 2 years after starting my web development journey, I’m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Tailwindcss and much more.
                        </p>
                        <p>
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p>Finally, some quick bits about me:</p>
                        <ul className="quick-bits-list">
                            <li>B.E. in Computer Engineering</li>
                            <li>Avid learner</li>
                            <li>Full-time freelancer</li>
                            <li>Aspiring indie hacker</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            <motion.section className="skills-section"

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="section-label">Skills</p>
                <p className="skills-intro">
                    The skills, tools and technologies I am really good at:
                </p>
                <div className="skills-icons-container">
                    <div className="skills-scroll">
                        {skills.map(({ name, icon }) => (
                            <div className="skill-item" key={name}>
                                <img src={icon} alt={name} />
                                <span>{name}</span>
                            </div>
                        ))}

                        {skills.map(({ name, icon }) => (
                            <div className="skill-item" key={name + '-duplicate'}>
                                <img src={icon} alt={name} />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>


            <motion.section className="experience-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="section-label">Experience</p>
                <p className="experience-intro">
                    Here is a quick summary of my most recent experiences:
                </p>

                {experiences.map(({ companyLogo, title, duration, responsibilities }, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-logo">
                            <img src={Truworth} alt="Company Logo" />
                        </div>
                        <div className="experience-details">
                            <h3>{title}</h3>
                            <ul>
                                {responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="experience-duration">{duration}</div>
                    </div>
                ))}
            </motion.section>

            <motion.section className="work-section" id='/work'>
                <p className="section-label">Work</p>
                <p className="work-intro">
                    Some of the noteworthy projects I have built:
                </p>

                <div className="work-card">
                    <div className="work-image">
                        <a href="https://www.thewellnesscorner.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={ThewellnessCorner}
                                alt="Fiskil"
                            />
                        </a>
                    </div>
                    <div className="work-content">
                        <h3>The Wellness Corner</h3>
                        <p>
                            Developed and implemented responsive front-end web pages for a comprehensive wellness plateform, focusing on: enhansing user experience and data presentation.
                        </p>
                        <p>
                            Integrated various restful APIs using Axios to fetch and display dynamic data, enhansing user experienceand improving: data loading speed and reliability.
                        </p>
                        <p>
                            Collaborating on building user interfaces for specific section of the website, contributing to the successful launch of the user dashboard and content display section.
                        </p>
                        <p>
                            And a bullet point about a specific technical chellage you faced and how you solved it, potentially related to performance or cross-browser compatibility,
                        </p>
                        <div className="work-tags">
                            {workTags.map(({ name, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-tag"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="work-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="work-content">
                        <h3>Truwort Wellness</h3>
                        <p>
                            Build a complete, responsive website form the ground up, ensuring optimal viewing across all devices and achieving seamless user experience on both desktop and mobile plateforms.
                        </p>
                        <p>
                            Developed key components and pages, focusing on clean code and maintainable strucure, leading to: easier future updates and scalability.
                        </p>
                        <p>
                            Contributd to the development of CRM and Admin Panels, creating user-friendly interfaces for managing dataand content, streamiling: internal data management and content updated.
                        </p>
                        <p>
                            Integrated necessary RESful APIs to power dynamic features within the website and administrative panels, ensuring seamless data flow for: user management and content display functions.
                        </p>
                        <div className="work-tags">
                            {workTags.map(({ name, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-tag"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="work-image">
                        <a href="https://www.truworthwellness.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={TruworthWebsite}
                                alt="Fiskil"
                            />
                        </a>
                    </div>
                </div>
            </motion.section>
            <Footer id="/contact" />
        </>
    );
};

export default Profile;


// import './Portfolio.css';
// import Header from "../Components/Header";
// import Footer from '../Components/Footer';
// import Truworth from "../assests/images/logo.jpg";
// import TruworthWebsite from "../assests/images/truworth-website.jpg";
// import ThewellnessCorner from "../assests/images/the-wellness-corner.jpg";
// import { TwitterOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
// import { motion } from 'framer-motion';

// const Profile = () => {
//     const skills = [
//         { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//         { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//         { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//         { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//         { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//         { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//         { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//         { name: "Sass/Scss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
//         { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/icons/tailwindcss/tailwindcss-plain.svg" },
//         { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
//         { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
//         { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//     ];

//     const experiences = [
//         {
//             title: "Software Development",
//             duration: "June 2023 - Present",
//             responsibilities: [
//                 "Developed and maintained responsive user interfaces using React.Js, Next.Js, HTML5 and Tailwind Css.",
//                 "Updated old code base to modern standards reducing operating costs by 10-15%.",
//                 "Utilized JavaScript (ES6+) for implementing features and handling data using RESTful APIs.",
//                 "Collaborated within an agile framework, participating in sprint planning and stand-ups."
//             ],
//         },
//         {
//             title: "Software Development Internship",
//             duration: "Nov 2022 - May 2023",
//             responsibilities: [
//                 "Developed foundational web pages and components using semantic HTML, CSS and JavaScript.",
//                 "Gained experience with React by contributing to small features.",
//                 "Assisted the dev team, learning Git and basic API integration.",
//             ],
//         },
//     ];

//     const workTags = [
//         { name: "React", url: "https://reactjs.org" },
//         { name: "Next.js", url: "https://nextjs.org" },
//         { name: "Typescript", url: "https://www.typescriptlang.org" },
//         { name: "Tailwindcss", url: "https://tailwindcss.com" },
//         { name: "Figma", url: "https://www.figma.com" },
//         { name: "Storybook", url: "https://storybook.js.org" },
//         { name: "Git", url: "https://git-scm.com" },
//     ];

//     return (
//         <>
//             <Header />
//             <motion.section
//                 className="profile-container"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <div className="profile-left">
//                     <h1>Hi, I’m Komal <span role="img" aria-label="wave">👋</span></h1>
//                     <p>I’m a highly skilled Front-End developer (React.js & Next.js)...</p>
//                     <p><strong>Location:</strong> Jaipur, Rajasthan</p>
//                     <p><strong>Status:</strong> Available for new projects</p>
//                     <div className='logos'>
//                         <a href="#"><TwitterOutlined /></a>
//                         <a href="#"><GithubOutlined /></a>
//                         <a href="#"><LinkedinOutlined /></a>
//                     </div>
//                 </div>
//                 <div className="profile-right">
//                     <motion.img
//                         src="https://cdn-thewellnesscorner.s3.ap-southeast-1.amazonaws.com/WeeklyNewsletterImages/protecting-your-emotional-wellness_202505091053499421.jpg"
//                         alt="Profile"
//                         className="profile-img"
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                     />
//                 </div>
//             </motion.section>

//             <motion.section
//                 className="about-me-section"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//             >
//                 <p className="section-label">About me</p>
//                 <div className="about-me-wrapper">
//                     <div className="about-me-image">
//                         <img
//                             src="https://cdn-thewellnesscorner.s3.ap-southeast-1.amazonaws.com/WeeklyNewsletterImages/protecting-your-emotional-wellness_202505091053499421.jpg"
//                             alt="About Me"
//                         />
//                     </div>
//                     <div className="about-me-content">
//                         <h2>Curious about me? Here you have it:</h2>
//                         <p>I'm a passionate developer...</p>
//                         <ul className="quick-bits-list">
//                             <li>B.E. in Computer Engineering</li>
//                             <li>Avid learner</li>
//                         </ul>
//                     </div>
//                 </div>
//             </motion.section>

//             <motion.section
//                 className="skills-section"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//             >
//                 <p className="section-label">Skills</p>
//                 <div className="skills-icons-container">
//                     <div className="skills-scroll">
//                         {skills.concat(skills).map(({ name, icon }, idx) => (
//                             <motion.div
//                                 className="skill-item"
//                                 key={idx}
//                                 whileHover={{ scale: 1.1 }}
//                             >
//                                 <img src={icon} alt={name} />
//                                 <span>{name}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.section>

//             <motion.section
//                 className="experience-section"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//             >
//                 <p className="section-label">Experience</p>
//                 {experiences.map(({ title, duration, responsibilities }, index) => (
//                     <motion.div
//                         className="experience-card"
//                         key={index}
//                         whileHover={{ y: -5 }}
//                     >
//                         <div className="experience-logo">
//                             <img src={Truworth} alt="Company Logo" />
//                         </div>
//                         <div className="experience-details">
//                             <h3>{title}</h3>
//                             <ul>
//                                 {responsibilities.map((item, i) => (
//                                     <li key={i}>{item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="experience-duration">{duration}</div>
//                     </motion.div>
//                 ))}
//             </motion.section>

//             <motion.section
//                 className="work-section"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//             >
//                 <p className="section-label">Work</p>
//                 <div className="work-card">
//                     <div className="work-image">
//                         <a href="https://www.thewellnesscorner.com/" target="_blank" rel="noopener noreferrer">
//                             <img src={ThewellnessCorner} alt="The Wellness Corner" />
//                         </a>
//                     </div>
//                     <div className="work-content">
//                         <h3>The Wellness Corner</h3>
//                         <p>Developed front-end pages for a wellness platform...</p>
//                         <div className="work-tags">
//                             {workTags.map(({ name, url }) => (
//                                 <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="work-tag">
//                                     {name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="work-card">
//                     <div className="work-content">
//                         <h3>Truworth Wellness</h3>
//                         <p>Built a responsive website from the ground up...</p>
//                         <div className="work-tags">
//                             {workTags.map(({ name, url }) => (
//                                 <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="work-tag">
//                                     {name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="work-image">
//                         <a href="https://www.truworthwellness.com/" target="_blank" rel="noopener noreferrer">
//                             <img src={TruworthWebsite} alt="Truworth Wellness" />
//                         </a>
//                     </div>
//                 </div>
//             </motion.section>
//             <Footer />
//         </>
//     );
// };

// export default Profile;
