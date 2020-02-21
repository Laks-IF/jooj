import React, { useState } from 'react';

import { Link } from 'react-tiger-transition';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const tabs = [
  {
    label: 'Principal',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
];

export default function Nav() {
  const [value, setValue] = useState(tabs[0].label);

  function handleTabChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleTabChange} centered>
        {tabs.map((tab) => (
          <Tab
            component={Link}
            to={tab.route}
            transition="glide-right"
            key={tab.label}
            label={tab.label}
            value={tab.label}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}
