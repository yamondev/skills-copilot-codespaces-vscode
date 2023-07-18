function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: 'MemberController',
    controllerAs: 'memberCtrl',
    bindToController: true
  };
}