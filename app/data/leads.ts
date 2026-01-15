interface person {
	image: string;
	role: string;
	name: string;
}

const captains = [
	{ image: '/eaglework.jpeg', name: 'Zoe Cheng' },
	{ image: '/eaglework.jpeg', name: 'Riya Mehrotra' },
];

const leads = [
	{ image: '/eaglework.jpeg', role: 'Scouting Lead', name: 'Edward Liu' },
	{ image: '/eaglework.jpeg', role: 'Cad Lead', name: 'Zoe Cheng' },
	{ image: '/eaglework.jpeg', role: 'Code Lead', name: 'Alan Chen' },
	{ image: '/eaglework.jpeg', role: 'CNC Lead', name: 'Phineas Lunt' },
	{ image: '/eaglework.jpeg', role: 'Prototyping Lead', name: 'Rodin Hooshiyar' },
	{ image: '/eaglework.jpeg', role: 'Machining Lead', name: 'Suren Oorzhak' },
	{ image: '/eaglework.jpeg', role: 'New Member Lead', name: 'Arush Garg' },
	{ image: '/eaglework.jpeg', role: 'Sponsorship Lead', name: 'Alyssa Fang' },
	{ image: '/eaglework.jpeg', role: 'Assembly Lead', name: 'Aaron Zhu' },
	{ image: '/eaglework.jpeg', role: 'Electrical Lead', name: 'Rayhan Merchant' },
];

export { captains, leads };
