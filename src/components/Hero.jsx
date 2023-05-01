import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full md-10 pt-3 ">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain " />
        <button
          type="button"
          onClick={() => window.open("https://github.com/walex4242")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Resuma Artigos com <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summerize, a code article summarizer that
        transforms long articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
