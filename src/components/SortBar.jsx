import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/sub_services/apiConfig';
import services from '../services/index.js'

export function SortBar({ setListings, setSorting }) {

  let location = useLocation()
  const navigate = useNavigate()

  const [filterData, setFilterData] = useState('');
  const [sortData, setSortData] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const restoreListings = () => {
    console.log('restoring listings')
    setSorting(false)
    setFilterData('')
    setSortData('')
    setCheckInDate('')
    setCheckOutDate('')
    window.history.replaceState({}, document.title, window.location.pathname);
    // navigate("/listings", { replace: true, state: null })
  };

  const handleFilterChange = (e) => {
    setFilterData(e.target.value);
    fetchProperties({ type: e.target.value });
    setSorting(true)
  };

  const handleSortChange = (e) => {
    setSortData(e.target.value);
    fetchProperties({ sort: e.target.value });
    setSorting(true)
  };

  const handleCheckInChange = (e) => setCheckInDate(e.target.value);
  const handleCheckOutChange = (e) => setCheckOutDate(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (checkInDate && checkOutDate) {
      fetchProperties({ start_date: checkInDate, end_date: checkOutDate });
      setSorting(true)
    }
  };

  const fetchProperties = async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const sortedProperties = await services.getProperties(queryString);
    console.log('response in sortbar', sortedProperties)
    setListings(sortedProperties);
  };


  return (
    <section id="sort-bar-section" className="w-full p-4 mb-6 rounded-lg bg-alternativeColor shadow-md">
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

        {/* Search Button - aligned to the right */}
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className="mr-auto px-6 py-2 bg-buttonColor text-lightTextColor rounded-md hover:bg-darkColor focus:outline-none"
        >
          Search by Availability
        </button>

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


        <button
          type="submit"
          onClick={restoreListings}
          className="ml-auto px-6 py-2 bg-buttonColor text-lightTextColor rounded-md hover:bg-darkColor focus:outline-none"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
