import Link from "next/link";
import Image from 'next/image';
import Layout from "./layout";


export default function Home() {
  return (
    <>
    <Layout page="Home">
    <h1>Welcome to Crime Management & Reporting System</h1>

        <Image
        src="/cmrs.png"
        alt="Picture of the Author"
        width={800}
        height={800}
          />
     </Layout>
    
    </>
  )
}
