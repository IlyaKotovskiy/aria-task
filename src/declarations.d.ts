type CSSModule = { [className: string]: string };

declare module '*.css' {
	const content: CSSModule;
	export default content;
}

declare module '*.scss' {
	const content: CSSModule;
	export default content;
}