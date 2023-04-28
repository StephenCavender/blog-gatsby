import React from 'react'
import AppStore from '../images/app-store-badge.svg'
import GooglePlay from '../images/google-play-badge.png'

export const StoreLinks = ({ appStoreUrl, googlePlayUrl }) => {
  return (
    <div className="flex items-center justify-around">
      {!!appStoreUrl && (
        <a href={appStoreUrl} className="w-[200px]">
          <AppStore className="transition-all duration-300 hover:opacity-50" />
        </a>
      )}
      {!!googlePlayUrl && (
        <a className="w-[200px]" href={googlePlayUrl}>
          <img
            alt="Google Play badge link"
            className="transition-all duration-300 hover:opacity-50"
            src={GooglePlay}
          />
        </a>
      )}
    </div>
  )
}
