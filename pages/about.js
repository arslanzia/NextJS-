import Navbar from "../components/Navbar"
import Head from 'next/head';
import Image from 'next/image';
const about = () => {
  return (
    <>
    <Head>
      <title>About Us</title>
    </Head>
    <Navbar/>
    <div style={{
      color:'red',
      textAlign:"center"
      }}> Welcome to About Us Page 
    </div>
      <div style={{
        marginTop :"20px",
        paddingLeft:"450px"

      }} >
      <Image 
      src='/weather1.jpg'
      width="500"
      height="300"
      >


      </Image>
      </div>
    </>
  )
}

export default about