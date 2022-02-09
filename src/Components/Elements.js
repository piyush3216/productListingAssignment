import React,{useState} from 'react';
import ReactPaginate from 'react-paginate';
import product from './product.json'
function Elements() { 
    const [filteredResults, setFilteredResults] = useState(product);
    const [searchInput, setSearchInput] = useState('');

    //for searching functionality
    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = product.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(product)
      }
  }

  return(
  <>
    {/* Start Navbar */}
    <nav className="navbar navbar-light bg-light ">
        <div className="container d-flex justify-content-between">
          <form className="col-sm-6">
            <input className="form-control me-2" type="search" onChange={(e) => searchItems(e.target.value)} placeholder="Search" aria-label="Search"/> 
          </form>
          <div className="dropdown  d-flex justify-content-evenly">
            <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="/">Electronics</a></li>
              <li><a className="dropdown-item" href="/">Music</a></li> 
            </ul>
            <button type="button" className="btn btn-outline-dark mx-2">Last Added  <i className="fa fa-arrow-up" aria-hidden="true"></i><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
          </div>
        </div>
    </nav>
    {/* End Navbar */}

    {/* Container */}
    <div className="container my-3 bg-light">
      <div className='row my-2'>
        {
          filteredResults.map((curEle) => {
          return(
            <div className="card mx-1 my-2 "style={{width: '16rem'}} key={curEle.sku} >
                <img style ={{height:"150px",width:"230px"}}src={curEle.image} className="card-img-top my-1" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{curEle.name}</h5>
                    <p className="card-text">$ {curEle.price}</p>
                    <a href="/" className="btn btn-light"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
                    <a href="/" className="btn btn-light mx-1" style={{color: 'red'}}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                </div>
            </div>
          )
          })
        }
      </div>

      {/* for pagination */}
      <ReactPaginate
        nextLabel="next >" 
        pageCount= {3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-end my-2"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>    
  </>
  );
}

export default Elements;
