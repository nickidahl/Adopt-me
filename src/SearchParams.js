import React from "react";

export default function SearchParams() {
    const location = "Seattle, WA";

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    <input 
                        type="text" 
                        id="location"
                        value={location} 
                        placeholder="Location"
                    />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    );
}
