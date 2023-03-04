
 import { useRouter } from 'next/router'

import React, { useEffect,useState } from 'react'
import Pages from '../../components/Categories/pageComponent/pages'
import Sidebar from "../../components/Categories/pageComponent/Sidebar"
import Filter from "../../components/Categories/pageComponent/filter";
 import Pagination from '../../components/Categories/pageComponent/pagination'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '@/redux/products/products.action'
import ImgSlider from '@/components/Categories/Slider/imgSlider'
import styles from "../../components/Categories/pageComponent/page.module.css"
import { BsFillFilterSquareFill } from 'react-icons/bs';


const Products = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  const {loading,error,data} = useSelector((state)=>state.productsManager)

   


const [filters, setFilters] = useState({
  Jeans: false,
  Tshirt: false,
  Shirt: false,
  symbol: false,
  reebok: false,
  puma: false,
  raymond: false,
  levis: false,
  uspolo: false,
  pod: false,
  sweet: false,
  jacket: false,
  under3: false,
  under3to5: false,
  under5to1: false,
  under1to15: false,
  over15: false,
});
const handleCheckboxChange = (e) => {
  const { name, checked } = e.target;
  setFilters({ ...filters, [name]: checked });
};

const filteredData = data.filter((item) => {
  if (filters.under3 && item.price<=300) {
    return true;
  }
  if (filters.under3to5 && (item.price >= 300 && item.price <= 500) ) {
    return true;
  }
  if (filters.under5to1 && (item.price >= 500 && item.price <= 1000)) {
    return true;
  }
  if (filters.under1to15 && (item.price >= "1,000" && item.price <= "1,500")) {
    return true;
  }
  if (filters.over15 && (item.price >= "1,500" && item.price <= "3,995")) {
    return true;
  }
  if (filters.Tshirt && (item.desc.includes("Polo") || item.desc.includes("T-Shirts"))) {
    return true;
  }
  if (filters.Jeans && item.desc.includes("Jeans")) {
    return true;
  }
  if (
    filters.Shirt &&
    item.desc.includes("Shirt") &&
    !item.desc.includes("T-Shirts") &&
    !item.desc.includes("Polo")
  ) {
    return true;
  }
  if (filters.jacket && item.desc.includes("Jacket")) {
    return true;
  }
  if (filters.sweet && (item.desc.includes("Sweat") || item.desc.includes("Hood"))) {
    return true;
  }

  if (filters.symbol && item.title.includes("Amazon Brand")) {
    return true;
  }
  if (filters.reebok && item.title.includes("Reebok")) {
    return true;
  }
  if (filters.puma && item.title.includes("Puma")) {
    return true;
  }
  if (filters.raymond && item.title.includes("Raymond")) {
    return true;
  }
  if (filters.levis && item.title.includes("Levi's")) {
    return true;
  }
  if (filters.uspolo && item.title.includes("U.S. POLO ASSN.")) {
    return true;
  }
  if (
    filters.pod &&
    item.base &&
    item.base.includes("FREE Delivery by Amazon")
  ) {
    return true;
  }
  return false;
});
const totalFilteredItems =
  filteredData.length == 0 ? data.length : filteredData.length;
const itemsPerPage = totalFilteredItems <= 12 ? totalFilteredItems : 12;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems =
  filteredData.length == 0
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : filteredData.slice(indexOfFirstItem, indexOfLastItem);


const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);

const handlePageClick = (pageNumber) => {
  setCurrentPage(pageNumber);
};
const category = props.category;
const dispatch = useDispatch();

useEffect(() => {
  setCurrentPage(1);
  setFilters(false)
}, [category]);

useEffect(() => {
  dispatch(getProducts(category));
}, [category, dispatch]);

  if(loading){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto",textAlign:"center",marginTop:"100px"}}>Loading...</h1>
  }
  if(error){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto",textAlign:"center",marginTop:"100px"}}>Error...</h1>
  }
  return (
    <div>
      <ImgSlider />

      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <Filter filters={filters} onCheckboxChange={handleCheckboxChange} />
        </div>
        <div className={styles.leftDiv2}>
          <Sidebar isOpen={isOpen} onClose={handleClose} filters={filters} onCheckboxChange={handleCheckboxChange} />
        </div>
        <div className={styles.rightDiv}>
          <div style={{ marginTop: "60px", marginLeft: "5%" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>RESULTS</h1>
            <p style={{ color: "grey" }}>
              Price and other details may vary based on product size and colour.
            </p>
            <div className={styles.filter} onClick={handleOpen}>
              <p>
                <BsFillFilterSquareFill
                  style={{
                    fontSize: "23px",
                    color: "#E40046",
                    marginRight: "5px",
                  }}
                />
              </p>
              <p>Filter</p>
            </div>
          </div>
          <div className={styles.grid}>
            {currentItems.map((el) => (
              <Pages key={el.id} {...el} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
  }

  Products.getInitialProps = async ({ query }) => {
  return { category: query.category };
  };

export default Products

