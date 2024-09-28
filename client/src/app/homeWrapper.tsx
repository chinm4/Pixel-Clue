import React from 'react'
import './globals.css'

const homeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-3xl flex items-center justify-center title text-red-500 mt-16">
        Pixel Clue
      </div>
      {children}
    </div>
  );
}

export default homeWrapper;