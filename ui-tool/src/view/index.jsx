import React, { useState } from "react";
import link from "../../public/assets//icons/link.png";
import download from "../../public/assets/icons/download.png";
import album from "../../public/assets/icons/album.png";
import {
  cards,
  paragraphs,
  questionsPara,
  cardsDetails,
  ourDetails,
  blogs,
  applications,
  faqData,
} from "../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <section className="bg-gray-100 py-5">
        <div className="container mx-auto px-4">
          <h1 class="text-center text-3xl font-bold mt-2">
            Image to Text Converter
          </h1>
          <p className="font-medium text-lg text-gray-700 mt-2 text-center">
            An online image to text converter to extract text from images.
          </p>
          {/* container */}
          <div className="flex flex-col items-center justify-center mt-4">
            <div
              className="w-full px-5 py-5 bg-white
             border-gray-300 rounded-[25px] text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="border-dashed border-2 rounded-md">
                {/* image upload */}
                <div className="flex items-center justify-center mt-4">
                  <img
                    src={album}
                    alt=""
                    className="w-[10%] h-auto object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-medium">
                    Drop, Upload or Paste image
                  </h3>
                  <p className="text-base text-gray-400 mt-1 mb-3">
                    Supported formats: JPG, PNG, GIF, JFIF (JPEG), HEIC, PDF
                  </p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  {/* Image Upload and Link Buttons */}
                  <div className="flex items-center justify-center space-x-4 mb-4 w-full max-w-sm">
                    {/* Browse Button */}
                    <label
                      htmlFor="imageUpload"
                      className="flex items-center justify-center px-6 py-2 bg-gray-100 
                      hover:bg-gray-200 cursor-pointer border border-gray-300 rounded-md text-gray-600 text-lg font-semibold"
                    >
                      <img
                        src={download}
                        alt="Upload"
                        className="w-5 h-5 mr-2"
                      />
                      Browse
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files.length) {
                          const file = e.target.files[0];
                          setImageUrl(URL.createObjectURL(file));
                        }
                      }}
                    />

                    {/* Link Button */}
                    <button
                      onClick={() => setShowLinkInput((prev) => !prev)}
                      className="flex items-center justify-center px-2 py-3
                       hover:bg-gray-200 border border-gray-300 rounded-md"
                    >
                      <img src={link} alt="Link" className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Link Input Field */}
                  {showLinkInput && (
                    <input
                      type="text"
                      placeholder="Paste image URL here"
                      className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  )}
                </div>
              </div>

              {/* Uploaded Image Preview */}
              {imageUrl && (
                <div className="mt-6">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="max-w-full h-auto border border-gray-300 rounded-md"
                  />
                </div>
              )}
              <div className="text-start mt-4 mb-2">
                <p className="text-gray-600 font-semibold italic">
                  *Your privacy is protected! No data is transmitted or stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:border hover:border-gray-500"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {card.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-100">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-[75%]">
            {paragraphs.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-lg text-wrap font-medium leading-loose"
                >
                  {item.para}
                </p>
              );
            })}
          </div>
          <div className="w-[25%]">
            <img
              src={`https://www.imagetotext.info/web_assets/frontend/img/guide-right.svg`}
              alt=""
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src={`https://www.imagetotext.info/web_assets/frontend/img/ocr_document.webp`}
              alt=""
              className="max-w-full h-auto object-cover"
            />
          </div>
          <div className="">
            {questionsPara.map((item, index) => {
              return (
                <div className="" key={index}>
                  <p className="text-lg leading-relaxed mb-2 font-medium">
                    {item.para}
                  </p>
                  <h1 className="text-3xl font-semibold">{item.heading}</h1>
                  <p className="text-lg leading-relaxed mb-2 font-medium">
                    {item.para2}
                  </p>
                  <ul>
                    <li className="italic">{item.li}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mt-4 mb-8">
            <h1 className="text-3xl font-bold">
              Features - Image to Text Converter
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {cardsDetails.map((item, index) => (
              <div
                key={index}
                className="border-[2px] border-blue-500 text-center rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-4">{item.name}</h4>
                <p className="text-gray-600 text-base">{item.para}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center py-10">
            <img
              src={`https://www.imagetotext.info/web_assets/frontend/img/word_detection.webp`}
              alt=""
              className="max-w-full h-auto object-cover"
            />
          </div>
          <div className="text-center py-4">
            <h1 className="text-3xl font-bold">
              Where can you use a photo to text converter?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-4">
            {ourDetails.map((item, index) => (
              <div
                key={index}
                className="border-[2px] border-blue-500 text-center rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-4">{item.name}</h4>
                <p className="text-gray-600 text-base">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center pb-4">
            <h1 className="text-3xl font-bold">
              Frequently Asked Questions (FAQs)
            </h1>
          </div>
          <div>
            {faqData.map((item, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] rounded-lg"
              >
                <h2 className="text-xl font-semibold text-dark-blue-700">
                  {item.question}
                </h2>
                <p className="text-lg font-semibold leading-relaxed text-gray-800 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={"/"}>
                  <img
                    src={blog.image}
                    alt={blog.heading}
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                </Link>
                <div className="p-4">
                  <Link to={"/"}>
                    <h3 className="text-lg font-bold mb-2">{blog.heading}</h3>
                  </Link>
                  <p className="text-gray-800 font-medium text-base">
                    {blog.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Applications</h2>
          <p className="text-center text-gray-800 mb-8">
            You can download image to text apps
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="border rounded-lg bg-white shadow-md px-6 py-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold mb-1">{app.title}</h3>
                <p className="text-base text-gray-600 font-medium mb-2">
                  {app.subtitle}
                </p>
                <img
                  src={app.image}
                  alt={app.title}
                  className="max-w-full h-auto mb-4 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
