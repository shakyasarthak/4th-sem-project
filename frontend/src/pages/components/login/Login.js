import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import x from '/src/styles/Login.module.css';
const Login = () => {
  return (
    <div class={x.container}>
	<div class={x.screen}>
		<div class={x.screen__content}>
			<form class={x.login}>
				<div class={x.login__field}>
					<i id={x.login__icon} class="fas fa-user"></i>
					<input type="text" class={x.login__input} placeholder="User name / Email"/>
				</div>
				<div class={x.login__field}>
					<i id={x.login__icon} class="fas fa-lock"></i>
					<input type="password" class={x.login__input} placeholder="Password"/>
				</div>
				<button class={x.login__submit}>
					<span class={x.button__text}>Log In Now</span>
					<FontAwesomeIcon class={x.login__icon} icon="fa-solid fa-user" />
				</button>				
			</form>
			
		</div>
		<div class="screen__background">
			<span id={x.screen__background__shape} class={x.screen__background__shape4}></span>
			<span id={x.screen__background__shape} class={x.screen__background__shape3}></span>		
			<span id={x.screen__background__shape} class={x.screen__background__shape2}></span>
			<span id={x.screen__background__shape} class={x.screen__background__shape1}></span>
		</div>		
	</div>
</div>
  )
}

export default Login
