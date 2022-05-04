import React from 'react'
import Header from './Header'

interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
      <>
        <Header />
        { children }
      </>
    )
}

export default Page
