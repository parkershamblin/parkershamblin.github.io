import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Parker",
  lastName: "Shamblin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "parkershamblin@gmail.com",
  location: "Tampa, Florida", // Display location
  timeZone: "America/New_York", // IANA time zone identifier for Tampa, Florida (Eastern Time)
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false, // set to false to hide the newsletter section
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@ParkerShamblin1",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into intelligent solutions</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">Computer Vision Old School RuneScape Bot</strong></>,
    href: "/work/OSRS-computer-vision-project",
  },
  subline: (
    <>
      I'm Parker Shamblin, a Computer Science student at USF with a passion for building innovative software solutions—from VR training platforms to AI-powered automation and data-driven applications.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Parker Shamblin is a software engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of South Florida",
        timeframe: "Jul 2022 - Aug 2022",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developing a Virtual Reality Construction Worker Safety Training Platform in Unity for USF's Rehabilitation, Robotics and Prosthetics Lab.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Roadside Construction Safety Training Project with Unity VR.mp4",
            alt: "Roadside Construction Safety Training Project with Unity VR",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Booz Allen Hamilton",
        timeframe: "May 2019 - Aug 2019",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Conducted sentiment analysis on thousands of tweets mentioning local authorities and originating within South American cities significantly affected by gang violence.
          </>,
          <>
            Created interactive visualizations within Tableau to help authorities understand where the attitude towards police differs within South America.
          </>,
        ],
        images: [],
      },
      {
        company: "Everyman's Products LLC",
        timeframe: "Oct 2018 - July 2019",
        role: "Owner",
        achievements: [
          <>
            Generated $119,000 in product sales on Amazon.com in the first year.
          </>,
          <>
          Designed five proprietary products, which generated $20,000+ in product sales on Amazon.
          </>,
          <>
          Developed and deployed a web crawler which extracted product sales data from Amazon.com and helped in deciding which product markets to enter.
          </>,
          <>
          Collaborated & negotiated with foreign manufacturers on a day-to-day basis.
          </>,
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of South Florida",
        description: <>Bachelor of Science in Computer Science. (2021 - 2026) Flit-GAP $10,000 Annual Scholarship Recipient.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
