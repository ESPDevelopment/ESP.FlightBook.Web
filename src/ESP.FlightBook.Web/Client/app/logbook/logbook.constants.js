﻿(function () {
    'use strict';

    // Add constants to the module
    angular
        .module('app.logbook')

        // Define constants for the auth module
        .constant('LOGBOOK_CONSTANT', {
            AIRCRAFT_PER_PAGE: 10,
            EVENT_LOGBOOKS_UPDATED: 'event:logbooks-updated',
            EVENT_LOGBOOK_SELECTED: 'event:logbook-selected',
            EVENT_SIGNIN_SUCCESSFUL: 'event:account-signinSuccessful',
            EVENT_SIGNOUT_SUCCESSFUL: 'event:account-signoutSuccessful',
            FLIGHTS_PER_PAGE: 10,
            KEY_PREFERENCE_DATA: 'PreferenceData',
            MSG_CACHE_FLUSHED: 'Cache flushed',
            MSG_APPROACH_ADDED: 'Approach added',
            MSG_APPROACH_ADD_ERROR: 'Unable to add approach',
            MSG_APPROACH_DELETED: 'Approach deleted',
            MSG_APPROACH_DELETE_ERROR: 'Unable to delete approach',
            MSG_APPROACH_GET_ERROR: 'Unable to retrieve approach information',
            MSG_APPROACH_QUERY_ERROR: 'Unable to retrieve approaches',
            MSG_APPROACH_UPDATED: 'Approach information updated',
            MSG_APPROACH_UPDATE_ERROR: 'Unable to update approach information',
            MSG_AIRCRAFT_ADDED: 'Aircraft added',
            MSG_AIRCRAFT_ADD_ERROR: 'Unable to add aircraft',
            MSG_AIRCRAFT_DELETED: 'Aircraft deleted',
            MSG_AIRCRAFT_DELETE_ERROR: 'Unable to delete aircraft',
            MSG_AIRCRAFT_GET_ERROR: 'Unable to retrieve aircraft information',
            MSG_AIRCRAFT_SUMMARY_GET_ERROR: 'Unable to retrieve aircraft summary',
            MSG_AIRCRAFT_QUERY_ERROR: 'Unable to retrieve aircraft',
            MSG_AIRCRAFT_UPDATED: 'Aircraft information updated',
            MSG_AIRCRAFT_UPDATE_ERROR: 'Unable to update aircraft information',
            MSG_CERTIFICATE_ADDED: 'Certificate added',
            MSG_CERTIFICATE_ADD_ERROR: 'Unable to add certificate',
            MSG_CERTIFICATE_DELETED: 'Certificate deleted',
            MSG_CERTIFICATE_DELETE_ERROR: 'Unable to delete certificate',
            MSG_CERTIFICATE_GET_ERROR: 'Unable to retrieve certificate information',
            MSG_CERTIFICATE_QUERY_ERROR: 'Unable to retrieve certificates',
            MSG_CERTIFICATE_UPDATED: 'Certificate information updated',
            MSG_CERTIFICATE_UPDATE_ERROR: 'Unable to update certificate information',
            MSG_CURRENCY_ADDED: 'Currency added',
            MSG_CURRENCY_ADD_ERROR: 'Unable to add currency',
            MSG_CURRENCY_DELETED: 'Currency deleted',
            MSG_CURRENCY_DELETE_ERROR: 'Unable to delete currency',
            MSG_CURRENCY_GET_ERROR: 'Unable to retrieve currency information',
            MSG_CURRENCY_QUERY_ERROR: 'Unable to retrieve currency list',
            MSG_CURRENCY_UPDATED: 'Currency information updated',
            MSG_CURRENCY_UPDATE_ERROR: 'Unable to update currency information',
            MSG_ENDORSEMENT_ADDED: 'Endorsement added',
            MSG_ENDORSEMENT_ADD_ERROR: 'Unable to add endorsement.',
            MSG_ENDORSEMENT_DELETED: 'Endorsement deleted',
            MSG_ENDORSEMENT_DELETE_ERROR: 'Unable to delete endorsement',
            MSG_ENDORSEMENT_GET_ERROR: 'Unable to retrieve endorsement information',
            MSG_ENDORSEMENT_QUERY_ERROR: 'Unable to retrieve endorsements',
            MSG_ENDORSEMENT_UPDATED: 'Endorsement information updated.',
            MSG_ENDORSEMENT_UDPATE_ERROR: 'Unable to update endorsement information',
            MSG_FLIGHT_ADDED: 'Flight added',
            MSG_FLIGHT_ADD_ERROR: 'Unable to add flight',
            MSG_FLIGHT_DELETED: 'Flight deleted',
            MSG_FLIGHT_DELETE_ERROR: 'Unable to delete flight',
            MSG_FLIGHT_GET_ERROR: 'Unable to retrieve flight information',
            MSG_FLIGHT_QUERY_ERROR: 'Unable to retrieve flights',
            MSG_FLIGHT_UPDATED: 'Flight information updated',
            MSG_FLIGHT_UDPATE_ERROR: 'Unable to update flight information',
            MSG_HOURS_SUMMARY_GET_ERROR: 'Unable to retrieve hours summary',
            MSG_LANDINGS_SUMMARY_GET_ERROR: 'Unable to retrieve landings summary',
            MSG_LOGBOOK_ADDED: 'Logbook created',
            MSG_LOGBOOK_ADD_ERROR: 'Unable to create logbook',
            MSG_LOGBOOK_DELETED: 'Logbook deleted',
            MSG_LOGBOOK_DELETE_ERROR: 'Unable to delete logbook',
            MSG_LOGBOOK_GET_ERROR: 'Unable to retrieve logbook information',
            MSG_LOGBOOK_QUERY_ERROR: 'Unable to retrieve logbooks',
            MSG_LOGBOOK_UPDATED: 'Logbook information updated',
            MSG_LOGBOOK_UPDATE_ERROR: 'Unable to update logbook information',
            MSG_PILOT_GET_ERROR: 'Unable to retrieve pilot information',
            MSG_PILOT_UPDATED: 'Pilot information updated.',
            MSG_PILOT_UPDATE_ERROR: 'Unable to update pilot information.',
            MSG_RATING_ADDED: 'Rating added',
            MSG_RATING_ADD_ERROR: 'Unable to add rating',
            MSG_RATING_GET_ERROR: 'Unable to retrieve rating information',
            MSG_RATING_DELETED: 'Rating deleted',
            MSG_RATING_DELETE_ERROR: 'Unable to delete rating',
            MSG_RATING_QUERY_ERROR: 'Unable to retrieve ratings',
            MSG_RATING_UPDATED: 'Rating information updated',
            MSG_RATING_UPDATE_ERROR: 'Unable to update rating',
            PATH_LOGBOOK_PATHS: ['/pilot', '/aircraft', '/flights', '/summary', '/currency'],
            PATH_DEFAULT_ANONYMOUS: '/home',
            PATH_DEFAULT_WHEN_NOT_SELECTED: '/logbooks',
            PATH_DEFAULT_WHEN_SELECTED: '/summary',
            TEMPLATE_URL_AIRCRAFT: '/app/logbook/aircraft/_aircraft.html',
            TEMPLATE_URL_AIRCRAFT_SUMMARY: '/app/logbook/summary/_aircraftSummary.html',
            TEMPLATE_URL_CERTIFICATES: '/app/logbook/pilot/_certificates.html',
            TEMPLATE_URL_CURRENCIES: '/app/logbook/currency/_currencies.html',
            TEMPLATE_URL_ENDORSEMENTS: '/app/logbook/pilot/_endorsements.html',
            TEMPLATE_URL_HOURS_BY_CONDITION: '/app/logbook/summary/_hoursbyCondition.html',
            TEMPLATE_URL_HOURS_BY_PILOTING_TIME: '/app/logbook/summary/_hoursByPilotingTime.html',
            TEMPLATE_URL_LANDINGS_AND_APPROACHES: '/app/logbook/summary/_landingsAndApproaches.html',
            TEMPLATE_URL_PILOT: '/app/logbook/pilot/_pilotInfo.html',
            TXT_SELECT_LOGBOOK: '(Select a Logbook)'
    });
})();