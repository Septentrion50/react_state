import React from 'react';

const Form = () => {
    const [searchBar, setSearchBar] = React.useState("");

    const toMin = (e) => {
        setSearchBar(e.target.value.toLowerCase());
    }

    return (
        <form>
            <input onChange={toMin} type="text" placeholder="Please type something" value={searchBar} />
        </form>
    )
}

export default Form;