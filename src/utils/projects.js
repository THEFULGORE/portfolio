import {
	SiAntdesign,
	SiReact,
	SiJavascript,
	SiSass,
	SiGithub,
	SiAiohttp,
	SiRedux,
	SiTypescript,
	SiChartdotjs,
	SiFirebase,
	SiNodedotjs,
	SiExpress,
	SiSequelize,
	SiPostgresql,
} from 'react-icons/si';
import { ReactComponent as Windivo } from '../assets/windivo.svg';
import { ReactComponent as Sorto } from '../assets/sorto.svg';
import { ReactComponent as Coinfluence } from '../assets/coinfluence.svg';
import { ReactComponent as Pintail } from '../assets/pintail.svg';
import { ReactComponent as Todoser } from '../assets/todoser.svg';
import { ReactComponent as Oudly } from '../assets/oudly.svg';

export const projects = [
	{
		svg: <Windivo />,
		gradient: 'linear-gradient(to right, #373b44, #4286f4)',
		stacks: [
			<SiAntdesign size={30} />,
			<SiReact size={30} />,
			<SiJavascript size={30} />,
			<SiSass size={30} />,
		],
		web: 'https://thefulgore.github.io/windivo/',
		github: 'https://github.com/THEFULGORE/windivo',
		description:
			'Windivo is a simple weather app that shows the current temperature in a city and makes a weekly forecast using the OpenWeather API',
	},
	{
		svg: <Oudly />,
		gradient: 'linear-gradient(0deg, #e47d38 0%, #FF2525 74%)',
		stacks: [
			<SiTypescript size={30} />,
			<SiReact size={30} />,
			<SiRedux size={30} />,
			<SiNodedotjs size={30} />,
			<SiExpress size={30} />,
			<SiPostgresql size={30} />,
		],
		github: 'https://github.com/THEFULGORE/Oudly',
		description: 'E-commerce website focused on wireless headphones',
	},
	{
		svg: <Sorto />,
		gradient: 'linear-gradient(90deg,#0f0c29,#302b63,#24243e)',
		stacks: [
			<SiJavascript size={30} />,
			<SiReact size={30} />,
			<SiRedux size={30} />,
			<SiSass size={30} />,
		],
		web: 'https://thefulgore.github.io/Sorto/',
		github: 'https://github.com/THEFULGORE/Sorto/',
		description:
			'Sorto is a single page application that visualizes the most popular array sorting algorithms',
	},
	{
		svg: <Coinfluence />,
		gradient: 'linear-gradient(90deg, #ffd60a 0%, #f78d1c 100%)',
		stacks: [
			<SiTypescript size={30} />,
			<SiReact size={30} />,
			<SiRedux size={30} />,
			<SiChartdotjs size={30} />,
			<SiSass size={30} />,
		],
		web: 'https://thefulgore.github.io/coinfluence/',
		github: 'https://github.com/THEFULGORE/coinfluence',
		description:
			'News website showing the price of cryptocurrencies and their history, as well as all the latest news online',
	},
	{
		svg: <Pintail />,
		gradient: 'linear-gradient(45deg, #009040 0%, #c7d064 100%)',
		stacks: [<SiReact size={30} />, <SiJavascript size={30} />, <SiSass size={30} />],
		web: 'https://thefulgore.github.io/Pintail/',
		github: 'https://github.com/THEFULGORE/Pintail',
		description:
			'Single page application for drawing sketches and shapes with various settings using perfect-freehand and rough.js',
	},
	{
		svg: <Todoser />,
		gradient: 'linear-gradient(225deg, #d121fd 0%, #622fd9 100%)',
		stacks: [
			<SiJavascript size={30} />,
			<SiReact size={30} />,
			<SiRedux size={30} />,
			<SiFirebase size={30} />,
			<SiSass size={30} />,
		],
		github: 'https://github.com/THEFULGORE/Todoser',
		description:
			'First pet-project, simple to-do app with authentication and data storage using Firebase',
	},
];
