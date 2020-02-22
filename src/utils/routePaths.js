import Home from '@/pages/Home';
import About from '@/pages/About';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';

export default [
  {
    index: 0,
    name: 'main',
    route: '/',
    label: 'Principal',
    Component: Home,
  },
  {
    index: 1,
    name: 'team',
    route: '/team',
    label: 'Nosso Time',
    Component: Team,
  },
  {
    index: 2,
    name: 'contact',
    route: '/contact',
    label: 'Contato',
    Component: Contact,
  },
  {
    index: 3,
    name: 'about',
    route: '/about',
    label: 'Sobre nós',
    Component: About,
  },
];
