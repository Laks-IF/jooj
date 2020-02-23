import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Logo from '@/assets/images/justcup.png';
import { Link } from 'react-tiger-transition';
import Toolbar from '@material-ui/core/Toolbar';
import routePaths from '@/utils/routePaths';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Nav() {
  const tabs = routePaths;

  const history = useHistory();

  const [value, setValue] = useState(
    getIndexOfActiveTab(history.location.pathname),
  );

  function handleTabChange(e, newValue) {
    setValue(newValue);
  }

  function getIndexOfActiveTab(pathname) {
    const [active] = tabs.filter((tab) => tab.route === pathname);
    return active.index;
  }

  useEffect(() => {
    history.listen((route) =>
      handleTabChange(null, getIndexOfActiveTab(route.pathname)),
    );
  }, []);

  return (
    <AppBar style={{ display: 'flex' }} position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <img
          style={{ borderRadius: 12, marginRight: '12px' }}
          height="50"
          src={Logo}
          alt="Logo"
        />
        <Tabs variant="scrollable" value={value} onChange={handleTabChange}>
          {tabs.map((tab) => (
            <Tab
              component={Link}
              to={tab.route}
              transition="flip-left"
              key={tab.label}
              label={tab.label}
              icon={<tab.Icon />}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
