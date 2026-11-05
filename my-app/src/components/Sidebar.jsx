function Sidebar({
  search,
  setSearch,
  resultCount,
  categories,
  counts,
  total,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <aside className="filters">
      <div className="f-search">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="f-results">{resultCount} results</p>
      <hr className="f-line" />

      <h4 className="f-title">Categories</h4>
      <ul className="f-list">
        <li
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        >
          <span>View all</span>
          <span className="f-count">({total})</span>
        </li>

        {categories.map((c) => (
          <li
            key={c}
            className={activeCategory === c ? "active" : ""}
            onClick={() => setActiveCategory(c)}
          >
            <span>{c}</span>
            <span className="f-count">({counts[c] || 0})</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;