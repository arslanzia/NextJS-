import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar';

export const getStaticPaths = async()=>{
  const res =await fetch("https://jsonplaceholder.typicode.com/posts")
  const data =await res.json();

  const paths  = data.map((curElem)=>{
    return {
      params: {
        dyRouting : curElem.id.toString(),
      },
    }
  })

  return{
    paths,
    fallback:false
    }
  }

  export const getStaticProps= async(context)=>{
    const id = context.params.dyRouting;
    const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data =await res.json();
  
    return{
      props:{
        data,
      }
    }
  }
const dyRouting = ({data}) => {
  const {id,title,body}=data;   
  return (
    <>
    <section className='routing-main'>
    
   <Navbar/>
   <div key={id}>
        <h3>Id:{id}</h3>
        <h3>Title: {title}</h3>
        <h3>Title: {body}</h3>
      </div>
      </section>
    </>
  )
}

export default dyRouting
