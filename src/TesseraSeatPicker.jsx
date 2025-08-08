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
  seatStyle = {},
  stageStyle = {},
  containerClassName = '',
  stageClassName = '',
  ...props
}) => {
  return (
    <div className={`seats ${containerClassName}`}>
      <div className={`stages ${stageClassName}`} style={stageStyle}>
        <h3 className="stage">Stage</h3>
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
  seatStyle: PropTypes.object, // Custom styles for seats
  stageStyle: PropTypes.object, // Custom styles for the stage
  containerClassName: PropTypes.string, // Custom class for the container
  stageClassName: PropTypes.string, // Custom class for the stage
};

export default TesseraSeatPicker;
