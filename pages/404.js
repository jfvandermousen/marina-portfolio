import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"


const ErrorPage = () => {
  const router = useRouter();

// redirect to Homepage after 3sec


  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[router])

  return (
    <div className="error-page">
        <h2>Oups there is nothing here !</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default ErrorPage