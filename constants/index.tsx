export const sidebarLinks = [
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Send Payment",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  Travel: {
    bg: "bg-blue-25",
    borderColor: "border-blue-100",
    text: {
      main: "text-blue-300",
      count: "text-blue-300",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/plane.svg",
  },
  "Food and Drink": {
    bg: "bg-pink-25",
    borderColor: "border-pink-100",
    text: {
      main: "text-pink-300",
      count: "text-pink-300",
    },
    progress: {
      bg: "bg-pink-300",
      indicator: "bg-pink-700",
    },
    icon: "/icons/beef.svg",
  },
  Transfer: {
    bg: "bg-pink-25",
    borderColor: "border-red-100",
    text: {
      main: "text-white",
      count: "text-white",
    },
    progress: {
      bg: "bg-red-300",
      indicator: "bg-red-700",
    },
    icon: "/icons/credit-card.svg",
  },
  Payment: {
    bg: "bg-green-25",
    borderColor: "border-green-100",
    text: {
      main: "text-green-300",
      count: "text-green-300",
    },
    progress: {
      bg: "bg-green-300",
      indicator: "bg-green-700",
    },
    icon: "/icons/circle-dollar-sign.svg",
  },
  default: {
    bg: "bg-pink-25",
    borderColor: "border-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-300",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-gray-400",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-white",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-300",
    chipBackgroundColor: "bg-inherit",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

const cardStyles = {
  chase: {
    gradient: "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900",
    textColor: "text-white",
    logo: "CHASE BANK",
  },
  bankOfAmerica: {
    gradient: "bg-gradient-to-r from-red-600 via-blue-700 to-blue-900",
    textColor: "text-white",
    logo: "BANK OF AMERICA",
  },
  wellsFargo: {
    gradient: "bg-gradient-to-r from-red-700 via-yellow-600 to-yellow-500",
    textColor: "text-white",
    logo: "WELLS FARGO",
  },
  citibank: {
    gradient: "bg-gradient-to-r from-blue-600 via-blue-700 to-red-600",
    textColor: "text-white",
    logo: "CITIBANK",
  },
  capitalOne: {
    gradient: "bg-gradient-to-r from-blue-700 via-gray-400 to-gray-800",
    textColor: "text-white",
    logo: "CAPITAL ONE",
  },
  discover: {
    gradient: "bg-gradient-to-r from-orange-600 via-orange-700 to-black",
    textColor: "text-white",
    logo: "DISCOVER",
  },
};

