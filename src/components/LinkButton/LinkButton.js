import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const LinkButton = ({title, route}) => (
    <LinkButtonContainer to={route}>
        {title}
    </LinkButtonContainer>
);

const LinkButtonContainer = styled(Link)`
    text-decoration : none;
    color : #00000096;
    border : 2px solid #00000096;
    border-radius : 5px;
    padding : 1rem;
    margin : 1rem;
    font-size : 1rem;
    width : 100px;
    text-align : center;
    background-color : #c2d0ae;
    &:hover {
        transition : 0.5s;
        background-color : #dae3ce;
        color: #4C8577;
      }
`;

LinkButton.propTypes = {
    route : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
    route : "/",
    title : "Home"
};

export default LinkButton;