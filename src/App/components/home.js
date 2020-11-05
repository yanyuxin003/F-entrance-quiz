import React, {Component} from 'react';
import Groups from './groups.js'
// TODO GTB-工程实践: - 针对整个文件：有Eslint错误
// TODO GTB-工程实践: - API相关相关的代码需要抽取到一个独立的文件
// TODO GTB-知识点: - 组件的命名没有体现业务逻辑
// TODO GTB-知识点: - 组件划分层次不够
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
        // TODO GTB-工程实践: - API相关相关的代码需要抽取到一个独立的文件
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

    // TODO GTB-工程实践: - 方法的命名没有体现业务逻辑
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
                        {/* // TODO GTB-知识点: - this.state.students是一个array，直接那它做map就可以了   */}
                        {Object.keys(this.state.students).map((key) => (
                            <p className="info">
                                {`${this.state.studentList[key].id}. ${this.state.studentList[key].name}`}
                            </p>
                        ))}
                        </div>
                    {/* // TODO GTB-知识点: - addstudent方法没有定义 */}
                    <button onClick={this.addstudent}>添加学生</button>
                </div>
        )
    }
}
export default Home;
