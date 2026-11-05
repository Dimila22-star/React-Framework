function Sidebar({
  categories,
  counts,
  total,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <aside className="filters">
      
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