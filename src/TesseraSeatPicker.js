import React from 'react';
import SeatPicker from 'react-seat-picker';
import PropTypes from 'prop-types';

const TesseraSeatPicker = ({
  rows,
  maxReservableSeats = 0,
  alpha = false,
  addSeatCallback,
  removeSeatCallback = null,
  visible = true,
  selectedByDefault = false,
  loading = false,
  ...props
}) => {
  return (
    <div className="tessera-seat-picker">
      <SeatPicker
        rows={rows}
        maxReservableSeats={maxReservableSeats}
        alpha={alpha}
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        visible={visible}
        selectedByDefault={selectedByDefault}
        loading={loading}
        {...props} // Spread the remaining props to allow full functionality
      />
    </div>
  );
};

// Define PropTypes to match those of SeatPicker
TesseraSeatPicker.propTypes = {
  rows: PropTypes.array.isRequired,
  maxReservableSeats: PropTypes.number,
  alpha: PropTypes.bool,
  addSeatCallback: PropTypes.func.isRequired,
  removeSeatCallback: PropTypes.func,
  visible: PropTypes.bool,
  selectedByDefault: PropTypes.bool,
  loading: PropTypes.bool,
};

export default TesseraSeatPicker;
