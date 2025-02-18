import React from 'react'
import style from '@/style/billing.module.css'

const page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id
  return (
    <div className={`${style.billing} ${style['billing-title']}`}>nesting route {id}</div>
  )
}

export default page