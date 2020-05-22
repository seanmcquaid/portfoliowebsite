import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail, IoIosPaper, IoMdPerson, IoMdSettings, IoMdFiling, IoMdMusicalNotes } from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import resume from "images/Sean McQuaid - Resume.pdf";

const Navbar = () => {
    const [toggleMenuDisplayed, setToggleMenuDisplayed] = useState(false);

    const hamburgerMenuOnClick = () => {
        setToggleMenuDisplayed(!toggleMenuDisplayed);
    };

    const mobileMenuOnClick = () => {
        setToggleMenuDisplayed(false);
    };

    return (
    <NavbarContainer data-testid="navbar" id="navbar">
        <LinkContainer to="/" onClick={mobileMenuOnClick} data-testid="homeButton" id="homeButton">
            <NavLinkIconContainer><IoMdMusicalNotes/></NavLinkIconContainer>
            <NavLinkLabel>Home</NavLinkLabel>
        </LinkContainer>
        <NavContainer data-testid="desktopNavMenu" id="desktopNavMenu">
            <NavLink to="/about" data-testid="desktopAboutLink" id="desktopAboutLink">
                <NavLinkIconContainer><IoMdPerson/></NavLinkIconContainer>
                <NavLinkLabel>About</NavLinkLabel>
            </NavLink>
            <NavLink to="/skills" data-testid="desktopSkillsLink" id="desktopSkillsLink">
                <NavLinkIconContainer><IoMdSettings/></NavLinkIconContainer>
                <NavLinkLabel>Skills</NavLinkLabel>
            </NavLink>
            <NavLink to="/projects" data-testid="desktopProjectsLink" id="desktopProjectsLink">
                <NavLinkIconContainer><IoMdFiling/></NavLinkIconContainer>
                <NavLinkLabel>Projects</NavLinkLabel>
            </NavLink>
            <NavLink to="/contact" data-testid="desktopContactLink" id="desktopContactLink">
                <NavLinkIconContainer><IoMdMail/></NavLinkIconContainer>
                <NavLinkLabel>Contact</NavLinkLabel>
            </NavLink>
        </NavContainer>
        <HamburgerIcon onClick={hamburgerMenuOnClick} data-testid="mobileMenuToggleButton" id="mobileMenuToggleButton"/>
        <HamburgerMenu data-testid="mobileNavMenu" id="mobileMenuToggleButton">
            <HamburgerNavLinksList toggleMenuDisplayed={toggleMenuDisplayed}>
                <HamburgerNavLink to="/about" onClick={mobileMenuOnClick} data-testid="mobileAboutLink" id="mobileAboutLink">
                    <HamburgerNavLinkLabel>About</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/skills" onClick={mobileMenuOnClick} data-testid="mobileSkillsLink" id="mobileSkillsLink">
                    <HamburgerNavLinkLabel>Skills</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/projects" onClick={mobileMenuOnClick} data-testid="mobileProjectsLink" id="mobileProjectsLink">
                    <HamburgerNavLinkLabel>Projects</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/contact" onClick={mobileMenuOnClick} data-testid="mobileContactLink" id="mobileContactLink">
                    <HamburgerNavLinkLabel>Contact</HamburgerNavLinkLabel>
                </HamburgerNavLink>
            </HamburgerNavLinksList>
        </HamburgerMenu>
        <ContactList data-testid="desktopContactMenu" id="desktopContactMenu">
            <ContactListItem>
                <ContactListItemLink href="https://www.linkedin.com/in/sean-mcquaid-292b3588/" target="blank" data-testid="desktopLinkedInLink" id="desktopLinkedInLink">
                    <ContactListIconContainer><IoLogoLinkedin/></ContactListIconContainer>
                    <ContactListItemLinkLabel>LinkedIn</ContactListItemLinkLabel>
                </ContactListItemLink>
            </ContactListItem>
            <ContactListItem>
                <ContactListItemLink href="https://github.com/seanmcquaid" target="blank" data-testid="desktopGitHubLink" id="desktopGitHubLink">
                    <ContactListIconContainer><IoLogoGithub/></ContactListIconContainer>
                    <ContactListItemLinkLabel>GitHub</ContactListItemLinkLabel>
                </ContactListItemLink>
            </ContactListItem>
            <ContactListItem>
                <ContactListItemLink href={resume} target="blank" data-testid="desktopResumeLink" id="desktopResumeLink">
                    <ContactListIconContainer><IoIosPaper/></ContactListIconContainer>
                    <ContactListItemLinkLabel>Resume</ContactListItemLinkLabel>
                </ContactListItemLink>
            </ContactListItem>
        </ContactList>
    </NavbarContainer>)
};

