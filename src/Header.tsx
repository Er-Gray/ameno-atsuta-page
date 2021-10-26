import React from 'react';
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

`;

const HeaderUl=styled.ul`
	display:flex;
	flex-wrap:nowrap;
`;

const HeaderLi=styled.li`

`;

const Header:React.FC=()=>{
	const HeaderMenuList:React.FC=()=>{

		return (
			<HeaderUl>
				<HeaderLi>ABOUT</HeaderLi>
			</HeaderUl>
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