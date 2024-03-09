import Image from "next/image";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import FeatImage01 from "@/public/images/mission-vision-value.png";
import FeatImage02 from "@/public/images/excellence.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <div className="mb-5 text-transparent">12</div>
            <h1 className="h2 mb-4"></h1>
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-xl text-gray-400">
              Welcome to <b>Sixtytwohomesandmarketing</b>. At{" "}
              <b>Sixtytwohomesandmarketing</b>, we pride ourselves on being a
              leading real estate company dedicated to providing high-quality
              properties and exceptional services to clients across Pakistan.
              With a relentless commitment to excellence and a passion for
              exceeding customer expectations, we have established ourselves as
              a trusted name in the industry.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    More speed. Less spend
                  </div> */}
                  <h3 className="h3 mb-3">Our Mission and Values</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Our mission at <b>Sixtytwo Homes and Marketing</b> is
                    straightforward: to revolutionize the real estate journey by
                    providing unparalleled value, integrity, and professionalism
                    in every interaction. We are dedicated to transparency,
                    honesty, and integrity, as these principles underpin all
                    aspects of our work. Our team is united by a common vision
                    to foster enduring relationships with our clients, founded
                    on trust and mutual respect.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Real Estate Experience</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Core Values of Transparency, Honesty, and Integrity
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Building Lasting Relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    More speed. Less spend
                  </div> */}
                  <h3 className="h3 mb-3">A Legacy of Excellence</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Established in 1999, <b>Sixtytwohomesandmarketing</b> has a
                    rich history of success and innovation in the real estate
                    sector. Our journey began with a bold vision to
                    revolutionize the industry and raise the bar for quality and
                    service. Over the years, we have consistently delivered on
                    our promises, earning the trust and loyalty of countless
                    clients along the way.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    More speed. Less spend
                  </div> */}
                  <h3 className="h3 mb-3">
                    Unparalleled Service and Expertise
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    At <b>Sixtytwohomesandmarketing</b>, we understand that
                    buying or selling a property is one of the most significant
                    decisions you'll ever make. That's why we go above and
                    beyond to ensure a seamless and stress-free experience for
                    our clients. Our team of experienced real estate
                    professionals is dedicated to providing personalized
                    attention and expert guidance at every step of the process.
                    Whether you're a first-time homebuyer, a seasoned investor,
                    or looking to sell your property, we have the knowledge and
                    resources to help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
