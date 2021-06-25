import React , { useState , useEffect } from 'react';
import axios from 'axios';
import { SocialSection , SocialItem , SocialIcon , SocialDesc , Scale} from './style';

const SocialMedia = () => {
    const [soicalMedia , setSocialMedia] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => setSocialMedia(res.data.social))
    }, []);

    const soialList = soicalMedia.map( (soialItem , index) => {
        return (
            <SocialItem backColor={index+1} key={index}>
                <Scale>
                    <SocialIcon className={soialItem.icon}></SocialIcon>
                    <SocialDesc>
                        <span>{soialItem.title}</span>
                        <span>{soialItem.body}</span>
                    </SocialDesc>
                </Scale>
            </SocialItem>
        )
    })
    return (
        <SocialSection>
            {soialList}
        </SocialSection>
    )
}

export default SocialMedia;