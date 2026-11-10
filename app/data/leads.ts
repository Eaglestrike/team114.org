interface person {
	image: string;
	role: string;
	name: string;
}

const captains = [
	{ image_default: '/team_pics/leads/alan_normal.jpg', image_hover: '/team_pics/leads/alan_114.jpg', name: 'Alan Chen' },
	{ image_default: '/team_pics/leads/rayhan_normal.jpg', image_hover: '/team_pics/leads/rayhan_114.jpg', name: 'Rayhan Merchant' },
	{ image_default: '/team_pics/leads/riya_normal.jpg', image_hover: '/team_pics/leads/riya_114.jpg', name: 'Riya Mehrotra' }
];

const leads = [
	{ image_default: '/team_pics/leads/emma_normal.jpg', image_hover: '/team_pics/leads/emma_114.jpg', role: 'Scouting and Strategy Lead', name: 'Emma Lu' },
	{ image_default: '/team_pics/leads/theo_normal.jpg', image_hover: '/team_pics/leads/theo_114.jpg', role: 'Cad Lead', name: 'Theo Wolter' },
	{ image_default: '/team_pics/leads/maximus_normal.jpg', image_hover: '/team_pics/leads/maximus_114.jpg', role: 'Code Lead', name: 'Maximus Zhang' },
	{ image_default: '/eaglework.jpeg', role: 'CNC Lead', image_hover: '/eaglework.jpeg', name: 'Farhan Ali' },
	{ image_default: '/team_pics/leads/rodin_normal.jpg', image_hover: '/team_pics/leads/rodin_114.jpg', role: 'Prototyping Lead', name: 'Rodin Hooshiyar' },
	{ image_default: '/team_pics/leads/ayaan_normal.jpg', image_hover: '/team_pics/leads/ayaan_114.jpg', role: 'Machining Lead', name: 'Ayaan Dwivedi' },
	{ image_default: '/team_pics/leads/ananda_normal.jpg', image_hover: '/team_pics/leads/ananda_114.jpg', role: 'Business and Media Lead', name: 'Ananda Jauhar' },
	{ image_default: '/team_pics/leads/ricky_normal.jpg', image_hover: '/team_pics/leads/ricky_114.jpg', role: 'Assembly Lead', name: 'Ricky Zhao' },
	{ image_default: '/team_pics/leads/ishika_normal.jpg', image_hover: '/team_pics/leads/ishika_114.jpg', role: 'Electrical Lead', name: 'Ishika Anand' },
];

const mentors = [
	{ image_default: '/team_pics/mentors/mrhine_normal.jpg', image_hover: '/team_pics/mentors/mrhine_silly.jpg', name: 'Stephen Hine', description: 'Teacher at Los Altos High School since 2019<br>Teaches Robotics I and II<br>With the team since 2015' },
	{ image_default: '/team_pics/mentors/ryan_normal.jpg', image_hover: '/team_pics/mentors/ryan_silly.jpg', name: 'Ryan Cardono', description: 'Team 114 member in 2018<br>Mentor since 2021<br>Works at Tesla' },
	{ image_default: '/team_pics/mentors/douglas_normal.jpg', image_hover: '/team_pics/mentors/douglas_silly.jpg', name: 'Douglas McCluer', description: 'Mentor since 2023' },
	//{ image_default: '/eaglework.jpeg', image_hover: '/eaglework.jpeg', name: 'James Fry', description: 'james description' },
	{ image_default: '/team_pics/mentors/manildi_normal.jpg', image_hover: '/team_pics/mentors/manildi_silly.jpg', name: 'Joseph Manildi', description: 'Teacher at Los Altos High School<br>Teaches AP Environmental Science and Engineering<br>With the team since 2025' },
	{ image_default: '/team_pics/mentors/mrshine_normal.jpg', image_hover: '/team_pics/mentors/mrshine_silly.jpg', name: 'Kelsey Ayers', description: "Chaperone since 2025<br>Works at Standford Hospital as a physician's associate" }
]

export { captains, leads, mentors};
