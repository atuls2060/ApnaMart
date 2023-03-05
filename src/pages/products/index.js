
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


const [jeans, setjeans] = useState("")
const [shirt, setshirt] = useState("")
const [tshirt, settshirt] = useState("")
const [jacket, setjacket] = useState("")
const [sweat, setsweat] = useState("")
const [Amazon, setAmazon] = useState("")
const [Reebok, setReebok] = useState("")
const [Puma, setPuma] = useState("")
const [levi, setlevi] = useState("")
const [polo, setpolo] = useState("")
const [Raymond, setRaymond] = useState("")
const [slider, setSlider] = React.useState(0);
const low = ((slider[0] * 3995) / 100);
const high = ((slider[1] * 3995) / 100);



const totalFilteredItems =data.length
const itemsPerPage = totalFilteredItems <= 12 ? totalFilteredItems : 12;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems =data.slice(indexOfFirstItem, indexOfLastItem)


const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);

const handlePageClick = (pageNumber) => {
  setCurrentPage(pageNumber);
};
const category = props.category;
const dispatch = useDispatch();

useEffect(() => {
  setCurrentPage(1);
}, [category]);


useEffect(() => {
  dispatch(
    getProducts(
      category,
      jeans,
      shirt,
      tshirt,
      jacket,
      sweat,
      Amazon,
      Reebok,
      Puma,
      levi,
      polo,
      Raymond,
      low,
      high
    )
  );
}, [
  category,
  dispatch,
  jeans,
  shirt,
  tshirt,
  jacket,
  sweat,
  Amazon,
  Reebok,
  Puma,
  levi,
  polo,
  Raymond,
  low,
  high,
]);
  if(error){
    return <h1 style={{width:"100%",fontSize:"40px",margin:"auto",textAlign:"center",marginTop:"100px"}}>Error...</h1>
  }
  return (
    <div>
      <ImgSlider />

      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <Filter slider={slider} setSlider={setSlider} jeans={jeans} setjeans={setjeans} shirt={shirt} setshirt={setshirt} tshirt={tshirt} settshirt={settshirt} sweat={sweat} setsweat={setsweat} jacket={jacket} setjacket={setjacket}
           Amazon={Amazon} setAmazon={setAmazon} Reebok={Reebok} setReebok={setReebok} Puma={Puma} setPuma={setPuma} levi={levi} setlevi={setlevi} polo={polo} setpolo={setpolo} Raymond={Raymond} setRaymond={setRaymond} low={low} high={high} />
        </div>
        <div className={styles.leftDiv2}>
          {/* <Sidebar isOpen={isOpen} onClose={handleClose} filters={filters} onCheckboxChange={handleCheckboxChange} /> */}
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

