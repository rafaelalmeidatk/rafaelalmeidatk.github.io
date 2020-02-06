import React from "react";
import Head from "next/head";
import Typist from "react-typist";
import Noise from "../components/Noise";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

// This file will be a mess until I figure out what I want to do :P

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <section className="heading">
      <Noise />
      <div className="container">
        <div className="hidden">
          <h1>
            Hi! I am <span className="highlight">Rafael Almeida</span>, and I
            try to not break the web
          </h1>

          <p>
            I am mostly working with bleeding edge technologies,{" "}
            <a
              href="https://github.com/rafaelalmeidatk/TIL"
              rel="noopener noreferrer"
              target="_blank"
            >
              learning something new almost everyday
            </a>
            .
          </p>
        </div>
        <div className="flash-animation">
          <Typist
            startDelay={700}
            stdTypingDelay={5}
            avgTypingDelay={5}
            cursor={{ show: false }}
          >
            <h1>
              Hi! I am <span className="highlight">Rafael Almeida</span>, and I
              try to not break the web
            </h1>

            <p>
              I am mostly working with bleeding edge technologies,{" "}
              <a
                href="https://github.com/rafaelalmeidatk/TIL"
                rel="noopener noreferrer"
                target="_blank"
              >
                learning something new almost everyday
              </a>
              .
            </p>
          </Typist>
        </div>
      </div>
    </section>

    <AboutMe />

    <Projects />

    <style jsx>{`
      .heading {
        position: relative;
        padding: 10rem 2rem 4rem;
      }

      .heading h1 {
        font-size: 4.5em;
        font-weight: 740;
        line-height: 1.15em;
        letter-spacing: -0.025em;
      }

      .heading p {
        margin-top: 16px;
        font-size: 1.5em;
        font-weight: 300;
        letter-spacing: -0.06em;
      }

      .hidden {
        visibility: hidden;
        opacity: 0;
      }

      .heading .container {
        position: relative;
      }

      .flash-animation {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: heading-flash 0.7s steps(1, end);
      }

      @keyframes heading-flash {
        0% {
          clip-path: inset(0 70% 0 0);
          background: #fff;
          opacity: 100%;
        }

        10% {
          opacity: 0%;
        }

        15% {
          opacity: 100%;
        }

        20% {
          opacity: 0%;
        }

        25% {
          opacity: 100%;
        }

        30% {
          opacity: 0%;
        }

        45% {
          opacity: 100%;
        }

        50% {
          clip-path: inset(0 0% 0 0);
        }

        55% {
          clip-path: inset(0 40% 0 0);
        }

        65% {
          opacity: 0%;
        }

        70% {
          opacity: 100%;
        }

        75% {
          clip-path: inset(0 0% 0 0);
        }

        80% {
          opacity: 0%;
        }

        85% {
          opacity: 100%;
        }

        100% {
          background: #121212;
        }
      }
    `}</style>
  </div>
);

export default Home;
