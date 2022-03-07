import Navbar from "../components/Navbar"
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  return (
    <>
   <div className="header">
    <Head>
      <title>Home Page </title>
    </Head>
    <Navbar/>
    <h1>Welcome to Home Page</h1>
    </div>
      

    </>
  )
}

