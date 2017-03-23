Data.set('weapons', Weapon, [
	// Arbalètes
	{id: 1, name: "Arbalète", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, Recharg. Min, Lente, 2 Mains", isPerf: true}},
	{id: 2, name: "Arbalète Légère", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Recharg. Min, Lente"}},
	{id: 3, name: "Arbalète Lourde", group:"Arbalètes", associatedComp:"agility", bonusBase:2, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 2, Recharg. Maj.,Lente, 2 Mains, Hargneuse", isPerf: true}},
	{id: 4, name: "Arbalète Myrienne", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, 2 Mains, Rapide, Recharg. Min", isPerf: true}},
	// Arcs
	{id: 5, name: "Arc Courbe", group:"Arcs", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Puissante, 2 Mains"}},
	{id: 6, name: "Arc de Chasse", group:"Arcs", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 100m, 2 Mains"}},
	{id: 7, name: "Arc Long", group:"Arcs", associatedComp:"agility", bonusBase:2, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, 2 Mains, Incommode", isPerf: true}},
	// Armes d'Hast
	{id: 8, name: "Hache D'Armes", group:"Armes d'Hast", associatedComp:"athl", bonusBase:3, bonusSpe:"", attributs:{ label: "Encombrante 1, Puissante, Allonge, 2 Mains, Incommode"}},
	{id: 9, name: "Hallebarde", group:"Armes d'Hast", associatedComp:"athl", bonusBase:3, bonusSpe:"", attributs:{ label: "Encombrante 1, Puissante, 2 Mains"}},
	{id: 10, name: "Outil de Paysan", group:"Armes d'Hast", associatedComp:"athl", bonusBase:2, bonusSpe:"", attributs:{ label: "2 Mains, Incommode, Fragile"}},
	// Boucliers
	{id: 11, name: "Bouclier", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +2"}},
	{id: 12, name: "Grand Bouclier", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Encombrante 1, Déf. +4"}},
	{id: 13, name: "Pavois", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Encombrante 2, Déf. +6"}},
	{id: 14, name: "Targe", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	// Casse-tête
	{id: 15, name: "Bâton", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Rapide, 2 Mains"}},
	{id: 16, name: "Fléau", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"force", attributs:{ label: "Puissance, Fracassante 1"}},
	{id: 17, name: "Fléau D'armes", group:"Casse-tête", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:{ label: "Puissante, Fracassante 1, 2 Mains"}},
	{id: 18, name: "Trique/Gourdin", group:"Casse-tête", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:{ label: "Secondaire +1"}},
	{id: 29, name: "Maillet", group:"Casse-tête", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:{ label: "Encombrante 1, Fracassante 1, Lente, Assomante, 2 Mains"}},
	{id: 20, name: "Marteau de Guerre", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"force", attributs:{ label: "Encombrante 1, Puissante, Fracassante 2, Lente, 2 Mains"}},
	{id: 21, name: "Masse d'Armes", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "-"}},
	{id: 22, name: "Morgenstern", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Fracassante 1, Hargneuse"}},
	// Escrime
	{id: 23, name: "Épée Braavosi", group:"Escrime", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:{ label: "Déf. +1, Rapide"}},
	{id: 24, name: "Épée Courte", group:"Escrime", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:{ label: "Rapide"}},
	{id: 25, name: "Main Gauche", group:"Escrime", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:{ label: "Déf. +2, Secondaire +1"}},
	// Haches
	{id: 26, name: "Bec de Corbin", group:"Casse-tête", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:{ label: "Fracassante 1"}},
	{id: 27, name: "Cognée", group:"Haches", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:{ label: "2 Mains"}},
	{id: 28, name: "Hache de bataille", group:"Haches", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente"}},
	{id: 29, name: "Hachette", group:"Haches", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	{id: 30, name: "Hache Longue", group:"Haches", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:{ label: "Encombrante 1, Puissante, Allonge, 2 Mains, Hargneuse"}},
	{id: 31, name: "Pioche", group:"Haches", associatedComp:"athl", bonusBase:1, bonusSpe:"force", attributs:{ label: "Puissante, Lente, 2 Mains"}},
	// Jet
	{id: 32, name: "Couteau de jet", group:"Jet", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:{ label: "Portée 10M, Rapide"}},
	{id: 33, name: "Filet", group:"Jet", associatedComp:"", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 10M, Empêtrement (pas de dégats)"}},
	{id: 34, name: "Foëne de jet", group:"Jet", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 35, name: "Fronde", group:"Jet", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:{ label: "Portée 100m"}},
	{id: 36, name: "Hachette de jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 37, name: "Javeline", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 38, name: "Lance de Jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 39, name: "Trident de jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	// Lames Courtes
	{id: 40, name: "Dague", group:"Lames Courtes", associatedComp:"agility", bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	{id: 41, name: "Poignard", group:"Lames Courtes", associatedComp:"agility", bonusBase:-2, bonusSpe:"", attributs:{ label: "Seondaire +2"}},
	{id: 42, name: "Stylet", group:"Lames Courtes", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:{ label: "Perf. 2", isPerf: true}},
	// Lames Longues
	{id: 43, name: "Arakh", group:"Lames Longues", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente, Rapide"}},
	{id: 44, name: "Épée Bâtarde", group:"Lames Longues", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:{ label: "Polyvalente"}},
	{id: 45, name: "Épée Longue", group:"Lames Longues", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:{ label: "-"}},
	{id: 46, name: "Éspadon", group:"Lames Longues", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:{ label: "Puissante, Lente, 2 Mains, Incommode, Hargneuse"}},
	// Lances
	{id: 47, name: "Épieu", group:"Lances", associatedComp:"athl", bonusBase:1, bonusSpe:"force", attributs:{ label: "Empalement, Puissante, Lente, 2 Mains"}},
	{id: 48, name: "Foëne", group:"Lances", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:{ label: "Polyvalente "}},
	{id: 49, name: "Lance", group:"Lances", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Rapide"}},
	{id: 50, name: "Lance de Joute", group:"Lances", associatedComp:"dress", bonusBase:3, bonusSpe:"force", attributs:{ label: "Encombrante 1, Montée, Puissante, Allonge, Lente, Fragile"}},
	{id: 51, name: "Pique", group:"Lances", associatedComp:"athl", bonusBase:2, bonusSpe:"", attributs:{ label: "Empalement, Réception de Charge, Lente, 2 Mains, Incommode"}},
	{id: 52, name: "Lance de guerre", group:"Lances", associatedComp:"dress", bonusBase:4, bonusSpe:"force", attributs:{ label: "Encombrante 2, Empalement, Montée, Puissante, Lente, Hargneuse"}},
	{id: 53, name: "Trident", group:"Lances", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente, Lente"}},
	// Rixe
	{id: 54, name: "Couteau", group:"Lames Courtes", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Rapide, Secondaire +1"}},
	{id: 55, name: "Fouet", group:"Rixe", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:{ label: "-"}},
	{id: 56, name: "Improvisée", group:"Rixe", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:{ label: "Lente"}},
	{id: 57, name: "Gantelet", group:"Rixe", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:{ label: "Empoigne, Secondaire +1"}},
	{id: 58, name: "Poing", group:"Rixe", associatedComp:"athl", bonusBase:-3, bonusSpe:"", attributs:{ label: "Empoigne, Secondaire +1"}}
]);