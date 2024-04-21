'use client'
import PopularServices from "@/components/Popular";
import * as React from 'react'
import { supabaseClient } from "@/utils/supabase/client";
import RecentProject from "@/components/RecentProject";
import Videos from "@/components/Videos";
import Feedback from "@/components/Feedback";
import Pricing from "@/components/Pricing";
import BestSellingProducts from "@/components/BestSellingProducts";
import ContactSection from "@/components/Contact";
export default function Home() {

  const supabase = supabaseClient()
  const [data, setData] = React.useState<any[] | null>(null)

  React.useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from('services').select('title, image, link').order('id', { ascending: false }).limit(5)
      setData(data)
    }
    getData()
  }, [])

  return (
    <>
      <PopularServices data={data} />
      <RecentProject />
      <Videos />
      <Feedback />
      {/* <Pricing /> */}
      <BestSellingProducts />
      <ContactSection />
    </>
  );
}
