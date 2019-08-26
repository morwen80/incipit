import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () =>
  <div className="container notFound">
    <h5>Plot Twist: Page Not Found!</h5>
    <hr />
    <h6>Uh-oh...seems like you're lost.
    <br />Don't despair and follow the <Link to="/" style={{ textDecoration: 'none' }}><span className="blueDotRoad">blue brick road</span></Link> to go back <strike>to Kansas</strike> home.</h6>
  </div>

export default PageNotFound
