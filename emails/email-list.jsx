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
import {Hr} from "@react-email/hr";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const PlaidVerifyIdentityEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Container style={{ textAlign: "center", width: "100%" }}>
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
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </Container>
        <Text style={tertiary}>Store. Manage. Collaborate. Create.</Text>
        <Heading style={secondary}>
          Thank you showing interest in Reach-io.
        </Heading>
        <Container style={{ padding: "40px" }}>
          <Text>
            Dear [Recipient's Name],
          </Text>
          <Text>
            I hope this message finds you well. We are thrilled to inform you that you have successfully been added to our email listing for exclusive updates on the launch of Reach!
          </Text>
          <Text>
            As we gear up for the big day, you can expect to receive firsthand information about:
          </Text>
          <ol>
            <li>
              <Text><b>Product Features</b>: Dive deep into the functionalities and capabilities that make Reach a game-changer.</Text>
            </li>
            <li>
              <Text><b>Early Access Opportunities</b>: Be among the first to explore and experience Reach before its official release.</Text>
            </li>
            <li>
              <Text><b>Special Offers and Promotions</b>: Access exclusive discounts and promotions available only to our early subscribers.</Text>
            </li>
            <li>
              <Text><b>Webinars and Demos</b>: Join live sessions where our experts will showcase the power and versatility of Reach.</Text>
            </li>
          </ol>
          <Text>
            We are committed to keeping you in the loop with all the exciting developments, and we can't wait to share this journey with you. If you have any questions or if there's anything specific you'd like to know about Reach, feel free to reach out to us at&nbsp;
            <a href="mailto://iresharma@reach.io" style={link}>iresharma@reach.io</a>.
          </Text>
          <Text>
            Thank you for being a part of this exciting launch journey with us. Your enthusiasm is what drives us to deliver a product that exceeds expectations.
          </Text>
          <Text>
            Stay tuned for more updates, and get ready to witness the future of content development with Reach!
          </Text>
        </Container>
        <Hr />
        <Text style={paragraph}>Not expecting this email?</Text>
        <Text style={paragraph}>
          Contact{' '}
          <Link href="mailto:iresharma@reach.io" style={link}>
            iresharma@reach.io
          </Link>
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
  width: '80vw',
  margin: '0 auto',
  padding: '68px 0 60px',
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
  padding: "0 30px",
  width: "100%"
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
  textTransform: 'uppercase',
};
