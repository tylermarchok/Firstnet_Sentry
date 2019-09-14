import {emergencyDetails} from './assets/emergencyEvents/emergencyEvents.js/'

global.dispatch = {
    dispatched: false,
    latitude: {
      value: 0,
      direction: 'n'
    },
    ongitude: {
      value: 0,
      direction: 'w'
    },
    batch: 0, //Value assigned to building
    room: 0, //Value assigned to room in building
    get state () {
        if (this.dispatched === false)
        {
            return 'Not currently dispatched to emergency'
        } else {
            return 'Currently dispatched'
        }
    },
    get tabRoom () {
        if (this.dispatched === true)
        {
            return this.room;
        } else {
            return 'No current dispatch';
        }
    },
    getDispatch () {

    },
    qrCode: '',
    doorStatus: 'Closed'
  };

global.emergencyDetails = [
  {
    "name": "Domestic Abuse",
    "caller gender": "Male",
    "address": "1075 Wooded Crest Drive",
    "sentrySecured": "SENTRY Secured",
    "outsideqr": "abc"
  },
  {
    "name": "School Shooter",
    "caller gender": "Female",
    "address": "720 Northwestern Ave",
    "sentrySecured": "Not SENTRY Secured",
    "outsideqr": "abc"
  },
  {
    "name": "Fire",
    "caller gender": "Male",
    "address": "50 Nimitz Drive",
    "sentrySecured": "SENTRY Secured",
    "outsideqr": "abc"
  }
][Math.floor(Math.random() * 3)]

global.location = {
    latitude: {
      value: 0,
      direction: 'n'
    },
    longitude: {
      value: 0,
      direction: 'w'
    },
    getLocation () {
  
    }
  };