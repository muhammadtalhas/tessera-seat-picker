import React from 'react';
import SeatPicker from 'react-seat-picker';
import PropTypes from 'prop-types';
import './TesseraSeatPicker.css';

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

// Custom PropTypes validator to ensure each seat has an id
const seatShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  number: PropTypes.number.isRequired,
  tooltip: PropTypes.string,
  isReserved: PropTypes.bool,
});

const rowShape = PropTypes.arrayOf(
  PropTypes.oneOfType([seatShape, PropTypes.oneOf([null])])
);

TesseraSeatPicker.propTypes = {
  rows: PropTypes.arrayOf(rowShape).isRequired,
  maxReservableSeats: PropTypes.number,
  alpha: PropTypes.bool,
  addSeatCallback: PropTypes.func.isRequired,
  removeSeatCallback: PropTypes.func,
  visible: PropTypes.bool,
  selectedByDefault: PropTypes.bool,
  loading: PropTypes.bool,
};

export default TesseraSeatPicker;
