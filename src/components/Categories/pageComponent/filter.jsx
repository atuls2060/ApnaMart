import { Box, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer } from '@chakra-ui/react';
import React from 'react'

const Filter = ({ jeans,setjeans,shirt,setshirt,tshirt,settshirt,jacket,setjacket,sweat,setsweat,Amazon,setAmazon,Reebok,setReebok,Puma,setPuma,levi,setlevi,polo,setpolo,Raymond,setRaymond,low,high,slider,setSlider}) => {
  
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
            value="Jeans"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setjeans(value);
              } else {
                let new_str = jeans.replace(value, "");
                setjeans(new_str);
              }
            }}
          />
          Jeans
        </div>
        <div>
          <input
            type="checkbox"
            value="Polos"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                settshirt(value);
              } else {
                let new_str = tshirt.replace(value, "");
                settshirt(new_str);
              }
            }}
          />
          T-shirt
        </div>
        <div>
          <input
            type="checkbox"
            value="Shirt"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setshirt(value);
              } else {
                let new_str = shirt.replace(value, "");
                setshirt(new_str);
              }
            }}
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
            value="Jacket"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setjacket(value);
              } else {
                let new_str = jacket.replace(value, "");
                setjacket(new_str);
              }
            }}
          />
          Coats, Jackets & Vests
        </div>
        <div>
          <input
            type="checkbox"
            value="Sweater"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setsweat(value);
              } else {
                let new_str = sweat.replace(value, "");
                setsweat(new_str);
              }
            }}
          />
          SweatShirt & Hoodies
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
            value="Amazon"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setAmazon(value);
              } else {
                let new_str = Amazon.replace(value, "");
                setAmazon(new_str);
              }
            }}
          />{" "}
          Amazon Brand
        </div>
        <div>
          <input
            type="checkbox"
            value="Reebok"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setReebok(value);
              } else {
                let new_str = Reebok.replace(value, "");
                setReebok(new_str);
              }
            }}
          />{" "}
          Reebok
        </div>
        <div>
          <input
            type="checkbox"
            value="Puma"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setPuma(value);
              } else {
                let new_str = Puma.replace(value, "");
                setPuma(new_str);
              }
            }}
          />{" "}
          Puma
        </div>
        <div>
          <input
            type="checkbox"
            value="Raymond"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setRaymond(value);
              } else {
                let new_str = Raymond.replace(value, "");
                setRaymond(new_str);
              }
            }}
          />{" "}
          Raymond
        </div>
        <div>
          <input
            type="checkbox"
            value="Levi's"
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setlevi(value);
              } else {
                let new_str = levi.replace(value, "");
                setlevi(new_str);
              }
            }}
          />{" "}
          Levi&apos;s
        </div>
        <div>
          <input
            type="checkbox"
            value="U.S. POLO ASSN."
            onChange={(e) => {
              let { value, checked } = e.target;
              if (checked) {
                setpolo(value);
              } else {
                let new_str = polo.replace(value, "");
                setpolo(new_str);
              }
            }}
          />{" "}
          U.S. POLO ASSN.
        </div>
      </div>

      <Box as="span" flex="1" textAlign="left">
        Price
      </Box>
      <Flex flexDirection="column">
        <Box p="0px 15px">
          <RangeSlider
            colorScheme="red"
            aria-label={["min", "max"]}
            defaultValue={[0, 100]}
            onChange={(val) => {
              setSlider(val);
            }}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb bgColor="red.200" index={0} />
            <RangeSliderThumb bgColor="red.200" index={1} />
          </RangeSlider>
        </Box>

        <Flex direction="row">
          <Box fontSize={{ md: "13px", lg: "15px" }}>
            Rs. {low ? low.toFixed() : 0}
          </Box>
          <Spacer />
          <Box fontSize={{ md: "13px", lg: "15px" }}>
            Rs. {high ? high.toFixed() : 3995}
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Filter