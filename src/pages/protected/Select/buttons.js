import { FaKey as JoinIcon, FaLock as CreateIcon } from "react-icons/fa";

const buttons = [
  {
    redirectTo: "/select/create",
    icon: CreateIcon,
    text: "Criar uma nova equipe!",
    props: {
      "aria-label": "Opa! Clique aqui para criar uma nova equipe!",
      background: "var(--primary)",
    },
  },
  {
    redirectTo: "/select/join",
    icon: JoinIcon,
    text: "Entrar em uma equipe!",
    props: {
      "aria-label": "Opa! Clique aqui para entrar em uma equipe já existente!",
      background: "var(--secondary)",
    },
  },
];

export default buttons;
