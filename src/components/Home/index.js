import React from 'react';
import { HomeSection , Title , Job , Desc , Span , Btn} from './style';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <Title>Osama Saad</Title>
                <Job>React Develober</Job>
                <Desc>
                    I'm a proffessional <Span>React Develober</Span> and Laravel Develober
                </Desc>
                <Btn>Let's Begin</Btn>
            </div>
        </HomeSection>
    )
}

export default Home;