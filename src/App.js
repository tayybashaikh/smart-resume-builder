import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

function App() { const [step, setStep] = useState(1); const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", Links: "", experience: "", skills: "", Project: "", Education: "", Achivements: "", Language: "", });

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const nextStep = () => setStep(step + 1); const prevStep = () => setStep(step - 1); const restartForm = () => { setStep(1); setFormData({ fullName: "", email: "", phone: "", Links: "", experience: "", skills: "", Project: "", Education: "", Achivements: "", Language: "", }); };

const renderFieldOrPlaceholder = (htmlContent, placeholderText) => {
  return {
    html:
      htmlContent && htmlContent.trim() !== ""
        ? htmlContent
        : <span style="color: #9CA3AF; font-style: italic;">${placeholderText}</span>,
  };
};

const skillsRef = useRef(null);                    
const [showSkillsEmoji, setShowSkillsEmoji] = useState(false); 


const projectRef = useRef(null);                 
const [showProjectEmoji, setShowProjectEmoji] = useState(false); 

const educationRef = useRef(null);
const [showEduEmoji, setShowEduEmoji] = useState(false);

const achievements = useRef(null);
const achievementsRef = useRef(null);
const [showEmoji, setShowEmoji] = useState(false);


const expRef = useRef(null);
const [showExpEmoji, setShowExpEmoji] = useState(false);



// for experience Emoji 2

const applyExpFormatting = (type) => {
  const div = expRef.current;
  const selection = window.getSelection();

  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (!selectedText) return;

  const span = document.createElement("span");
  span.textContent = selectedText;

  if (type === "bold") {
    span.style.fontWeight = "bold";
  } else if (type === "underline") {
    span.style.textDecoration = "underline";
  }

  range.deleteContents();
  range.insertNode(span);

  setFormData((prev) => ({
    ...prev,
    experience: div.innerHTML,
  }));
};


// for skills Emoji 3
const applySkillsFormatting = (type) => {
  const div = skillsRef.current;
  const selection = window.getSelection();

  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (!selectedText) return;

  const span = document.createElement("span");
  span.textContent = selectedText;

  if (type === "bold") {
    span.style.fontWeight = "bold";
  } else if (type === "underline") {
    span.style.textDecoration = "underline";
  }

  range.deleteContents();
  range.insertNode(span);

  setFormData((prev) => ({
    ...prev,
    skills: div.innerHTML,
  }));
};

// for project Emoji 4
const applyProjectFormatting = (type) => {
  const div = projectRef.current;
  const selection = window.getSelection();

  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (!selectedText) return;

  const span = document.createElement("span");
  span.textContent = selectedText;

  if (type === "bold") {
    span.style.fontWeight = "bold";
  } else if (type === "underline") {
    span.style.textDecoration = "underline";
  }

  range.deleteContents();
  range.insertNode(span);

  setFormData((prev) => ({
    ...prev,
    Project: div.innerHTML,
  }));
};


// for Education 5
const applyEducationFormatting = (type) => {
  const div = educationRef.current;
  const selection = window.getSelection();

  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (!selectedText) return;

  const span = document.createElement("span");
  span.textContent = selectedText;

  if (type === "bold") {
    span.style.fontWeight = "bold";
  } else if (type === "underline") {
    span.style.textDecoration = "underline";
  }

  range.deleteContents();
  range.insertNode(span);

  setFormData((prev) => ({
    ...prev,
    Education: div.innerHTML,
  }));
};

// for Achivement Emoji 6

const applyFormatting = (type) => {
  const div = achievementsRef.current;
  const selection = window.getSelection();

  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (!selectedText) return;

  const span = document.createElement("span");
  span.textContent = selectedText;

  if (type === "bold") {
    span.style.fontWeight = "bold";
  } else if (type === "underline") {
    span.style.textDecoration = "underline";
  }

  range.deleteContents();
  range.insertNode(span);

  // Update formData with HTML content
  setFormData((prev) => ({
    ...prev,
    Achivements: div.innerHTML,
  }));
};



return ( <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4"> <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl"> <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Smart Resume Builder</h1> <p className="text-center text-gray-600 mb-8"> Create your professional resume with AI suggestions </p>

{step === 1 && (
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 1: Personal Info</h2>
        <label className="block text-gray-700">Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your full name" />

        <label className="block text-gray-700">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your email" />

        <label className="block text-gray-700">Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Enter your phone number" />

        <label className="block text-gray-700">Links</label>
        <input type="text" name="Links" value={formData.Links} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="e.g. GitHub, LinkedIn" />

        <button onClick={nextStep} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">Next</button>
      </div>
    )}
    {/* Step2: Experience section */}
  
    {step === 2 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 2: Experience</h2>
    <label className="block text-gray-700 mb-2">Experience</label>

    {/* Toolbar: Emoji + Bold + Underline */}
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        onClick={() => setShowExpEmoji(!showExpEmoji)}
        className="bg-yellow-300 text-black px-3 py-1 rounded-lg hover:bg-yellow-400"
      >
        💼 Add Emoji
      </button>
      <button
        onClick={() => applyExpFormatting("bold")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        B
      </button>
      <button
        onClick={() => applyExpFormatting("underline")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        U
      </button>
    </div>

    {/* Emoji Picker */}
    {showExpEmoji && (
      <div className="flex gap-2 mb-2 flex-wrap">
        {["👩‍💻", "🧑‍🎓", "🧵", "👗", "💼", "📁", "🔨", "💡", "🎯", "🚀", "🌟"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => {
              const div = expRef.current;
              div.focus();
              document.execCommand("insertText", false, emoji);
              setFormData((prev) => ({
                ...prev,
                experience: div.innerHTML,
              }));
              setShowExpEmoji(false);
            }}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {emoji}
          </button>
        ))}
      </div>
    )}

    {/* Editable Div instead of textarea */}
    <div
      ref={expRef}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) =>
        setFormData({ ...formData, experience: e.currentTarget.innerHTML })
      }
      dangerouslySetInnerHTML={{ __html: formData.experience }}
      className="w-full p-4 border border-gray-300 rounded-lg mb-4 font-mono whitespace-pre-wrap min-h-[150px]"
      placeholder="e.g. Built Smart Resume Builder using React, TS Fashion website, Elevate KBC clone..."
    ></div>

    {/* Navigation Buttons */}
    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-400 text-white px-6 py-2 rounded-lg"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
)}
    {/* Step3: Skills section */}
    {step === 3 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 3: Skills</h2>
    <label className="block text-gray-700 mb-2">Skills</label>

    {/* Toolbar: Emoji + Bold + Underline */}
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        onClick={() => setShowSkillsEmoji(!showSkillsEmoji)}
        className="bg-yellow-300 text-black px-3 py-1 rounded-lg hover:bg-yellow-400"
      >
        🛠 Add Emoji
      </button>
      <button
        onClick={() => applySkillsFormatting("bold")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        B
      </button>
      <button
        onClick={() => applySkillsFormatting("underline")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        U
      </button>
    </div>

    {/* Emoji Picker */}
    {showSkillsEmoji && (
      <div className="flex gap-2 mb-2 flex-wrap">
        {["💻", "🧠", "⚙", "🔧", "🖥", "🧑‍💻", "📊", "🗂"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => {
              const div = skillsRef.current;
              div.focus();
              document.execCommand("insertText", false, emoji);
              setFormData((prev) => ({
                ...prev,
                skills: div.innerHTML,
              }));
              setShowSkillsEmoji(false);
            }}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {emoji}
          </button>
        ))}
      </div>
    )}

    {/* Editable Div instead of Textarea */}
    <div
      ref={skillsRef}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) =>
        setFormData({ ...formData, skills: e.currentTarget.innerHTML })
      }
      dangerouslySetInnerHTML={{ __html: formData.skills }}
      className="w-full p-4 border border-gray-300 rounded-lg mb-4 font-mono whitespace-pre-wrap min-h-[150px]"
      placeholder="e.g. JavaScript, HTML, CSS, React"
    ></div>

    {/* Navigation Buttons */}
    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-400 text-white px-6 py-2 rounded-lg"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
)}
    {/* Step 4: Project */}
   {step === 4 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 4: Project</h2>

    {/* Toolbar: Emoji + Bold + Underline */}
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        onClick={() => setShowProjectEmoji(!showProjectEmoji)}
        className="bg-yellow-300 text-black px-3 py-1 rounded-lg hover:bg-yellow-400"
      >
        Add Emoji
      </button>
      <button
        onClick={() => applyProjectFormatting("bold")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        B
      </button>
      <button
        onClick={() => applyProjectFormatting("underline")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        U
      </button>
    </div>

    {/* Emoji Picker for Project */}
    {showProjectEmoji && (
      <div className="flex gap-2 mb-2 flex-wrap">
        {["💻", "🛠", "🧠", "🚀", "🔧", "📁", "📂", "✨"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => {
              const div = projectRef.current;
              div.focus();
              document.execCommand("insertText", false, emoji);
              setFormData((prev) => ({
                ...prev,
                Project: div.innerHTML,
              }));
              setShowProjectEmoji(false);
            }}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {emoji}
          </button>
        ))}
      </div>
    )}

    {/* Editable Div instead of Textarea */}
    <div
      ref={projectRef}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) =>
        setFormData({ ...formData, Project: e.currentTarget.innerHTML })
      }
      dangerouslySetInnerHTML={{ __html: formData.Project }}
      className="w-full p-4 border border-gray-300 rounded-lg mb-4 font-mono whitespace-pre-wrap min-h-[150px]"
      placeholder="e.g. Smart_Resume_Builder"
    ></div>

    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded-lg">
        Back
      </button>
      <button onClick={nextStep} className="bg-green-600 text-white px-6 py-2 rounded-lg">
        Next
      </button>
    </div>
  </div>
)}
    
    {/* step5: Education section */}
    {step === 5 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 5: Education</h2>
    <label className="block text-gray-700 mb-2">Education</label>

    {/* Toolbar: Emoji + Bold + Underline */}
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        onClick={() => setShowEduEmoji(!showEduEmoji)}
        className="bg-yellow-300 text-black px-3 py-1 rounded-lg hover:bg-yellow-400"
      >
        🎓 Add Emoji
      </button>
      <button
        onClick={() => applyEducationFormatting("bold")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        B
      </button>
      <button
        onClick={() => applyEducationFormatting("underline")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        U
      </button>
    </div>

    {/* Emoji Picker */}
    {showEduEmoji && (
      <div className="flex gap-2 mb-2 flex-wrap">
        {["🎓", "📚", "🏫", "✏", "📖", "🧪", "📐", "🔬"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => {
              const div = educationRef.current;
              div.focus();
              document.execCommand("insertText", false, emoji);
              setFormData((prev) => ({
                ...prev,
                Education: div.innerHTML,
              }));
              setShowEduEmoji(false);
            }}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {emoji}
          </button>
        ))}
      </div>
    )}

    {/* Editable Div */}
    <div
      ref={educationRef}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) =>
        setFormData({ ...formData, Education: e.currentTarget.innerHTML })
      }
      dangerouslySetInnerHTML={{ __html: formData.Education }}
      className="w-full p-4 border border-gray-300 rounded-lg mb-4 font-mono whitespace-pre-wrap min-h-[150px]"
      placeholder="e.g. Degree, 12th, 10th"
    ></div>

    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-400 text-white px-6 py-2 rounded-lg"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
)}

   {/* Step6: Achivement section */}
   {step === 6 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 6: Achievements</h2>
    <label className="block text-gray-700 mb-2">Achievements</label>

    {/* Toolbar: Emoji + Bold + Underline */}
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        onClick={() => setShowEmoji(!showEmoji)}
        className="bg-yellow-300 text-black px-3 py-1 rounded-lg hover:bg-yellow-400"
      >
        😊 Add Emoji
      </button>
      <button
        onClick={() => applyFormatting("bold")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        B
      </button>
      <button
        onClick={() => applyFormatting("underline")}
        className="bg-black text-white px-3 py-1 rounded-lg hover:opacity-80"
      >
        U
      </button>
    </div>

    {/* Emoji List */}
    {showEmoji && (
      <div className="flex gap-2 mb-2 flex-wrap">
        {["🎖", "🚀", "💻", "📚", "⭐", "🎉", "✅", "💯", "🤝", "💪", "🏆", "🎓", "📜", "📝", "💼", "🔐", "🔑"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => {
              const div = achievementsRef.current;
              div.focus();
              document.execCommand("insertText", false, emoji);
              setFormData((prev) => ({
                ...prev,
                Achivements: div.innerHTML,
              }));
            }}
            className="text-2xl hover:scale-125 transition-transform"
          >
            {emoji}
          </button>
        ))}
      </div>
    )}

    {/* Editable Div instead of textarea */}
    <div
      ref={achievementsRef}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) =>
        setFormData({ ...formData, Achivements: e.currentTarget.innerHTML })
      }
      dangerouslySetInnerHTML={{ __html: formData.Achivements }}
      className="w-full p-4 border border-gray-300 rounded-lg mb-4 font-mono whitespace-pre-wrap min-h-[150px]"
      placeholder="e.g. Certification, specialization"
    ></div>

    {/* Navigation Buttons */}
    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-400 text-white px-6 py-2 rounded-lg"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
)}
{/* step7: Languase section */}
   {/* Step 7: Language section */}
{step === 7 && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Step 7: Language</h2>

    <input
      type="text"
      name="Language"
      value={formData.Language}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-lg mb-4"
      placeholder="e.g. Hindi, English"
    />

    <div className="flex justify-between">
      <button
        onClick={prevStep}
        className="bg-gray-400 text-white px-6 py-2 rounded-lg"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Preview
      </button>
    </div>
  </div>
)}


    {/* step8: Review section */}
    {step === 8 && (
  <div className="p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-indigo-700">
        {formData.fullName ? formData.fullName : "Your Full Name"}
      </h1>
      <p className="text-gray-700">
        {formData.email || "youremail@example.com"} |{" "}
        {formData.phone || "123-456-7890"}
      </p>
      <p className="text-blue-600 underline">
        {formData.Links || "https://yourportfolio.com"}
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
      {/* Left Side */}
      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Experience</h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={renderFieldOrPlaceholder(
              formData.experience,
              "e.g. Built Smart Resume Builder using React, TS Fashion website..."
            )}
          ></div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Skills</h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={renderFieldOrPlaceholder(
              formData.skills,
              "e.g. JavaScript, HTML, CSS, React"
            )}
          ></div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Projects</h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={renderFieldOrPlaceholder(
              formData.Project,
              "e.g. Smart_Resume_Builder using React"
            )}
          ></div>
        </section>
      </div>

      {/* Right Side */}
      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Education</h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={renderFieldOrPlaceholder(
              formData.Education,
              "e.g. BCA - XYZ University, 12th - ABC School"
            )}
          ></div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Achievements</h3>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={renderFieldOrPlaceholder(
              formData.Achivements,
              "e.g. Certification, specialization, awards"
            )}
          ></div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Languages</h3>
          <p className="text-sm text-gray-700">
            {formData.Language || "e.g. Hindi, English"}
          </p>
        </section>
      </div>
    </div>

    {/* Restart Button */}
    <div className="mt-8 text-center">
      <button
        onClick={restartForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
      >
        Start Again
      </button>
    </div>
  </div>
)}n
  </div>
</div>

); }

export default App;