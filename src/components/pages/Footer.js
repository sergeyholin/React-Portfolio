import React from 'react';
import '../../assets/styles/Footer.css'

function Footer() {
  return (
    <div class="footer">
    <div>
        <ul>
            <li>
                <center><a href = "mailto: myemail@mail.com"><u>Email me</u></a></center>
            </li>
            <li>
                <center><a href="https://github.com/sergeyholin" target="_blank" alt="GitHub"><u> My GitHub</u></a></center>
            </li>
            <li>
                <center><a href="https://www.linkedin.com/in/sergey-holin-280125241/" target="_blank" alt="LinkedIn"><u>My LinkedIn</u></a></center>
            </li>
        </ul>
    </div>
</div>
  );
}

export default Footer;