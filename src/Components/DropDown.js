import React, { useState } from 'react';

export default function DropDown() {
    let countries = [
        { name: 'India', value: 'In', cities: ['Mumbai', 'Delhi'] },
        { name: 'Pakistan', value: 'Pak', cities: ['Lahore', 'Karachi'] },
        { name: 'Bangladesh', value: 'Ban', cities: ['Dhaka'] }
    ];
    const [selectedCountryIndex, setSelectedCountryIndex] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (e) => {
        const selectedIndex = e.target.value;
        setSelectedCountryIndex(selectedIndex);
        setSelectedCity('');
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <>
            <div className="App mx-2 my-2">
                <select value={selectedCountryIndex} onChange={handleCountryChange}>
                    <option value="">Select a Country</option>
                    {countries.map((item, index) => (
                        <option key={item.value} value={index}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value="">Select a City</option>
                    {selectedCountryIndex !== '' &&
                        countries[selectedCountryIndex].cities.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                </select>
            </div>
        </>
    );
}
