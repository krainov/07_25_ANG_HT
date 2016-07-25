'use strict';

module.exports = function(message) {
    let app = angular.module('myApp', []);

    let mails = [{
        date: '21.07.2016 09:30',
        from: "ivanov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }, {
        date: '21.07.2016 10:00',
        from: "petrov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }, {
        date: '21.07.2016 11:00',
        from: "sidorov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',

    }, {
        date: '21.07.2016 12:00',
        from: "petrov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }, {
        date: '21.07.2016 13:00',
        from: "sidorov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }, {
        date: '21.07.2016 14:00',
        from: "petrov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }, {
        date: '20.07.2016 15:00',
        from: "sidorov@mail.ru",
        to: 'me@mail.ru',
        subject: 'subject 7',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',

    }];

    app
        .component('mailbox', {
            templateUrl: 'mailbox.html',
            controller: function() {
                this.mails = mails;
            }
        });
};