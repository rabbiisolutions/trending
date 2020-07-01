import React from "react";

const Landing = () => {
  return(
      <section id={'zoom-slide'}>
        <div className={'section-title'}>How to Teach With Zoom</div>
        <iframe title={'zoom slide'} id={"presentation"}
            src="https://docs.google.com/presentation/d/e/2PACX-1vQcdYPpD_knzId7aMSBGvPkV0sOy-ADws18URnz1Efpmq4bStKjNbflyQGjKyo_zg/embed?start=false&loop=false&delayms=60000"
            frameBorder="0" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>
      </section>
  )
};

export default Landing;
