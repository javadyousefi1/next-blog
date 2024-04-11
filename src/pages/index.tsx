import Styles from "../styles/style.module.css";
import homeImage from "../assets/images/home.png";
import Image from "next/image";
import Input from "@/components/inputs/Input";
import Button from "@/components/elements/Button";

export default function Home() {
  return (
    <main className="">
      <section className={`h-[calc(100vh-52px)] w-full`}>
        <div
          className={`${Styles.dotBackground} w-full h-full flex justify-center items-center px-4`}
        >
          <div className="flex justify-between items-center flex-col max-w-7xl md:flex-row container gap-y-6">
            {/* content */}
            <div className="flex flex-col md:gap-y-12 gap-y-8">
              <div className="flex flex-col md:gap-y-2">
                <h1 className="text-center md:text-left text-3xl md:text-6xl text-black font-black">
                  Hi, i’m Javad 
                </h1>
                <h1 className="text-center md:text-left text-3xl md:text-6xl text-black font-black">
                  Front end dev 
                </h1>
              </div>
              {/* desc */}
              <div className="flex justify-start md:gap-x-2 md:flex-row flex-col-reverse items-center gap-y-2">
                <div className="md:h-[40px] md:w-[3px] h-[3px] w-[40px] bg-black"></div>
                <p className="text-sm text-dark-gray max-w-[600px] font-semibold text-center md:text-left">
                  On this blog I share tips and tricks, frameworks, projects,
                  tutorials, etc Make sure you subscribe to get the latest
                  updates
                </p>
              </div>
              <div className=" flex gap-x-4">
                <Input
                  className="max-w-[400px]"
                  type="text"
                  name="email"
                  onChange={() => {}}
                  value={""}
                  placeHolder="Enter Your Email"
                />
                <Button className="w-[100px]">Subscribe</Button>
              </div>
            </div>
            {/* iamge */}
            <Image
              src={homeImage}
              alt="Picture of the author"
              className="w-[400px]"
            />
          </div>
        </div>
      </section>
      <div className="h-[3000px]"> </div>
    </main>
  );
}
