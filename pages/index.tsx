import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SearchButton } from '../stories/SearchButton'

const Home: NextPage = () => {
  return (
    <div>
      <SearchButton></SearchButton>
    </div>
  )
}

export default Home
