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
`;

const HeaderYTAndTwLi=styled.li`
	width:100%;
`;

const Header:React.FC=()=>{
	const HeaderMenuList:React.FC=()=>{

		return (
			<BrowserRouter>
				<HeaderUl>
					<HeaderLi><Link to="/about">ABOUT</Link></HeaderLi>
					<Link to="/stream"><HeaderLi>STREAM</HeaderLi></Link>
					<Link to="/history"><HeaderLi>HISTORY</HeaderLi></Link>
					<Link to="/contact"><HeaderLi>CONTACT</HeaderLi></Link>
				</HeaderUl>
				<HeaderYTAndTw>
					<HeaderYTAndTwLi>Youtube</HeaderYTAndTwLi>
					<HeaderYTAndTwLi>Twitter</HeaderYTAndTwLi>
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