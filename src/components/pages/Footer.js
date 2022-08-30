import React from 'react';
import '../../assets/styles/Footer.css'

function Footer() {
  return (
    <div class="footer">
    <div>
        <ul>
            <li>
                <a href = "mailto: myemail@mail.com"><u>Email me</u></a>
            </li>
            <li>
                <a href="https://github.com/sergeyholin" target="_blank" alt="GitHub"><u> My GitHub</u></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sergey-holin-280125241/" target="_blank" alt="LinkedIn"><u>My LinkedIn</u></a>
            </li>
        </ul>
    </div>
</div>
  );
}

export default Footer;