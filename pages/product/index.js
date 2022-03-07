import Navbar from "../../components/Navbar"
import Head from "next/head"
import Link from 'next/link'


export const getStaticProps= async()=>{
  const res =await fetch("https://jsonplaceholder.typicode.com/posts")
  const data =await res.json();

  return{
    props:{
      data,
    }
  }
}



const product = ({data}) => {
 
  return (
    <>
    <Head>
      <title>Product</title>
    </Head>
    <Navbar/>
    <h1 style={{
      textAlign:"center"
    }}>Welcome to Product Page </h1>
    {data.slice(0,5).map((curElem)=>{
      return <div key={curElem.id} className='product'>
        <h3>Id:{curElem.id}</h3>
        <Link href={`/product/${curElem.id}`}>
        <h4>Title: {curElem.title}</h4>
        </Link>
      </div>
          })}
    </>
  )
}

export default product