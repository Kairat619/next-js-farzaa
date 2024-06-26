import Layout from '@/component/layout/Layout'
import ContactMain from '@/component/main/ContactMain'
import Head from 'next/head'
import React from 'react'

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <ContactMain />
        </Layout>
      </>
    </>
  )
}

