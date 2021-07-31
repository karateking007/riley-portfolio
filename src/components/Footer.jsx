import React from "react";

function Footer() {
    // function getFooterHeight() {
    //     var footer = document.querySelector('.footer');
    //     var footerHeight = footer.offsetHeight;
    //     document.querySelector(".graphic").style.bottom = footerHeight + "px";
    // }

    // getFooterHeight()

    return (
        <div className="footer mt-5">
            <footer className="py-2 bg-dark fixed-bottom text-center text-white">
                <div className="container">
                    <p className="m-0">
                        Copyright &copy; Riley Litchfield 2021
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;