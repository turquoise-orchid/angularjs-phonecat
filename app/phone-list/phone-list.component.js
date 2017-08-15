angular
	.module("phoneList")
	.component("phoneList", {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: [ "$http",
			function PhoneListCtrl($http) {
				var self = this;
				self.orderProp = 'age';
				$http.get('phones/phones.json').then(function(respond) {
					self.phones = respond.data;
				});
			}
		]	
	});