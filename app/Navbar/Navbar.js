"use client";

import { useTheme } from 'next-themes'
import Link from 'next/link';
import Image from 'next/image';
import images from '../../public/assets'
import { FaSun, FaMoon } from "react-icons/fa";
import Button from '../../components/Button'

import React, { useState } from 'react'

const MenuItems = ({isMobile, active, setActive}) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        
        return '/'
      case 1:
        return '/create-nft'
      
        case 2:
        return '/my-nfts'
      default:
        break;
    }
  }

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Explore NFTs', 'Listed NFTs', "My NFTs"].map((item, i) => (
        <li 
        key={i}
        onClick={() => {
          setActive(item)
        }}
          className={`flex flex-row items-center font-poppins font-semibold texr-base dark:hover:text-white hover:text-nft-dark mx-3
          ${active === item ? 'dark:text-white text-nft-black-1' : 'dark:text-nft-gray-3 text-nft-gray-2'}`}
          >
            <Link href={generateLink(i)}>{item}</Link>
          
      </li>) )}
    </ul>
  )
}

const ButtonGroup = () => {
  const hasConnected = false;

  return hasConnected ? (
    <Button />
  ) : <Button />
}

const Navbar = () => {

  const {theme, setTheme} = useTheme();
  const [active, setActive] = useState('Explore')


  console.log({theme})

  return (
  <nav className='flexBetween w-full fixed z-10 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1'>
    <div className='flex flex-1 flex-row justify-start'>
      <Link href="/">
      <div className='flexCenter md:hiden cursor-pointer' onClick={() => {}}>
        <Image src={images.logo02} objectFit='contain' width={32} height={32} alt='logo'/>
        <p className='dark:text-white text-nft-black-1 font-semibold text-lg ml-1'>CryptoKet </p>
      </div>
      </Link>

      <Link href="/">
      <div className='hidden md:flex' onClick={() => {}}>
      <Image src={images.logo02} objectFit='contain' width={32} height={32} alt='logo'/>
      </div>
      </Link>
    </div>

    <div className='flex flex-initial flex-row justify-end'>
      <div className='flex items-center mr-2'>

      <input type='checkbox'className='checkbox' id='checkbox' onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
      <label htmlFor='checkbox' className='flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label'>
      <FaSun  className='fas fa-sun'/>
      <FaMoon className='fas fa-moon'/>
      <div className='w-3 h-3 absolute bg-white rounded-full ball'/>
      </label>
      </div>
    </div>

    <div className='md:hidden flex'>
      
        <MenuItems active={active} setActive={setActive}/>

        <div className='ml-4'>
          <ButtonGroup />
        </div>
    </div>
  </nav>
  )
}

export default Navbar