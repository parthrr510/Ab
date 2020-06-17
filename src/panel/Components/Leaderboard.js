import React,{ Component } from 'react';
import Entry from './Entry';
import "./Leaderboard.css";
import "./Entry.css";

class Leaderboard extends Component{
    state = {
        info : {continent: "America",
                team_name: "Abhyudaya",
                rank: 1,
                resources: 100}
        } 
    render(){
        return(
            <div className="table-head">
                <table>
                    <thead>
                    <tr>
                        <th >Continent</th>
                        <th >Team Name</th>
                        <th >Rank</th>
                        <th>Resources</th>
                    </tr>
                    </thead>
                    <tr>
                    <Entry item = {this.state.info} />
                    </tr>
                    
                </table>
            </div>
        )
    }
}

export default Leaderboard;