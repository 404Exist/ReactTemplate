import React , { useState , useEffect} from 'react';
import axios from 'axios'
import { SkillsParent , Desc , SkillInfo , Flex , Percent , PercentColor } from './style';

const Proflie = () => {
    const [skills , setSkills] = useState([]);

    useEffect ( () => {
        axios.get('js/data.json').then( res => setSkills(res.data.skills));
    } , [] )

    const skillsList = skills.map( (skill , index) => {
        return (
            <SkillInfo key={index}>
                <Flex>
                    <p>{skill.name}</p>
                    <p>{skill.percentage}%</p>
                </Flex>
                <Percent>
                    <PercentColor percent={skill.percentage}></PercentColor>
                </Percent>
            </SkillInfo>
        )
    })
    // 
    return (
        <section>
            <div className="container">
                <SkillsParent>
                    <h2>Some skills</h2>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</Desc>
                    {skillsList}
                </SkillsParent>
            </div>
        </section>
    )
}

export default Proflie;