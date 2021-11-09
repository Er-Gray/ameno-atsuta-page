import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderWrapper=styled.div`
	height:15%;
	width:100%;
	background-color:rgba(220,220,220,0.6);
`;

const HeaderLeft=styled.div`
	width:30%;
`;

const AmenoLogo=styled.img`
	height:100%;
`;

const HeaderRight=styled.div`
	display:flex;
	justify-content:flex-end;
`;

const HeaderUl=styled.ul`
	display:flex;
	flex-wrap:nowrap;
	width:40%;
	list-style:none;
`;

const HeaderLi=styled.li`
	width:25%;
	height:100%;
`;

const HeaderYTAndTw=styled.ul`
	width:15%;
	margin:-1% 0;
`;

const HeaderYTAndTwLi=styled.li`
	width:100%;
	list-style:none;
	background-color:rgba(150,150,150,0.5);
	margin:5% 0;
	color:white;
	font-size:1rem;
`;

const HeaderYTAndTwA=styled.a`
		text-decoration: none;
		height:40%;
`;

const HeaderLink=styled(Link)`
		text-decoration: none;
		height:100%;
`;

const Header:React.FC=()=>{
	const HeaderMenuList:React.FC=()=>{

		return (
			<BrowserRouter>
				<HeaderUl>
					<HeaderLi><HeaderLink to="/about">ABOUT</HeaderLink></HeaderLi>
					<HeaderLi><HeaderLink to="/stream">STREAM</HeaderLink></HeaderLi>
					<HeaderLi><HeaderLink to="/history">HISTORY</HeaderLink></HeaderLi>
					<HeaderLi><HeaderLink to="/contact">CONTACT</HeaderLink></HeaderLi>
				</HeaderUl>
				<HeaderYTAndTw>
					<HeaderYTAndTwA href="#"><HeaderYTAndTwLi>Youtube</HeaderYTAndTwLi></HeaderYTAndTwA>
					<HeaderYTAndTwA href="#"><HeaderYTAndTwLi>Twitter</HeaderYTAndTwLi></HeaderYTAndTwA>
				</HeaderYTAndTw>
			</BrowserRouter>
		);
	}


	return(
		<HeaderWrapper>
			<HeaderLeft>
				<AmenoLogo alt="ロゴ画像" />
			</HeaderLeft>
			<HeaderRight>
				<HeaderMenuList/>
				
			</HeaderRight>
		</HeaderWrapper>
	);
}

export default Header;