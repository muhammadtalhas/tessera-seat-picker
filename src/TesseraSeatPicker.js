// src/TesseraSeatPicker.js
import React from 'react';
import SeatPicker from 'react-seat-picker';
import PropTypes from 'prop-types';
import './TesseraSeatPicker.css';

const TesseraSeatPicker = ({
  rows,
  maxReservableSeats,
  alpha,
  addSeatCallback,
  removeSeatCallback,
  visible,
  selectedByDefault,
  loading,
  ...props
}) => {
  return (
    <div className="seats">
        <div className="screens">
          <h3 className="screen">Stage</h3>
        </div>
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

TesseraSeatPicker.defaultProps = {
  maxReservableSeats: 0,
  alpha: false,
  removeSeatCallback: null,
  visible: true,
  selectedByDefault: false,
  loading: false,
};

export default TesseraSeatPicker;
