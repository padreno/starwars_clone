import React from "react";
import "./Home.css"
import styled from "styled-components";

export default function Home() {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <div className="content_div">
            <Title>
              In this little web page we publish some essential information
              about star wars movies
            </Title>

            <ParaphHome>
              Star Wars is a multi-genre mythology and multimedia franchise
              created by George Lucas in 1976. Comprising movies, novels,
              comics, video games, toys, and numerous television series, the
              Star Wars franchise employs archetypal motifs common to religions,
              classical mythology, and political climax, as well as musical
              motifs of those same aspects.
            </ParaphHome>
          </div>
        </div>
      </div>
    </div>
  );
}
const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

const ParaphHome = styled.p`
  
  color: white;
 
  font-family: "Lato", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 23px;
  font-weight: 300;
  padding: 3px 150px;
`;
