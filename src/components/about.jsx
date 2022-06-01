import React from 'react';

const Button = styled.button`
  min-height: 32px;
  padding: 0 32px;
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 1px 1px 0px #3a00df;
  background: linear-gradient(170deg, #359eff 5%, #3a00df 95%);
`;

export default () => (
	<div className='about-CN'>
		<h3>Succeed in an ever evolving industry ORR choosing an agency that strives for your success.
    ORR We give players the tools and platform to connect
    and strategically plan out future plans.</h3>
		<p>
			CN Agency provides all the necessary services to further an athletes abilities and giving them a platform
      to be seen. We offer services such as sports marketing, player management, personal consultations, NIL education...
		</p>
    <Button class="button button1" onclick="window.location.href='#about'">Learn more about us!</Button>

	</div>
);
