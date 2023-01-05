import React, { useState } from 'react'

export default function About() {
  const [MyStyles, setStyles] = useState(
    {
      color: 'white',
      backgroundColor: 'black'
    });

  const [btntext, setText] = useState("Disable Dark Mode");
  function changeState() {
    if (MyStyles.color === 'white') {
      setStyles(
        {
          color: 'black',
          backgroundColor: 'white',
          border: '1 px solid white'
        })
      setText("Enable dark mode");
    }
    else {
      setStyles({
        color: 'white',
        backgroundColor: 'black'
      })
      setText("Disable dark mode");
    }
  }


  return (

    <>

      <div className="container" style={MyStyles}>
        <h2 className="my-2">About us</h2>
        <div className="accordion" id="accordionExample" style={MyStyles}>
          <div className="accordion-item" style={MyStyles}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={MyStyles}>
                What is Textify
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={MyStyles}>
              <div className="accordion-body" style={MyStyles}>
                <strong>Textify is a website that allows you to manipulate and transform text in various ways. With Textify, you can easily change the case of your text from uppercase to lowercase and vice versa. You can also use our tool to remove excess whitespace, sort lines alphabetically, and much more. Whether you need to format text for a document or just want to play around with some text manipulation, Textify has you covered. So why wait? Start textifying today!</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={MyStyles}>
            <h2 className="accordion-header" id="headingTwo" style={MyStyles}>
              <button className="accordion-button collapsed" style={MyStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why did I made this website
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={MyStyles}>
              <div className="accordion-body" style={MyStyles}>
                <strong>I made this website while i was learning React framework</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={MyStyles} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Buy me a coffee
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={MyStyles}>
              <a href="https://www.buymeacoffee.com/Divyam03">Click here :)</a>
              </div>
            </div>
          </div>
          <div className="container my-3">
            <button type="button" className="btn btn-primary " onClick={changeState} >{btntext}</button>
          </div>
        </div>
       
        </div>
        <iframe width="1000" height="500" src="https://www.youtube.com/embed/xvFZjo5PgG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </>
  )
}
