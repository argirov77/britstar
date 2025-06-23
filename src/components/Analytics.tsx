// src/components/Analytics.js
'use client';
import React from 'react';
import config from '../config/index.json';

const Analytics = () => {
  const { company } = config;
  const { name: companyName } = company;

  return (
    <footer id="contact" className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Contact Us
        </h2>

        <p className="text-lg font-medium text-gray-900">
          <a href="mailto:main@britstar.online" className="text-primary hover:underline">
            main@britstar.online
          </a>
        </p>

        <address className="mt-2 not-italic text-gray-700 leading-relaxed">
          Hyde Park Hayes 3, 5th Floor<br />
          11 Millington Road, Hayes<br />
          London, United Kingdom, UB3 4AZ
        </address>

        <p className="mt-6 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Analytics;
