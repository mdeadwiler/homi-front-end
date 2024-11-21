
export const HostBookings = ({ hostBookings }) => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="flex flex-col space-y-4">
        {hostBookings.length > 0 ? (
          hostBookings.map((booking) => (
            <div
              key={booking.id}
              className="border text-left border-[0.5px] border-gray-300 bg-cardColor rounded-lg p-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-2">
                {booking.prop.title}
              </h2>
              <p className="text-logoColor">
                Booked by: <strong>{booking.guest.first_name}</strong>
              </p>
              <p className="text-logoColor">
                {new Date(booking.check_in_date).toLocaleDateString()} to{" "}
                {new Date(booking.check_out_date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No bookings for your listings.</p>
        )}
      </div>
    </div>
  );
};
