'use client'

import React, { Suspense, useTransition } from 'react'
import Link from 'next/link'
import Selector from '../UI/Selector/Selector'
import Container from '../UI/Container/Container'
import { useTranslations } from 'next-intl'
import { useParams, usePathname, useRouter } from 'next/navigation'


type Props = {}

function Header({}: Props) {
  const langList = [
    {locale: 'en'},
    {locale: 'ru'},
  ]
  const t = useTranslations('Header');
  const {locale} = useParams();
  console.log(locale)
  const getCorrectLink = (locale:any, path:any) => {
    if (path.startsWith(`/` + locale)) {
        return path;
    } else {
        return `/${locale}${path}`;
    }
}
  return (
    <header className='w-full h-[70px] bg-slate-300'>
        <Container>
          <Suspense fallback='...loading'>
            <div className='h-full w-full flex justify-between items-center'>
              <div>
                {t('title')}
              </div>
              <nav>
                <ul className='flex items-center gap-5'>
                  <li>
                    <Link href='/'>{t('home')}</Link>
                  </li>
                  <li>
                    <Link href={getCorrectLink(locale, `/catalog`)}>{t('catalog')}</Link>
                  </li>
                  <li>
                    <Link href='/'>{t('profile')}</Link>
                  </li>
                  <li>
                    <Link href='/'>{t('aboutUs')}</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <Selector list={langList}/>
              </div>
            </div>
          </Suspense>
        </Container>
    </header>
  )
}

export default Header