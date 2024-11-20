import { useState } from 'react';
import api from '../services/sub_services/apiConfig';

function SortBar({ setListings }) {
  const [filterData, setFilterData] = useState('');
  const [sortData, setSortData] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleFilterChange = (e) => {
    setFilterData(e.target.value);
    fetchProperties({ type: e.target.value });
  };

  const handleSortChange = (e) => {
    setSortData(e.target.value);
    fetchProperties({ sort: e.target.value });
  };

  const handleCheckInChange = (e) => setCheckInDate(e.target.value);
  const handleCheckOutChange = (e) => setCheckOutDate(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (checkInDate && checkOutDate) {
      fetchProperties({ start_date: checkInDate, end_date: checkOutDate });
    }
  };

  const fetchProperties = async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await api.get(`/properties/?${queryString}`);
    setListings(response.data);
  };

  return (
    <section id="sort-bar-section" className="w-full p-4 bg-backgroundColor shadow-md">
      {/* Main sort bar container */}
      <div className="flex flex-wrap justify-between items-center gap-4">

        {/* Date form section */}
        <form
          id="date-form"
          onSubmit={handleSearchSubmit}
          className="flex items-center gap-4"
        >
          <input
            required
            type="date"
            name="check_in"
            placeholder="Check In"
            value={checkInDate}
            onChange={handleCheckInChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
          <input
            required
            type="date"
            name="check_out"
            placeholder="Check Out"
            value={checkOutDate}
            onChange={handleCheckOutChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </form>

        {/* Filter form section */}
        <form id="filter-form" className="flex items-center gap-4">
          <select
            id="filter-select"
            name="filter"
            onChange={handleFilterChange}
            value={filterData}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          >
            <option value="" disabled>---Filter---</option>
            <option value="EN">Entire Place</option>
            <option value="PR">Private Room</option>
            <option value="SH">Shared Room</option>
            <option value="VA">Vacation Home</option>
            <option value="LO">Loft</option>
            <option value="HO">Hostel</option>
            <option value="MA">Mansion</option>
            <option value="VI">Villa</option>
            <option value="CA">Castle</option>
            <option value="LU">Luxury Apartment</option>
          </select>
        </form>

        {/* Sort form section */}
        <form id="sort-form" className="flex items-center gap-4">
          <select
            id="sort-select"
            name="sort"
            onChange={handleSortChange}
            value={sortData}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          >
            <option value="" disabled>---Sort---</option>
            <option value="price">Maximum Price (highest first)</option>
            <option value="guests">By Maximum Number of Guests (most first)</option>
          </select>
        </form>

        {/* Search Button - aligned to the right */}
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className="ml-auto px-6 py-2 bg-primaryColor text-white rounded-md hover:bg-primaryColorDark focus:outline-none"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default SortBar;
