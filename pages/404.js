import Link from "next/link"
import Image from "next/image"
// import { useEffect } from "react"
// import { useRouter } from "next/router"


const ErrorPage = () => {

//const router = useRouter();

// redirect to Homepage after 3sec


/*  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[router])
*/


  return (
    <div className="error-page">
        <div className="img-bloc">
            <Image className="error-img" src='/walk_error_page.jpg' alt="error page turn back" height={525} width={354}/>
          </div>
        <div>
          <h2>Oups there is nothing here !</h2>
          <p>Go back to the <Link href="/">Homepage</Link> </p>
        </div>
    </div>
  )
}

export default ErrorPage