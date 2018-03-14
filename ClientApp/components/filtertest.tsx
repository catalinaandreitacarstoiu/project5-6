import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class filtertest extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        function x(a){
        var list = document.getElementsByClassName(a);
        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.removeChild(list[i])
        }
    }
        
    
        return <div> 
            <div className="filterclass">
            <div id="div1" className="cat01">text1</div>
            <div id="div2" className="cat02">text2</div>
            <div id="div3" className="cat01">text3</div>
            <div id="div4" className="cat02">text4</div>
            <div id="div5" className="cat03">text5</div>
            <div id="div6" className="cat01">text6</div>
            </div>
            <button onClick={(event)=>x("cat01")}>C</button>

            
            
        </div>;
    }
}

   
    




