import React , { useState , useEffect } from 'react';
import axios from 'axios';
import { PortfolioSection , Title , List , ImageGrid , ImagePart , Image , OverLay , OverLaySpan} from './style';

const Portfolio = () => {
    // Hooks to write state & component lifeCycle in function component ( stateless component )
    // state = {
    //     images : []
    // }
    const [ images , setImages ] = useState([]);

    // this equal componentDidMount() {} // means after component loaded 
    useEffect ( () => {
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio) } )
    } , [] )

    const PorfolioImages = images.map( (imageItem , index) => {
        return (
            <ImagePart key={index}>
                <Image src={imageItem.image} alt="portfolio" />
                <OverLay>
                    <OverLaySpan>Show Image</OverLaySpan>
                </OverLay>
            </ImagePart>
        )
    } )
    
    return (
        <PortfolioSection>
            <div className="container">
                <Title>My Portfolio</Title>
                <ul>
                    <List activeOsama>All</List>
                    <List>HTML</List>
                    <List>Css</List>
                    <List>JavaScript</List>
                    <List>React Js</List>
                    <List>PHP</List>
                    <List>Laravel</List>
                 </ul>
            </div>
            <ImageGrid>
                {PorfolioImages}
            </ImageGrid>
        </PortfolioSection>
    )
}

export default Portfolio;