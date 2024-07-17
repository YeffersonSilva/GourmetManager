import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">SOBRE NÓS</h1>
              <p>A única coisa com a qual somos sérios é a comida.</p>
            </div>
            <p className="mid">
              Na Sabores do Rio, dedicamo-nos a proporcionar a melhor experiência culinária. 
              Nosso compromisso com ingredientes frescos e receitas exclusivas garante uma 
              explosão de sabores a cada mordida. Venha nos visitar e descubra por que somos 
              a melhor hamburgueria do Rio de Janeiro.
            </p>
            <Link to={"/"}>
              Explorar Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="../../public/hamb/pexels-edwardeyer-687824.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
