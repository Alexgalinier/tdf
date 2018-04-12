Data.set('weapons', Weapon, [
	// Arbalètes
	{id: 1, name: "Arbalète", group:"Arbalètes", associatedComp:"agility", training: 0, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, Recharg. Min, Lente, 2 Mains", isPerf: true}},
	{id: 2, name: "Arbalète Légère", group:"Arbalètes", associatedComp:"agility", training: 0, training:0, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Recharg. Min, Lente"}},
	{id: 3, name: "Arbalète Lourde", group:"Arbalètes", associatedComp:"agility", training:0, bonusBase:2, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 2, Recharg. Maj.,Lente, 2 Mains, Hargneuse", isPerf: true}},
	{id: 4, name: "Arbalète Myrienne", group:"Arbalètes", associatedComp:"agility", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, 2 Mains, Rapide, Recharg. Min", isPerf: true}},
	// Arcs
	{id: 5, name: "Arc Courbe", group:"Arcs", associatedComp:"agility", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 100m, Puissante, 2 Mains"}},
	{id: 6, name: "Arc de Chasse", group:"Arcs", associatedComp:"agility", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 100m, 2 Mains"}},
	{id: 7, name: "Arc Long", group:"Arcs", associatedComp:"agility", training:1, bonusBase:2, bonusSpe:"", attributs:{ label: "Portée 100m, Perf. 1, 2 Mains, Incommode", isPerf: true}},
	// Armes d'Hast
	{id: 8, name: "Hache D'Armes", group:"Armes d'Hast", associatedComp:"athl", training:1, bonusBase:3, bonusSpe:"", attributs:{ label: "Encombrante 1, Puissante, Allonge, 2 Mains, Incommode"}},
	{id: 9, name: "Hallebarde", group:"Armes d'Hast", associatedComp:"athl", training:1, bonusBase:3, bonusSpe:"", attributs:{ label: "Encombrante 1, Puissante, 2 Mains"}},
	{id: 10, name: "Outil de Paysan", group:"Armes d'Hast", associatedComp:"athl", training:0, bonusBase:2, bonusSpe:"", attributs:{ label: "2 Mains, Incommode, Fragile"}},
	// Armes de Jet
	{id: 11, name: "Couteau de jet", group:"Armes de Jet", associatedComp:"agility", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Portée 10M, Rapide"}},
	{id: 12, name: "Filet", group:"Armes de Jet", associatedComp:"", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 10M, Empêtrement (pas de dégats)"}},
	{id: 13, name: "Foëne de jet", group:"Armes de Jet", associatedComp:"agility", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 14, name: "Fronde", group:"Armes de Jet", associatedComp:"athl", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Portée 100m"}},
	{id: 15, name: "Hachette de jet", group:"Armes de Jet", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 16, name: "Javeline", group:"Armes de Jet", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 17, name: "Lance de Jet", group:"Armes de Jet", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	{id: 18, name: "Trident de jet", group:"Armes de Jet", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Portée 10M"}},
	// Boucliers
	{id: 19, name: "Bouclier", group:"Boucliers", associatedComp:"athl", bonusDef: 2, training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +2"}},
	{id: 20, name: "Grand Bouclier", group:"Boucliers", associatedComp:"athl", bonusDef: 4, training:1, bonusBase:-2, bonusSpe:"", attributs:{ label: "Encombrante 1, Déf. +4"}},
	{id: 21, name: "Pavois", group:"Boucliers", associatedComp:"athl", bonusDef: 6, training:2, bonusBase:-2, bonusSpe:"", attributs:{ label: "Encombrante 2, Déf. +6"}},
	{id: 22, name: "Targe", group:"Boucliers", associatedComp:"athl", bonusDef: 1, training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	// Casse-tête
	{id: 23, name: "Bâton", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Rapide, 2 Mains"}},
	{id: 24, name: "Fléau", group:"Casse-tête", associatedComp:"athl", training:1, bonusBase:0, bonusSpe:"force", attributs:{ label: "Puissance, Fracassante 1"}},
	{id: 25, name: "Fléau D'armes", group:"Casse-tête", associatedComp:"athl", training:2, bonusBase:3, bonusSpe:"force", attributs:{ label: "Puissante, Fracassante 1, 2 Mains"}},
	{id: 26, name: "Trique/Gourdin", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Secondaire +1"}},
	{id: 27, name: "Maillet", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:1, bonusSpe:"", attributs:{ label: "Encombrante 1, Fracassante 1, Lente, Assomante, 2 Mains"}},
	{id: 28, name: "Marteau de Guerre", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"force", attributs:{ label: "Encombrante 1, Puissante, Fracassante 2, Lente, 2 Mains"}},
	{id: 29, name: "Masse d'Armes", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "-"}},
	{id: 30, name: "Morgenstern", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Fracassante 1, Hargneuse"}},
	// Escrime
	{id: 31, name: "Épée Braavosi", group:"Escrime", associatedComp:"agility", training:1, bonusBase:0, bonusSpe:"", attributs:{ label: "Déf. +1, Rapide"}},
	{id: 32, name: "Épée Courte", group:"Escrime", associatedComp:"agility", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Rapide"}},
	{id: 33, name: "Main Gauche", group:"Escrime", associatedComp:"agility", training:1, bonusBase:-1, bonusSpe:"", attributs:{ label: "Déf. +2, Secondaire +1"}},
	// Haches
	{id: 34, name: "Bec de Corbin", group:"Casse-tête", associatedComp:"athl", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Fracassante 1"}},
	{id: 35, name: "Cognée", group:"Haches", associatedComp:"athl", training:0, bonusBase:1, bonusSpe:"", attributs:{ label: "2 Mains"}},
	{id: 36, name: "Hache de bataille", group:"Haches", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente"}},
	{id: 37, name: "Hachette", group:"Haches", associatedComp:"athl", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	{id: 38, name: "Hache Longue", group:"Haches", associatedComp:"athl", training:1, bonusBase:3, bonusSpe:"force", attributs:{ label: "Encombrante 1, Puissante, Allonge, 2 Mains, Hargneuse"}},
	{id: 39, name: "Pioche", group:"Haches", associatedComp:"athl", training:0, bonusBase:1, bonusSpe:"force", attributs:{ label: "Puissante, Lente, 2 Mains"}},
	// Lames Courtes
	{id: 40, name: "Dague", group:"Lames Courtes", associatedComp:"agility", training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Déf. +1, Secondaire +1"}},
	{id: 41, name: "Poignard", group:"Lames Courtes", associatedComp:"agility", training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Seondaire +2"}},
	{id: 42, name: "Stylet", group:"Lames Courtes", associatedComp:"agility", training:1, bonusBase:0, bonusSpe:"", attributs:{ label: "Perf. 2", isPerf: true}},
	// Lames Longues
	{id: 43, name: "Arakh", group:"Lames Longues", associatedComp:"athl", training:1, bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente, Rapide"}},
	{id: 44, name: "Épée Bâtarde", group:"Lames Longues", associatedComp:"athl", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Polyvalente"}},
	{id: 45, name: "Épée Longue", group:"Lames Longues", associatedComp:"athl", training:0, bonusBase:1, bonusSpe:"", attributs:{ label: "-"}},
	{id: 46, name: "Éspadon", group:"Lames Longues", associatedComp:"athl", training:0, bonusBase:3, bonusSpe:"force", attributs:{ label: "Puissante, Lente, 2 Mains, Incommode, Hargneuse"}},
	// Lances
	{id: 47, name: "Épieu", group:"Lances", associatedComp:"athl", training:1, bonusBase:1, bonusSpe:"force", attributs:{ label: "Empalement, Puissante, Lente, 2 Mains"}},
	{id: 48, name: "Foëne", group:"Lances", associatedComp:"agility", training:1, bonusBase:1, bonusSpe:"", attributs:{ label: "Polyvalente "}},
	{id: 49, name: "Lance", group:"Lances", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Rapide"}},
	{id: 50, name: "Lance de Joute", group:"Lances", associatedComp:"dress", training:1, bonusBase:3, bonusSpe:"force", attributs:{ label: "Encombrante 1, Montée, Puissante, Allonge, Lente, Fragile"}},
	{id: 51, name: "Pique", group:"Lances", associatedComp:"athl", training:0, bonusBase:2, bonusSpe:"", attributs:{ label: "Empalement, Réception de Charge, Lente, 2 Mains, Incommode"}},
	{id: 52, name: "Lance de guerre", group:"Lances", associatedComp:"dress", training:1, bonusBase:4, bonusSpe:"force", attributs:{ label: "Encombrante 2, Empalement, Montée, Puissante, Lente, Hargneuse"}},
	{id: 53, name: "Trident", group:"Lances", associatedComp:"athl", training:0, bonusBase:0, bonusSpe:"", attributs:{ label: "Polyvalente, Lente"}},
	// Rixe
	{id: 54, name: "Couteau", group:"Lames Courtes", associatedComp:"athl", training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Rapide, Secondaire +1"}},
	{id: 55, name: "Fouet", group:"Rixe", associatedComp:"agility", training:2, bonusBase:-1, bonusSpe:"", attributs:{ label: "-"}},
	{id: 56, name: "Improvisée", group:"Rixe", associatedComp:"athl", training:0, bonusBase:-1, bonusSpe:"", attributs:{ label: "Lente"}},
	{id: 57, name: "Gantelet", group:"Rixe", associatedComp:"athl", training:0, bonusBase:-2, bonusSpe:"", attributs:{ label: "Empoigne, Secondaire +1"}},
	{id: 58, name: "Poing", group:"Rixe", associatedComp:"athl", training:0, bonusBase:-3, bonusSpe:"", attributs:{ label: "Empoigne, Secondaire +1"}}
]);