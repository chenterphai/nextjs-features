'use client'
import PopularServices from "@/components/Popular";
import * as React from 'react'
import { supabaseClient } from "@/utils/supabase/client";
import RecentProject from "@/components/RecentProject";
export default function Home() {

  const supabase = supabaseClient()
  const [data, setData] = React.useState<any[] | null>(null)

  React.useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from('services').select('title, image').order('id', { ascending: false }).limit(5)
      setData(data)
    }
    getData()
  }, [])

  return (
    <>
      <PopularServices data={data} />
      <RecentProject />
    </>
  );
}
