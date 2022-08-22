const Header = ({handleToggleDarkMode, darkMode}) => {
    return (
      <div className="header">
        <h1>Notes</h1>
        <button 
          className="mode" 
          onClick={() => handleToggleDarkMode(darkMode => !darkMode)}>
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    )
}

export default Header