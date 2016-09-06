angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	// Podemos declarar as views usando a maneira 'Nested'
	// Onde primeiro declaramos o pai...
	$stateProvider
		.state('home', {
			url: '/home',
			views: {
				'principal': {
					templateUrl: '/templates/home.html'
				}
			}
		})
		// ... e logo em seguida extendemos os filhos
		.state('home.list', {
			url: '/list',
			views: {
				// Repare que esta view está dentro do /templates/home.html
				'insidehome': {
					template: '<ul><li ng-repeat="dog in dogs">{{ dog }}</li></ul>',
					controller: function($scope) {
						$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
					}
				}
			}
		})
		// repare que assim, a rota abaixo mesmo tendo url /paragraph
		// sua rota absoluta é /home/paragraph
		.state('home.paragraph', {
			url: '/paragraph',
			views: {
				'insidehome': {
					template: 'I could sure use a drink right now.'
				}
			}
		})

		// outra rota como qualquer outra
		.state('about', {
			url: '/about',
			views: {
				'principal': {
					template: '<h2>Sobre</h2><p>Esta rota está adjacente à rota "home".</p>'
				}
			}
		});
});
