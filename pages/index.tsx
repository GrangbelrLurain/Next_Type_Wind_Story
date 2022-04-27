import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { IndexTemplate } from '../stories/template/indexTemplate'

const Home: NextPage = () => {
  return (
    <>
      <IndexTemplate></IndexTemplate>
    </>
  )
}

export default Home
