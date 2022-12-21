'use strict';
var translations = {
  fr: {
    LAST_UPDATE: 'Dernière mise à jour',
    SHIP_AT_DOCK: 'Flotte à quai',
    SHIP_AT_DOCK_THRESHOLD: 'Avertissement de flotte à quai',
    SHIP_AT_DOCK_THRESHOLD_ZERO: "S'il y a au moins un vaisseau, afficher l'icône",
    SHIP_AT_DOCK_THRESHOLD_PERCENT: '{percent}% des points militaires ({value} - mis à jour automatiquement)',
    SHIP_AT_DOCK_THRESHOLD_ABSOLUTE: 'Seuil fixe - {value}',
    SHIP_AT_DOCK_THRESHOLD_NEED_UPDATE:
      'Visitez la page de flotte de cette planète<br>ou lune pour mettre à jour la flotte quai.',
    FEEDBACK: 'Envie de nous laisser un message ?',
    FEEDBACK_PLACEHOLDER: 'Commentaire, suggestion, idée...',
    SEND: 'Envoyer',
    CURRENT_STORAGE_TIME: 'Hangar plein dans',
    TOTAL_STORAGE_TIME: 'Capacité de stockage',
    NEXT_MOST_RENTABLE_BUILDS: 'Prochaines actions les plus rentables',
    RENTABILITY_ASTRO:
      "Montez astrophysique niveau {level}, et colonisez.<br>Montez les mines niveau : {mineLevel}<br><br>Temps d'économies pour les dépendances (Tech/Vaisseau) : {dependenciesTime}<br>Coût pour les dépendances : {dependenciesCost}<br><br>Temps d'économies pour Astrophysique : {astroTime}<br>Coût pour Astrophysique : {astroCost}<br><br>Temps d'économies pour les mines : {mineEconomyTime}<br>Coût total des mines : {mineCost}<br><br>Temps de rentabilité des mines de la nouvelle colonie : {mineTime}",
    RENTABILITY_MINE_METAL:
      "Montez votre mine de métal niveau {level} sur {coords}.<br><br>Temps d'économies pour lancer la construction : {economyTime}<br>Coût : {totalCost}",
    RENTABILITY_MINE_CRYSTAL:
      "Montez votre mine de cristal niveau {level} sur {coords}.<br><br>Temps d'économies pour lancer la construction : {economyTime}<br>Coût : {totalCost}",
    RENTABILITY_MINE_DEUTERIUM:
      "Montez votre synthétiseur de deutérium niveau {level} sur {coords}.<br><br>Temps d'économies pour lancer la construction : {economyTime}<br>Coût : {totalCost}",
    RENTABILITY_PLASMA: 'Montez la technologies plasma au niveau {level}.<br><br>Coût des dépendances (Laser/Energie/Ion): {dependenciesCost}<br><br>Coût tech Plasma: {plasmaCost}',
    RETURN_TRIP_DURATION: "Durée d'un aller-retour avec des grands transporteurs",
    TRADE_RATE: "Taux d'échange",
    RESET_ALL_TEXT:
      "Si vous rencontrez des bugs, ou si vous souhaitez rétablir les paramètres par défaut, cliquez sur le bouton ci-dessous pour nettoyer les données de l'extension. Vous devrez revisiter la page des ressources de toutes vos planètes afin d'obtenir une page de statistiques complète, et vous perdrez toutes les annotations faites sur les planètes de vos voisins.",
    TROUBLESHOOTING: 'Vous rencontrez un bug ?',
    RESET: 'Réinitialiser',
    RESET_ALL: "Réinitialiser toutes les données de l'extension OGame UI++",
    RESET_HISTORY:
      "Réinitialise l'historique des scores de tout les joueurs (vous inclu). Vous devrez attendre plusieurs jours avant d'avoir de nouveau des données historiques",
    RESET_NOTES: 'Réinitialise les notes écrites sur les planètes de vos voisins',
    RESET_PLANETINFO:
      'Réinitialise les données de vos planètes (vous devrez revisiter la page des ressources de toutes les planètes de votre empire pour avoir un onglet statistiques rempli)',
    RESET_UNIVERSE:
      "Réinitialise les données de l'univers (planètes, noms des joueurs, classement actuel). Ces données sont récupérées via l'API officielle OGame, qui se met à jour tout les 7 jours",
    UNIT_METAL: 'Métal',
    UNIT_CRYSTAL: 'Cristal',
    UNIT_DEUTERIUM: 'Deutérium',
    UNIT_ENERGY: 'Energie',
    TIME_SECOND: 's',
    TIME_MINUTE: 'm',
    TIME_HOUR: 'h',
    TIME_DAY: 'j',
    ECONOMY_TIME: "Nécéssite {time} d'économies avec échange de ressources",
    BUILDABLE_IN: 'Construction possible dans : {time}',
    ROI: 'Investissement rentable en : {time} à taux {tradeRate}',
    ECONOMY_SCORE: 'Eco',
    ECONOMY_SCORE_LONG: 'Total des points gagnés par ce joueur grâce aux mines : {scoreEco}',
    MILITARY_SCORE: 'Militaire',
    MILITARY_SCORE_LONG: '{scoreMilitary} points militaires ({ships} vaisseaux)',
    COORDINATES: 'Position',
    PLAYER: 'Joueur',
    NOTE: 'Note',
    ACTIONS: 'Actions',
    PLANETS: 'Planètes',
    PLANET_DEFENDED: 'Planète défendue',
    PLANET_NEEDSPY: "Rapport d'espionnage incomplet",
    MENU_NEIGHBOURS_ACTIVE: 'Voisins actifs',
    MENU_NEIGHBOURS_INACTIVE: 'Inactifs proches',
    MENU_STATS: 'Statistiques',
    MENU_COMPETITION: 'Compétition',
    COMPETITION_EXPLAINATION: 'Cette page affiche votre progression comparée à celle d\'autres joueurs ayant un niveau similaire au votre. Les joueurs inactifs, bannis, ou en mode vacance, sont exclus de la compétition. Sont inclus dans la compétition les joueurs ayant un score 30% supérieur ou inférieur au votre lors du premier jour du graphique, ainsi que 30% supérieur ou inférieur au votre lors du dernier jour du graphique. Si votre courbe de progression (en gras blanc) grimpe plus vite que celle des autres, félicitations, vous êtes de ceux qui progressent le plus vite :-) sinon, n\'hésitez pas à prendre contact avec les joueurs qui progressent plus vite, ils pourraient vous partager des astuces... Sinon, regardez comment leur score progresse et espionnez leurs planètes pour tenter de comprendre ce qu\'ils font.',
    MENU_FIGHTSIM: 'Sim. Combat',
    STATS_ALL: 'Statistiques pour toutes les planètes',
    STATS_DAILY: 'Production journalière',
    STATS_RATIO: 'Ratio de production (rapport au '
  },
  en: {
    LAST_UPDATE: 'Last update',
    SHIP_AT_DOCK: 'Ships parked',
    SHIP_AT_DOCK_THRESHOLD: 'Ships parked warning',
    SHIP_AT_DOCK_THRESHOLD_ZERO: 'If there is at least one ship, display icon',
    SHIP_AT_DOCK_THRESHOLD_PERCENT: '{percent}% of military points ({value} - automatically updated)',
    SHIP_AT_DOCK_THRESHOLD_ABSOLUTE: 'Fixed threshold - {value}',
    SHIP_AT_DOCK_THRESHOLD_NEED_UPDATE: 'Visit the fleet page of this planet<br>or moon to update parked ships.',
    RENTABILITY_EXPLAINATION:
      '<span style="font-weight:700">How is rentability computed ?</span><br><br>Assuming the following things :<br> - 1) You configured a trade rate of 3 / 2 / 1<br> - 2) Your overall production is 1000 metal/h, 1000 cristal/h, 1000 deuterium/h.<br> - 3) Your next metal mine level costs 4000 metal, 1000 cristal, and produce 100 more metal/h.<br><br>The cost is worth 5500 "units" (metal is worth 3/3=1 units, crystal is worth 3/2=1.5 units, deuterium is worth 3/1=3 units).<br>The production gain is worth 100 * 3/3 = 100 units.<br>So, the rentability time of your metal mine\'s next level is 5500/100 = 55 hours.<br><br>This is all assuming you can trade your resources at the configured trade rate.<br><br><br>For astrophysics, the total cost is the cost of researching 2 more levels of astrophysics + the cost of building mines up to the median mine levels you have on your existing planets. The production is the final production after the new planet\'s mines will be maxed out. It does not take into account the research time and the building time required to achieve everything.',
    LANGUAGE: 'Language',
    FEEDBACK: 'Feedback',
    FEEDBACK_PLACEHOLDER: 'comment, suggestion, idea or greeting',
    SEND: 'Send',
    CURRENT_STORAGE_TIME: 'Time until full',
    TOTAL_STORAGE_TIME: 'Total storage time',
    NEXT_MOST_RENTABLE_BUILDS: 'Next best ROI',
    RENTABILITY_ASTRO:
      "Level up astrophysics to level {level}, and make a new colony.<br>Level up the new colony's mines to {mineLevel}<br><br>Time for resource-gathering of dependencies (tech/ship) : {dependenciesTime}<br>Cost of dependencies : {dependenciesCost}<br><br>Time for resource-gathering of astrophysics : {astroTime}<br>Cost of astrophysics : {astroCost}<br><br>Time for resource-gathering of mines (total) : {mineEconomyTime}<br>Total mine cost : {mineCost}<br><br>New colony mines ROI : {mineTime}",
    RENTABILITY_MINE_METAL:
      'Level up your metal mine to level {level} on {coords}<br><br>Time for resource-gathering : {economyTime}<br>Cost : {totalCost}',
    RENTABILITY_MINE_CRYSTAL:
      'Level up your crystal mine to level {level} on {coords}<br><br>Time for resource-gathering : {economyTime}<br>Cost : {totalCost}',
    RENTABILITY_MINE_DEUTERIUM:
      'Level up your deuterium synthetizer to level {level} on {coords}<br><br>Time for resource-gathering : {economyTime}<br>Cost : {totalCost}',
    RENTABILITY_PLASMA: 'Level up your plasma tech to level {level}.<br><br>Dependencies cost (Laser/Energy/Ion): {dependenciesCost}<br><br>Plasma cost: {plasmaCost}',
    RETURN_TRIP_DURATION: 'Duration of a return trip with Large Cargo Ship',
    TRADE_RATE: 'Trade rate',
    RESET_ALL_TEXT:
      "If you encounter bugs using this extension, or if you want to restore default settings, click on the button below to clean up all this extension's data. You will need to revisit all your planet's resources page in order to get a properly-filled statistics page, and you will also lose all your neighbours annotations.",
    TROUBLESHOOTING: 'Troubleshooting',
    RESET: 'Reset',
    RESET_ALL: 'Reset all OGame UI++ extension data',
    RESET_HISTORY:
      "Reset the score history of all players (including you). You'll have to wait several days to have historic data again",
    RESET_NOTES: "Reset all the notes you wrote on your neighbours's planets",
    RESET_PLANETINFO:
      "Reset your planet data (you'll need to visit the resource page of all the planets of your empire in order to have a filled statistics tab)",
    RESET_UNIVERSE:
      'Reset all universe data (player names, planet positions, current score). These data are fetched on the official OGame API, which is updated every 7 days',
    UNIT_METAL: 'Metal',
    UNIT_CRYSTAL: 'Crystal',
    UNIT_DEUTERIUM: 'Deuterium',
    UNIT_ENERGY: 'Energy',
    TIME_SECOND: 's',
    TIME_MINUTE: 'm',
    TIME_HOUR: 'h',
    TIME_DAY: 'd',
    ECONOMY_TIME: 'Requires {time} of resource-gathering (with trade)',
    BUILDABLE_IN: 'Buildable in : {time}',
    ROI: 'Return on investment : {time} with trade rate {tradeRate}',
    ECONOMY_SCORE: 'Eco',
    ECONOMY_SCORE_LONG: 'Sum of points spent in mines : {scoreEco}',
    MILITARY_SCORE: 'Military',
    MILITARY_SCORE_LONG: '{scoreMilitary} military points ({ships} ships)',
    COORDINATES: 'Position',
    PLAYER: 'Player',
    NOTE: 'Note',
    ACTIONS: 'Actions',
    PLANETS: 'Planets',
    PLANET_DEFENDED: 'Planet defended',
    PLANET_NEEDSPY: 'Spy report incomplete',
    MENU_NEIGHBOURS_ACTIVE: 'Active neighbours',
    MENU_NEIGHBOURS_INACTIVE: 'Nearby idles',
    MENU_STATS: 'Statistics',
    MENU_COMPETITION: 'Competition',
    COMPETITION_EXPLAINATION: 'This page shows how your score progression compares to other players that have a level similar to yours. Players with inactive or banned status are excluded from the competition, as well as players that are in vacation mode. The chart includes players that had a score 30% above or below yours on the first day of the chart, and players that have a score 30% above or below yours on the last day of the chart. If your line (bold white) progresses faster than the others, congrats, you\'re among the top performers :-) if not, feel free to reach out to other players that are performing better, they might be willing to share some tips... Or try to understand what they are doing by looking at their score progression and the activity of their planets.',
    MENU_FIGHTSIM: 'Fight simulator',
    STATS_ALL: 'Statistics for all planets',
    STATS_DAILY: 'Daily production',
    STATS_RATIO: 'Production ratio (relative to '
  },
  es: {
    UNIT_METAL: 'Metal',
    UNIT_CRYSTAL: 'Cristal',
    UNIT_DEUTERIUM: 'Deuterio',
    UNIT_ENERGY: 'Energía',
    TIME_SECOND: 's',
    TIME_MINUTE: 'm',
    TIME_HOUR: 'h',
    TIME_DAY: 'd',
    ECONOMY_TIME: 'Requiere {time} con intercambio de recursos',
    BUILDABLE_IN: 'Construcción posible en {time}',
    ROI: 'Inversión rentable en {time} a tasa {tradeRate}',
    ECONOMY_SCORE: 'Eco',
    ECONOMY_SCORE_LONG: 'Sumatoria de puntos del jugador por economía {scoreEco}',
    MILITARY_SCORE: 'Militar',
    MILITARY_SCORE_LONG: '{scoreMilitary} puntos militares ({ships} naves)',
    COORDINATES: 'Posición',
    PLAYER: 'Jugador',
    NOTE: 'Nota',
    ACTIONS: ' Acciones',
    PLANETS: 'Planetas',
    PLANET_DEFENDED: 'El Planeta defendió',
    PLANET_NEEDSPY: 'espionaje incompleto',
    MENU_NEIGHBOURS_ACTIVE: 'Vecinos Activos',
    MENU_NEIGHBOURS_INACTIVE: 'Inactivos cercanos',
    MENU_STATS: 'Estadísticas',
    MENU_FIGHTSIM: 'Sim. Combate ',
    'STATS_ALL ': 'Estadísticas para todos los planetas',
    STATS_DAILY: 'Producción diaria',
    STATS_RATIO: 'Relación de producción (en comparación con'
  },
  tr: {
    UNIT_METAL: 'Metal',
    UNIT_CRYSTAL: 'Kristal',
    UNIT_DEUTERIUM: 'Deuterium',
    UNIT_ENERGY: 'Enerji',
    TIME_SECOND: 'sn',
    TIME_MINUTE: 'dk',
    TIME_HOUR: 's',
    TIME_DAY: 'g',
    ECONOMY_TIME: 'Gereken kaynak toplama zamanı (Tüccar ile): {time}',
    BUILDABLE_IN: 'Kurmak için gereken süre: {time}',
    ROI: 'Yatırım dönüşü: {time} - Tüccar ile: {tradeRate}',
    ECONOMY_SCORE: 'Eko',
    ECONOMY_SCORE_LONG: 'Madene harcanan puan toplamı : {scoreEco}',
    MILITARY_SCORE: 'Askeri',
    MILITARY_SCORE_LONG: '{scoreMilitary} askeri puan ({ships} gemi)',
    COORDINATES: 'Pozisyon',
    PLAYER: 'Oyuncu',
    NOTE: 'Not',
    ACTIONS: 'Aksiyonlar',
    PLANETS: 'Gezegenler',
    PLANET_DEFENDED: 'Gezegen korundu',
    PLANET_NEEDSPY: 'Casus raporu eksik',
    MENU_NEIGHBOURS_ACTIVE: 'Aktif Komşular',
    MENU_NEIGHBOURS_INACTIVE: 'İnaktif Komşular',
    MENU_STATS: 'İstatistik',
    MENU_FIGHTSIM: 'Savaş Simulatörü',
    STATS_ALL: 'İstatistik (Tümü)',
    STATS_DAILY: 'Günlük Üretim',
    STATS_RATIO: 'Üretim Oranı (İlişki: '
  },
  de: {
    UNIT_METAL: 'Metall',
    UNIT_CRYSTAL: 'Kristall',
    UNIT_DEUTERIUM: 'Deuterium',
    UNIT_ENERGY: 'Energie',
    TIME_SECOND: 's',
    TIME_MINUTE: 'm',
    TIME_HOUR: 'h',
    TIME_DAY: 't',
    ECONOMY_TIME: 'Benötigt {time} Ressourcen-Sammeln (mit Handel)',
    BUILDABLE_IN: 'Baubar in : {time}',
    ROI: 'Return on investment : {time} mit Handelskurs {tradeRate}',
    ECONOMY_SCORE: 'Eco',
    ECONOMY_SCORE_LONG: 'Summe der Punke in Minen : {scoreEco}',
    MILITARY_SCORE: 'Militär',
    MILITARY_SCORE_LONG: '{scoreMilitary} militärische Punkte ({ships} Schiffe)',
    COORDINATES: 'Position',
    PLAYER: 'Spieler',
    NOTE: 'Notiz',
    ACTIONS: 'Aktionen',
    PLANETS: 'Planeten',
    PLANET_DEFENDED: 'Planet verteidigt',
    PLANET_NEEDSPY: 'Spionagebericht unvollständig',
    MENU_NEIGHBOURS_ACTIVE: 'Aktive Nachbarn',
    MENU_NEIGHBOURS_INACTIVE: 'Inaktive Nachbarn',
    MENU_STATS: 'Statistiken',
    MENU_FIGHTSIM: 'Kampfsimulator',
    STATS_ALL: 'Statistik über alle Planeten',
    STATS_DAILY: 'Tägliche Produktion',
    STATS_RATIO: 'Produktionsverhältnis (relativ zu '
  },
  pl: {
    LANGUAGE: 'Język',
    FEEDBACK: 'Komentarz',
    FEEDBACK_PLACEHOLDER: 'komentarz, sugestia, pomysł lub pozdrowienia',
    SEND: 'Wyślij',
    NEXT_MOST_RENTABLE_BUILDS: 'Następna najlepsza inwestycja',
    NEXT_MOST_RENTABLE_BUILDS_DESCRIPTION:
      'Czas zwrotu inwestycji oparty jest na czasie ukończenia konstrukcji. Nie brany jest tu pod uwagę czas zbierania surowców na tę konstrukcję.',
    RENTABILITY_ASTRO:
      'Ulepsz Astrofizykę to poziomu {level} i załóż nową kolonię.<br>Ulepsz kopalnie nowej kolonii do poziomów	 {mineLevel}<br><br>Czas zbierania surowców dla Astrofizyki : {astroTime}<br>Koszt Astrofizyki : {astroCost}<br><br>Czas zbierania surowców przez kopalnie(całkowity) : {mineEconomyTime}<br>Całkowity koszt kopalnii: {mineCost}<br><br>Czas zwrotu inwestycji z nowej kolonii : {mineTime}',
    RENTABILITY_MINE_METAL:
      'Ulepsz Kopalnię metalu do poziomu {level} na {coords}<br><br>Czas zbierania surowców : {economyTime}<br>Koszt : {totalCost}',
    RENTABILITY_MINE_CRYSTAL:
      'Ulepsz Kopalnię krzyształu do poziomu {level} na {coords}<br><br>Czas zbierania surowców : {economyTime}<br>Koszt : {totalCost}',
    RENTABILITY_MINE_DEUTERIUM:
      'Ulepsz Ekstraktor deuteru do poziomu {level} on {coords}<br><br>Czas zbierania surowców : {economyTime}<br>Koszt : {totalCost}',
    RETURN_TRIP_DURATION: 'Czas podróży w obie strony Dużym Transporterem.',
    TRADE_RATE: 'Kurs wymiany',
    RESET_ALL_TEXT:
      'Jeśli masz problemy z tym rozszerzeniem lub gdy chcesz przywrócić domyślne ustawienia, naciśnij przycisk poniżej aby wyczyścić ustawienia. Będziesz musiał ponownie odwiedzić zakładkę "Surowce" na każdej ze swoich planet aby ponownie odczytać statystyki. Utracisz również wszystkie notatki przypisane planetom!',
    TROUBLESHOOTING: 'Rozwiązywanie problemów',
    RESET: 'Resetuj',
    RESET_ALL: 'Resetuje ustawienia oraz dane w OGame UI++',
    RESET_HISTORY:
      'Resetuje historię wszystkich graczy (twoją również). Będziesz musiał poczekać kilka dni aby zebrać nowe dane',
    RESET_NOTES: 'Resetuje wszystkie notatki przypisane planetom',
    RESET_PLANETINFO:
      'Resetuje dane Twoich planet (będziesz musiał ponownie odwiedzić zakładkę "Surowce" na każdej ze swoich planet aby ponownie odczytać statystyki)',
    RESET_UNIVERSE:
      'Resetuje dane universum (imiona graczy, pozycje planet, aktualne punkty). Te dane są pobierane przez oficjalne API OGame, które są uaktualniane co 7 dni',
    UNIT_METAL: 'Metal',
    UNIT_CRYSTAL: 'Kryształ',
    UNIT_DEUTERIUM: 'Deuter',
    UNIT_ENERGY: 'Energia',
    TIME_SECOND: 's',
    TIME_MINUTE: 'm',
    TIME_HOUR: 'g',
    TIME_DAY: 'd',
    ECONOMY_TIME: 'Wymaga {time} wydobycia (z handlem)',
    BUILDABLE_IN: 'Można  wybudować za: {time}',
    ROI: 'Zwrot inwestycji : {time} po kursie {tradeRate}',
    ECONOMY_SCORE: 'Eko',
    ECONOMY_SCORE_LONG: 'Suma punktów wydanych na kopalnie : {scoreEco}',
    MILITARY_SCORE: 'Wojsko',
    MILITARY_SCORE_LONG: '{scoreMilitary} punktów wojskowych ({ships} statków)',
    COORDINATES: 'Pozycja',
    PLAYER: 'Gracz',
    NOTE: 'Notatka',
    ACTIONS: 'Akcje&nbsp&nbsp',
    PLANETS: 'Planety',
    PLANET_DEFENDED: 'Planeta obroniona',
    PLANET_NEEDSPY: 'Raport szpiegowski niekompletny',
    MENU_NEIGHBOURS_ACTIVE: 'Aktywni gracze',
    MENU_NEIGHBOURS_INACTIVE: 'Nieaktywni gracze',
    MENU_STATS: 'Statystyki',
    MENU_FIGHTSIM: 'Symulator walk',
    STATS_ALL: 'Statystyki wszystkich planet',
    STATS_DAILY: 'Dzienna produkcja',
    STATS_RATIO: 'Współczynnik produkcji (w stosunku do '
  }
};

window._translate = function _translate(key, args) {
  var lang = window.config.language || window.constants.language || 'en';
  if (!translations[lang]) {
    lang = 'en';
  }

  var ret = translations[lang][key] || translations['en'][key] || key;
  for (var k in args) {
    if (args.noBold) {
      ret = ret.replace('{' + k + '}', args[k]);
    } else {
      ret = ret.replace('{' + k + '}', '<span class="boldy">' + args[k] + '</span>');
    }
  }

  return ret;
};
