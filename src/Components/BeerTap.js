import React, { Component} from 'react';

class BeerTap extends Component{
    render(){
        return(
            <div>
                <section className="beertap" >
                    <div id="action">
                        <div id="keg">
                            <div id="pipe-handle"></div>
                            <div id="pipe"></div>       
                            <div id="pipe-front"></div>
                        </div>
                    
                        <div class="glass">
                            <div class="beer"></div>
                            <div class="handle">
                                <div class="top-right"></div>
                                <div class="bottom-right"></div>
                            </div>
                            <div class="front-glass"></div>
                        </div>
                    </div>
                </section>
                <h1>Grab a drink! We'll be back with more soon!</h1>
            </div>
        );
    }
}

            

export default BeerTap;