import React from "react";
import { NAV_LINKS } from "../utils/constants";
import Image from "next/image";

const Footer = () => {
  const filtered = NAV_LINKS.filter((item) => item.href !== "/review");
  console.log(filtered);
  console.log("Hello");
  return (
    <div>
      <div className="container-lg">
        <div className="grid grid-cols-4">
          {/* LOGO */}
          <div>
            <h1>KarePal</h1>
            <p>Transforming care giving through data-driven AI tools</p>
          </div>

          {/* PRODUCTS */}
          <div>
            <p>Products</p>
            <div>
              {filtered.map((item) => (
                <div key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h1>Support</h1>
            <div>
              <ul>
                <li>Account</li>
                <li>Feedback</li>
                <li>Contact Us</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h1>Social</h1>
            <div>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Threads</li>
                <li>Facebook</li>
              </ul>
            </div>
                  </div>
                  
                  <div>
                      <Image src="/App_Store.png" alt="" width={100} height={50} />
                      <Image src="/Google_Play.png" alt="" width={100} height={50} />
                 </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
