import React from 'react';
import { ContactSection , Grid , Input , TextArea , InputSubmit} from './style';

const Contact = () => {
    return (
        <ContactSection>
            <div className="container">
                <form> 
                    <Grid>
                        <Input type="text" placeholder="Enter your name.." />
                        <Input type="email" placeholder="Enter your email.." />
                    </Grid>
                    <Input type="text" placeholder="Enter your subject.." />
                    <TextArea placeholder="Enter your message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </form>
            </div>
        </ContactSection>
    )
}

export default Contact;