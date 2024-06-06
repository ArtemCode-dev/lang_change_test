import Container from '@/components/UI/Container/Container'
import React from 'react'
import { useTranslations } from "next-intl";
// import { UseTranslation } from 'next-i18next'

type Props = {}

function Catalog({}: Props) {
  const t = useTranslations('Catalog');
  return (
    <div>
      <Container>
          <div className='flex flex-col gap-3 pt-5 pb-12'>
            <h1 className='font-bold'>{t('title')}</h1>
          </div>
      </Container>
    </div>
  )
}



export default Catalog