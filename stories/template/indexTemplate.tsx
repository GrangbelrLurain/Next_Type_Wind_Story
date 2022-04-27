import React from 'react'
import { SearchBar } from '../molecules/searchBar'
import { Header } from '../organisms/header/header'
import { Footer } from '../organisms/footer/footer'

interface indexTemplateProps {
  theme?: 'white' | 'black'
  imgURL?: string
}

export const IndexTemplate = ({
  theme = 'white',
  imgURL = 'https://resource.shopfanpick.net/main_page/image-1649031580729-562a3e09-394b-49ec-bb73-41d67057be32',
}: indexTemplateProps) => {
  return (
    <section
      className={[
        'relative',
        'min-h-screen',
        'flex',
        'justify-center',
        'items-center',
        'pt-16',
      ].join(' ')}
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <Header></Header>
      <SearchBar theme={theme}></SearchBar>
      <Footer></Footer>
    </section>
  )
}
