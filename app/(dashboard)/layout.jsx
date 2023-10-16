import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "../components/Navbar";
import { cookies }  from "next/headers"



export default async function DashboardLayout({ children }) {

  const supabase = createServerComponentClient({ cookies});
  const { data } = await supabase.auth.getSession()
  console.log(data)

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  )
}
