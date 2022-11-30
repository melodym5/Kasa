import AboutBanner from "../components/AboutBanner/AboutBanner";
import Collapse from "../components/Collapse/Collapse";
// Création fichier JSON avec données des collapses
import aboutArray from "../datas/aboutArray.json"; 

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}