import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "$dev/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import Link from "next/link";

const person: Person = {
  firstName: "Dev",
  lastName: "Khandelwal",
  name: `Dev Khandelwal`,
  role: "Student / Web Dev",
  avatar: "https://github.com/khandelwal-dev.png",
  email: "hello@khandelwaldev.me",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/khandelwal-dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/devkhandelwal",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/kkn.dev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Cyber adventurer by passion, builder by choice</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Hire Me</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Resume
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I tinker, I break, I rebuild — all in the name of curiosity. Just a
      student doing crazy digital experiments.
    </>
  ),
};

const about: About = {
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
    link: "https://cal.com/devkhandelwal",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Dev, a 19 y/o student belonging to the Homo Sapiens species, a
        brother, a son, a friend, a self taught web developer and programmer, an
        open source enthusiasist, an extreme melophile.
        <br /> <br />
        As my age already suggests, I'm pursuing B.Tech in CS. I had already started programming
        back when I was in 11th standard as we had C++ in our school
        curriculum. I started web development same year and I like working
        on the web a lot (mostly frontend). If you want to know about what programming languages I know, they
        are - typescript, python, go and a little bit of dart and kotlin.
        <br /> <br />
        Things I do other than dev and programming? Not much, but I do play
        football (touching grass is important). I also just like to go on the
        terrace with soft music and watch clouds pass by 😳. I've also started
        gaming recently (only APEX LEGENDS). Apart from these, I don't have much to
        do other than overthinking and staring at my phone screen.
        <br /> <br />
        I don't talk much over any platform but I like making friends (be it
        online or irl though I'm somewhat introverted!). So, in case you want to
        talk about anything, just hit me up and I'll get back to you once I'm
        active/online.
        <br /> <br />
        That's pretty much everything I know about me yet. In case you know
        something about me that I still don't, please let me know - I'll add it
        here.
      </>
    ),
  },
  work: {
    display: true,
    title: "Process",
    experiences: [
      {
        company: "Step #1",
        timeframe: "",
        role: "Choose Your Plan",
        achievements: [
          <>
            Find the perfect plan tailored to your needs, offering the right
            balance of features, flexibility, and value to help you achieve your
            goals effortlessly.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Step #2",
        timeframe: "",
        role: "Submit Your Request",
        achievements: [
          <>
            Easily submit your design requirements through our private design
            portal, ensuring a seamless process where your vision is understood,
            refined, and brought to life with precision and creativity.
          </>,
        ],
        images: [],
      },
      {
        company: "Step #3",
        timeframe: "",
        role: "Project Delivered with Excellence!",
        achievements: [
          <>
            As a dedicated freelancer, I ensure your project is completed with
            precision and delivered within 2-3 days. With a keen eye for detail
            and a passion for quality, I bring your vision to life—on time and
            beyond expectations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "JSPM University Pune",
        description: <>SY B.Tech CS Engineering</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
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
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
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
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

