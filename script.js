angular.module('vlabs').controller('lab1Controller', ['$scope', 'commandBroker','$rootScope', function ($scope, commandBroker, $rootScope) {
    $scope.heading = "Lab 2";
    $scope.basket = {
        objective1: "Execute ls command"
    };
    $rootScope.theme = 'vintage';

    setTimeout(function () {
        $scope.$broadcast('terminal-output', {
            output: true,
            text: ['Welcome to National Security Database Pentesting Program',
                   '',
                   "Please type 'help' to open a list of commands"],
            breakLine: true
        });
        $scope.$apply();
    }, 100);

    $scope.session = {
        commands: [],
        output: [],
        $scope:$scope
    };

    $scope.$watchCollection(function () { return $scope.session.commands; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-command', n[i]);
        }
        $scope.session.commands.splice(0, $scope.session.commands.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$watchCollection(function () { return $scope.session.output; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-output', n[i]);
        }
        $scope.session.output.splice(0, $scope.session.output.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0];

        try {
            if ($scope.session.context) {
                $scope.session.context.execute($scope.session, cmd.command);
            }
            else {
                commandBroker.execute($scope.session, cmd.command);
            }
        } catch (err) {
            $scope.session.output.push({ output: true, breakLine: true, text: [err.message] });
        }
    });

}]);


.controller('introController',['$scope', 'commandBroker','$rootScope', function ($scope, commandBroker, $rootScope) {
    $scope.heading = "Lab 2";
    $scope.basket = {
        objective1: "Execute ls command"
    };
    $rootScope.theme = 'vintage';

    setTimeout(function () {
        $scope.$broadcast('terminal-output', {
            output: true,
            text: ['Welcome to National Security Database Pentesting Program',
                   '',
                   "Please type 'help' to open a list of commands"],
            breakLine: true
        });
        $scope.$apply();
    }, 100);

    $scope.session = {
        commands: [],
        output: [],
        $scope:$scope
    };

    $scope.$watchCollection(function () { return $scope.session.commands; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-command', n[i]);
        }
        $scope.session.commands.splice(0, $scope.session.commands.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$watchCollection(function () { return $scope.session.output; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-output', n[i]);
        }
        $scope.session.output.splice(0, $scope.session.output.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0];

        try {
            if ($scope.session.context) {
                $scope.session.context.execute($scope.session, cmd.command);
            }
            else {
                commandBroker.execute($scope.session, cmd.command);
            }
        } catch (err) {
            $scope.session.output.push({ output: true, breakLine: true, text: [err.message] });
        }
    });

}])
    
.config(['terminalConfigurationProvider', function (terminalConfigurationProvider) {

    terminalConfigurationProvider.config('vintage').outputDelay = 10;
    terminalConfigurationProvider.config('vintage').allowTypingWriteDisplaying = false;
    terminalConfigurationProvider.config('vintage').typeSoundUrl ='assets/sound/type.wav';
    terminalConfigurationProvider.config('vintage').startSoundUrl ='assets/sound/start.wav';
}])

.config(['commandBrokerProvider', function (commandBrokerProvider) {

commandBrokerProvider.appendCommandHandler({
        command: 'choose',
        description: ['Let me know your wish, by passing the arguments redpill or bluepill'],
        handle: function (session, pill) {
            if (!pill) {
                throw new Error("A parameter is required, 'choose <redpill/bluepill>'.")
            }
            if(pill == "redpill"){
                session.output.push({
                output: true,
                text: ["Taking you forward!"],
                breakLine: true
            });
                setTimeout("location.href = 'getting-started.html#/lab-1';",2500)
            }
            else if(pill == "bluepill")
            {
                session.output.push({
                output: true,
                text: ["You Shall not pass!..Exiting from the program"],
                breakLine: true
            });
            
            alert("You have taken the blue pill!", setTimeout("location.href = 'http://www.google.com/search?q=red+pill+blue+pill';",2500));
            }
        }
    }); 
}])

.controller('lab1Controller', ['$scope', 'commandBroker','$rootScope', function ($scope, commandBroker, $rootScope) {
    $scope.heading = "Lab 2";
    $scope.basket = {
        objective1: "Execute ls command"
    };
    $rootScope.theme = 'vintage';

    setTimeout(function () {
        $scope.$broadcast('terminal-output', {
            output: true,
            text: ['Welcome to National Security Database Pentesting Program',
                   '',
                   "Please type 'help' to open a list of commands"],
            breakLine: true
        });
        $scope.$apply();
    }, 100);

    $scope.session = {
        commands: [],
        output: [],
        $scope:$scope
    };

    $scope.$watchCollection(function () { return $scope.session.commands; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-command', n[i]);
        }
        $scope.session.commands.splice(0, $scope.session.commands.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$watchCollection(function () { return $scope.session.output; }, function (n) {
        for (var i = 0; i < n.length; i++) {
            $scope.$broadcast('terminal-output', n[i]);
        }
        $scope.session.output.splice(0, $scope.session.output.length);
        $scope.$$phase || $scope.$apply();
    });

    $scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0];

        try {
            if ($scope.session.context) {
                $scope.session.context.execute($scope.session, cmd.command);
            }
            else {
                commandBroker.execute($scope.session, cmd.command);
            }
        } catch (err) {
            $scope.session.output.push({ output: true, breakLine: true, text: [err.message] });
        }
    });

}]);