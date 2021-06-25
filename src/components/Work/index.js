import React , { Component } from 'react';
import axios from 'axios';

import { HeadLine , Grid , WorkPart , Icon , WorkTitle , Line} from './style';

class Work extends Component {
    state = {
        works : []
    }
    
    componentDidMount(){
        axios.get('js/data.json').then( res => {this.setState({works : res.data.works})})
    }

    render() {
        const {works} = this.state;

        const worksList = works.map( (workItem , index) => {
            return (
                <WorkPart key={index}>
                    <Icon className={workItem.icon_name}></Icon>
                    <WorkTitle>{workItem.title}</WorkTitle>
                    <Line />
                    <p>{workItem.body}</p>
                </WorkPart>
            )
        })
        return (
            <section>
                <div className="container">
                    <HeadLine>My Work</HeadLine>
                    <Grid>
                        {worksList}
                    </Grid>
                </div>
            </section>
        )
    }
}

export default Work;