import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { useEffect, useRef } from 'react'

export const App = () => {
	const htmlRef = useRef<HTMLHtmlElement>(null)

	useEffect(() => {
		if (htmlRef.current) htmlRef.current.classList.add('hydrated')
	}, [])

	return (
		<html ref={htmlRef} lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

export default App
