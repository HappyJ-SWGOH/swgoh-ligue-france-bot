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
		msg.reply('\n!regle : Liste principale des consignes du channel \n!google + paramètres : Effectuer une recherche google \n!youtube + paramètres : Idem mais avec Youtube \n!rancor : Règles du rancor \n!char : Règles du char \n!trium : Règles du triumvirat \n!teamrancor : Team jouable pour le rancor \n!teamchar : Idem pour le char \n!teamtrium : Idem pour le trium \n!??? : À vous de trouver les commandes cachées :P');
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
		msg.reply('Ouverture du Rancor le matin (vers 6h00 du matin) personne ne tape. Vous ferez un score à zéro point (vous prenez un seul personnage, le plus faible et vous tapez sur le cochon de droite mais pas sur celui du milieu). Le même soir à 21h00 tapante et avec l\'accord d\'un officer qui dira sur le tchat du jeu Go pour le rancor. ous aurez UNE SEULE TENTATIVE pour tout le rancor, pour ceux qui solotent le rancor vous attendrez à 21h30 pour valider votre score, pas besoin de demander pour le valider. Pour joueurs qui vont taper avant l\'heure, ils seront notés et seront les prioritaires à un futur bannissement de la guilde dans le cas ou ça perdure sur les raids.');
	}
	else if (msg.content === '!char') {
		msg.reply('Les règles du char héroîque sont assez simple. Ouverture du char le matin ou dans la nuit (comme pour le rancor). On fait un score à zéro (sans taper Grievous) et à partir de 18h30 go les Zylo. La phase 1 : cette phase n\'est jouée QUE  par les joueurs qui ont Kylo Ren en Zêta, celà permet d\'économiser des personnages. A partir de la P2, P3 et P4, vous pouvez taper par groupe de 3 ou 4 joueurs en même temps, suffit juste de vous signaler .');
	}
	else if (msg.content === '!trium') {
		msg.reply('Les règles évolueront au fur et à mesure que nous réussirons à passer les niveaux du Raid. Ouverture du raid à 19h30 Pour taper: Je conseille de vous signaler pour taper, mais avant vous demanderez si quelqu\'un est dessus et n\'attendez pas 30 secondes pour avoir une réponse, attendez au moins une bonne minute. Je conseille fortement aux joueurs de la guilde de farmer ce qu\'il faut pour avoir Rey entrainement Jedi pour pouvoir jouer la P1. Conjointement avec vous nous mettrons les teams idéales pour réussir phase après phase coté organisation. Je conseille plus que fortement que vous fassiez des tests en mode avion et wifi coupé pour ne pas marquer de points, à vous les joueurs de noter ou de faire des captures d\'écran pour vos meilleures teams par phase. Il est très important de le faire car pas la suite une équipe de 11 joueurs sera dédiée par phase, je m\'explique : dans toutes mes teams, ma meilleure est pour la P3, donc je taperais en P3 avec 10 joueurs pour maximiser l\'efficacité. Vous allez me dire : "mais je fais quoi de mes autres persos ?". Si vous avez deux compositions, une pour la P1 et une P3 pas de soucis vous pourrez maximiser les chances de réssite pour le raid. Ensuite tous les autres persos, faites des teams pour baisser la vie des phases, mais assurez vous toujours que quelqu\'un ne joue pas,car deux attaques en même temps n\'enlèvent pas tous les dégats, ça prendra le premier joueur qui validera.');
	}

	// team msg
	else if (msg.content === '!teamrancor') {
		msg.reply('Voici une liste non exhaustive des teams pour soloter le rancor : \n - Wedge (L) Jyn Biggs Bistan Cassian \n - Zador (L) Nihilus Sidious Tarkin TFP \n - Zador (L) Nihilus Tarkin TFP Thrawn \n - Zador (L) Thrawn Tarkin Bistan Jyn \n - Zador (L) Jyn Bistan Tarkin Nihilus \n - Zador (L) Jyn Bistan Tarkin Cassian');
	}
	else if (msg.content === '!teamchar') {
		msg.reply('P1 ! \n - Kylo Ren Zeta seulement \nP2 \n    Capitaine Phasma Zeta, Kylo Ren Zeta, Pilote de chasseur TIE du Premier Ordre Zeta, Officier du Premier Ordre, Stormtrooper du Premier Ordre. \n    HK-47, Chef Nebit, Ingénieur Jawa, IG-88, R2-D2\n    CT-2224 Cody Zeta, CT-5555 Cinqs, CT-21-0406 « Echo », Sergent Clone, CT-7567 « Rex » Zeta\n    Wedge Antille, Biggs, R2D2, Han Solo, Luke Skywalker\n    Wedge Antille, Biggs, Leïa (ou lando) , Amiral, Rey\nP3 \n    Chef Chirpa, Empereur Palpatine, Ancien Ewok, Han en stormtrooper, Garde royal. \nP4 \n    Rebelles Wedge Antilles (leader).\n Source : https://growofgalaxy.wordpress.com/comment-vaincre-le-raid-assaut-de-char/');
	}
	else if (msg.content === '!teamtrium') {
		msg.reply('A venir selon les détails que nous trouverons. Restez connectés !');
	}

	// random msg 
	else if (msg.content === '!salut') {
		msg.reply('Salut face de fion !');
	}
	else if (msg.content === '!bonjour') {
		msg.reply('Bien le bonjour');
	}
	else if (msg.content === '!fuck') {
		msg.reply('Fuck you too... (U2)');
	}
	else if (msg.content === '!porn') {
		msg.reply('Pour qui tu me prends ?!');
	}

	// repliques 
	else if (msg.content === '!vador') {
		msg.reply('Luke : Obiwan a dit que tu as tué mon père ! \nVador : Non, je suis ton père. \nLuke : Noooooooooooooooooooooon !!!!!');
	}
	else if (msg.content === "!yoda") {
		msg.reply('La taille importe peu ... Regarde moi : est-ce par la taille que tu peux me juger ? Et bien tu ne le dois pas.');
	}
	else if (msg.content === "!obiwan") {
		msg.reply('Tu étais l\'élu, c\'était toi ! Tu devais rétablir la paix dans la force pas la condamner à la nuit ! Tu étais comme mon frère. Je t\'aimais Anakin.');
	}
	else if (msg.content === "!anakin") {
		msg.reply('Général Grievous, je vous imaginais plus grand.');
	}
	else if (msg.content === "!windu") {
		msg.reply('Au nom de l\'Assemblée Galactique du Sénat de la République, vous êtes en état d\'arrestation, chancelier.');
	}

	// easter eggs
	else if (msg.content === '!easteregg') {
		msg.reply('Tu pensais que ça serait aussi simple ?');
	}
	else if (msg.content === '!happyj') {
		msg.reply('HappyJ est mon créateur, Dieu est le créateur, donc HappyJ serait Dieu ?');
	}
	else if (msg.content === '!darklaul') {
		var i = getRandomInt(2);
		if (i == 0) {
			msg.reply('Avé grand chef !');
		}
		else if (i == 1) {
			msg.reply('Inclinez-vous devant le grand chef !');
		}
		else {
			msg.reply('ERREUR FATALE : Autodestruction dans 5 secondes.... biiiiiip....');
		}
	}
	else if (msg.content === '!c4po') {
		msg.reply("Biiip bip biiiiiiiiip bop, bip ?");
	}
	else if (msg.content === '!kendji') {
		msg.reply('Gitanooooo, la falaise d\'où tombent les blaireaux....');
	}
	else if (msg.content === '!jolapignole') {
		var i = getRandomInt(3);
		if (i == 0) {
			msg.reply('https://lc.cx/dsRz');
		}
		else if (i == 1) {
			msg.reply('Jo aime ..............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nla bite');
		}
		else if (i == 2) {
			msg.reply('Jo aime ..............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nle gland');
		}
	}

	else if (msg.content === '!striptease') {
		msg.reply('https://www.google.fr/search?q=star+wars+sexy+boba+fett&source=lnms&tbm=isch&sa=X&ved=0ahUKEwju1fP3w-LZAhUCK8AKHe28CNYQ_AUICigB&biw=1440&bih=755');
	}
	else if (msg.content === '!prout') {
		msg.reply('PROUT !');
	}
	else if (msg.content === '!quequette') {
		msg.reply('https://www.youtube.com/watch?v=RkUIXA2JrBo');
	}
	else if (msg.content === '!chansondemerde') {
		var i = getRandomInt(6);
		if (i == 0) {
			msg.reply("https://www.youtube.com/watch?v=9K-T6h84F7k");
		}
		else if (i == 1) {
			msg.reply("https://www.youtube.com/watch?v=9nRoNWSJTLM");
		}
		else if (i == 2) {
			msg.reply("https://www.youtube.com/watch?v=rCK-7Hki4II");
		}
		else if (i == 3) {
			msg.reply("https://www.youtube.com/watch?v=KyXW64L-XZA");
		}
		else if (i == 4) {
			msg.reply("https://www.youtube.com/watch?v=E7oWe5t6CGk");
		}
		else if (i == 5) {
			msg.reply("https://www.youtube.com/watch?v=lqeI3MN7Dj8");
		}
	}
});

// functions 
var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
