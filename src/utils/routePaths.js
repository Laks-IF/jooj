import Home from '@/pages/Home';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

import MainIcon from '@material-ui/icons/HomeWorkTwoTone';
import TeamIcon from '@material-ui/icons/PeopleAltTwoTone';
import ContactIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import AboutIcon from '@material-ui/icons/BookTwoTone';

export default [
  {
    index: 0,
    name: 'main',
    route: '/',
    label: 'Principal',
    Component: Home,
    Icon: MainIcon,
  },
  {
    index: 1,
    name: 'team',
    route: '/team',
    label: 'Nosso Time',
    Component: Team,
    Icon: TeamIcon,
  },
  {
    index: 2,
    name: 'contact',
    route: '/contact',
    label: 'Contato',
    Component: Contact,
    Icon: ContactIcon,
  },
  {
    index: 3,
    name: 'about',
    route: '/about',
    label: 'Sobre nós',
    Component: About,
    Icon: AboutIcon,
  },
];
