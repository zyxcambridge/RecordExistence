import '../styles/RootIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import TopNavBar from "./TopNavBar.js"


const Links = () =>
  <nav  >
    <Link className="homebar" activeClassName="active" to="/"><span>  照片墙  </span> </Link>
    <Link className="secondpagebar" activeClassName="active" to="/ThirdPage"><span>   图片轮播  </span> </Link>
    <Link className="zyxmainbar" activeClassName="active" to="/Home"> <span>  控件展示  </span>  </Link>
    <Link className="secondpagebar" activeClassName="active" to="/SecondPage"><span>  基本控件  </span> </Link>

  </nav>

export default Links;