import React from 'react'

const Pagination = ({postsPerPage , totalpage ,paginate}) => {

    const pageNumber = [];

    for(let i=1;i<=Math.ceil(totalpage / postsPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <div>
            <nav>
                <ul>{pageNumber.map(number =>(
                    <li className="pagUL"><a href="/#" onClick={() => paginate(number)}>{number}</a></li>
                ))}
                
                </ul>
            </nav>
        </div>
    )
}
export default Pagination
