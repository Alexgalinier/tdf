Data.set('weapons', Weapon, [
	// Arbalètes
	{id: 1, name: "Arbalète", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Longue 100m, Perforante 1, Rechargement Mineur, Lente, Deux Mains"},
	{id: 2, name: "Arbalète Légère", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Longue 100m, Rechargement Mineur, Lente"},
	{id: 3, name: "Arbalète Lourde", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Longue 100m, Perforante 2, Rechargement Majeure, Lente, Deux Mains, Hargneuse"},
	{id: 4, name: "Arbalète Myrienne", group:"Arbalètes", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Longue 100m, Perforante 1, Deux Mains, Rapide, Rechargement Mineur"},
	// Arcs
	{id: 5, name: "Arc Courbe", group:"Arcs", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Longue 100m, Puissante, Deux Mains"},
	{id: 6, name: "Arc de Chasse", group:"Arcs", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:"Portée Longue 100m, Deux Mains"},
	{id: 7, name: "Arc Long", group:"Arcs", associatedComp:"agility", bonusBase:2, bonusSpe:"", attributs:"Portée Longue 100m, Perforante 1, Deux Mains, Incommode"},
	// Armes d'Hast
	{id: 8, name: "Hache D'Armes", group:"Armes d'Hast", associatedComp:"athl", bonusBase:3, bonusSpe:"", attributs:"Encombrante 1, Puissante, Allonge 2, Deux Mains, Incommode"},
	{id: 9, name: "Hallebarde", group:"Armes d'Hast", associatedComp:"athl", bonusBase:3, bonusSpe:"", attributs:"Encombrante 1, Puissante, Allonge 2, Deux Mains"},
	{id: 10, name: "Outil de Paysan", group:"Armes d'Hast", associatedComp:"athl", bonusBase:2, bonusSpe:"", attributs:"Deux Mains, Incommode, Fragile, Allonge 1"},
	// Boucliers
	{id: 11, name: "Bouclier", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:"Défensive +2, Allonge 0"},
	{id: 12, name: "Grand Bouclier", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:"Encombrante 1, Défensive +4, Allonge 0"},
	{id: 13, name: "Pavois", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:"Encombrante 2, Défensive +6, Allonge 0"},
	{id: 14, name: "Targe", group:"Boucliers", associatedComp:"athl", bonusBase:-2, bonusSpe:"", attributs:"Défensive +1, Secondaire +1, Allonge 0"},
	// Casse-tête
	{id: 15, name: "Bâton", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Rapide, Deux Mains, Allonge 2"},
	{id: 16, name: "Bec de Corbin", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Fracassante 1, Allonge 0"},
	{id: 17, name: "Fléau", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"force", attributs:"Puissance, Fracassante 1, Allonge 1"},
	{id: 18, name: "Fléau D'armes", group:"Casse-tête", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:"Puissante, Fracassante 1, Deux Mains, Allonge 2"},
	{id: 19, name: "Trique/Gourdin", group:"Casse-tête", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Secondaire +1 Allonge 1"},
	{id: 20, name: "Maillet", group:"Casse-tête", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:"Encombrante 1, Fracassante 1, Lente, Assomante, Deux Mains, Allonge 0"},
	{id: 21, name: "Marteau de Guerre", group:"Casse-tête", associatedComp:"athl", bonusBase:2, bonusSpe:"force", attributs:"Encombrante 1, Puissante, Fracassante 2, Lente, Deux Mains, Allonge 1"},
	{id: 22, name: "Masse d'Armes", group:"Casse-tête", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Allonge 0"},
	{id: 23, name: "Morgenstern", group:"Casse-tête", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:"Fracassante 1, Hargneuse, Allonge 1"},
	// Escrime
	{id: 24, name: "Epée Braavienne", group:"Escrime", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:"Défensive +1, Rapide, Allonge 1"},
	{id: 25, name: "Epée Courte", group:"Escrime", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Rapide, Allonge 0"},
	{id: 26, name: "Dague Main Gauche", group:"Escrime", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Défensive +2, Secondaire +1, Allonge 0"},
	// Haches
	{id: 27, name: "Cognée", group:"Haches", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:"Deux Mains, Allonge 1"},
	{id: 28, name: "Hache de bataille", group:"Haches", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:"Polyvalente, Allonge 0"},
	{id: 29, name: "Hachette", group:"Haches", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Défensive +1, Secondaire +1, Allonge 0"},
	{id: 30, name: "Hache Longue", group:"Haches", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:"Encombrante 1, Puissante, Deux Mains, Hargneuse, Allonge 2"},
	{id: 31, name: "Pioche", group:"Haches", associatedComp:"athl", bonusBase:1, bonusSpe:"force", attributs:"Puissante, Lente, Deux Mains, Allonge 1"},
	// Jet
	{id: 32, name: "Couteau de jet", group:"Jet", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:"Portée Courte 10M, Rapide"},
	{id: 33, name: "Filet", group:"Jet", associatedComp:"", bonusBase:1, bonusSpe:"", attributs:"Portée Courte 10M, Empêtrement (pas de dégats)"},
	{id: 34, name: "Foëne de jet", group:"Jet", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Portée Courte 10M"},
	{id: 35, name: "Fronde", group:"Jet", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Portée Longue 100m, Perforante 1, Rechargement Mineur, Lente, Deux Mains"},
	{id: 36, name: "Hachette de jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Portée Courte 10M"},
	{id: 37, name: "Javeline", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Portée Courte 10M"},
	{id: 38, name: "Lance de Jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Portée Courte 10M"},
	{id: 39, name: "Trident de jet", group:"Jet", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Portée Courte 10M"},
	// Lames Courtes
	{id: 40, name: "Dague", group:"Lames Courtes", associatedComp:"agility", bonusBase:-2, bonusSpe:"", attributs:"Défensive +1, Secondaire +1, Allonge 0"},
	{id: 41, name: "Poignard", group:"Lames Courtes", associatedComp:"agility", bonusBase:-2, bonusSpe:"", attributs:"Seondaire +2, Allonge 0"},
	{id: 42, name: "Stylet", group:"Lames Courtes", associatedComp:"agility", bonusBase:0, bonusSpe:"", attributs:"Perforante 2, Allonge 0"},
	{id: 43, name: "Couteau", group:"Lames Courtes", associatedComp:"agility", bonusBase:-2, bonusSpe:"", attributs:"Rapide, Secondaire +1, Allonge 0"},
	// Lames Longues
	{id: 44, name: "Arakh", group:"Lames Longues", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Polyvalente, Rapide, Allonge 1"},
	{id: 45, name: "Epée Bâtarde", group:"Lames Longues", associatedComp:"athl", bonusBase:1, bonusSpe:"", attributs:"Polyvalente, Allonge 1"},
	{id: 46, name: "Epée Longue", group:"Lames Longues", associatedComp:"athl", bonusBase:2, bonusSpe:"", attributs:"Allonge 1"},
	{id: 47, name: "Espadon", group:"Lames Longues", associatedComp:"athl", bonusBase:3, bonusSpe:"force", attributs:"Puissante, Lente, Deux Mains, Incommode, Hargneuse, Allonge 2"},
	// Lances
	{id: 48, name: "Epieu", group:"Lances", associatedComp:"athl", bonusBase:1, bonusSpe:"force", attributs:"Empalement, Puissante, Lente, Deux Mains, Allonge 3"},
	{id: 49, name: "Foëne", group:"Lances", associatedComp:"agility", bonusBase:1, bonusSpe:"", attributs:"Polyvalente , Allonge 2"},
	{id: 50, name: "Lance", group:"Lances", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Rapide, Allonge 3"},
	{id: 51, name: "Lance de Joute", group:"Lances", associatedComp:"dress", bonusBase:3, bonusSpe:"force", attributs:"Encombrante 1, Montée, Puissante, Lente, Fragile, Allonge 4"},
	{id: 52, name: "Pique", group:"Lances", associatedComp:"athl", bonusBase:2, bonusSpe:"", attributs:"Empalement, Réception de Charge, lente, Deux Mains, Incommode, Allonge 6"},
	{id: 53, name: "Lance de guerre", group:"Lances", associatedComp:"dress", bonusBase:4, bonusSpe:"force", attributs:"Encombrante 2, Empalement, Montée, Puissante, Lente, Hargneuse, Allonge 3"},
	{id: 54, name: "Trident", group:"Lances", associatedComp:"athl", bonusBase:0, bonusSpe:"", attributs:"Polyvalente, Lente, Allonge 2"},
	// Rixe
	{id: 55, name: "Fouet", group:"Rixe", associatedComp:"agility", bonusBase:-1, bonusSpe:"", attributs:"Empoigne, Allonge 3"},
	{id: 56, name: "Gantelet", group:"Rixe", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Empoigne, Secondaire +1, Allonge 0"},
	{id: 57, name: "Poing", group:"Rixe", associatedComp:"athl", bonusBase:-3, bonusSpe:"", attributs:"Empoigne, Secondaire +1, Allonge 0"},
	{id: 58, name: "Arme Improvisée", group:"Rixe", associatedComp:"athl", bonusBase:-1, bonusSpe:"", attributs:"Lente, Allonge Variable"}
]);