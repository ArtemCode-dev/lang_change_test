'use client'

import React, { Suspense, useTransition } from 'react'
import Link from 'next/link'
import Selector from '../UI/Selector/Selector'
import Container from '../UI/Container/Container'
import { useTranslations } from 'next-intl'


type Props = {}

function Header({}: Props) {
  const langList = [
    {locale: 'en'},
    {locale: 'ru'},
  ]
  const t = useTranslations('Header');
  return (
    <div className='w-full h-[70px] bg-slate-300'>
        <Container>
          <Suspense fallback='...loading'>
            <div className='h-full w-full flex justify-between items-center'>
              <div>
                {t('title')}
              </div>
              <ul className='flex items-center gap-5'>
                <li>
                  <Link href='/'>{t('home')}</Link>
                </li>
                <li>
                  <Link href='/catalog'>{t('catalog')}</Link>
                </li>
                <li>
                  <Link href='/'>{t('profile')}</Link>
                </li>
                <li>
                  <Link href='/'>{t('aboutUs')}</Link>
                </li>
              </ul>
              <div>
                <Selector list={langList}/>
              </div>
            </div>
          </Suspense>
        </Container>
    </div>
  )
}

export default Header