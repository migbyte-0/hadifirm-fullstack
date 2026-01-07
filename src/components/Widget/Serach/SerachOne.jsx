import SearchIcon from "@/assets/images/icons/serach-white.svg";

export default function SearchOne() {
  return (
    <div className="content-box details-entry-title mb-30 show-sm">
      <h3 className="sidebar-title">Search Heer</h3>
      {/* Search  */}
      <form className="search-wrap" action="/">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Your Keyword..."
        />
        <button className="btn-search" type="submit">
          <img className="serach-icon" src={SearchIcon} alt="Search" />
        </button>
      </form>
    </div>
  );
}
