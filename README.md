# PicShare

Note : dans cette application, j'ai utilisé NGRX : ça sera l'occasion également, pour vous, de prendre de l'avance sur le prochain TP pour voir comment cela fonctionne.

Notez également que NGRX **ne sera pas** au partiel (ou alors vous n'aurez pas à y toucher).

## Consignes
L'application telle quelle ne fonctionne pas : en effet, un sagouin (moi) a saboté tout le code pour que plus rien ne compile.
Pour le moment, deux fonctionnalités seulement existent : la connexion et l'inscription.  Votre but est d'arriver à corriger l'application pour qu'elles fonctionnent.

Pour vous adonner à ce passionant exercice, faites un `git pull` sur le projet, lancez un `npm install` (ou yarn si vous utilisez yarn), créez une branche à votre nom, et travaillez sur cette nouvelle branche. Faites une *pull request* quand vous pensez avoir terminé.

Le back est un `json-server` comme vu en TP. Il faut l'utiliser avec le fichier situé dans `src/db/`.

Ci-après, la liste des choses à corriger.

### Les routes
Pour commencer, le routing ne fonctionne pas. Vous aurez beau essayer d'accéder à la page de connexion et / ou d'inscription, vous allez vous prendre des erreurs dans la console (si déjà cela compile). Pour corriger cela, regardez comment nous avons fait dans le TP "Notes" tout au long du premier semestre.

### La page d'accueil
Le module pour la page d'accueil n'existe pas. C'est dommage. Il va falloir le créer.
De plus, la page d'accueil devrait afficher un message "en construction".
Pensez également au routing.

### La page de login
Ho non : les services `AuthService` et `NavigationService` ne sont pas injectés. 

C'est terrible\
![thanks obama](https://media.giphy.com/media/12O2XuGsIx1OvK/giphy.gif)

La méthode `goToRegister` n'est pas implémentée (une seule ligne de code devrait suffire).

Les messages d'attente et d'erreur ne sont jamais affichés ! Cela devrait se faire dans la méthode `submit`. Pour vous aider, regardez ce que renvoie la méthode `authenticate` du service `AuthService`.

### La page d'inscription
Même combat.

### Les models
Dans `user.model.ts`, il faut implémenter la méthode `of` de la classe `User`.

### Les composants partagés
Le composant `MailPasswordForm` ne fonctionne pas. Il faut :

- lier le formulaire HTML au `FormGroup` du composant (Reactive Forms) ;
- afficher un message d'erreur sous chacun des champs et pour chaque règle de validation non-respectée ;
- désactiver le bouton d'envoi tant que l'un des champs est invalide ou que le formulaire est `pending`.

### Les services
Ici, nous avons une structure un peu particulière : nous avons un `NavigationService` pour gérer toutes les actions de navigation, et nous avons également un `ApiAuthService` et un `AuthService`. Le premier sert pour les appels au back, tandis que le second sert pour mettre à jour le store NGRX.

Comme nous n'avons pas encore vu NGRX, vous n'aurez pas à toucher au second.

#### ApiAuthService
Utilisez les méthodes `pipe` et `map` (RXJS) et `User.of` afin de retourner des valeurs du type attendu. 

### Les guards
Nous n'avons pas encore vu les Guards ! En Angular, un Guard est une sécurité afin d'empêcher les visiteurs non-autorisés d'accéder à certaines pages de votre site / web app. Vous trouverez la documentation [ici](https://angular.io/guide/router#preventing-unauthorized-access).
Deux Guards existent dans le SharedModule : `AuthGuard` et `UnauthGuard`, mais aucun ne fonctionne.

#### AuthGuard
Le premier soucis est que AuthGuard n'a pas de `authService` d'injecté, ni de `router`. Corrigez cela.

L'autre soucis est que AuthGuard, pour le moment, ne laisse passer personne, alors qu'il ne faudrait laisser passer que les utilisateurs et utilisatrices qui sont authentifié.e.s, et rediriger les autres vers la page de login.
En utilisant les fonctionnalités de filtrage des [Observables](https://rxjs.dev/guide/observable), corrigez cela. 

#### UnauthGuard
Même combat, sauf que la condition de redirection est inversée.
