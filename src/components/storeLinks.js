import React from 'react'
import AppStore from '../images/app-store-badge.svg'
import GooglePlay from '../images/google-play-badge.png'

export const StoreLinks = ({ appStoreUrl, googlePlayUrl }) => {
  return (
    <div className="flex items-center justify-around">
      {!!appStoreUrl && (
        <a href={appStoreUrl} className="w-[200px]">
          <AppStore />
        </a>
      )}
      {!!googlePlayUrl && (
        <a href={googlePlayUrl} className="w-[200px]">
          <img src={GooglePlay} />
        </a>
      )}
    </div>
  )
}
