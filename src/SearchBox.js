import React from 'react';

const SearchBox = ({searchChange}) =>
{
    return (
        <div className='pa2'>
            <input 
                className='bg-lightest-blue pa3 ba b--green'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} //onChange -> html event, {}-ben az event handler(jsx)
                />
        </div>
    );
}

export default SearchBox;