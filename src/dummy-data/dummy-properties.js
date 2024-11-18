const dummyProperties = [
    {
        "id": 1,
        "title": "House in New York, NY",
        "user": 1,
        "description": "This is a description for Property 1.",
        "price_per_night": 137,
        "max_guests": 4,
        "property_type": "CA",
        "amenities": [
            "Dishes and Silverware",
            "Parking",
            "TV",
            "Kitchen",
            "WiFi",
            "Hot Tub",
            "Pool",
            "Heating",
            "Air Conditioning"
        ],
        "is_active": true,
        "cleaning_fee": 28,
        "cancellation_policy": "Non-Refundable"
    },
    {
        "id": 2,
        "title": "House in Los Angeles, CA",
        "user": 1,
        "description": "This is a description for Property 2.",
        "price_per_night": 189,
        "max_guests": 6,
        "property_type": "LU",
        "amenities": [
            "Gym",
            "Hair Dryer",
            "Patio",
            "WiFi"
        ],
        "is_active": true,
        "cleaning_fee": 23,
        "cancellation_policy": "Moderate"
    },
    {
        "id": 3,
        "title": "House in Austin, TX",
        "user": 1,
        "description": "This is a description for Property 3.",
        "price_per_night": 309,
        "max_guests": 10,
        "property_type": "PR",
        "amenities": [
            "Hair Dryer",
            "Backyard",
            "WiFi",
            "Smoke Alarm",
            "Hot Tub",
            "Dishwasher"
        ],
        "is_active": true,
        "cleaning_fee": 50,
        "cancellation_policy": "Non-Refundable"
    },
    {
        "id": 4,
        "title": "House in Seattle, WA",
        "user": 1,
        "description": "This is a description for Property 4.",
        "price_per_night": 324,
        "max_guests": 8,
        "property_type": "VA",
        "amenities": [
            "Pool",
            "Hot Tub",
            "Gym",
            "Board Games",
            "Smoke Alarm",
            "Dishwasher",
            "Self check-in",
            "Patio"
        ],
        "is_active": true,
        "cleaning_fee": 39,
        "cancellation_policy": "Flexible"
    },
    {
        "id": 5,
        "title": "House in Chicago, IL",
        "user": 1,
        "description": "This is a description for Property 5.",
        "price_per_night": 430,
        "max_guests": 10,
        "property_type": "SH",
        "amenities": [
            "Bathtub",
            "Washer and Dryer",
            "Backyard",
            "Gym",
            "Kitchen",
            "Air Conditioning",
            "Board Games",
            "Smoke Alarm",
            "Hair Dryer",
            "Heating"
        ],
        "is_active": true,
        "cleaning_fee": 32,
        "cancellation_policy": "Super Strict 60 Days"
    },
    {
        "id": 6,
        "title": "House in Austin, TX",
        "user": 1,
        "description": "This is a description for Property 6.",
        "price_per_night": 493,
        "max_guests": 1,
        "property_type": "VA",
        "amenities": [
            "Board Games",
            "Conditioner",
            "Parking",
            "Gym"
        ],
        "is_active": true,
        "cleaning_fee": 19,
        "cancellation_policy": "Super Strict 60 Days"
    }
]


const dummyAddresses = [
    {
        "prop": 1,
        "street": "9656 Main St",
        "city": "New York",
        "state": "NY",
        "zip_code": "70187",
        "country": "United States",
        "latitude": 37.107286,
        "longitude": -91.172547
    },
    {
        "prop": 2,
        "street": "3593 Main St",
        "city": "Los Angeles",
        "state": "CA",
        "zip_code": "86300",
        "country": "United States",
        "latitude": 31.580309,
        "longitude": -76.071971
    },
    {
        "prop": 3,
        "street": "6068 Main St",
        "city": "Austin",
        "state": "TX",
        "zip_code": "13200",
        "country": "United States",
        "latitude": 32.910986,
        "longitude": -121.862993
    },
    {
        "prop": 4,
        "street": "2473 Main St",
        "city": "Seattle",
        "state": "WA",
        "zip_code": "13100",
        "country": "United States",
        "latitude": 39.503481,
        "longitude": -123.985622
    },
    {
        "prop": 5,
        "street": "4665 Main St",
        "city": "Chicago",
        "state": "IL",
        "zip_code": "56067",
        "country": "United States",
        "latitude": 47.066973,
        "longitude": -73.220544
    },
    {
        "prop": 6,
        "street": "9135 Main St",
        "city": "Austin",
        "state": "TX",
        "zip_code": "14378",
        "country": "United States",
        "latitude": 36.882826,
        "longitude": -124.294191
    }
]

export { dummyProperties, dummyAddresses }