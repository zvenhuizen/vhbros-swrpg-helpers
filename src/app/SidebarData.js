import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Status',
    path: '/status',
    icon: <GiIcons.GiBatteryPackAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Items',
    path: '/items',
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: 'nav-text'
  },
  {
    title: 'Talents',
    path: '/talents',
    icon: <GiIcons.GiStarStruck />,
    cName: 'nav-text'
  },
  {
    title: 'Gear',
    path: '/gear',
    icon: <GiIcons.GiBattleGear />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/info',
    icon: <BsIcons.BsInfoCircle />,
    cName: 'nav-text'
  }
]