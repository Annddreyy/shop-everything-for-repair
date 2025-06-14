type Status = "хит" | "новинка" | "распродажа";

export interface ProductCard {
	id: number;
	title: string;
	price: number;
	promotionPercent: number;
	img: string;
	article: string;
	statuses: Status[];
}

export interface NewsCard {
	id: number;
	img: string;
	title: string;
	description: string;
	date: Date;
}

export interface PromotionCard {
	id: number;
	title: string;
	promotionPercent: number;
	backgroundImg: string;
}

export interface DB {
	products: ProductCard[];
	news: NewsCard[];
	promotions: PromotionCard[];
}

export const db: DB = {
	products: [
		{
			id: 1,
			title: "Перфоратор Bosch GBH 2-28 F",
			price: 12000,
			promotionPercent: 12,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "XJ390254",
			statuses: ["хит", "новинка"],
		},
		{
			id: 2,
			title: "Дрель-шуруповерт Makita DDF483Z",
			price: 8500,
			promotionPercent: 15,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			article: "MK485621",
			statuses: ["хит", "распродажа"],
		},
		{
			id: 3,
			title: "Болгарка DeWalt DWE4157",
			price: 6800,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "DW789423",
			statuses: ["новинка"],
		},
		{
			id: 4,
			title: "Электролобзик Bosch PST 900 PEL",
			price: 4200,
			promotionPercent: 8,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "BS901234",
			statuses: [],
		},
		{
			id: 5,
			title: "Циркулярная пила Makita HS7601",
			price: 9200,
			promotionPercent: 10,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			article: "MK756012",
			statuses: ["хит"],
		},
		{
			id: 6,
			title: "Фрезер Bosch GOF 1600 CE",
			price: 15400,
			promotionPercent: 18,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "BS160034",
			statuses: ["хит", "новинка"],
		},
		{
			id: 7,
			title: "Отбойный молоток Makita HM1317C",
			price: 28000,
			promotionPercent: 5,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "MK131745",
			statuses: [],
		},
		{
			id: 8,
			title: "Шлифмachine Bosch GEX 150 AC",
			price: 7800,
			promotionPercent: 12,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "BS150987",
			statuses: ["новинка"],
		},
		{
			id: 9,
			title: "Паяльник Weller WES51",
			price: 3400,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			article: "WL051234",
			statuses: [],
		},
		{
			id: 10,
			title: "Компрессор Einhell TC-AC 420/50/10",
			price: 18500,
			promotionPercent: 20,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			article: "EH420501",
			statuses: ["хит"],
		},
		{
			id: 11,
			title: "Сварочный аппарат ESAB Buddy Arc 180",
			price: 22000,
			promotionPercent: 15,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			article: "ES180567",
			statuses: ["хит", "новинка"],
		},
		{
			id: 12,
			title: "Мультитул Dremel 3000",
			price: 5600,
			promotionPercent: 7,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "DR300045",
			statuses: [],
		},
		{
			id: 13,
			title: "Рубанок DeWalt DCP580N",
			price: 11200,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "DW580234",
			statuses: ["новинка"],
		},
		{
			id: 14,
			title: "Лазерный уровень Bosch GLL 3-80",
			price: 16800,
			promotionPercent: 25,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			article: "BS380789",
			statuses: ["хит"],
		},
		{
			id: 15,
			title: "Пистолет для герметика Stanley STHT0-05927",
			price: 1200,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "ST059271",
			statuses: [],
		},
		{
			id: 16,
			title: "Торцовочная пила Makita LS1018L",
			price: 32000,
			promotionPercent: 18,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "MK101834",
			statuses: ["хит", "новинка"],
		},
		{
			id: 17,
			title: "Аккумуляторная дрель Bosch GSR 18V-28",
			price: 7200,
			promotionPercent: 10,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "BS182845",
			statuses: [],
		},
		{
			id: 18,
			title: "Гравер Proxxon FBS 240/E",
			price: 8900,
			promotionPercent: 5,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			article: "PX240123",
			statuses: ["новинка"],
		},
		{
			id: 19,
			title: "Строительный фен Makita HG6031VK",
			price: 4800,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "MK603156",
			statuses: [],
		},
		{
			id: 20,
			title: "Степлер электрический Bosch PTK 14 EDT",
			price: 3200,
			promotionPercent: 12,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			article: "BS140987",
			statuses: ["хит"],
		},
		{
			id: 21,
			title: "Миксер строительный DeWalt DCD240X2",
			price: 19500,
			promotionPercent: 8,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "DW240567",
			statuses: [],
		},
		{
			id: 22,
			title: "Полировальная машина Makita 9237CB",
			price: 13400,
			promotionPercent: 15,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			article: "MK923789",
			statuses: ["новинка"],
		},
		{
			id: 23,
			title: "Краскопульт WAGNER W 550",
			price: 6400,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			article: "WG550234",
			statuses: [],
		},
		{
			id: 24,
			title: "Перфоратор Hilti TE 6-A36",
			price: 45000,
			promotionPercent: 20,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "HT636901",
			statuses: ["хит", "новинка"],
		},
		{
			id: 25,
			title: "Штроборез Makita SG1251J",
			price: 24000,
			promotionPercent: 10,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "MK125145",
			statuses: ["хит"],
		},
		{
			id: 26,
			title: "Измеритель влажности Testo 606-2",
			price: 8200,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			article: "TS606234",
			statuses: [],
		},
		{
			id: 27,
			title: "Пылесос строительный Karcher WD 3",
			price: 5800,
			promotionPercent: 12,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			article: "KR300567",
			statuses: ["новинка"],
		},
		{
			id: 28,
			title: "Клеевой пистолет Bosch GKP 200 CE",
			price: 2800,
			promotionPercent: 0,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			article: "BS200789",
			statuses: [],
		},
		{
			id: 29,
			title: "Ленточная шлифмachine Makita 9903",
			price: 12800,
			promotionPercent: 18,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			article: "MK990345",
			statuses: ["хит"],
		},
		{
			id: 30,
			title: "Точило Einhell TC-WD 150/200",
			price: 4200,
			promotionPercent: 5,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			article: "EH150234",
			statuses: [],
		},
	],

	news: [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Новые технологии в строительстве: революция 2025 года",
			description:
				"Обзор самых инновационных решений в области строительных технологий, которые изменят отрасль в ближайшие годы.",
			date: new Date("2024-12-15"),
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Bosch представляет новую линейку электроинструментов",
			description:
				"Немецкий производитель анонсировал выпуск усовершенствованных перфораторов и дрелей с увеличенным временем работы.",
			date: new Date("2024-12-14"),
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Экологичные материалы в строительстве набирают популярность",
			description:
				"Все больше застройщиков выбирают экологически чистые материалы для своих проектов.",
			date: new Date("2024-12-13"),
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Цены на строительные материалы стабилизировались",
			description:
				"Аналитики отмечают снижение волатильности цен на основные строительные материалы в конце года.",
			date: new Date("2024-12-12"),
		},
		{
			id: 5,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Makita расширяет линейку аккумуляторных инструментов",
			description:
				"Японский бренд представил новые модели с улучшенными литий-ионными батареями.",
			date: new Date("2024-12-11"),
		},
		{
			id: 6,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Умные дома: тенденции и перспективы развития",
			description:
				"Как технологии IoT меняют подход к проектированию и строительству жилых домов.",
			date: new Date("2024-12-10"),
		},
		{
			id: 7,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Безопасность на стройке: новые требования и стандарты",
			description:
				"Обновленные правила техники безопасности вступят в силу с начала 2025 года.",
			date: new Date("2024-12-09"),
		},
		{
			id: 8,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "DeWalt запускает программу обмена старых инструментов",
			description:
				"Покупатели смогут сдать старые инструменты и получить скидку на новые модели.",
			date: new Date("2024-12-08"),
		},
		{
			id: 9,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "3D-печать в строительстве: первые успешные проекты",
			description:
				"Обзор домов, построенных с использованием технологии 3D-печати бетоном.",
			date: new Date("2024-12-07"),
		},
		{
			id: 10,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Энергоэффективность зданий: новые решения для экономии",
			description:
				"Современные технологии помогают снизить энергопотребление зданий на 40%.",
			date: new Date("2024-12-06"),
		},
		{
			id: 11,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Hilti представляет инновационные крепежные системы",
			description:
				"Новые анкеры и крепежи обеспечивают повышенную надежность конструкций.",
			date: new Date("2024-12-05"),
		},
		{
			id: 12,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Робототехника в строительстве: будущее уже здесь",
			description:
				"Строительные роботы начинают активно использоваться на объектах по всему миру.",
			date: new Date("2024-12-04"),
		},
		{
			id: 13,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Лазерные технологии в строительстве и ремонте",
			description:
				"Лазерные уровни и дальномеры становятся незаменимыми инструментами профессионалов.",
			date: new Date("2024-12-03"),
		},
		{
			id: 14,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Сварочные технологии: от традиций к инновациям",
			description:
				"Современные сварочные аппараты с цифровым управлением повышают качество швов.",
			date: new Date("2024-12-02"),
		},
		{
			id: 15,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Измерительные приборы нового поколения",
			description:
				"Цифровые измерители влажности и другие приборы с Bluetooth-подключением.",
			date: new Date("2024-12-01"),
		},
		{
			id: 16,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Компрессоры для профессионального использования",
			description:
				"Обзор промышленных компрессоров с улучшенными характеристиками производительности.",
			date: new Date("2024-11-30"),
		},
		{
			id: 17,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Пневматические инструменты: преимущества и применение",
			description:
				"Почему пневмоинструменты остаются востребованными в профессиональной сфере.",
			date: new Date("2024-11-29"),
		},
		{
			id: 18,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Шлифовальные машины: выбор профессионалов",
			description:
				"Сравнение различных типов шлифмашин для разных видов работ.",
			date: new Date("2024-11-28"),
		},
		{
			id: 19,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Покрасочные работы: новые технологии и материалы",
			description:
				"Современные краскопульты и экологичные лакокрасочные материалы.",
			date: new Date("2024-11-27"),
		},
		{
			id: 20,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Циркулярные пилы: точность и производительность",
			description:
				"Новые модели циркулярок с улучшенными системами безопасности.",
			date: new Date("2024-11-26"),
		},
		{
			id: 21,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Электролобзики для точных работ",
			description:
				"Как выбрать лобзик для различных материалов и типов распила.",
			date: new Date("2024-11-25"),
		},
		{
			id: 22,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Фрезерные станки в деревообработке",
			description:
				"Профессиональные фрезеры для создания сложных деревянных изделий.",
			date: new Date("2024-11-24"),
		},
		{
			id: 23,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Отбойные молотки: мощность и надежность",
			description:
				"Тяжелые отбойные молотки для демонтажных работ больших объемов.",
			date: new Date("2024-11-23"),
		},
		{
			id: 24,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Мультитулы: универсальность в одном инструменте",
			description:
				"Многофункциональные инструменты для домашних мастеров и профессионалов.",
			date: new Date("2024-11-22"),
		},
		{
			id: 25,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Рубанки: традиции столярного мастерства",
			description:
				"Электрические рубанки для быстрой и качественной обработки древесины.",
			date: new Date("2024-11-21"),
		},
		{
			id: 26,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Торцовочные пилы для точных распилов",
			description:
				"Профессиональные торцовки с лазерными указателями реза.",
			date: new Date("2024-11-20"),
		},
		{
			id: 27,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Аккумуляторные технологии в электроинструментах",
			description:
				"Литий-ионные батареи нового поколения с быстрой зарядкой.",
			date: new Date("2024-11-19"),
		},
		{
			id: 28,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Граверы для художественных и технических работ",
			description:
				"Точные инструменты для гравировки по металлу, дереву и пластику.",
			date: new Date("2024-11-18"),
		},
		{
			id: 29,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Строительные фены: применение и возможности",
			description:
				"Термофены для снятия краски, сушки и формовки материалов.",
			date: new Date("2024-11-17"),
		},
		{
			id: 30,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Степлеры: от бумаги до строительства",
			description:
				"Электрические и пневматические степлеры для различных задач.",
			date: new Date("2024-11-16"),
		},
		{
			id: 31,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Строительные миксеры для тяжелых растворов",
			description:
				"Мощные миксеры для замешивания бетона и строительных смесей.",
			date: new Date("2024-11-15"),
		},
		{
			id: 32,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Полировальные машины для автомобилей",
			description:
				"Профессиональные полировщики для восстановления лакокрасочного покрытия.",
			date: new Date("2024-11-14"),
		},
		{
			id: 33,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Штроборезы для электромонтажных работ",
			description:
				"Специализированные инструменты для прокладки кабелей в стенах.",
			date: new Date("2024-11-13"),
		},
		{
			id: 34,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Строительные пылесосы: чистота на объекте",
			description:
				"Промышленные пылесосы для уборки строительного мусора и пыли.",
			date: new Date("2024-11-12"),
		},
		{
			id: 35,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Клеевые пистолеты в современном строительстве",
			description:
				"Термоклеевые пистолеты для быстрого и надежного соединения материалов.",
			date: new Date("2024-11-11"),
		},
		{
			id: 36,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Ленточные шлифмашины для больших поверхностей",
			description:
				"Мощные ленточные шлифовальные машины для обработки крупных деталей.",
			date: new Date("2024-11-10"),
		},
		{
			id: 37,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Точильные станки: заточка инструментов",
			description:
				"Настольные точила для поддержания остроты режущих инструментов.",
			date: new Date("2024-11-09"),
		},
		{
			id: 38,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Система быстрой смены насадок для электроинструментов",
			description:
				"Универсальные патроны и системы крепления насадок экономят время работы.",
			date: new Date("2024-11-08"),
		},
		{
			id: 39,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Защитное оборудование для работы с инструментами",
			description:
				"Современные средства индивидуальной защиты при работе с электроинструментами.",
			date: new Date("2024-11-07"),
		},
		{
			id: 40,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Беспроводные технологии в измерительных приборах",
			description:
				"Лазерные дальномеры и уровни с передачей данных на смартфон.",
			date: new Date("2024-11-06"),
		},
		{
			id: 41,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Системы пылеудаления для электроинструментов",
			description:
				"Встроенные системы аспирации улучшают условия работы и видимость.",
			date: new Date("2024-11-05"),
		},
		{
			id: 42,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Модульные системы хранения инструментов",
			description:
				"Организация рабочего места с помощью систем хранения и транспортировки.",
			date: new Date("2024-11-04"),
		},
		{
			id: 43,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Эргономика современных электроинструментов",
			description:
				"Как дизайн инструментов влияет на производительность и здоровье работника.",
			date: new Date("2024-11-03"),
		},
		{
			id: 44,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Диагностика и ремонт электроинструментов",
			description:
				"Основные неисправности и способы их устранения своими силами.",
			date: new Date("2024-11-02"),
		},
		{
			id: 45,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Выбор расходных материалов для электроинструментов",
			description:
				"Как правильно подобрать диски, сверла и другие расходники.",
			date: new Date("2024-11-01"),
		},
		{
			id: 46,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Сезонное обслуживание строительной техники",
			description:
				"Подготовка инструментов к зимнему и летнему периодам эксплуатации.",
			date: new Date("2024-10-31"),
		},
		{
			id: 47,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Профессиональные советы по работе с перфораторами",
			description:
				"Техники бурения различных материалов и продление срока службы инструмента.",
			date: new Date("2024-10-30"),
		},
		{
			id: 48,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Работа болгаркой: безопасность превыше всего",
			description:
				"Правила безопасной работы с угловыми шлифовальными машинами.",
			date: new Date("2024-10-29"),
		},
		{
			id: 49,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Сварочные работы в условиях низких температур",
			description:
				"Особенности сварки на открытом воздухе в зимний период.",
			date: new Date("2024-10-28"),
		},
		{
			id: 50,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Паяльные станции для профессиональной электроники",
			description:
				"Выбор паяльного оборудования для ремонта сложной техники.",
			date: new Date("2024-10-27"),
		},
		{
			id: 51,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Компрессорное оборудование: выбор и эксплуатация",
			description:
				"Руководство по выбору компрессора для различных задач и его обслуживанию.",
			date: new Date("2024-10-26"),
		},
		{
			id: 52,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Мобильные мастерские: оборудование и организация",
			description:
				"Как организовать передвижную мастерскую для выездных работ.",
			date: new Date("2024-10-25"),
		},
		{
			id: 53,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Лазерная гравировка: новые возможности для бизнеса",
			description:
				"Применение лазерных граверов в малом бизнесе и творчестве.",
			date: new Date("2024-10-24"),
		},
		{
			id: 54,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Термообработка материалов строительными фенами",
			description:
				"Применение термофенов для формовки пластиков и других материалов.",
			date: new Date("2024-10-23"),
		},
		{
			id: 55,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Автоматизация строительных процессов",
			description:
				"Роботизированные системы в современном строительстве.",
			date: new Date("2024-10-22"),
		},
		{
			id: 56,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Степлеры и гвоздезабивные пистолеты: сравнение",
			description:
				"Выбор между различными типами крепежного инструмента.",
			date: new Date("2024-10-21"),
		},
		{
			id: 57,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Миксеры для строительных растворов: мощность и надежность",
			description:
				"Профессиональные миксеры для работы с тяжелыми смесями.",
			date: new Date("2024-10-20"),
		},
		{
			id: 58,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Полировка автомобилей: техника и инструменты",
			description:
				"Профессиональные секреты полировки кузова автомобиля.",
			date: new Date("2024-10-19"),
		},
		{
			id: 59,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Покрасочные камеры и оборудование для СТО",
			description:
				"Современное оснащение покрасочных участков автосервисов.",
			date: new Date("2024-10-18"),
		},
		{
			id: 60,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Штроборезы: выбор профессионалов-электриков",
			description:
				"Сравнение различных моделей штроборезов для электромонтажа.",
			date: new Date("2024-10-17"),
		},
		{
			id: 61,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Измерители влажности в строительстве",
			description:
				"Контроль влажности материалов на всех этапах строительства.",
			date: new Date("2024-10-16"),
		},
		{
			id: 62,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Промышленные пылесосы: класс и применение",
			description:
				"Различные классы строительных пылесосов и их назначение.",
			date: new Date("2024-10-15"),
		},
		{
			id: 63,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Термоклеи и клеевые пистолеты в производстве",
			description: "Применение термоклеевых систем в промышленности.",
			date: new Date("2024-10-14"),
		},
		{
			id: 64,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Ленточные шлифмашины: техника работы",
			description:
				"Правильные приемы работы с ленточными шлифовальными машинами.",
			date: new Date("2024-10-13"),
		},
		{
			id: 65,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Заточка инструментов на точильных станках",
			description:
				"Основы правильной заточки различных режущих инструментов.",
			date: new Date("2024-10-12"),
		},
		{
			id: 66,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Инновации в области крепежных систем",
			description:
				"Новые технологии крепления для сложных конструкций и экстремальных условий.",
			date: new Date("2024-10-11"),
		},
		{
			id: 67,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Цифровые технологии в управлении стройкой",
			description:
				"BIM-технологии и цифровое планирование строительных проектов.",
			date: new Date("2024-10-10"),
		},
		{
			id: 68,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Аренда строительного оборудования: тренды рынка",
			description:
				"Растущая популярность аренды инструментов среди малого бизнеса.",
			date: new Date("2024-10-09"),
		},
		{
			id: 69,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Системы безопасности на высотных работах",
			description:
				"Современные страховочные системы и средства защиты от падения.",
			date: new Date("2024-10-08"),
		},
		{
			id: 70,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Сварка алюминия: особенности и оборудование",
			description:
				"Специализированные сварочные аппараты для работы с алюминиевыми сплавами.",
			date: new Date("2024-10-07"),
		},
		{
			id: 71,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Микропайка: точность и надежность",
			description:
				"Современные паяльные станции для работы с микроэлектроникой.",
			date: new Date("2024-10-06"),
		},
		{
			id: 72,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Винтовые компрессоры в промышленности",
			description:
				"Преимущества винтовых компрессоров для непрерывного производства.",
			date: new Date("2024-10-05"),
		},
		{
			id: 73,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Мобильные генераторы для стройплощадок",
			description: "Автономное электроснабжение строительных объектов.",
			date: new Date("2024-10-04"),
		},
		{
			id: 74,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Лазерные граверы в ювелирном деле",
			description: "Точная гравировка драгоценных металлов и камней.",
			date: new Date("2024-10-03"),
		},
		{
			id: 75,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Термофены в автомобильной промышленности",
			description:
				"Применение строительных фенов в автосервисе и производстве.",
			date: new Date("2024-10-02"),
		},
		{
			id: 76,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Автоматические степлеры в мебельном производстве",
			description: "Повышение производительности мебельных фабрик.",
			date: new Date("2024-10-01"),
		},
		{
			id: 77,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Планетарные миксеры для специальных смесей",
			description:
				"Оборудование для приготовления высокотехнологичных строительных составов.",
			date: new Date("2024-09-30"),
		},
		{
			id: 78,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Полировка природного камня",
			description:
				"Специализированное оборудование для обработки мрамора и гранита.",
			date: new Date("2024-09-29"),
		},
		{
			id: 79,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Аэрографы и краскопульты высокого давления",
			description:
				"Профессиональное покрасочное оборудование для качественной отделки.",
			date: new Date("2024-09-28"),
		},
		{
			id: 80,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Алмазные штроборезы для железобетона",
			description:
				"Мощные штроборезы для работы с армированными конструкциями.",
			date: new Date("2024-09-27"),
		},
		{
			id: 81,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Цифровые влагомеры нового поколения",
			description:
				"Беспроводные измерители влажности с облачным хранением данных.",
			date: new Date("2024-09-26"),
		},
		{
			id: 82,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Пылесосы с автоматической очисткой фильтров",
			description:
				"Инновационные системы самоочистки в промышленных пылесосах.",
			date: new Date("2024-09-25"),
		},
		{
			id: 83,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Клеевые системы для экстремальных температур",
			description:
				"Термоклеи для работы в условиях высоких и низких температур.",
			date: new Date("2024-09-24"),
		},
		{
			id: 84,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Широколенточные шлифмашины",
			description:
				"Профессиональное оборудование для обработки больших поверхностей.",
			date: new Date("2024-09-23"),
		},
		{
			id: 85,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Алмазные круги для точильных станков",
			description:
				"Высокопрецизионная заточка твердосплавных инструментов.",
			date: new Date("2024-09-22"),
		},
		{
			id: 86,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Экологические стандарты в строительстве",
			description:
				"Новые требования к экологической безопасности строительных материалов.",
			date: new Date("2024-09-21"),
		},
		{
			id: 87,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Интеллектуальные системы мониторинга стройки",
			description:
				"IoT-датчики для контроля параметров строительного процесса.",
			date: new Date("2024-09-20"),
		},
		{
			id: 88,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Лизинг строительного оборудования",
			description:
				"Финансовые инструменты для приобретения дорогостоящей техники.",
			date: new Date("2024-09-19"),
		},
		{
			id: 89,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Виртуальная реальность в обучении строителей",
			description:
				"VR-технологии для безопасного обучения работе с инструментами.",
			date: new Date("2024-09-18"),
		},
		{
			id: 90,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Дополненная реальность в строительстве",
			description:
				"AR-приложения для визуализации проектов на стройплощадке.",
			date: new Date("2024-09-17"),
		},
		{
			id: 91,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Плазменная резка: принципы и применение",
			description:
				"Современные плазменные резаки для точной обработки металла.",
			date: new Date("2024-09-16"),
		},
		{
			id: 92,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Индукционные паяльники для профессионалов",
			description:
				"Быстрый нагрев и точный контроль температуры при пайке.",
			date: new Date("2024-09-15"),
		},
		{
			id: 93,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Поршневые компрессоры: классика надежности",
			description:
				"Проверенные временем поршневые компрессоры для различных задач.",
			date: new Date("2024-09-14"),
		},
		{
			id: 94,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Портативные электростанции для удаленных объектов",
			description:
				"Компактные генераторы для работы в местах без электричества.",
			date: new Date("2024-09-13"),
		},
		{
			id: 95,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Волоконные лазеры в промышленной гравировке",
			description:
				"Высокоточные лазерные системы для маркировки металлических изделий.",
			date: new Date("2024-09-12"),
		},
		{
			id: 96,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Инфракрасные термофены в электронике",
			description:
				"Бесконтактный нагрев для демонтажа электронных компонентов.",
			date: new Date("2024-09-11"),
		},
		{
			id: 97,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Пневматические степлеры для упаковки",
			description:
				"Высокопроизводительные степлеры для упаковочной индустрии.",
			date: new Date("2024-09-10"),
		},
		{
			id: 98,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Двухшпиндельные миксеры для однородности смеси",
			description:
				"Профессиональные миксеры с противовращающимися спиралями.",
			date: new Date("2024-09-09"),
		},
		{
			id: 99,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Орбитальные полировальные машины",
			description: "Деликатная полировка без рисок и голограмм.",
			date: new Date("2024-09-08"),
		},
		{
			id: 100,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Безвоздушные краскопульты для больших объемов",
			description:
				"Высокопроизводительные системы окраски для промышленных объектов.",
			date: new Date("2024-09-07"),
		},
		{
			id: 101,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Канальные штроборезы для скрытой проводки",
			description:
				"Специализированные инструменты для прокладки коммуникаций в стенах.",
			date: new Date("2024-09-06"),
		},
		{
			id: 102,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Беспроводные влагомеры с GPS",
			description:
				"Геопозиционирование точек измерения влажности на объекте.",
			date: new Date("2024-09-05"),
		},
		{
			id: 103,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Циклонные пылесосы для мелкодисперсной пыли",
			description:
				"Эффективная очистка воздуха от строительной пыли и мусора.",
			date: new Date("2024-09-04"),
		},
		{
			id: 104,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Структурные клеи и клеевые пистолеты",
			description:
				"Высокопрочные клеевые соединения для ответственных конструкций.",
			date: new Date("2024-09-03"),
		},
		{
			id: 105,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Гусеничные ленточные шлифмашины",
			description:
				"Мощные шлифовальные машины для работы с твердыми материалами.",
			date: new Date("2024-09-02"),
		},
		{
			id: 106,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Многоугловые точильные системы",
			description:
				"Универсальные заточные станки для различных типов инструментов.",
			date: new Date("2024-09-01"),
		},
		{
			id: 107,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Модульные строительные технологии",
			description:
				"Предварительно изготовленные модули ускоряют строительство.",
			date: new Date("2024-08-31"),
		},
		{
			id: 108,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Блокчейн в управлении поставками стройматериалов",
			description:
				"Технология распределенного реестра для прозрачности цепочек поставок.",
			date: new Date("2024-08-30"),
		},
		{
			id: 109,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Краудфандинг в строительной индустрии",
			description: "Новые способы финансирования строительных проектов.",
			date: new Date("2024-08-29"),
		},
		{
			id: 110,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Дроны в строительном мониторинге",
			description:
				"Беспилотные летательные аппараты для контроля хода строительства.",
			date: new Date("2024-08-28"),
		},
		{
			id: 111,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Искусственный интеллект в планировании стройки",
			description: "ИИ-алгоритмы для оптимизации строительных процессов.",
			date: new Date("2024-08-27"),
		},
		{
			id: 112,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Газовая сварка: возвращение классики",
			description:
				"Современные газовые горелки для художественной обработки металла.",
			date: new Date("2024-08-26"),
		},
		{
			id: 113,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Беспроводные паяльники на батареях",
			description: "Портативные паяльники для работы в полевых условиях.",
			date: new Date("2024-08-25"),
		},
		{
			id: 114,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Масляные компрессоры повышенной надежности",
			description: "Долговечные компрессоры для непрерывной работы.",
			date: new Date("2024-08-24"),
		},
		{
			id: 115,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Солнечные батареи для строительной техники",
			description:
				"Экологичные источники питания для портативного оборудования.",
			date: new Date("2024-08-23"),
		},
		{
			id: 116,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "CO2-лазеры в деревообработке",
			description: "Точная резка и гравировка изделий из дерева лазером.",
			date: new Date("2024-08-22"),
		},
		{
			id: 117,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Керамические нагреватели в термофенах",
			description:
				"Долговечные нагревательные элементы нового поколения.",
			date: new Date("2024-08-21"),
		},
		{
			id: 118,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Магазинные степлеры большой емкости",
			description:
				"Степлеры с увеличенным объемом для непрерывной работы.",
			date: new Date("2024-08-20"),
		},
		{
			id: 119,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Турбинные миксеры для жидких составов",
			description:
				"Высокоскоростные миксеры для красок и жидких строительных смесей.",
			date: new Date("2024-08-19"),
		},
		{
			id: 120,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Эксцентриковые полировальные машины",
			description:
				"Комбинированное движение для идеальной обработки поверхностей.",
			date: new Date("2024-08-18"),
		},
		{
			id: 121,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Электростатические краскопульты",
			description:
				"Повышенная эффективность нанесения краски благодаря электростатике.",
			date: new Date("2024-08-17"),
		},
		{
			id: 122,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Алмазные диски для штроборезов",
			description:
				"Высокопроизводительные диски для резки бетона и кирпича.",
			date: new Date("2024-08-16"),
		},
		{
			id: 123,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Тепловизионные влагомеры",
			description:
				"Визуализация скрытых источников влаги в конструкциях.",
			date: new Date("2024-08-15"),
		},
		{
			id: 124,
			img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=500&fit=crop",
			title: "Сепараторы пыли для промышленных пылесосов",
			description: "Предварительная очистка воздуха от крупных частиц.",
			date: new Date("2024-08-14"),
		},
		{
			id: 125,
			img: "https://images.unsplash.com/photo-1609962851080-1334b11d1b01?w=500&h=500&fit=crop",
			title: "Полиуретановые клеи и дозаторы",
			description: "Прочные и эластичные клеевые соединения.",
			date: new Date("2024-08-13"),
		},
		{
			id: 126,
			img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=500&fit=crop",
			title: "Барабанные ленточные шлифмашины",
			description: "Профессиональные шлифмашины для паркетных работ.",
			date: new Date("2024-08-12"),
		},
		{
			id: 127,
			img: "https://images.unsplash.com/photo-1581092918484-8313ef4e8c34?w=500&h=500&fit=crop",
			title: "Водяное охлаждение для точильных станков",
			description: "Предотвращение перегрева при заточке инструментов.",
			date: new Date("2024-08-11"),
		},
		{
			id: 128,
			img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
			title: "Цифровая трансформация строительства",
			description:
				"Внедрение цифровых технологий меняет отрасль кардинально.",
			date: new Date("2024-08-10"),
		},
		{
			id: 129,
			img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
			title: "Машинное обучение в прогнозировании износа",
			description:
				"Предиктивная аналитика для планового обслуживания инструментов.",
			date: new Date("2024-08-09"),
		},
		{
			id: 130,
			img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
			title: "Микрокредитование для малого строительного бизнеса",
			description:
				"Доступные финансовые инструменты для развития бизнеса.",
			date: new Date("2024-08-08"),
		},
	],
	
	promotions: [
		{
			id: 1,
			title: "Summer Sale Bonanza",
			promotionPercent: 25,
			backgroundImg:
				"https://images.unsplash.com/photo-1441986300917-64674bd600d8",
		},
		{
			id: 2,
			title: "Black Friday Mega Deal",
			promotionPercent: 50,
			backgroundImg:
				"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
		},
		{
			id: 3,
			title: "Spring Collection Launch",
			promotionPercent: 15,
			backgroundImg:
				"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
		},
		{
			id: 4,
			title: "Weekend Flash Sale",
			promotionPercent: 30,
			backgroundImg:
				"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
		},
		{
			id: 5,
			title: "New Year Clearance",
			promotionPercent: 40,
			backgroundImg:
				"https://images.unsplash.com/photo-1483985988355-763728e1935b",
		},
		{
			id: 6,
			title: "Student Discount Special",
			promotionPercent: 20,
			backgroundImg:
				"https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
		},
		{
			id: 7,
			title: "Valentine's Day Offers",
			promotionPercent: 35,
			backgroundImg:
				"https://images.unsplash.com/photo-1518049362265-d5b2a6467637",
		},
		{
			id: 8,
			title: "Back to School Sale",
			promotionPercent: 22,
			backgroundImg:
				"https://images.unsplash.com/photo-1503602642458-232111445657",
		},
		{
			id: 9,
			title: "Cyber Monday Blitz",
			promotionPercent: 45,
			backgroundImg:
				"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
		},
		{
			id: 10,
			title: "Holiday Gift Guide",
			promotionPercent: 28,
			backgroundImg:
				"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
		},
		{
			id: 11,
			title: "Mid-Season Markdown",
			promotionPercent: 18,
			backgroundImg:
				"https://images.unsplash.com/photo-1472851294608-062f824d29cc",
		},
		{
			id: 12,
			title: "Anniversary Celebration",
			promotionPercent: 55,
			backgroundImg:
				"https://images.unsplash.com/photo-1505022610485-0249ba5b3675",
		},
		{
			id: 13,
			title: "Mother's Day Special",
			promotionPercent: 32,
			backgroundImg:
				"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
		},
		{
			id: 14,
			title: "Fall Fashion Preview",
			promotionPercent: 24,
			backgroundImg:
				"https://images.unsplash.com/photo-1445205170230-053b83016050",
		},
		{
			id: 15,
			title: "Early Bird Discount",
			promotionPercent: 12,
			backgroundImg:
				"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
		},
		{
			id: 16,
			title: "End of Season Clear-out",
			promotionPercent: 60,
			backgroundImg:
				"https://images.unsplash.com/photo-1516762689617-e1cffcef479d",
		},
		{
			id: 17,
			title: "VIP Member Exclusive",
			promotionPercent: 38,
			backgroundImg:
				"https://images.unsplash.com/photo-1523381294911-8d3cedd3afd0",
		},
		{
			id: 18,
			title: "Flash Wednesday Deal",
			promotionPercent: 26,
			backgroundImg:
				"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
		},
		{
			id: 19,
			title: "First Purchase Bonus",
			promotionPercent: 15,
			backgroundImg:
				"https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
		},
		{
			id: 20,
			title: "Luxury Brand Showcase",
			promotionPercent: 42,
			backgroundImg:
				"https://images.unsplash.com/photo-1496747611176-843222e1e57c",
		},
		{
			id: 21,
			title: "Sports Equipment Sale",
			promotionPercent: 33,
			backgroundImg:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
		},
		{
			id: 22,
			title: "Tech Gadget Bonanza",
			promotionPercent: 29,
			backgroundImg:
				"https://images.unsplash.com/photo-1498049794561-7780e7231661",
		},
		{
			id: 23,
			title: "Home Decor Extravaganza",
			promotionPercent: 36,
			backgroundImg:
				"https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
		},
		{
			id: 24,
			title: "Beauty Products Blast",
			promotionPercent: 21,
			backgroundImg:
				"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
		},
		{
			id: 25,
			title: "Fitness Gear Friday",
			promotionPercent: 27,
			backgroundImg:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
		},
		{
			id: 26,
			title: "Book Lover's Paradise",
			promotionPercent: 19,
			backgroundImg:
				"https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
		},
		{
			id: 27,
			title: "Kitchen Essentials Sale",
			promotionPercent: 31,
			backgroundImg:
				"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
		},
		{
			id: 28,
			title: "Fashion Forward Friday",
			promotionPercent: 44,
			backgroundImg:
				"https://images.unsplash.com/photo-1445205170230-053b83016050",
		},
		{
			id: 29,
			title: "Gaming Zone Special",
			promotionPercent: 37,
			backgroundImg:
				"https://images.unsplash.com/photo-1511512578047-dfb367046420",
		},
		{
			id: 30,
			title: "Pet Supplies Savings",
			promotionPercent: 23,
			backgroundImg:
				"https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
		},
		{
			id: 31,
			title: "Outdoor Adventure Gear",
			promotionPercent: 34,
			backgroundImg:
				"https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
		},
		{
			id: 32,
			title: "Baby & Kids Collection",
			promotionPercent: 17,
			backgroundImg:
				"https://images.unsplash.com/photo-1522556189639-b150ed9c4330",
		},
		{
			id: 33,
			title: "Jewelry Showcase Event",
			promotionPercent: 48,
			backgroundImg:
				"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
		},
		{
			id: 34,
			title: "Electronics Clearance",
			promotionPercent: 41,
			backgroundImg:
				"https://images.unsplash.com/photo-1468495244123-6c6c332eeece",
		},
		{
			id: 35,
			title: "Seasonal Wardrobe Update",
			promotionPercent: 16,
			backgroundImg:
				"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
		},
		{
			id: 36,
			title: "Vintage Collection Revival",
			promotionPercent: 52,
			backgroundImg:
				"https://images.unsplash.com/photo-1506629905607-d8b5dc7d9d7d",
		},
		{
			id: 37,
			title: "Health & Wellness Week",
			promotionPercent: 14,
			backgroundImg:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
		},
		{
			id: 38,
			title: "Art & Craft Supplies",
			promotionPercent: 39,
			backgroundImg:
				"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
		},
		{
			id: 39,
			title: "Travel Essentials Bundle",
			promotionPercent: 43,
			backgroundImg:
				"https://images.unsplash.com/photo-1488646953014-85cb44e25828",
		},
		{
			id: 40,
			title: "Premium Quality Selection",
			promotionPercent: 58,
			backgroundImg:
				"https://images.unsplash.com/photo-1505022610485-0249ba5b3675",
		},
	],
};
