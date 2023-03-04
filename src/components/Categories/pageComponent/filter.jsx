import React from 'react'

const Filter = ({ filters, onCheckboxChange}) => {
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "62px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>Category</h1>
      <div
        style={{
          cursor: "pointer",
          fontFamily: `"Times New Roman", Times, serif`,
        }}
      >
        <div>
          <input
            type="checkbox"
            name="Jeans"
            checked={filters.Jeans}
            onChange={onCheckboxChange}
          />
          Jeans
        </div>
        <div>
          <input
            type="checkbox"
            name="Tshirt"
            checked={filters.Tshirt}
            onChange={onCheckboxChange}
          />
          T-shirt
        </div>
        <div>
          <input
            type="checkbox"
            name="Shirt"
            checked={filters.Shirt}
            onChange={onCheckboxChange}
          />
          Shirt
        </div>
      </div>
      <h1 style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
        Winter Wear
      </h1>
      <div
        style={{
          cursor: "pointer",
          fontFamily: `"Times New Roman", Times, serif`,
        }}
      >
        <div>
          <input
            type="checkbox"
            name="jacket"
            checked={filters.jacket}
            onChange={onCheckboxChange}
          />
          Coats, Jackets & Vests
        </div>
        <div>
          <input
            type="checkbox"
            name="sweet"
            checked={filters.sweet}
            onChange={onCheckboxChange}
          />
          Sweatshirts & Hoodies
        </div>
      </div>

      <h1 style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
        Brands
      </h1>
      <div
        style={{
          cursor: "pointer",
          fontFamily: `"Times New Roman", Times, serif`,
        }}
      >
        <div>
          <input
            type="checkbox"
            name="symbol"
            checked={filters.symbol}
            onChange={onCheckboxChange}
          />{" "}
          Amazon Brand - Symbol
        </div>
        <div>
          <input
            type="checkbox"
            name="reebok"
            checked={filters.reebok}
            onChange={onCheckboxChange}
          />{" "}
          Reebok
        </div>
        <div>
          <input
            type="checkbox"
            name="puma"
            checked={filters.puma}
            onChange={onCheckboxChange}
          />{" "}
          Puma
        </div>
        <div>
          <input
            type="checkbox"
            name="raymond"
            checked={filters.raymond}
            onChange={onCheckboxChange}
          />{" "}
          Raymond
        </div>
        <div>
          <input
            type="checkbox"
            name="levis"
            checked={filters.levis}
            onChange={onCheckboxChange}
          />{" "}
          Levi&apos;s
        </div>
        <div>
          <input
            type="checkbox"
            name="uspolo"
            checked={filters.uspolo}
            onChange={onCheckboxChange}
          />{" "}
          U.S. POLO ASSN.
        </div>
      </div>
      <h1 style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
        Price
      </h1>
      <div
        style={{
          cursor: "pointer",
          fontFamily: `"Times New Roman", Times, serif`,
          fontWeight: "500",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="under3"
            checked={filters.under3}
            onChange={onCheckboxChange}
          />
          Under ₹300
        </div>
        <div>
          <input
            type="checkbox"
            name="under3to5"
            checked={filters.under3to5}
            onChange={onCheckboxChange}
          />
          ₹300 - ₹500
        </div>
        <div>
          <input
            type="checkbox"
            name="under5to1"
            checked={filters.under5to1}
            onChange={onCheckboxChange}
          />
          ₹500 - ₹1,000
        </div>
        <div>
          <input
            type="checkbox"
            name="under1to15"
            checked={filters.under1to15}
            onChange={onCheckboxChange}
          />
          ₹1,000 - ₹1,500
        </div>
        <div>
          <input
            type="checkbox"
            name="over15"
            checked={filters.over15}
            onChange={onCheckboxChange}
          />
          Over ₹1,500
        </div>
      </div>
      <h1 style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
        Pay On Delivery
      </h1>
      <div
        style={{
          cursor: "pointer",
          fontFamily: `"Times New Roman", Times, serif`,
        }}
      >
        <div>
          <input
            type="checkbox"
            name="pod"
            checked={filters.pod}
            onChange={onCheckboxChange}
          />
          Eligible for Pay On Delivery
        </div>
      </div>
    </div>
  );
};

export default Filter