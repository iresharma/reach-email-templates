import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const DropboxResetPasswordEmail = ({ userFirstname = 'Zeno' }) => {
    return (
        <Html>
            <Head />
            <Preview>Hello from Iresharma</Preview>
            <Body style={main}>
                <Container style={container}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            height: "50px"
                        }}
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                    </svg>
                    <Section>
                        <Text style={text}>Hi {userFirstname},</Text>
                        <Text style={text}>
                            Thank you for your interest in Reach. I'd love to connect and discuss how our solution
                            aligns with your goals. Your insights are crucial for idea validation. Could we schedule a
                            brief call to explore the possibilities? Let me know your availability, and we'll
                            coordinate.
                        </Text>
                        <Text style={text}>Thank you so much for showing interest in REACH!</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default DropboxResetPasswordEmail;

const main = {
    backgroundColor: '#f6f9fc',
    padding: '10px 0',
};

const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #f0f0f0',
    padding: '45px',
};

const text = {
    fontSize: '16px',
    fontFamily:
        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: '300',
    color: '#404040',
    lineHeight: '26px',
};

const button = {
    backgroundColor: '#007ee6',
    borderRadius: '4px',
    color: '#fff',
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: '15px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    width: '210px',
    padding: '14px 7px',
};

const anchor = {
    textDecoration: 'underline',
};
