﻿import React from 'react';

export const Huntington = () => (
  <div className=" max-w-md mx-auto bg-gray-100 sm:max-w-xl">
    <h1 className="text-4xl font-bold text-center text-blue-800">
      Vacation Hopes!
    </h1>
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden sm:mt-8">
      <img
        className="h-32 flex-shrink-0"
        src="property.jpg"
        alt="All our properties"
      />
      <div className="px-3 py-2">
        <h3 className="text-lg font-semibold text-gray-800">
          Huntington Beach
        </h3>
        <p className="text-gray-600">499.00 / night average</p>
        <div className="mt-4 bg-">
          <a
            className="text-gray-200 hover:text-indigo-400 font-semibold text-xs bg-gray-400 px-2 py-2"
            href="https://unsplash.com/@ralphkayden?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Ralph Kayden"
          >
            <span style={{ display: 'inline-block', padding: '2px 3px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: '12px',
                  width: 'auto',
                  position: 'relative',
                  verticalAlign: 'middle',
                  top: '-2px',
                  fill: 'white',
                }}
                viewBox="0 0 32 32"
              >
                <title>unsplash-logo</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
            </span>
            <span style={{ display: 'inline-block', padding: '2px 3px' }}>
              Photo by Ralph Kayden
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
