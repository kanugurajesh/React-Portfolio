import React,{ useState } from "react";

function Header() {
    const [show,setshow] = useState(true)
    const clicked = () => {
        const header = document.getElementById("head")
        header.classList.toggle("animate-pre")
        setshow(!show);
    }
  return (
    <>
        <nav>
            <ul className="animate" id="head">
                {show &&
                    <li onClick={clicked} id="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </li>
                }
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
        </nav>
    </>
  )
}

export default Header;
