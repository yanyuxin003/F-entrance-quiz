import React, {Component} from 'react';

const myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
});
let url = 'http://localhost:8080/groups';
class Groups extends Component {
    state = {
        groups: [],
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
        }) 
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    groups: data,
                })
            })
    }

    
    render() { 
        console.log(this.state.data);
        return (
            <div className="studentList">
                <table className="student" align="center">
                    {this.state.groups.map((item ) =>
                        <tr key={item.name}>
                            <tr>{item.students}</tr>
                        </tr>
                    )}
                </table>
            </div> 
        )
    }
}
export default Groups;

