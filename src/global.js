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