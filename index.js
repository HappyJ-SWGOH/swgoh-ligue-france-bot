const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN)

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setActivity("Star Wars Galaxy Of Heroes");
});

bot.on('guildMemberAdd', member => {
	member.createDm().then(function(channel){
		return channel.send('Bienvenue sur le channel ' + member.displayName + 'Tu peux trouver les règles concernant les raids dans la section "Règlement général et raid". Pour plus d\'informations, tu peux te rendre dans la section "Vidéos, liens et aide". Passe boire un petit coup au bistro avec nous pour qu\'on puisse échanger oralement ;)');
	}).catch(console.error);
});

bot.on('message', msg => {
	if (msg.content === '!regle') {
		msg.reply('Bonjour à toi ! Tu peux trouver les règles concernant les raids dans la section "Règlement général et raid". Pour plus d\'informations, tu peux te rendre dans la section "Vidéos, liens et aide". Passe boire un petit coup au bistro avec nous pour qu\'on puisse échanger oralement ;)');
	}
	else if (msg.content === '!liste') {
		msg.reply('\n!regle : Liste principale des consignes du channel \n!google + paramètres : Effectuer une recherche google \n!youtube + paramètres : Idem mais avec Youtube \n!rancor : Règles du rancor \n!char : Règles du char \n!trium : Règles du triumvirat \n!??? : À vous de trouver les commandes cachées :P');
	}

	else if (msg.content.indexOf("!google") == 0) {
		let args = msg.content.split(" ");
		args.shift();
		msg.reply("https://www.google.fr?q=" + args.join("%20"));
	}
	else if (msg.content.indexOf("!youtube") == 0) {
		let args = msg.content.split(" ");
		args.shift();
		msg.reply("https://www.youtube.com/results?search_query=" + args.join("+"));
	}

	// rules msg
	else if (msg.content === '!rancor') {
		msg.reply('Ouverture du Rancor le matin (vers 6h00 du matin) personne ne tape. Vous ferez un score à zéro point (vous prenez un seul personnage, le plus faible et vous tapez sur le cochon de droite mais pas sur celui du milieu). Le même soir à 21h00 tapante et avec l\'accord d\'un officer qui dira sur le tchat du jeu Go pour le rancor. ous aurez UNE SEULE TENTATIVE pour tout le rancor, pour ceux qui solotent le rancor vous attendrez à 21h15 pour valider votre score, pas besoin de demander pour le valider. Pour joueurs qui vont taper avant l\'heure, ils seront notés et seront les prioritaires à un futur bannissement de la guilde dans le cas ou ça perdure sur les raids.');
	}
	else if (msg.content === '!char') {
		msg.reply('Les règles du char héroîque sont assez simple. Ouverture du char le matin ou dans la nuit (comme pour le rancor). On fait un score à zéro (sans taper Grievous) et à partir de 18h30 go les Zylo. La phase 1 : cette phase n\'est jouée QUE  par les joueurs qui ont Kylo Ren en Zêta, celà permet d\'économiser des personnages. A partir de la P2, P3 et P4, vous pouvez taper par groupe de 3 ou 4 joueurs en même temps, suffit juste de vous signaler .');
	}
	else if (msg.content === '!trium') {
		msg.reply('Les règles évolueront au fur et à mesure que nous réussirons à passer les niveaux du Raid. Ouverture du raid à 19h30 Pour taper: Je conseille de vous signaler pour taper, mais avant vous demanderez si quelqu\'un est dessus et n\'attendez pas 30 secondes pour avoir une réponse, attendez au moins une bonne minute. Je conseille fortement aux joueurs de la guilde de farmer ce qu\'il faut pour avoir Rey entrainement Jedi pour pouvoir jouer la P1. Conjointement avec vous nous mettrons les teams idéales pour réussir phase après phase coté organisation. Je conseille plus que fortement que vous fassiez des tests en mode avion et wifi coupé pour ne pas marquer de points, à vous les joueurs de noter ou de faire des captures d\'écran pour vos meilleures teams par phase. Il est très important de le faire car pas la suite une équipe de 11 joueurs sera dédiée par phase, je m\'explique : dans toutes mes teams, ma meilleure est pour la P3, donc je taperais en P3 avec 10 joueurs pour maximiser l\'efficacité. Vous allez me dire : "mais je fais quoi de mes autres persos ?". Si vous avez deux compositions, une pour la P1 et une P3 pas de soucis vous pourrez maximiser les chances de réssite pour le raid. Ensuite tous les autres persos, faites des teams pour baisser la vie des phases, mais assurez vous toujours que quelqu\'un ne joue pas,car deux attaques en même temps n\'enlèvent pas tous les dégats, ça prendra le premier joueur qui validera.');
	}


	// easter eggs
	else if (msg.content === '!easteregg') {
		msg.reply('Tu pensais que ça serait aussi simple ?');
	}
	else if (msg.content === '!happyj') {
		msg.reply('HappyJ est mon créateur, Dieu est le créateur, donc HappyJ serait Dieu ?');
	}
	else if (msg.content === '!darklaul') {
		msg.reply('Avé grand chef !');
	}
	else if (msg.content === '!darklaul') {
		msg.reply('Inclinez-vous devant le grand chef !');
	}
	else if (msg.content === '!kendji') {
		msg.reply('Gitanooooo, la falaise d\'où tombent les blaireaux....');
	}
});
