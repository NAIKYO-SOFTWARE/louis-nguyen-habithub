import Open from "../views/Open";
import Login from "../views/Login";
import Contract from "../views/Contract";

const publicRoutes = [
  {
    path: "/",
    component: Open,
    isFooter: false,
    isHeader: false,
    title: "Wellcome - HabitHUB",
  },
  {
    path: "/login",
    component: Login,
    isFooter: true,
    isHeader: false,
    title: "Login - HabitHUB",
  },
  {
    path: "/contract",
    component: Contract,
    isFooter: true,
    isHeader: false,
    title: "Contract - HabitHUB",
  },
];

export { publicRoutes };
