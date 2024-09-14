import React from "react";
const d = new Date();
const curr_year = d.getFullYear();
function Footer() {
  return (
    <footer>
      <p> Copyright &#169;{curr_year}</p>
    </footer>
  );
}
export default Footer;
