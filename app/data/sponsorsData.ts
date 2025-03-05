interface Sponsor {
	name: string;
	logo: string;
	website: string;
}

const partners: Sponsor[] = [
	{
		name: 'Google',
		logo: 'google.png',
		website: 'https://www.google.com',
	},
	{
		name: 'Menlo Ventures',
		logo: 'menlo_ventures.png',
		website: 'https://www.menlovc.com',
	},
	// {
	// 	name: 'Bosch',
	// 	logo: 'bosch.png',
	// 	website: 'https://www.bosch.com',
	// },
	// {
	// 	name: 'Trivad',
	// 	logo: 'trivad.webp',
	// 	website: 'https://www.bosch.com',
	// },
	{
		name: 'Gene Haas Foundation',
		logo: 'gene_haas.png',
		website: 'https://www.haascnc.com/content/ghf/en/home.html',
	},
];

const goldSponsors: Sponsor[] = [
	// {
	// 	name: 'Lockheed Martin',
	// 	logo: 'lockheed.png',
	// 	website: 'https://www.lockheedmartin.com/en-us/index.html',
	// },
	// {
	// 	name: 'Abbott',
	// 	logo: 'abbott.png',
	// 	website: 'https://www.abbott.com/',
	// },
	// {
	// 	name: 'Super Micro',
	// 	logo: 'supermicro.png',
	// 	website: 'https://www.supermicro.com/en/',
	// },
	// {
	// 	name: 'Meta',
	// 	logo: 'meta.png',
	// 	website: 'https://www.meta.com',
	// },
];

const silverSponsors: Sponsor[] = [
	// {
	// 	name: 'Joyson Electronics',
	// 	logo: 'joyson.png',
	// 	website: 'https://www.joyson.cn/en/index.php',
	// },
];

const bronzeSponsors: Sponsor[] = [
	// {
	// 	name: 'Intuitive',
	// 	logo: 'intuitive.png',
	// 	website: 'https://www.intuitive.com/en-us',
	// },
	// {
	// 	name: 'PG&E',
	// 	logo: 'pge.webp',
	// 	website: 'https://www.pge.com/',
	// },
];

const inKindSponsors: Sponsor[] = [
	{
		name: 'Beam On',
		logo: 'beamon.png',
		website: 'http://www.beamon.com/',
	},
	// {
	// 	name: 'Advanced Welding',
	// 	logo: 'advancedwelding.png',
	// 	website: 'https://www.advancedwelding.info/',
	// },
	{
		name: 'SolidWorks',
		logo: 'solidworks.png',
		website: 'https://www.solidworks.com/',
	},
	// {
	// 	name: 'Sierra Precision',
	// 	logo: 'sierraprecision.png',
	// 	website: 'https://www.facebook.com/sierrap55/',
	// },
	{
		name: 'Hawk Ridge Systems',
		logo: 'HRS Original Color.png',
		website: 'https://hawkridgesys.com/',
	},
	// {
	// 	name: 'Bild',
	// 	logo: 'bild_logo.png',
	// 	website: 'https://getbild.com/',
	// },
];

export { partners, goldSponsors, silverSponsors, bronzeSponsors, inKindSponsors };
