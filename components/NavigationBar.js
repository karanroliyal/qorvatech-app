import Link from 'next/link';
import React from 'react'
import ServiceList from './ServiceList'
import { Dropdown } from 'react-bootstrap';
import QorvatechLogo from '@/../public/qtech-logo.png'
import Image from 'next/image';

export default function NavigationBar() {
  return (
    <div>
              <ServiceList />
    </div>
  )
}
