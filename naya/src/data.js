export const aboutme = {
  title: 'Naya Mairena',
  description:
    'I recently graduated from Portland State University with a Bachelors of Science in ' +
    'Computer Science and a minor in Mathematics.\n\nMy software development interests are in ' +
    'Web/Mobile app development, Front-end, Full Stack, and UI/UX. I am constantly challenging myself to learn new languages, frameworks, and softwares. ' +
    ' My current goal is to embark on new opportunities and make meaningful contributions in the tech industry.' +
    '\n\nWhen I am not occupied with coding projects, my various hobbies ' +
    'include trading and collecting Pokemon/MTG cards, painting, pottery, house plants, and spending quality time ' +
    'with my wonderful cats.',
  image: 'mypic.jpeg',
};

export const projects = [
  {
    title: 'Personal Portfolio Website nayamairena.github.io',
    subtitle: 'CS410: Intro to Web Development',
    description:
      'This webpage was originally written in HTML, CSS, and Javascript. It has recently been improved using React.' +
      '\n\nFuture plans are to make UI animations and add a section for my art projects.',
    skills: 'React, Javascript, Node.js',
    image: '',
    link: 'https://github.com/nayamairena/nayamairena.github.io',
    linkName: 'Github Repo',
  },
  {
    title: 'Lingo Medico',
    subtitle: 'CS469 & CS470: Software Engineering Senior Capstone',
    description:
      'As a Senior Capstone project, we developed Lingo Medico, a mobile app aimed at assisting users traveling abroad with medical needs.  ' +
      'The user fills out a form that asks simple medical questions to be easily translated to the desired language. ' +
      'The app was developed using React Native and Typescript. My primary focus was on front-end and user interface design. ' +
      'Collaborating with my peers to connect the back-end functionality with the front-end, I learned a lot about the overall architecture of the app.',
    skills: 'Typescript, React Native, Expo, Node.js, VS Code, Figma',
    image: 'lingomed.gif',
    link: 'https://www.youtube.com/watch?v=fcUGppICyL8',
    linkName: 'Video Presentation',
  },
  {
    title: 'Geography Games',
    subtitle: 'CS465: Full Stack Web Development',
    description:
      'With a team, we built a full-stack web app using the MERN stack that hosted Geography games. Users are allowed to create profiles to keep track of their game scores. ' +
      'My focus was developing the front-end functionality and UI/UX. Using a collection of technologies and integrating them seamlessly was an important experience for me to better understand web development.',
    skills: 'Javascript, React, Express, MongoDB, Node.js, VS Code, Figma',
    image: 'geo.gif',
    link: 'https://github.com/AdrikGG/FullStackFinal',
    linkName: 'Github Repo',
  },
  {
    title: 'Check The Fridge',
    subtitle: 'CS454: Software Engineering',
    description:
      'A web application that allows users to enter their current inventory of ingredients and get recipes they can create with those ingredients. ' +
      'This project used C# for the back-end, React and Node.js for the front-end. TheMealDB API was used for the ingredients list and recipes',
    skills: 'C#, ASP.NET, React, Node.js, TheMealDB API, Visual Studio',
    image: '',
    link: 'https://github.com/Jarwhal3/Check-the-Fridge',
    linkName: 'Github Repo',
  },
  /* {
    title: 'CS300 - Elements of Software Engineering: Chocoholics Anonymous',
    description:
      'The project is written in Python and utilizes SQLite for the databases. ' +
      'This program emulated a terminal where providers who work for Chocoholics Anonymous provide services to members. ' +
      'The terminal functionalities keep track of accounts, services, and reports. ' +
      'All information is stored into databases and are accessible by the providers using the terminal interface. ',
    skills: 'Python, SQLite',
    image: 'choc.png',
    link: 'https://github.com/DebuggerDan/cs300g4projectfall21',
    linkName: 'Github Repo',
  },
{
    title: 'FLYPDX Flight Time Site Scraper',
    description: 'This project is written in Python. The inspiration for this project came from my current job at PDX Burgerville. '+
    'I usually work at 4:00am, when we first open the restaurant and one of the tasks of the opening manager is to gather the departure times '+
    'at concourse D for the entire day. Each time is manually copied and pasted into a word document and then is printed and posted at the front '+
    'for all employees to see. It is important to do this task because it helps get a feel for how busy the day will be. As simple as this task is, '+
    'I thought it would be interesting to try making a program to automate this task and give the opening manager a little bit extra time to do other tasks. ',
    skills: 'Python',
    image: 'flypdx.png',
    link: 'https://github.com/nayamairena/PDXDepartues',
    linkName: 'Github Repo',
  },*/
];

export const experience = [
  {
    title: 'Software Development Intern',
    subtitle: 'SSI Shredding Systems, Inc. — Wilsonville, Oregon',
    description:
      'SSI Shredding Systems designs and manufactures industrial shredders.' +
      '\n\nI do front-end and back-end development for an in-house software application. The software is utilized by the sales team to keep track of shredder sales. ' +
      'Users can create projects, shredder and system quotes, communication between sales and engineering, and much more.',
    skills: 'VB.NET, Microsoft SQL Server, Python',
    image: 'ssime.jpg',
    logo: 'ssilogo.png',
  },
  {
    title: 'IT Desk Support',
    subtitle: 'Computer Action Team - Portland State University',
    description:
      'The Computer Action Team is a program at PSU for students to have the opportunity to learn IT skills.' +
      '\n\nI delivered IT support to fellow students, faculty, and staff in-person and remotely. My assistance consisted of: managing ' +
      'and accessing their MCECS accounts, guidance on connecting remotely to our servers for their courses, and handling daily ' +
      'support tickets. I was promoted to the leadership team where I helped make important decisions and mentor new student volunteers.' +
      '\n\nI also designed the CAT sticker for the 2022 year.',
    skills: 'Linux, Windows, Vim, RDP, OpenVPN',
    image: 'catmugshot.png',
    image2: 'catstickers.jpeg',
    logo: 'catimg.png',
  },
  {
    title: 'Research Intern',
    subtitle:
      'NSF REU: Computational Modeling Serving the City - Portland State University',
    description:
      'A 10-week summer internship focused on utilizing computational modeling to serve the community.' +
      '\n\nI explored the research process as an optimistic undergrad student. Learned about computational modeling skills and how ' +
      'to apply them to my research project based on analyzing data from rivers.',
    skills: 'R Programming Language, GIS Software',
    image: 'presentation.jpg',
    link: 'https://pdxscholar.library.pdx.edu/reu_reports/4/',
    linkName: 'Research Paper',
    logo: 'reulogo.png',
  },
  {
    title: 'Shift Lead',
    subtitle: 'Burgerville - PDX Airport',
    description:
      'Burgerville is a local fast food restaurant known for using local ingredients. I was there for 3 years and excelled throughout my time there.' +
      '\n\nI have a keen attention to detail in all aspects of the restaurant and I am persistent on maintaining all workstations organized for ' +
      'a successful workflow. ' +
      'I was constantly moving around through all the positions in the restaurant, which enhanced my flexibility and multitasking skills.',
    image: 'pdxstar.jpg',
    link: 'https://portside.portofportland.online/2020/10/celebrating-superstar-pdx-people/',
    linkName: 'PDX Award Article',
    logo: 'bvlogo.png',
  },
];
