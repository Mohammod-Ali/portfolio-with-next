import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text for hero section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Mohammod Ali</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a web developer with an amazing ability to develop websites
              that are both functional and aesthetically pleasing. I have a
              strong knowledge of web standards and best practices, and I am
              passionate about creating websites that users will find easy to
              use.
            </p>
            {/* btn for hire  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:cursor-pointer hover:transition-all duration-500"
              >
                <span className="mr-2">Download CV</span>{" "}
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              {/* social icons */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                ></Social>
              </div>
            </div>
          </div>
          {/* photo for hero section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
}
