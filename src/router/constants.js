const TITLES = {
  login: "Вход",
  storage: "Склад",
  settings: "Настройки",
  statistic: "Показатели",
  lists: "Списки",
  profile: "Настройки пользователя",
  reports: "Отчеты",
  contractors: "Контрагенты",
};

export const ROUTES = {
  login: {
    path: "/login",
    name: "login",
    meta: {
      title: TITLES.login,
      menu: false,
      requiresAuth: false,
      role: [],
    },
  },
  storage: {
    path: "/storage",
    name: "storage",
    meta: {
      title: TITLES.storage,
      menu: true,
      requiresAuth: false,
      role: [],
    },
  },
  lists: {
    path: "/lists",
    name: "lists",
    meta: {
      title: TITLES.lists,
      menu: true,
      requiresAuth: false,
      role: ["root"],
    },
  },
  profile: {
    path: "/profile",
    name: "profile",
    meta: {
      title: TITLES.profile,
      menu: false,
      requiresAuth: false,
      role: [],
    },
  },
  reports: {
    path: "/reports",
    name: "reports",
    meta: {
      title: TITLES.reports,
      menu: true,
      requiresAuth: false,
      role: [],
    },
  },
  settings: {
    path: "/settings",
    name: "settings",
    meta: {
      title: TITLES.settings,
      menu: true,
      requiresAuth: false,
      role: [],
    },
  },
  contractors: {
    path: "/contractors",
    name: "contractors",
    meta: {
      title: TITLES.contractors,
      menu: true,
      requiresAuth: false,
      role: [],
    },
  },
};
