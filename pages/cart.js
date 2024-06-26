import CartMain from '@/component/main/CartMain'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

export default function cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <CartMain />
        </Layout>
      </>
    </>
  )
}
