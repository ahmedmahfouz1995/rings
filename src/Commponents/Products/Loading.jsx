import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return (
    <>
    <div className='col-md-3'>
        <Skeleton height={350}></Skeleton>
    </div>
    <div className='col-md-3'>
        <Skeleton height={350}></Skeleton>
    </div>
    <div className='col-md-3'>
        <Skeleton height={350}></Skeleton>
    </div>
    <div className='col-md-3'>
        <Skeleton height={350}></Skeleton>
    </div>
    
    </>
  )
}
