'use client'

// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'

type Props = {
  list: {locale:string}[]
}

function Selector({list}: Props) {
  // const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)
    // startTransition(() => {
    //   router.replace(`/${nextLocale}`)
    // })
  }
  return (
    <div>
      <select onChange={onSelectChange}>
        {list.map(({locale}) => (
          <option value={locale}>{locale}</option>
        ))}
      </select>
    </div>
  )
}

export default Selector