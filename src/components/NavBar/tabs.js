import {
  FaHome as Home,
  FaBomb as Tomorrow,
  FaUsers as Team,
  FaUserLock as MyProfile,
  FaUsersCog as TeamConfig,
  FaSlidersH as UIConfig,
} from "react-icons/fa";

const paths = [
  {
    path: "/",
    label: "Todas",
    Icon: Home,
  },
  // {
  //   path: "/tomorrow",
  //   label: "Amanhã",
  //   Icon: Tomorrow,
  // },
  {
    path: "/team",
    label: "Membros",
    Icon: Team,
  },
  {
    path: "/ui",
    label: "Configurações",
    Icon: UIConfig,
  },
  {
    path: "/config",
    label: "Configurações da turma",
    Icon: TeamConfig,
    onlyLeader: true,
  },
];

export default paths;
