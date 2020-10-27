import React, {Component} from 'react';
import Groups from './groups.js'

const myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
});
const url = 'http://localhost:8080/students';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
           students:[],
            handleFlag: false,
        }
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
                    students: data,
                })
                console.log(this.state.students)
            })
    }

    addGood = () => {
        this.setState({
            handleFlag: true,
        })
        URL = `http://localhost:8080/student`
        fetch(URL, {
            method:"POST",
        }).then(Response => {
            if (Response.status === 200) {
                this.setState({
                    handleFlag: false,
                })
            }
            else {
                this.setState({
                    handleFlag: false,
                })
                Promise.reject();
            }
        });
        alert("添加成功！")
    }

    render()
        {
            return (
                <div className='studentsList'>
                        <h2>学员列表</h2>
                        <div className="content">
                        {Object.keys(this.state.students).map((key) => (
                            <p className="info">
                                {`${this.state.studentList[key].id}. ${this.state.studentList[key].name}`}
                            </p>
                        ))}
                        </div>
                    <button onClick={this.addstudent}>添加学生</button>
                </div>
        )
    }
}
export default Home;
