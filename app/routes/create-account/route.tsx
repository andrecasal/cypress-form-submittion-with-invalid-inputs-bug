import { json } from "@remix-run/node"

const Register = () => {
	return (
		<form method="post">
			<label>Email <input name="email" type="email" required /></label>
			<label>Password <input name="password" type="password" required minLength={8} /></label>
			<button type="submit">Criar conta</button>
		</form>
	)
}

export default Register

export const action = async () => json({ message: 'Account created'})
