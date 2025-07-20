import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    degree: "",
    year: "",
    programmingSkills: "",
    technicalSkills: "",
    otherSkills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Smart Resume Builder</h1>
        <p className="text-center text-gray-600 mb-8">
          Create your professional resume with AI suggestions
        </p>

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 1: Personal Info</h2>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your full name" />

            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your email" />

            <label className="block text-gray-700">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your phone number" />

            <button onClick={nextStep}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">Next</button>
          </div>
        )}

        {/* Step 2: Education */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 2: Education</h2>

            <label className="block text-gray-700">Institution</label>
            <input type="text" name="institution" value={formData.institution} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Your school or college" />

            <label className="block text-gray-700">Degree</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Your degree name" />

            <label className="block text-gray-700">Passing Year</label>
            <input type="text" name="year" value={formData.year} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. 2023" />

            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Back</button>
              <button onClick={nextStep} className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {/* ✅ Step 3: Skills (Structured like Education) */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 3: Skills</h2>

            <label className="block text-gray-700">Programming Skills</label>
            <input type="text" name="programmingSkills" value={formData.programmingSkills} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. Java, Python, C++" />

            <label className="block text-gray-700">Technical Skills</label>
            <input type="text" name="technicalSkills" value={formData.technicalSkills} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. Git, Firebase, Docker" />

            <label className="block text-gray-700">Other Skills</label>
            <input type="text" name="otherSkills" value={formData.otherSkills} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. Communication, Leadership" />

            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Back</button>
              <button onClick={nextStep} className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Experience */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 4: Experience</h2>
            <label className="block text-gray-700">Work Experience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. Intern at XYZ, 6 months" />

            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Back</button>
              <button onClick={nextStep} className="bg-green-600 text-white px-6 py-2 rounded-lg">Preview</button>
            </div>
          </div>
        )}

        {/* Step 5: Preview */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resume Preview</h2>
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <p><strong>Full Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Institution:</strong> {formData.institution}</p>
              <p><strong>Degree:</strong> {formData.degree}</p>
              <p><strong>Passing Year:</strong> {formData.year}</p>
              <p><strong>Programming Skills:</strong> {formData.programmingSkills}</p>
              <p><strong>Technical Skills:</strong> {formData.technicalSkills}</p>
              <p><strong>Other Skills:</strong> {formData.otherSkills}</p>
              <p><strong>Experience:</strong> {formData.experience}</p>
            </div>

            <button onClick={prevStep} className="mt-6 bg-gray-400 text-white px-6 py-2 rounded-lg">Back</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;