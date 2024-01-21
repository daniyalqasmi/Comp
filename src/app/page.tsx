import Ads_2 from "@/components/Ads/Ads-2/Ads_2";
import Ads_1 from "@/components/Ads/Ads_1/Ads_1";
import Contact_1 from "@/components/contact/contact_1/contact_1";
import Contact_2 from "@/components/contact/contact_2/contact_2";
import Footer_1 from "@/components/footer/footer_1/footer_1";
import Footer_2 from "@/components/footer/footer_2/footer_2";
import Header_6 from "@/components/header/header_1/header_6";
import Header_7 from "@/components/header/header_2/header-7";
import Slider_1 from "@/components/slider/Slider_1/Slider_1";
import Slider_2 from "@/components/slider/slider_2/slider_2";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Header 1
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Header_6 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Header 2
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Header_7 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Slider 1
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Slider_1 />

      <Slider_2 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Footer 1
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Footer_1 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Footer 2
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Footer_2 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Contact_1
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Contact_1 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Contact_2
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Contact_2 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Ads 1
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Ads_1 />
      <div className="text-center mb-16">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
          Ads 2
        </h1>
        <div className="flex mt-2 justify-center mb-15">
          <div className="w-16 h-1 rounded-full bg-myheading inline-flex" />
        </div>
      </div>
      <Ads_2/>

    </div>
  );
}
