"use strict";
var phonecatApp = angular.module("phonecatApp", []);
phonecatApp.controller("PhoneListCtrl", function PhoneListCtrl($scope) {
	$scope.phones = [
	{
		name: "Nexus S",
		description: "Fast just got faster with Nexus S."
	},
	{
		name: "Motorola XOOM™ with Wi-Fi",
		description: "The Next, Next Generation tablet."
	},
	{
		name: "MOTOROLA XOOM™",
		description: "The Next, Next Generation tablet"
	}];
});