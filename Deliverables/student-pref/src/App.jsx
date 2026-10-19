import { useEffect, useState } from "react";

function App() {
  // Name preference
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("studentName");
    return savedName || "";
  });

  useEffect(() => {
    localStorage.setItem("studentName", name);
  }, [name]);

  // Favorite language preference
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("favoriteLanguage");
    return savedLanguage || "JavaScript";
  });

  useEffect(() => {
    localStorage.setItem("favoriteLanguage", language);
  }, [language]);

  // Dark mode preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Saved Preferences:", {
      name,
      language,
      darkMode,
    });

    alert("Preferences saved!");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Student Preferences</h1>

      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Favorite Programming Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        </div>

        <button type="submit">Save Preferences</button>
      </form>

      <div className="preferences">
        <h2>Current Preferences</h2>
        <p>
          <strong>Name:</strong> {name || "Not set"}
        </p>
        <p>
          <strong>Favorite Language:</strong> {language}
        </p>
        <p>
          <strong>Dark Mode:</strong> {darkMode ? "On" : "Off"}
        </p>
      </div>
    </div>
  );
}

export default App;