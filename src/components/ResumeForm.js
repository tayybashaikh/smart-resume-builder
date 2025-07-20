import React from 'react';

function ResumeForm() {
  return (
    <div className="p-6 bg-white max-w-xl mx-auto mt-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Resume Details</h2>

      <form>
        <div className="mb-4">
          <label className="block text-gray-600">Full Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Phone Number</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Education</label>
          <textarea className="w-full border rounded px-3 py-2"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Skills</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Experience</label>
          <textarea className="w-full border rounded px-3 py-2"></textarea>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generate Resume
        </button>
      </form>
    </div>
  );
}

export default ResumeForm;