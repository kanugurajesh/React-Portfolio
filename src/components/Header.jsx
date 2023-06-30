import React,{ useState,useEffect } from "react";

function Header({windowsize}) {
    const [show,setshow] = useState(true)
    
    const clicked = () => {
        const element = document.getElementById("sidebar")
        if (element.classList.contains("show")) {
            element.classList.remove("show")
            element.classList.add("hide")
            document.body.style.overflow = 'auto'
        }else {
            element.classList.add("show")
            element.classList.remove("hide")
            document.body.style.overflow = 'hidden'
        }
        setshow(!show);
    }

  return (
    <div id="navigate">
        {!windowsize && 
                <div id="menu" onClick={clicked}>
                    {show &&
                        <>
                            <div></div>
                            <div></div>
                            <div></div>
                        </>
                    }
                </div>
        }
        <nav id="sidebar">
            {!windowsize && 
                <ul className="animate" id="head">
                {!show &&
                    <>
                        <li onClick={clicked}>
                        <a href="#section2"><span>&#x00D8;1.</span> &lt;about&gt;</a>
                        </li>
                        <li onClick={clicked}>
                        <a href="#section3"><span>&#x00D8;2.</span> &lt;skills&gt;</a>
                        </li>
                        <li onClick={clicked}>
                        <a href="#section4"><span>&#x00D8;3.</span> &lt;portfolio&gt;</a>
                        </li>
                        <li onClick={clicked}>
                        <a href="#section5"><span>&#x00D8;4.</span> &lt;career&gt;</a>
                        </li>
                        <li onClick={clicked}>
                        <a href="#section6"><span>&#x00D8;5.</span> &lt;contact&gt;</a>
                        </li>
                    </>
                }
            </ul>
            }
            {windowsize && 
                <ul id="head">
                    <li>
                        <a href="#section2"><span>&#x00D8;1.</span> &lt;about&gt;</a>
                    </li>
                    <li>
                        <a href="#section3"><span>&#x00D8;2.</span> &lt;skills&gt;</a>
                    </li>
                    <li>
                        <a href="#section4"><span>&#x00D8;3.</span> &lt;portfolio&gt;</a>
                    </li>
                    <li>
                        <a href="#section5"><span>&#x00D8;4.</span> &lt;career&gt;</a>
                    </li>
                    <li>
                        <a href="#button"><span>&#x00D8;5.</span> &lt;contact&gt;</a>
                    </li>
                </ul>
            }
        </nav>
    </div>
  )
}

export default Header;
