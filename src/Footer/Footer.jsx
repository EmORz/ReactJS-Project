import React from "react";

import Link from "../shared/Link/Link";

function Footer() {
  return (
    <nav className="Footer">
      <ul>
        <Link url='#'><img src='/logo192.png' alt='my-app-logo'/></Link>
        <Link url="#">Link 1</Link>
        <Link url="#">Link 2</Link>

      </ul>
    </nav>
  );
}

export default Footer;
