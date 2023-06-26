import React,{ useState,useEffect } from "react";

function Header() {
    const [show,setshow] = useState(true)
    const [windowsize,setWindow] = useState(false)

    const clicked = () => {
        const element = document.getElementById("sidebar")
        if (element.classList.contains("show")) {
            element.classList.remove("show")
            element.classList.add("hide")
        }else {
            element.classList.add("show")
            element.classList.remove("hide")
        }
        setshow(!show);
    }

    useEffect(() => {
        const handleResize = () => {
          setWindow(window.innerWidth > 950);
          console.log(windowsize)
        };
    
        handleResize()
        window.addEventListener("resize", handleResize);
      }, [windowsize]);

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
                            <span>&#x00D8;1.</span> &lt;about&gt;
                        </li>
                        <li onClick={clicked}>
                            <span>&#x00D8;2.</span> &lt;skills&gt;
                        </li>
                        <li onClick={clicked}>
                            <span>&#x00D8;3.</span> &lt;portfolio&gt;
                        </li>
                        <li onClick={clicked}>
                            <span>&#x00D8;4.</span> &lt;career&gt;
                        </li>
                        <li onClick={clicked}>
                            <span>&#x00D8;5.</span> &lt;contact&gt;
                        </li>
                    </>
                }
            </ul>
            }
            {windowsize && 
                <ul>
                    <li>
                        <span>&#x00D8;1.</span> &lt;about&gt;
                    </li>
                    <li>
                        <span>&#x00D8;2.</span> &lt;skills&gt;
                    </li>
                    <li>
                        <span>&#x00D8;3.</span> &lt;portfolio&gt;
                    </li>
                    <li>
                        <span>&#x00D8;4.</span> &lt;career&gt;
                    </li>
                    <li>
                        <span>&#x00D8;5.</span> &lt;contact&gt;
                    </li>
                </ul>
            }
        </nav>
    </div>
  )
}

export default Header;
