import Head from 'next/head'
import Input from './Input'
import Test from './test'

export default function Home() {
  return (
    <>
      <Head>
        <title>Activalues</title>
        <link rel="icon" href="/favicon.ico" />
       {/*  <script type="text/javascript" src="https://dev1-api.talkappi.com/service/v1/inquiry/setting"></script>
        <script type="text/javascript" src="https://dev1-api.talkappi.com/service/v1/inquiry/get?id=17070&lang_cd=ja"></script> */}
        <script src="/js/jquery-3.4.1.min.js"></script>
        <script src="/js/jquery-ui.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        {/* <script src="/js/inquiry.js" defer="defer"></script> */}
      </Head>
      <Input />
    </>
  )
}
