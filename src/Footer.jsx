import React from "react";

const year = new Date().getFullYear();
function Footer(){
    return (
        <footer className="footer">
            <p>Copyright ⓒ Aimen Moten {year}</p>
        </footer>
    )
}

export default Footer;