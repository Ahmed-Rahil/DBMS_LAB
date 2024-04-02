import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';

import Students from "../assets/photo.jpg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledNavigation>
                    <Link to="/home" style={{ color: "#550080", textDecoration: "none" }}>Home</Link>
                    <Link to="/shop" style={{ color: "#550080", textDecoration: "none" }}>Shop</Link>
                    <Link to="/aboutus" style={{ color: "#550080", textDecoration: "none" }}>About us</Link>
                    <Link to="/profile" style={{ color: "#550080", textDecoration: "none" }}>Profile</Link>
                    <Link to="/contacts" style={{ color: "#550080", textDecoration: "none" }}>Contacts</Link>
                </StyledNavigation>

                <StyledLink to="/choose">
                    <LightPurpleButton variant="contained" fullWidth>
                        Login
                    </LightPurpleButton>
                </StyledLink>
            </StyledHeader>
            <Grid container spacing={0}>
                
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080", textDecoration: "none" }}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img src={Students} alt="students" style={{ width: '100%', height : '80%' }} />
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledPaper = styled(Box)`
    padding: 24px;
    height: 100vh;
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 24px;
`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525;
    font-weight: bold;
    padding-top: 0;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
`;

const StyledText = styled.p`
    margin-top: 30px;
    margin-bottom: 30px;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    background-color:#f7e8ff;
`;

const StyledNavigation = styled.nav`
    & > a {
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }
    }
`;
