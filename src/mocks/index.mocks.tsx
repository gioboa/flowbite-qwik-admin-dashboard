import ImgBonnieGreen from "../../public/users/bonnie-green.png?jsx";
import ImgLanaByrd from "../../public/users/lana-byrd.png?jsx";
import ImgMichaelGough from "../../public/users/michael-gough.png?jsx";
import ImgNeilSims from "../../public/users/neil-sims.png?jsx";
import ImgThomasLean from "../../public/users/thomas-lean.png?jsx";

export const Table1 = {
  cols: ["Transaction", "Date Time", "Amount", "Status"],
  rows: [
    {
      name: "Bonnie Green",
      date: "Apr 23, 2024",
      amount: "$2300",
      status: "Completed",
    },
    {
      name: "#00910",
      date: "Apr 23, 2024",
      amount: "-$670",
      status: "Completed",
    },
    {
      name: "#087651",
      date: "Apr 18, 2024",
      amount: "$234",
      status: "Cancelled",
    },
    {
      name: "Lana Byrd",
      date: "Apr 15, 2024",
      amount: "$5000",
      status: "In progress",
    },
    {
      name: "Jese Leos",
      date: "Apr 15, 2024",
      amount: "$2300",
      status: "Completed",
    },
    {
      name: "THEMESBERG LLC",
      date: "Apr 11, 2024",
      amount: "$560",
      status: "Completed",
    },
    {
      name: "Lana Lysle",
      date: "Apr 6, 2024",
      amount: "$1437",
      status: "Completed",
    },
    {
      name: "Joseph Mcfall",
      date: "Apr 1, 2024",
      amount: "$980",
      status: "Completed",
    },
    {
      name: "Alphabet LLC",
      date: "Mar 23, 2024",
      amount: "$11,436",
      status: "In progress",
    },
    {
      name: "Bonnie Green",
      date: "Mar 23, 2024",
      amount: "$560",
      status: "Completed",
    },
  ],
};

export const Table2 = {
  rows: [
    {
      icon: <ImgNeilSims class="h-8 w-8 rounded-full" />,
      name: "Neil Sims",
      email: "email@flowbite.com",
      amount: "$320",
    },
    {
      icon: <ImgBonnieGreen class="h-8 w-8 rounded-full" />,
      name: "Bonnie Green",
      email: "email@flowbite.com",
      amount: "$3467",
    },
    {
      icon: <ImgMichaelGough class="h-8 w-8 rounded-full" />,
      name: " Michael Gough",
      email: "email@flowbite.com",
      amount: "$67",
    },
    {
      icon: <ImgThomasLean class="h-8 w-8 rounded-full" />,
      name: " Thomes Lean",
      email: " email@flowbite.com",
      amount: "$2367",
    },
    {
      icon: <ImgLanaByrd class="h-8 w-8 rounded-full" />,
      name: " Lana Byrd",
      email: " email@flowbite.com",
      amount: "$367",
    },
  ],
};

export const Table3 = {
  rows: [
    {
      name: "Organic Search",
      info: "5,649",
      color: "bg-blue-700",
      width: "30%;",
    },
    {
      name: "Referral",
      info: "4,025",
      color: "bg-orange-300",
      width: "24%;",
    },
    {
      name: "Direct",
      info: "3,105",
      color: "bg-teal-400",
      width: "18%;",
    },
    {
      name: "Social",
      info: "1251",
      color: "bg-pink-600",
      width: "12%;",
    },
    {
      name: "Other",
      info: "734",
      color: "bg-indigo-600",
      width: "9%;",
    },
    {
      name: "Email",
      info: "456",
      color: "bg-purple-500",
      width: "7%;",
    },
  ],
};
