import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // Name preference
  const [name, setName] = useLocalStorage("studentName", "");

  // Favorite language preference
  const [language, setLanguage] = useLocalStorage("favoriteLanguage", "JavaScript");

  // Dark mode preference
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  // prefered font size 
  const [fontSize, setFontSize] = useLocalStorage("fontSize", "12pt");


  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Saved Preferences:", {
      name,
      language,
      fontSize,
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

        <div className="form-control">
          <label htmlFor="fontSize">Perfered Font Size</label>
          <select
            id="fontSize"
            value={fontSize}
            onChange={(event) => setFontSize(event.target.value)}
          >
            <option value="10pt">10pt</option>
            <option value="12pt">12pt</option>
            <option value="14pt">14pt</option>
            <option value="16pt">16pt</option>
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
