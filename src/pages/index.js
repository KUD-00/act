import Head from 'next/head'
import Input from './Input'
import Email from '../../components/entries/Email'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input />
      <Email></Email>
    </>
  )
}
