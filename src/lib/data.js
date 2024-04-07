import { Settings, ThumbsDown } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { TbMessage2Heart } from "react-icons/tb";
import { PiHandbagSimple } from "react-icons/pi";
import { BsInfoSquare } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

// side bar
export const sidebarList = [
  {
    id: 1,
    title: "Dashboard",
    link: "/profile",
    icon: <RxDashboard className="text-[22px]" />,
  },
  {
    id: 2,
    title: "Edit Biodata",
    link: "/profile/edit-biodata",
    icon: <FiEdit3 className="text-[23px]" />,
  },
  {
    id: 3,
    title: "Favorites List",
    link: "/profile/favorites-list",
    link1: "",
    icon: <TbMessage2Heart className="text-[23px]" />,
  },
  {
    id: 4,
    title: "List of dislikes",
    link: "/profile/list-of-dislikes",
    link1: "",
    icon: <ThumbsDown className="text-[22px]" />,
  },
  {
    id: 5,
    title: "My Purchases",
    link: "/profile/my-purchases",
    link1: "",
    icon: <PiHandbagSimple className="text-[24px]" />,
  },
  {
    id: 6,
    title: "Support & Reports",
    link: "/profile/support-reports",
    link1: "",
    icon: <BsInfoSquare className="text-[21px]" />,
  },
  {
    id: 7,
    title: "Settings",
    link: "/profile/settings",
    link1: "",
    icon: <Settings className="" />,
  },

  {
    id: 8,
    title: "Logout",
    link: "/",
    icon: <MdLogout className="text-[23px]" />,
  },
];

// profile tab list
export const tabList = [
  {
    id: 1,
    title: "Name",
    value: "name",
  },
  {
    id: 2,
    title: "Title or Occupation",
    value: "title",
  },
  {
    id: 3,
    title: "Professional Summary or Objective",
    value: "objective",
  },
  {
    id: 4,
    title: "Contact Information",
    value: "contact",
  },
  {
    id: 5,
    title: "Education",
    value: "education",
  },
  {
    id: 6,
    title: "Work Experience",
    value: "work",
  },
  {
    id: 7,
    title: "Skills",
    value: "skills",
  },
  {
    id: 8,
    title: "Professional Memberships or Affiliations",
    value: "member",
  },
  {
    id: 9,
    title: "Languages",
    value: "languages",
  },
  {
    id: 10,
    title: "Volunteer Work or Community Involvement",
    value: "volunteer",
  },
  {
    id: 11,
    title: "Projects or Portfolio (if applicable)",
    value: "projects",
  },
  {
    id: 12,
    title: "Publications or Presentations (if applicable)",
    value: "publications",
  },
  {
    id: 13,
    title: "Testimonials or Recommendations",
    value: "testimonials",
  },
  {
    id: 14,
    title: "Personal Interests or Hobbies (optional)",
    value: "hobbies",
  },
  {
    id: 15,
    title: "Career Goals or Aspirations",
    value: "goals",
  },
];
export const addCompanyTabList = [
  {
    id: 1,
    title: "Company Name and Logo",
    value: "name",
  },
  {
    id: 2,
    title: "Introduction",
    value: "intro",
  },
  {
    id: 3,
    title: "Mission Statement",
    value: "mission",
  },
  {
    id: 4,
    title: "History",
    value: "history",
  },
  {
    id: 5,
    title: "Founders/Key Executives",
    value: "executives",
  },
  {
    id: 6,
    title: "Location and Facilities",
    value: "location",
  },
  {
    id: 7,
    title: "Products or Services",
    value: "product",
  },
  {
    id: 8,
    title: "Target Market",
    value: "market",
  },
  {
    id: 9,
    title: "Competitive Advantage",
    value: "advantage",
  },
  {
    id: 10,
    title: "Financial Overview",
    value: "overview",
  },
  {
    id: 11,
    title: "Milestones and Achievements",
    value: "milestones",
  },
  {
    id: 12,
    title: "Partnerships or Affiliations",
    value: "partnerships",
  },
  {
    id: 13,
    title: "Social Responsibility Initiatives",
    value: "responsibility",
  },
  {
    id: 14,
    title: "Future Goals and Outlook",
    value: "goals",
  },
  {
    id: 15,
    title: "Contact Information",
    value: "contact",
  },
];
