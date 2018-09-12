import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>246 Keenan Hall &bull; Notre Dame, IN 46556 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(574) 347-5744</dd>
                <dt>Email</dt>
                <dd><a href="#">mshan@nd.edu</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Matthew Shan</p>
    </footer>
)

export default Footer
