<<<<<<< Updated upstream
function AppBarItem({ label, href }) {
	return (
		<li>
			<a href={`#${href}`}>{label}</a>
=======
function AppBarItem({ label, text }) {
	return (
		<li>
			<a href={`#${text}`}>{label}</a>
>>>>>>> Stashed changes
		</li>
	);
}

export default function AppBar() {
	return (
		<div>
			<ol className="app-bar">
				<AppBarItem label="Innstillingar" href={"innstillinger"} />
				<AppBarItem label="Mine Ingredienser" href={"hjem-skjerm"} />
				<AppBarItem label="Finn Oppskrifter" href={"oppskriftsliste"} />
			</ol>
		</div>
	);
}
