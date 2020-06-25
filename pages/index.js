import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h4>Hi There!</h4>
        <div>Vtubers Enthusiast & Degenerate Weeb here!</div>
        <span>I code for money :D</span>
        <div>Also my <a href="https://www.github.com/hafizhrf">github</a></div>
      </div>
    </Layout>
  )
}