const NavbarContainer = styled.div`
    background-color : rgba(0,0,0,.3);
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    top : 0;
    z-index : 1;
    width : 100px;
    min-width : 100px;
    height : 100%;
    @media (max-width : 975px){
        position : fixed;
        flex-direction : row;
        align-items : baseline;
        height : 80px;
        min-height : 80px;
        width : 100%;
    }
    @media (max-height : 620px){
        position : fixed;
        flex-direction : row;
        align-items : baseline;
        height : 80px;
        min-height : 80px;
        width : 100%;
    }
    @media (max-width : 520px){
        align-items : center;
    }
`;

const LinkContainer = styled(Link)`
    text-align : center;
    padding: 1rem;
    display : flex;
    margin-top : 0.5rem;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 1.5rem;
    color : #ffffffb6;
    text-decoration : none;
`;

const NavContainer = styled.nav`
    text-align : center;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    @media (max-width : 975px){
        flex-direction : row;
    }
    @media (max-height : 620px){
        flex-direction : row;
    }
    @media (max-width : 520px){
        display : none;
    }
`;

const NavLink = styled(Link)`
    margin-top: 0.25rem;
    padding : 1rem;
    text-decoration : none;
    font-size : 1.5rem;
    color : #ffffffb6;
    height : 30px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    @media(max-width : 975px){
        width : 30px;
    }
    @media (max-height : 620px){
        width : 30px;
    }
`;

const NavLinkLabel = styled.span`
    font-size : 1rem;
    visibility : hidden;
    @media (max-width : 520px){
        display : none;
    }
`;

const NavLinkIconContainer = styled.div`
    display : block;
    font-size : 1.5rem;
    width : 100%;
    height: 100%;
    &:hover + ${NavLinkLabel}{
        visibility : visible;
    }
`;

const ContactList = styled.ul`
    display : flex;
    flex-direction : column;
    text-align : center;
    padding: 0;
    margin : 0;
    list-style: none;
    justify-content : center;
    align-items : center;
    @media (max-width : 975px){
        display : none;
    }
    @media (max-height : 620px){
        display : none;
    }
`;

const ContactListItemLinkLabel = styled.span`
    font-size : 1rem;
    visibility : hidden;
`;

const ContactListItem = styled.li`
    margin : 0.25rem;
`;

const ContactListIconContainer = styled.div`
    font-size : 1.5rem;
    height: 100%;
    &:hover + ${ContactListItemLinkLabel}{
        visibility : visible;
    }
`;

const ContactListItemLink = styled.a`
    text-decoration : none;
    font-size : 1.5rem;
    color : #ffffffb6;
`;

const HamburgerMenu = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    font-size: 1.5rem;
    position : fixed;
    top : 0;
    left : 0;
    @media (min-width : 520px){
        display : none;
    }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
    font-size : 1.5rem;
    padding : 1rem;
    display : block;
    &:hover {
        cursor : pointer;
    }
    @media (min-width : 521px){
        display : none;
    }
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const HamburgerNavLinksList = styled.nav`
    display : ${props => props.toggleMenuDisplayed ? "flex" : "none"};
    flex-direction : row;
    justify-content : center;
    align-items : center;
    margin-top : 6.25rem;
    position : fixed;
    width : 100%;
    min-width : 100%;
    background-color : rgba(0,0,0,.3);
    animation: ${fadeInAnimation} ease 0.5s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;

const HamburgerNavLink = styled(Link)`
    padding : 0.5rem;
    text-decoration : none;
    font-size : 1.5rem;
    color : #ffffffb6;
    height : 30px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const HamburgerNavLinkLabel = styled.span`
    font-size : 1rem;
`;

export default Navbar;