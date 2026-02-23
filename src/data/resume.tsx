import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { AWS } from "@/components/ui/svgs/aws";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Gitlab } from "@/components/ui/svgs/gitlab";

export const DATA = {
  name: "Ja'far Agbelekale",
  initials: "JOA",
  url: "https://github.com/jafarOlamide",
  location: "Swindon, United Kingdom",
  locationLink: "",
  description:
    "Experienced Software Engineer. I love building things and I am always looking for growth opportunities.",
  summary:
    "A Software engineer with over 6 years of building, growth and learning. I have a sharp eye for debugging, a low tolerance for unnecessary complexity, and a genuine belief that good software is never really finished but only improved. I bring that same mindset to myself.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
    { name: "GitLab", icon: Gitlab },
    { name: "Postgres", icon: Postgresql },
    { name: "MySQL", icon: MySQL },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jafarOlamide",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jafarolamidekale/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "jafarolamidekale@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Scorchsoft Limited",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "",
      start: "September 2024",
      end: "January 2026",
      description:
        "Inherited broken applications on web, mobile and server side and took them production, slashed API response times by 99.75%, and migrated legacy codebases to modern tooling.",
    },
    {
      company: "Independent",
      badges: [],
      href: "https://github.com/jafarOlamide",
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "",
      start: "August 2024",
      end: "September 2024",
      description:
        "Owned full product cycles solo — migrating dashboards, building Stripe payment flows processing £100K+ per event, and shipping multi-tenant SaaS architecture for B2B clients.",
    },
    {
      company: "Inqaba Biotec",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer (Contract)",
      logoUrl: "",
      start: "October 2021",
      end: "August 2023",
      description:
        "Replaced a decade-old Excel workflow with a genomics lab portal that cut processing errors by 87% and turnaround time from 48 hours to 4 — then got the whole company using it within months.",
    },
    {
      company: "Miraton Matador Group (Cloudbank)",
      href: "",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "",
      start: "October 2021",
      end: "November 2022 ",
      description:
        "Built PCI-compliant banking APIs and customer-facing dashboards handling 20M NGN daily transactions, delivering fintech integrations tied directly to revenue growth.",
    },
    {
      company: "LifeBank",
      href: "",
      badges: [],
      location: "Hybrid, Lagos, Nigeria",
      title: "Software Developer",
      logoUrl: "",
      start: "November 2019",
      end: "October 2021",
      description:
        "Built full-stack across a continent — backend APIs, a real-time ops dashboard, and multi-currency payment infrastructure (Paystack) serving healthcare logistics across Nigeria, Kenya, and Ethiopia; cut time-to-insight from hours of Excel to instant, hit 99% transaction success, and mentored the next wave of the tech team along the way.",
    },
    {
      company: "MainOne",
      href: "",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Application Developer Intern",
      logoUrl: "",
      start: "July 2018",
      end: "January 2019",
      description:
        "Got my first taste of enterprise-scale engineering, contributing to internal tooling supporting network infrastructure across West Africa.",
    },
  ],
  education: [
    {
      school: "University of Lagos, Nigeria",
      href: "https://unilag.edu.ng/",
      degree: "Bachelor's Degree in Systems Engineering (BSc)",
      logoUrl: "/unilag-logo.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  // hackathons: [
  //   // {
  //   //   title: "Hack Western 5",
  //   //   dates: "November 23rd - 25th, 2018",
  //   //   location: "London, Ontario",
  //   //   description:
  //   //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //   //   image:
  //   //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //   //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //   //   links: [],
  //   // },
  //   // {
  //   //   title: "Hack The North",
  //   //   dates: "September 14th - 16th, 2018",
  //   //   location: "Waterloo, Ontario",
  //   //   description:
  //   //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //   //   image:
  //   //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //   //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //   //   links: [],
  //   // },
  //   // {
  //   //   title: "FirstNet Public Safety Hackathon",
  //   //   dates: "March 23rd - 24th, 2018",
  //   //   location: "San Francisco, California",
  //   //   description:
  //   //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //   //   icon: "public",
  //   //   image:
  //   //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //   //   links: [],
  //   // },
  //   // {
  //   //   title: "DeveloperWeek Hackathon",
  //   //   dates: "February 3rd - 4th, 2018",
  //   //   location: "San Francisco, California",
  //   //   description:
  //   //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //   //   image:
  //   //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //   //   links: [
  //   //     {
  //   //       title: "Github",
  //   //       icon: <Icons.github className="h-4 w-4" />,
  //   //       href: "https://github.com/cryptotrends/cryptotrends",
  //   //     },
  //   //   ],
  //   // },
  // ],
} as const;
