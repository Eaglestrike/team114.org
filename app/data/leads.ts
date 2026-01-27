interface person {
	image: string;
	role: string;
	name: string;
}

const captains = [
	{ image: '/team_pics/leads/Riya.jpg', name: 'Riya Mehrotra' },
	{ image: '/team_pics/leads/Zoe.jpg', name: 'Zoe Cheng' },
];

const leads = [
	{ image: '/team_pics/leads/Edward.jpg', role: 'Scouting Lead', name: 'Edward Liu' },
	{ image: '/team_pics/leads/Zoe.jpg', role: 'Cad Lead', name: 'Zoe Cheng' },
	{ image: '/team_pics/leads/Alan.jpg', role: 'Code Lead', name: 'Alan Chen' },
	{ image: '/team_pics/leads/Phin.jpg', role: 'CNC Lead', name: 'Phineas Lunt' },
	{ image: '/eaglework.jpeg', role: 'Prototyping Lead', name: 'Rodin Hooshiyar' },
	{ image: '/team_pics/leads/Suren.jpg', role: 'Machining Lead', name: 'Suren Oorzhak' },
	{ image: '/team_pics/leads/Arush copy.jpg', role: 'New Member Lead', name: 'Arush Garg' },
	{ image: '/team_pics/leads/Alyssa.jpg', role: 'Sponsorship Lead', name: 'Alyssa Fang' },
	{ image: '/team_pics/leads/Aaron.jpg', role: 'Assembly Lead', name: 'Aaron Zhu' },
	{ image: '/team_pics/leads/Rayhan.jpg', role: 'Electrical Lead', name: 'Rayhan Merchant' },
];

const mentors = [
	{ image: '/eaglework.jpeg', name: 'James Fry' },
	{ image: '/team_pics/ryan.jpeg', name: 'Ryan Cardono' },
	{ image: '/team_pics/douglas.jpeg', name: 'Douglas McCluer' },

]

export { captains, leads, mentors};
