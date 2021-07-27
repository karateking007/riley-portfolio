import React from "react";

function Footer() {
    // function getFooterHeight() {
    //     var footer = document.querySelector('.footer');
    //     var footerHeight = footer.offsetHeight;
    //     document.querySelector(".graphic").style.bottom = footerHeight + "px";
    // }

    // getFooterHeight()

    return (
        <div className="footer">
            <footer className="py-2 bg-dark fixed-bottom">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright &copy; Riley Litchfield 2021
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;