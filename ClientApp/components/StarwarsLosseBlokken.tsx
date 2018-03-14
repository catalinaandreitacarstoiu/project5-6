import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class StarwarsLosseBlokken extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        {
        function x(searchterm){
        for (var index = 0; index < searchterm.length; index++){
            document.getElementsByClassName(searchterm[index])[0].remove();
        }}
        return <div>

            <h1><button onClick={(event)=>x(["id1","id2"])}>Starwars: Darth Vader Transformation process (new helmet)</button></h1>
            <h1><button onClick={(event)=>x(["id2", "id3"])}>Lego Star Wars Princess Leia Minifigure with Blaster</button></h1>
            <h1><button onClick={(event)=>x(["id3", "id1"])}>LEGO Star Wars First Order Star Destroyer 75190Starwars Sandcrawler</button></h1>
            <h1>LEGO STARWARS</h1> 
            <br/>

            <div className="starwars">
            <h2>Lego Star Wars Princess Leia Minifigure with Blaster</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://images-na.ssl-images-amazon.com/images/I/41JVhY41jmL.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€22,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="starwars">
            <h2>LEGO Star Wars First Order Star Destroyer 75190Starwars Sandcrawler</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2017/02/2._sandcrawler.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="starwars">
            <h2>Starwars: Darth Vader Transformation process (new helmet)</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://losseminifiguren.nl/wp-content/uploads/2017/06/sw834-1440x1440.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€90,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            
        </div>;
    }

   
    }}

