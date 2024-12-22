import { FiClock } from "react-icons/fi";
import { VscPinned } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { LuTreePine } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
export { buttonWithSubContentData, buttonsWithHeaders };

const buttonWithSubContentData = [
  {
    title: "Recent",
    id: 0,
    icon: <FiClock />,
    backIconUp: <FaChevronUp />,
    backIconDown: <FaAngleDown />,
    subContent: [
      {
        subTitle: "Some other thing",
        link: "#",
      },
      {
        subTitle: "Some other thing",
        link: "#",
      },
    ],
  },
  {
    title: "Pinned",
    id: 1,
    icon: <VscPinned />,
    backIconUp: <FaChevronUp />,
    backIconDown: <FaAngleDown />,
    subContent: [
      {
        subTitle: "Some other thing",
        link: "#",
      },
      {
        subTitle: "Some other thing",
        link: "#",
      },
    ],
  },
];

const buttonsWithHeaders = [
  {
    header: "My work",
    content: [
      {
        icon: <LuTreePine />,
        buttonText: "Sales accelerator",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Dashboards",
        link: "#",
      },
      {
        icon: <RxActivityLog />,
        buttonText: "Activities",
        link: "#",
      },
    ],
  },
  {
    header: "Customers",
    content: [
      {
        icon: <LuTreePine />,
        buttonText: "Accounts",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Contacts",
        link: "#",
      },
    ],
  },
  {
    header: "Sales",
    content: [
      {
        icon: <LuTreePine />,
        buttonText: "Leads",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Opportunities",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Competitors",
        link: "#",
      },
    ],
  },
  {
    header: "Collateral",
    content: [
      {
        icon: <LuTreePine />,
        buttonText: "Quotes",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Orders",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Invoices",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Products",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Sales Literature",
        link: "#",
      },
    ],
  },
  {
    header: "Marketing",
    content: [
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Marketing List",
        link: "#",
      },
      {
        icon: <MdOutlineSpaceDashboard />,
        buttonText: "Quick campaign",
        link: "#",
      },
    ],
  },
];
