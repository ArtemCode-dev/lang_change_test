'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import Container from '../UI/Container/Container'
import { useTranslations } from 'next-intl'


type Props = {}

function Footer({}: Props) {

  const t = useTranslations('Footer');
  return (
    <footer className='w-full h-[100px] bg-slate-500'>
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
                    <Link href='/catalog'>{t('catalog')}</Link>
                  </li>
                  <li>
                    <Link href='/'>{t('profile')}</Link>
                  </li>
                  <li>
                    <Link href='/'>{t('aboutUs')}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Suspense>
        </Container>
    </footer>
  )
}

export default Footer