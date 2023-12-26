import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const PlaidVerifyIdentityEmail = ({ validationCode = '144833' }) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Container style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
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
                </Container>
                <Text style={tertiary}>Verify Your Identity</Text>
                <Heading style={secondary}>
                    Enter the following code to finish email verification.
                </Heading>
                <Section style={codeContainer}>
                    <Text style={code}>{validationCode}</Text>
                </Section>
                <Text style={paragraph}>Not expecting this email?</Text>
                <Text style={paragraph}>
                    Contact{' '}
                    <Link href="mailto:iresh.sharma8@gmail.com" style={link}>
                        me@iresharma.com
                    </Link>{' '}
                    if you did not request this code.
                </Text>
            </Container>
            <Text style={footer}>Securely powered by Reach.</Text>
        </Body>
    </Html>
);

export default PlaidVerifyIdentityEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    marginTop: '20px',
    width: '360px',
    margin: '0 auto',
    padding: '68px 0 130px',
};

const logo = {
    margin: '0 auto',
};

const tertiary = {
    color: '#0a85ea',
    fontSize: '11px',
    fontWeight: 700,
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    height: '16px',
    letterSpacing: '0',
    lineHeight: '16px',
    margin: '16px 8px 8px 8px',
    textTransform: 'uppercase',
    textAlign: 'center',
};

const secondary = {
    color: '#000',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: '0',
    marginTop: '0',
    textAlign: 'center',
};

const codeContainer = {
    background: 'rgba(0,0,0,.05)',
    borderRadius: '4px',
    margin: '16px auto 14px',
    verticalAlign: 'middle',
    width: '280px',
};

const code = {
    color: '#000',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '6px',
    lineHeight: '40px',
    paddingBottom: '8px',
    paddingTop: '8px',
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
};

const paragraph = {
    color: '#444',
    fontSize: '15px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    letterSpacing: '0',
    lineHeight: '23px',
    padding: '0 40px',
    margin: '0',
    textAlign: 'center',
};

const link = {
    color: '#444',
    textDecoration: 'underline',
};

const footer = {
    color: '#000',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0',
    lineHeight: '23px',
    margin: '0',
    marginTop: '20px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    textAlign: 'center',
    textTransform: 'uppercase'
};
