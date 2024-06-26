import Layout from '@/component/layout/Layout'
import AccountMain from '@/component/main/AccountMain'
import Head from 'next/head'
import React from 'react'

export default function account() {
  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <AccountMain />
        </Layout>
      </>
    </>
  )
}
