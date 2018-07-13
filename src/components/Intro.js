import React, {Component} from 'react';


// const Intro = () => {
//     return (
//         <div className="intro">
//             <div className="main-hotdog">
//                 <img src = { require ("../img/hotdog.png")} alt="hotdog" />
//             </div>
//             <h1>Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
//
//             <button><span>More Dogs ‘n Make Em Hot</span></button>
//         </div>
//     )
// } ;


class Intro extends Component {
    render () {
        return (
            <div className="intro">
                <div className="main-hotdog">
                    <img src = { require ("../img/hotdog.png")} alt="hotdog" />
                </div>
                <h1>Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>

                <button><span>More Dogs ‘n Make Em Hot</span></button>
            </div>
        )
    }
}

export default Intro;