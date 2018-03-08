import React from 'react';

const IpadMini = () =>(
    <div>
        <article className="project-tablet">
            <figure className="ipad">
                <input type="radio" name="btn" id="layout" checked="checked"/>
                <label for="layout"></label>
                <input type="radio" name="btn" id="info"/>
                <label for="info"></label>
                <div className="screen-tablet">
                    <img src="http://hornebom.com/images/ipad/ipad_hh.jpg" alt="" class="page"/>
                </div>
                <figcaption className="caption">
                    <nav className="social">
                        <ul>
                        <li><a href="/" className="mail" type="email"></a></li>
                        <li><a href="/" className="twitter" type="password"></a></li>
                        </ul>
                    </nav>
                </figcaption>
            </figure>
        </article>
    </div>
)


export default IpadMini