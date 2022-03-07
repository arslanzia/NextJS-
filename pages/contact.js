import Navbar from "../components/Navbar"
import Head from 'next/head'
import Login from "../components/Login"

const contact = () => {
  return (
    <section className="contact-form">
    <Head>
        <title>
            Contact Us
        </title>
    </Head>
    <Navbar/>
    <Login/>
    </section>
  )
}

export default contact