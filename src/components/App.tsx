import * as React from 'react';

import Navbar from './Navbar';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ITask } from './Task';

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };

        // Bindings
        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addNewTask(task: ITask) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(id: number) {
        const tasks: ITask[] = this.state.tasks.filter((task: ITask) => task.id !== id);
        this.setState({tasks});
        
    }

    render() {
        return (
            <div>
                <Navbar title="React TS"/>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addNewTask={this.addNewTask}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface IProps {

}

interface IState {
    tasks: ITask[];
}