import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function LenisProvider({ children }) {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

	return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisProvider;
